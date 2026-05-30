import { NextRequest, NextResponse } from "next/server";
import { analyzeDocument } from "@/lib/analysis";
import { isRateLimited } from "@/lib/rateLimit";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export async function POST(request: NextRequest) {
  // Rate limiting — 20 requests per minute per IP
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(`analyze:${ip}`, 20, 60_000)) {
    return NextResponse.json({ error: "Too many requests. Please wait a moment." }, { status: 429 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: "File exceeds 10MB limit" }, { status: 413 });
    }

    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
      "image/jpg",
    ];
    if (!allowedTypes.includes(file.type) && !file.name.match(/\.(pdf|docx|jpg|jpeg|png)$/i)) {
      return NextResponse.json(
        { error: "Unsupported file type. Please upload PDF, DOCX, JPG, or PNG." },
        { status: 415 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const result = await analyzeDocument(buffer, file.type, file.name);

    return NextResponse.json({
      success: true,
      fileName: file.name,
      fileSize: file.size,
      ...result,
      timestamp: new Date().toISOString(),
      disclaimer:
        "This analysis is for due diligence support only. Not financial or legal advice. Always conduct independent verification before making financial decisions.",
    });
  } catch (error) {
    console.error("[/api/analyze] Error:", error);
    return NextResponse.json({ error: "Analysis failed. Please try again." }, { status: 500 });
  }
}

