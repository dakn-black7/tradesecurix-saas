import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY environment variable is not set");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2026-04-22.dahlia",
  typescript: true,
});

export const PLANS = {
  documentAnalysis: [
    {
      id: "doc_starter",
      name: "Starter",
      price: 29,
      currency: "usd",
      interval: "month" as const,
      description: "Up to 50 document analyses per month",
      priceId: process.env.STRIPE_DOC_STARTER_PRICE_ID ?? "",
      features: [
        "50 document analyses/month",
        "PDF, DOCX, JPG, PNG support",
        "Basic risk scoring",
        "Email support",
        "PDF reports",
      ],
    },
    {
      id: "doc_pro",
      name: "Pro",
      price: 99,
      currency: "usd",
      interval: "month" as const,
      description: "Up to 250 document analyses per month",
      priceId: process.env.STRIPE_DOC_PRO_PRICE_ID ?? "",
      features: [
        "250 document analyses/month",
        "Advanced risk detection",
        "Priority support",
        "API access",
        "Audit logs",
        "Custom risk thresholds",
      ],
      featured: true,
    },
    {
      id: "doc_enterprise",
      name: "Enterprise",
      price: 299,
      currency: "usd",
      interval: "month" as const,
      description: "Unlimited document analyses",
      priceId: process.env.STRIPE_DOC_ENTERPRISE_PRICE_ID ?? "",
      features: [
        "Unlimited analyses",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 phone support",
        "SLA guarantee",
        "Advanced analytics",
        "Training included",
      ],
    },
  ],
  companyVerification: [
    {
      id: "verify_basic",
      name: "Basic",
      price: 49,
      currency: "usd",
      interval: "month" as const,
      description: "Verify up to 25 companies per month",
      priceId: process.env.STRIPE_VERIFY_BASIC_PRICE_ID ?? "",
      features: [
        "25 company verifications/month",
        "Registry lookup",
        "Trust score",
        "Basic risk assessment",
        "Email reports",
      ],
    },
    {
      id: "verify_advanced",
      name: "Advanced",
      price: 149,
      currency: "usd",
      interval: "month" as const,
      description: "Verify up to 100 companies per month",
      priceId: process.env.STRIPE_VERIFY_ADVANCED_PRICE_ID ?? "",
      features: [
        "100 company verifications/month",
        "Multi-jurisdiction lookup",
        "Advanced risk analysis",
        "API access",
        "Monitoring alerts",
      ],
      featured: true,
    },
    {
      id: "verify_global",
      name: "Global",
      price: 399,
      currency: "usd",
      interval: "month" as const,
      description: "Unlimited global company verifications",
      priceId: process.env.STRIPE_VERIFY_GLOBAL_PRICE_ID ?? "",
      features: [
        "Unlimited verifications",
        "200+ country coverage",
        "Real-time monitoring",
        "Dedicated support",
        "Compliance reports",
        "Custom integrations",
      ],
    },
  ],
};

export async function createCheckoutSession({
  priceId,
  userId,
  email,
  trialDays = 14,
}: {
  priceId: string;
  userId: string;
  email?: string;
  trialDays?: number;
}) {
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    subscription_data: {
      trial_period_days: trialDays,
      metadata: { userId },
    },
    customer_email: email,
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?checkout=success`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
    metadata: { userId },
  });

  return session;
}

export async function createCustomerPortalSession(customerId: string) {
  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
  });
  return session;
}
