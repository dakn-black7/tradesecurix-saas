import { NextRequest, NextResponse } from "next/server";
import { analyzeText, mockOcrAnalysis } from "@/lib/analysis";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
    let result;

    if (ext === "pdf") {
      // Parse PDF text server-side
      const buffer = Buffer.from(await file.arrayBuffer());
      let extractedText = "";
      try {
        const pdfParse = (await import("pdf-parse")).default;
        const parsed = await pdfParse(buffer);
        extractedText = parsed.text;
      } catch {
        extractedText = file.name; // fallback
      }
      result = analyzeText(extractedText);
    } else if (ext === "docx" || ext === "doc") {
      const buffer = Buffer.from(await file.arrayBuffer());
      let extractedText = "";
      try {
        const mammoth = await import("mammoth");
        const { value } = await mammoth.extractRawText({ buffer });
        extractedText = value;
      } catch {
        extractedText = file.name; // fallback
      }
      result = analyzeText(extractedText);
    } else {
      // Images (JPG, PNG) — mock OCR
      result = mockOcrAnalysis(file.name);
    }

    return NextResponse.json({
      success: true,
      fileName: file.name,
      ...result,
    });
  } catch (error) {
    console.error("Document analysis failed:", error);
    return NextResponse.json(
      { error: "Analysis failed" },
      { status: 500 }
    );
  }
}

