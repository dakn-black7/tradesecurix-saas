import Link from "next/link";
import { Check, ArrowRight, FileText, Building2 } from "lucide-react";

const docPlans = [
  {
    name: "Starter",
    price: "$29",
    description: "For independent traders starting out",
    priceId: process.env.STRIPE_DOC_STARTER_PRICE_ID ?? "#",
    features: [
      "50 document analyses/month",
      "PDF, DOCX, JPG, PNG support",
      "Basic risk scoring",
      "Email support",
      "PDF reports",
    ],
  },
  {
    name: "Pro",
    price: "$99",
    description: "For growing trading teams",
    featured: true,
    priceId: process.env.STRIPE_DOC_PRO_PRICE_ID ?? "#",
    features: [
      "250 document analyses/month",
      "Advanced risk detection",
      "Priority support",
      "API access",
      "Audit logs",
      "Custom risk thresholds",
    ],
  },
  {
    name: "Enterprise",
    price: "$299",
    description: "For large institutions",
    priceId: process.env.STRIPE_DOC_ENTERPRISE_PRICE_ID ?? "#",
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
];

const verifyPlans = [
  {
    name: "Basic",
    price: "$49",
    description: "Verify up to 25 companies/month",
    priceId: process.env.STRIPE_VERIFY_BASIC_PRICE_ID ?? "#",
    features: [
      "25 company verifications/month",
      "Registry lookup",
      "Trust score",
      "Basic risk assessment",
      "Email reports",
    ],
  },
  {
    name: "Advanced",
    price: "$149",
    description: "For active compliance teams",
    featured: true,
    priceId: process.env.STRIPE_VERIFY_ADVANCED_PRICE_ID ?? "#",
    features: [
      "100 company verifications/month",
      "Multi-jurisdiction lookup",
      "Advanced risk analysis",
      "API access",
      "Monitoring alerts",
    ],
  },
  {
    name: "Global",
    price: "$399",
    description: "Unlimited global coverage",
    priceId: process.env.STRIPE_VERIFY_GLOBAL_PRICE_ID ?? "#",
    features: [
      "Unlimited verifications",
      "200+ country coverage",
      "Real-time monitoring",
      "Dedicated support",
      "Compliance reports",
      "Custom integrations",
    ],
  },
];

function PlanCard({
  name,
  price,
  description,
  features,
  featured,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
  priceId: string;
}) {
  return (
    <div
      className={`relative rounded-2xl p-8 border transition ${
        featured
          ? "bg-blue-600/10 border-blue-500/50 ring-1 ring-blue-500 shadow-xl shadow-blue-500/10"
          : "bg-gray-900 border-gray-800 hover:border-gray-700"
      }`}
    >
      {featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold text-white">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-zinc-400 text-sm mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-zinc-400 text-sm">/month</span>
      </div>
      <Link
        href="/sign-up"
        className={`block w-full py-3 rounded-xl font-semibold text-center mb-6 transition text-sm ${
          featured
            ? "bg-blue-600 hover:bg-blue-500 text-white"
            : "border border-gray-700 hover:bg-gray-800 text-white"
        }`}
      >
        Start 14-Day Free Trial
      </Link>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2.5 text-sm">
            <Check className="h-4 w-4 shrink-0 text-green-400" />
            <span className="text-zinc-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300 mb-6">
            14-Day Free Trial · No Credit Card Required
          </div>
          <h1 className="text-5xl font-bold mb-4 text-white">Transparent Pricing</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Choose the plan that fits your operations. All plans include a 14-day free trial — no charge until your trial ends.
          </p>
        </div>

        {/* Document Analysis Plans */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="rounded-xl bg-blue-600/10 p-2 text-blue-400">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Document Analysis</h2>
              <p className="text-sm text-zinc-400">Analyze PDF, DOCX, JPG, and PNG trade documents for fraud risk</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {docPlans.map((plan, idx) => (
              <PlanCard key={idx} {...plan} />
            ))}
          </div>
        </div>

        {/* Company Verification Plans */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="rounded-xl bg-violet-600/10 p-2 text-violet-400">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Company Verification</h2>
              <p className="text-sm text-zinc-400">Verify global counterparties with trust scores and risk assessment</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {verifyPlans.map((plan, idx) => (
              <PlanCard key={idx} {...plan} />
            ))}
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Need a custom solution?</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Contact our sales team for custom pricing, white-label deployments, or on-premise solutions.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-semibold transition text-white"
          >
            Contact Sales <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}

