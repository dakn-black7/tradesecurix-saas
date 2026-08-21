import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    configured: false,
    message: "Subscription status is not configured yet.",
  });
}
