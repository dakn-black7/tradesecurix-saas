"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Essential",
    monthly: 49,
    description: "For small import-export businesses starting structured trade checks.",
    featured: false,
    checks: 5,
    documents: 10,
    features: ["Counterparty workspace", "Risk dashboard (planned)", "Document analysis (planned)"],
  },
  {
    name: "Professional",
    monthly: 129,
    description: "For active importers and exporters managing recurring transactions.",
    featured: true,
    checks: 20,
    documents: 50,
    features: ["Everything in Essential", "Multi-document comparison (planned)", "Advanced reporting (planned)"],
  },
  {
    name: "Business",
    monthly: 299,
    description: "For teams that need collaboration, controls and deeper oversight.",
    featured: false,
    checks: 60,
    documents: 150,
    features: ["Everything in Professional", "Team workspace (planned)", "Audit trail (planned)"],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="border-t border-slate-200 bg-white px-4 py-16 dark:border-slate-800 dark:bg-slate-950 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Pricing</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">Simple plans for trade teams</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
            Proposed launch pricing. Verification, document analysis and paid subscriptions are not yet available.
            Usage allowances are targets, subject to validation of data-provider costs and coverage.
          </p>
          <div className="mt-6 inline-flex items-center rounded-xl border border-slate-300 p-1 dark:border-slate-700" aria-label="Billing period">
            <button type="button" aria-pressed={!annual} onClick={() => setAnnual(false)} className={`rounded-lg px-4 py-2 text-sm font-semibold ${!annual ? "bg-blue-600 text-white" : "text-slate-700 dark:text-slate-200"}`}>Monthly</button>
            <button type="button" aria-pressed={annual} onClick={() => setAnnual(true)} className={`rounded-lg px-4 py-2 text-sm font-semibold ${annual ? "bg-blue-600 text-white" : "text-slate-700 dark:text-slate-200"}`}>Annual · save 15%</button>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <article key={plan.name} className={`flex flex-col rounded-2xl border p-6 ${plan.featured ? "border-cyan-400 bg-blue-50/70 shadow-sm dark:bg-blue-950/20" : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/35"}`}>
              {plan.featured && <span className="mb-4 w-fit rounded-full bg-cyan-500 px-3 py-1 text-xs font-bold text-slate-950">Most Popular</span>}
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">{plan.name}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600 dark:text-slate-400">{plan.description}</p>
              <div className="mt-5 flex items-end gap-1">
                <span className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white">${annual ? (plan.monthly * 0.85).toFixed(2) : plan.monthly}</span>
                <span className="pb-1 text-sm text-slate-500">/month</span>
              </div>
              {annual && <p className="mt-1 text-xs text-slate-500">Billed ${(plan.monthly * 12 * 0.85).toFixed(2)} annually · proposed</p>}
              <a href="mailto:contact@tradesecurix.com?subject=TradeSecurix%20launch%20updates" className={`mt-6 inline-flex h-11 items-center justify-center rounded-xl px-4 text-sm font-bold transition ${plan.featured ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300" : "border border-slate-300 text-slate-950 hover:bg-slate-50 dark:border-slate-700 dark:text-white dark:hover:bg-slate-900"}`}>
                Ask about launch
              </a>
              <p className="mt-5 text-sm font-semibold text-slate-900 dark:text-slate-100">Proposed monthly allowances</p>
              <ul className="mt-3 space-y-3">
                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />{plan.checks} company checks</li>
                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />{plan.documents} document analyses</li>
                {plan.features.map(feature => <li key={feature} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /><span>{feature}</span></li>)}
              </ul>
            </article>
          ))}
          <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/35">
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">Enterprise</h3>
            <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600 dark:text-slate-400">For banks, insurers and organizations requiring custom volume and integrations.</p>
            <div className="mt-5 text-3xl font-bold text-slate-950 dark:text-white">Custom quote</div>
            <a href="mailto:contact@tradesecurix.com?subject=TradeSecurix%20Enterprise%20inquiry" className="mt-6 inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 px-4 text-sm font-bold text-slate-950 dark:border-slate-700 dark:text-white">Contact Sales</a>
            <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li>Custom volumes and terms</li><li>Dedicated onboarding (planned)</li><li>Integrations subject to technical scoping</li>
            </ul>
          </article>
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">No paid checkout is active. Trial and billing will be enabled only after service validation. Prices in USD, taxes may apply.</p>
      </div>
    </section>
  );
}
