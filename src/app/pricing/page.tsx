"use client";

import { useState } from "react";
import { Check, ArrowRight, Loader2 } from "lucide-react";
import { useUser, SignInButton } from "@clerk/nextjs";
import type { PlanKey } from "@/lib/stripe";

type PricingTier = {
  key: PlanKey;
  name: string;
  subtitle: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const documentPlans: PricingTier[] = [
  {
    key: "starter",
    name: "Starter",
    subtitle: "For independent traders",
    price: "$29",
    period: "/month",
    description: "Get started with document fraud detection.",
    features: [
      "Up to 50 document analyses/month",
      "Risk scoring & anomaly detection",
      "PDF audit report",
      "Email support",
      "14-day free trial",
    ],
    cta: "Start Free Trial",
  },
  {
    key: "pro",
    name: "Pro",
    subtitle: "For trading desks & firms",
    price: "$99",
    period: "/month",
    description: "Everything in Starter, plus advanced analytics.",
    features: [
      "Unlimited document analyses",
      "Advanced risk models",
      "API access + webhooks",
      "Priority support (24/5)",
      "Custom risk thresholds",
      "Audit-ready compliance reports",
      "14-day free trial",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    key: "enterprise",
    name: "Enterprise",
    subtitle: "For institutions",
    price: "$299",
    period: "/month",
    description: "White-glove support and custom integrations.",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom risk models",
      "White-label option",
      "24/7 phone & email",
      "SLA guarantee (99.99%)",
      "14-day free trial",
    ],
    cta: "Start Free Trial",
  },
];

const verifyPlans: PricingTier[] = [
  {
    key: "verifyBasic",
    name: "Basic",
    subtitle: "Registry lookup",
    price: "$49",
    period: "/month",
    description: "Basic company registry cross-reference.",
    features: [
      "Up to 50 verifications/month",
      "Registry lookup",
      "Risk indicator",
      "14-day free trial",
    ],
    cta: "Start Free Trial",
  },
  {
    key: "verifyAdvanced",
    name: "Advanced",
    subtitle: "Multi-jurisdiction",
    price: "$149",
    period: "/month",
    description: "Cross-reference across multiple registries.",
    features: [
      "Unlimited verifications",
      "Multi-jurisdiction (50+ countries)",
      "Sanctions screening",
      "UBO lookup",
      "14-day free trial",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    key: "verifyGlobal",
    name: "Global",
    subtitle: "195+ jurisdictions",
    price: "$399",
    period: "/month",
    description: "Full global coverage with real-time data.",
    features: [
      "Everything in Advanced",
      "195+ jurisdictions",
      "Real-time registry data",
      "PEP & adverse media screening",
      "API access",
      "14-day free trial",
    ],
    cta: "Start Free Trial",
  },
];

function PlanCard({ plan }: { plan: PricingTier }) {
  const { isSignedIn } = useUser();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!isSignedIn) return;
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planKey: plan.key }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch {
      console.error("Checkout failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`relative rounded-2xl border p-8 transition ${
        plan.featured
          ? "bg-blue-600/10 border-blue-500/50 ring-2 ring-blue-500 shadow-2xl shadow-blue-500/10"
          : "bg-gray-900/60 border-gray-800 hover:border-gray-700"
      }`}
    >
      {plan.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold text-white">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
        <p className="text-sm text-zinc-400">{plan.subtitle}</p>
        <div className="mt-4 flex items-baseline gap-1">
          <span className="text-4xl font-bold text-white">{plan.price}</span>
          <span className="text-zinc-500 text-sm">{plan.period}</span>
        </div>
        <p className="mt-2 text-sm text-zinc-400">{plan.description}</p>
      </div>

      {isSignedIn ? (
        <button
          onClick={handleCheckout}
          disabled={loading}
          className={`mb-6 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition ${
            plan.featured
              ? "bg-blue-600 hover:bg-blue-500 text-white"
              : "border border-gray-700 text-white hover:bg-gray-800"
          } disabled:opacity-50`}
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {loading ? "Redirecting…" : plan.cta}
        </button>
      ) : (
        <SignInButton mode="modal">
          <button
            className={`mb-6 w-full rounded-xl py-3 text-sm font-semibold transition ${
              plan.featured
                ? "bg-blue-600 hover:bg-blue-500 text-white"
                : "border border-gray-700 text-white hover:bg-gray-800"
            }`}
          >
            {plan.cta}
          </button>
        </SignInButton>
      )}

      <ul className="space-y-3">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
            <span className="text-sm text-zinc-300">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gray-950 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="mb-4 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            14-day free trial on all plans
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Choose the plan that fits your trading operation. All plans include a 14-day free trial — no credit card required.
          </p>
        </div>

        {/* Document Analysis Plans */}
        <div className="mb-20">
          <h2 className="mb-2 text-2xl font-bold text-white">Document Analysis</h2>
          <p className="mb-8 text-zinc-400">
            Detect fraud risks in trade documents — PDFs, invoices, bills of lading, contracts.
          </p>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {documentPlans.map((plan) => (
              <PlanCard key={plan.key} plan={plan} />
            ))}
          </div>
        </div>

        {/* Company Verification Plans */}
        <div className="mb-20">
          <h2 className="mb-2 text-2xl font-bold text-white">Company Verification</h2>
          <p className="mb-8 text-zinc-400">
            Verify global counterparties across 195+ jurisdictions before sending money.
          </p>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {verifyPlans.map((plan) => (
              <PlanCard key={plan.key} plan={plan} />
            ))}
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="rounded-3xl border border-gray-800 bg-gray-900 p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a custom solution?</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Talk to our team about enterprise deals, custom integrations, and volume pricing.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
          >
            Contact Sales <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </main>
  );
}

