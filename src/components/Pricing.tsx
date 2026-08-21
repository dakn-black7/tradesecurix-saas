import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Essential",
    price: "$79",
    description: "For small import-export businesses starting structured trade checks.",
    featured: false,
    features: ["Document analysis", "Counterparty workspace", "Risk dashboard", "7-day free trial"],
  },
  {
    name: "Professional",
    price: "$129",
    description: "For active importers and exporters managing recurring transactions.",
    featured: true,
    features: ["Everything in Essential", "Multi-document comparison", "Advanced risk reporting", "Extended history"],
  },
  {
    name: "Business",
    price: "$299",
    description: "For teams that need collaboration, controls and deeper oversight.",
    featured: false,
    features: ["Everything in Professional", "Team workspace", "Audit trail", "Management dashboards"],
  },
  {
    name: "Enterprise",
    price: "$499",
    description: "For larger organizations with higher usage and governance needs.",
    featured: false,
    features: ["Everything in Business", "Higher usage limits", "Advanced administration", "Priority support"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-slate-200 bg-white px-4 py-16 dark:border-slate-800 dark:bg-slate-950 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Pricing</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">Simple plans for trade teams</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
            Start with a 7-day free trial. Final usage limits will be aligned with real analysis costs before commercial launch.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-6 ${
                plan.featured
                  ? "border-blue-600 bg-blue-50/70 shadow-sm dark:bg-blue-950/20"
                  : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/35"
              }`}
            >
              {plan.featured && (
                <span className="mb-4 w-fit rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">Most Popular</span>
              )}
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">{plan.name}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600 dark:text-slate-400">{plan.description}</p>
              <div className="mt-5 flex items-end gap-1">
                <span className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white">{plan.price}</span>
                <span className="pb-1 text-sm text-slate-500">/month</span>
              </div>
              <Link
                href="/auth/signup"
                className={`mt-6 inline-flex h-11 items-center justify-center rounded-xl px-4 text-sm font-bold transition ${
                  plan.featured
                    ? "bg-blue-600 text-white hover:bg-blue-500"
                    : "border border-slate-300 text-slate-950 hover:bg-slate-50 dark:border-slate-700 dark:text-white dark:hover:bg-slate-900"
                }`}
              >
                Start 7-Day Trial
              </Link>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/40 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-bold text-slate-950 dark:text-white">Institutional / Custom</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">For banks, insurers, freight forwarders and organizations requiring custom terms, volumes or future integrations.</p>
          </div>
          <Link href="/#contact" className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 px-5 text-sm font-bold text-white dark:bg-white dark:text-slate-950">
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
