import { NextRequest, NextResponse } from "next/server";

type ContactRequestBody = {
  fullName: string;
  email: string;
  userType: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactRequestBody;
    const { fullName, email, userType, message } = body;

    if (!fullName || !email || !userType) {
      return NextResponse.json(
        { error: "Full name, email, and user type are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    console.log(
      `[Contact Form] ${fullName} <${email}> (${userType}) - ${
        message || "No message provided"
      }`
    );

    return NextResponse.json({
      success: true,
      message: "Demo request received. Our team will follow up soon.",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to submit contact request." },
      { status: 500 }
    );
  }
}
