import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  try {
    const body = await request.json();
    if (!body || typeof body.companyName !== "string" || typeof body.country !== "string" ||
        !body.companyName.trim() || !body.country.trim() ||
        body.companyName.length > 200 || body.country.length > 100 ||
        (body.registrationNumber != null && (typeof body.registrationNumber !== "string" || body.registrationNumber.length > 100))) {
      return NextResponse.json({ error: "Valid company name and country are required" }, { status: 400 });
    }
    // A registry integration and evidence-backed scoring are required before enabling verification.
    return NextResponse.json(
      { error: "Company verification is not available yet. No registry was consulted.", code: "VERIFICATION_NOT_CONFIGURED" },
      { status: 503, headers: { "Cache-Control": "no-store" } }
    );
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
