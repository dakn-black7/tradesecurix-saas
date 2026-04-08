import { NextRequest, NextResponse } from "next/server";

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

    // Simulate document analysis
    const riskScore = Math.floor(Math.random() * 100);
    const findings = [
      {
        type: "warning",
        message: "Document signature verification pending",
        severity: "medium",
      },
      {
        type: "info",
        message: "Company registration found in global database",
        severity: "low",
      },
    ];

    return NextResponse.json({
      success: true,
      fileName: file.name,
      riskScore,
      findings,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Analysis failed" },
      { status: 500 }
    );
  }
}
