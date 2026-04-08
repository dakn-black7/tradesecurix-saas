import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { companyName, registrationNumber, country } = body;

    if (!companyName || !country) {
      return NextResponse.json(
        { error: "Company name and country are required" },
        { status: 400 }
      );
    }

    // Simulate company verification
    const verificationStatus = Math.random() > 0.3 ? "verified" : "pending";
    const riskLevel = Math.random() > 0.6 ? "high" : "low";

    return NextResponse.json({
      success: true,
      companyName,
      country,
      verificationStatus,
      riskLevel,
      registrationFound: !!registrationNumber,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Verification failed" },
      { status: 500 }
    );
  }
}
