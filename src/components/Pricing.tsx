import Link from "next/link";
import CheckoutButton from "@/components/CheckoutButton";

const documentPlans = [
  { name: "Starter", price: "$49", planKey: "doc_starter", featured: false },
  { name: "Pro", price: "$149", planKey: "doc_pro", featured: true },
  { name: "Enterprise", price: "Custom", planKey: "doc_enterprise", featured: false },
];

const companyPlans = [
  { name: "Basic", price: "$99", planKey: "comp_basic", featured: false },
  { name: "Global", price: "$299", planKey: "comp_global", featured: true },
  { name: "Enterprise", price: "Custom", planKey: "comp_enterprise", featured: false },
];

function planCta(planKey: string) {
  if (planKey.includes("enterprise")) {
    return (
      <Link
        href="#contact"
        className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-white/20 text-sm font-semibold text-white transition hover:bg-white/10"
      >
        Contact Sales
      </Link>
    );
  }

  return (
    <CheckoutButton
      planKey={planKey}
      className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-cyan-400 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
    >
      Start Free Trial
    </CheckoutButton>
  );
}

function PricingGrid({
  title,
  plans,
}: {
  title: string;
  plans: { name: string; price: string; planKey: string; featured: boolean }[];
}) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-7">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.planKey}
            className={`rounded-2xl border p-5 ${
              plan.featured
                ? "border-cyan-400/40 bg-cyan-500/10 shadow-[0_0_40px_rgba(34,211,238,0.12)]"
                : "border-white/10 bg-slate-950"
            }`}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">{plan.name}</p>
            <p className="mt-3 text-3xl font-semibold text-white">{plan.price}</p>
            <p className="mt-1 text-sm text-zinc-500">per month • subscription</p>
            <div className="mt-5">{planCta(plan.planKey)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 border-t border-gray-800 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Subscription Plans</h2>
          <p className="mt-3 text-lg text-zinc-400">All paid plans include a 14-day trial, card required, and recurring billing.</p>
        </div>

        <div className="space-y-6">
          <PricingGrid title="Document Analysis" plans={documentPlans} />
          <PricingGrid title="Company Verification" plans={companyPlans} />
        </div>
      </div>
    </section>
  );
}
