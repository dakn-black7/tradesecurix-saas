import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY && process.env.NODE_ENV !== "test") {
  console.warn("STRIPE_SECRET_KEY is not set. Stripe functionality will be unavailable.");
}

export const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2026-04-22.dahlia",
      typescript: true,
    })
  : null;

// Stripe plan price IDs (set these in your .env.local)
export const PLANS = {
  // Document Analysis
  starter: {
    name: "Starter",
    description: "For independent traders",
    price: "$29/month",
    priceId: process.env.STRIPE_PRICE_STARTER ?? "",
    trialDays: 14,
  },
  pro: {
    name: "Pro",
    description: "For trading desks & firms",
    price: "$99/month",
    priceId: process.env.STRIPE_PRICE_PRO ?? "",
    trialDays: 14,
  },
  enterprise: {
    name: "Enterprise",
    description: "For institutions",
    price: "$299/month",
    priceId: process.env.STRIPE_PRICE_ENTERPRISE ?? "",
    trialDays: 14,
  },
  // Company Verification
  verifyBasic: {
    name: "Verify Basic",
    description: "Registry lookup + basic checks",
    price: "$49/month",
    priceId: process.env.STRIPE_PRICE_VERIFY_BASIC ?? "",
    trialDays: 14,
  },
  verifyAdvanced: {
    name: "Verify Advanced",
    description: "Multi-jurisdictional verification",
    price: "$149/month",
    priceId: process.env.STRIPE_PRICE_VERIFY_ADVANCED ?? "",
    trialDays: 14,
  },
  verifyGlobal: {
    name: "Verify Global",
    description: "195+ jurisdictions + sanctions screening",
    price: "$399/month",
    priceId: process.env.STRIPE_PRICE_VERIFY_GLOBAL ?? "",
    trialDays: 14,
  },
} as const;

export type PlanKey = keyof typeof PLANS;

export async function createCheckoutSession({
  priceId,
  userId,
  email,
  trialDays = 14,
  successUrl,
  cancelUrl,
}: {
  priceId: string;
  userId: string;
  email?: string;
  trialDays?: number;
  successUrl: string;
  cancelUrl: string;
}) {
  if (!stripe) throw new Error("Stripe is not configured");

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    subscription_data: {
      trial_period_days: trialDays,
      metadata: { userId },
    },
    customer_email: email,
    success_url: successUrl,
    cancel_url: cancelUrl,
    metadata: { userId },
  });

  return session;
}
