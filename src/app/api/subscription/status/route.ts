import { NextResponse } from "next/server";
import { getCurrentUserSubscription } from "@/lib/subscription";

export async function GET() {
  const subscription = await getCurrentUserSubscription();
  return NextResponse.json(subscription);
}
