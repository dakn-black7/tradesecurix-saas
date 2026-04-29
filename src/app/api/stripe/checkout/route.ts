import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createCheckoutSession, PLANS, type PlanKey } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  const { userId, sessionClaims } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { planKey } = await request.json() as { planKey: PlanKey };

    const plan = PLANS[planKey];
    if (!plan) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

    const session = await createCheckoutSession({
      priceId: plan.priceId,
      userId,
      email: (sessionClaims?.email as string | undefined),
      trialDays: plan.trialDays,
      successUrl: `${appUrl}/dashboard?checkout=success`,
      cancelUrl: `${appUrl}/pricing?checkout=cancelled`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
