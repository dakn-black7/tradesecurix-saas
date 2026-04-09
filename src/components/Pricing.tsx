import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    subtitle: "For Independent Traders",
    price: "$299",
    period: "/month",
    description: "Perfect for freelance traders and small operations",
    features: [
      "Up to 100 document analyses/month",
      "Company verification (basic registry lookup)",
      "Risk scoring",
      "Email support",
      "7-day support response",
      "CSV export",
    ],
    cta: "Start Free Trial",
    featured: false,
  },
  {
    name: "Professional",
    subtitle: "For Trading Desks & Firms",
    price: "$999",
    period: "/month",
    description: "Most popular for active trading operations",
    features: [
      "Unlimited document analyses",
      "Advanced counterparty intelligence",
      "Real-time alerts & monitoring",
      "API access with webhooks",
      "Priority 24/5 support",
      "SLA guarantee (99.5% uptime)",
      "Custom risk thresholds",
      "Audit-ready compliance reports",
      "Team management (up to 10 users)",
    ],
    cta: "Request Demo",
    featured: true,
  },
  {
    name: "Enterprise",
    subtitle: "For Institutions",
    price: "Custom",
    period: "Contact sales",
    description: "Dedicated support and custom solutions",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom risk models & algorithms",
      "White-label deployment option",
      "On-premise deployment available",
      "24/7 phone & email support",
      "Compliance consulting included",
      "Unlimited team users",
      "SLA guarantee (99.99% uptime)",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Transparent Pricing, No Hidden Fees
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Choose the plan that fits your trading operation. All plans include 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl border transition transform hover:scale-105 ${
                tier.featured
                  ? "bg-blue-600/10 border-blue-500/50 ring-2 ring-blue-500 lg:scale-105 shadow-2xl shadow-blue-500/20"
                  : "bg-gray-900/50 border-gray-800"
              } p-8`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                <p className="text-sm text-zinc-400 mb-4">{tier.subtitle}</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-zinc-400 text-sm">{tier.period}</span>
                </div>
                <p className="text-sm text-zinc-400">{tier.description}</p>
              </div>

              <Link
                href="#contact"
                className={`block w-full py-3 rounded-lg font-semibold text-center transition mb-8 ${
                  tier.featured
                    ? "bg-blue-600 hover:bg-blue-500 text-white"
                    : "border border-gray-700 hover:bg-gray-800"
                }`}
              >
                {tier.cta}
              </Link>

              <div className="space-y-3">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Note */}
        <div className="mt-16 text-center">
          <p className="text-zinc-400">
            Questions about pricing?{" "}
            <Link href="#contact" className="text-blue-400 hover:text-blue-300 font-semibold">
              Get in touch with our sales team
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
