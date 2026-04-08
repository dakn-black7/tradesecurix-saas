import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      description: "Perfect for small teams",
      features: [
        "50 document analyses/month",
        "Company verification",
        "Basic risk scoring",
        "Email support",
        "PDF reports",
      ],
    },
    {
      name: "Professional",
      price: "$499",
      description: "For growing enterprises",
      featured: true,
      features: [
        "500 document analyses/month",
        "Advanced verification",
        "Custom risk thresholds",
        "Priority support",
        "API access",
        "Audit logs",
        "Custom branding",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "White-glove support",
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

  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Simple, transparent pricing</h1>
          <p className="text-xl text-zinc-400">Choose the plan that fits your business needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 border transition ${
                plan.featured
                  ? "bg-blue-600/10 border-blue-600 scale-105"
                  : "bg-gray-900 border-gray-800 hover:border-gray-700"
              }`}
            >
              {plan.featured && (
                <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-zinc-400 mb-6">{plan.description}</p>
              <div className="mb-8">
                <span className="text-5xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-zinc-400">/month</span>}
              </div>
              <button
                className={`w-full py-3 rounded-xl font-semibold mb-8 transition ${
                  plan.featured
                    ? "bg-blue-600 hover:bg-blue-500 text-white"
                    : "border border-gray-700 hover:bg-gray-800"
                }`}
              >
                Get Started
              </button>
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need something custom?</h2>
          <p className="text-zinc-400 mb-8">Contact our sales team for enterprise solutions and custom pricing.</p>
          <Link href="/auth/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-semibold transition">
            Contact Sales <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
