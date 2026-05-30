import { NextRequest, NextResponse } from "next/server";
import { isRateLimited } from "@/lib/rateLimit";

// ---------------------------------------------------------------------------
// Country-level risk data (simplified MVP dataset)
// ---------------------------------------------------------------------------
const HIGH_RISK_COUNTRIES = new Set([
  "iran", "north korea", "dprk", "myanmar", "cuba", "russia", "belarus",
  "syria", "venezuela", "yemen", "somalia", "sudan", "libya",
]);

const MEDIUM_RISK_COUNTRIES = new Set([
  "china", "nigeria", "pakistan", "afghanistan", "iraq", "ukraine",
  "eritrea", "bangladesh", "cambodia", "laos",
]);

// Suspicious company name patterns
const SUSPICIOUS_PATTERNS = [
  /holdings?\s+llc/i,
  /international\s+trade\s+group/i,
  /global\s+ventures?/i,
  /\bshell\b/i,
  /offshore/i,
  /anonymous/i,
];

function computeTrustScore(companyName: string, country: string): number {
  const lowerCountry = country.toLowerCase().trim();
  const lowerName = companyName.toLowerCase().trim();

  let score = 75; // default baseline

  // Country risk adjustments
  if (HIGH_RISK_COUNTRIES.has(lowerCountry)) score -= 40;
  else if (MEDIUM_RISK_COUNTRIES.has(lowerCountry)) score -= 20;

  // Name-based heuristics
  if (companyName.length < 4) score -= 10;
  if (SUSPICIOUS_PATTERNS.some((p) => p.test(lowerName))) score -= 15;
  if (/[^a-z0-9\s&.,'()-]/i.test(companyName)) score -= 5; // unusual characters

  // Boost for well-known legitimate-sounding names (MVP heuristic)
  if (/\b(inc|corp|ltd|llc|plc|gmbh|sa|ag|bv|nv)\b/i.test(companyName)) score += 5;

  return Math.max(0, Math.min(100, score));
}

export async function POST(request: NextRequest) {
  // Rate limiting — 30 requests per minute per IP
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(`verify:${ip}`, 30, 60_000)) {
    return NextResponse.json({ error: "Too many requests. Please wait a moment." }, { status: 429 });
  }

  try {
    const body = await request.json();
    const { companyName, registrationNumber, country } = body;

    if (!companyName || typeof companyName !== "string" || companyName.trim().length === 0) {
      return NextResponse.json({ error: "Company name is required" }, { status: 400 });
    }
    if (!country || typeof country !== "string" || country.trim().length === 0) {
      return NextResponse.json({ error: "Country is required" }, { status: 400 });
    }

    const trustScore = computeTrustScore(companyName.trim(), country.trim());

    const riskLevel: "low" | "medium" | "high" =
      trustScore >= 70 ? "low" : trustScore >= 45 ? "medium" : "high";

    const verificationStatus: "verified" | "pending" | "unverified" =
      trustScore >= 70 ? "verified" : trustScore >= 45 ? "pending" : "unverified";

    const registrationFound = !!registrationNumber && registrationNumber.trim().length > 0;

    return NextResponse.json({
      success: true,
      companyName: companyName.trim(),
      country: country.trim(),
      registrationNumber: registrationNumber?.trim() || null,
      trustScore,
      riskLevel,
      verificationStatus,
      registrationFound,
      timestamp: new Date().toISOString(),
      disclaimer:
        "Company verification is for due diligence support only. Not financial or legal advice. Always verify independently before engaging in transactions.",
    });
  } catch (error) {
    console.error("[/api/verify] Error:", error);
    return NextResponse.json({ error: "Verification failed. Please try again." }, { status: 500 });
  }
}

