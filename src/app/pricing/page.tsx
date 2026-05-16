import Link from "next/link";
import Pricing from "@/components/Pricing";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 pt-20">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Start Your 14-Day Free Trial</h1>
          <p className="mt-3 text-zinc-400">Card required. Auto-renews monthly after trial. Cancel anytime from billing.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-400">
            <span className="rounded-full border border-white/10 px-3 py-1">Checkout Sessions</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Recurring Subscriptions</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Trial Tracking</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Webhook Lifecycle</span>
          </div>
        </div>
      </div>

      <Pricing />

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-center">
          <h2 className="text-2xl font-semibold text-white">Need custom onboarding or contract terms?</h2>
          <p className="mt-2 text-zinc-400">Enterprise plans can include custom due diligence workflows and dedicated support.</p>
          <Link href="#contact" className="mt-6 inline-flex h-11 items-center justify-center rounded-xl border border-white/20 px-6 text-sm font-semibold text-white hover:bg-white/10 transition">
            Talk to Sales
          </Link>
        </div>
      </div>
    </main>
  );
}
