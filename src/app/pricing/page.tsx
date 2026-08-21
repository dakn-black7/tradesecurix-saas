import Link from "next/link";
import Pricing from "@/components/Pricing";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <section className="px-4 pb-8 pt-14 text-center sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">TradeSecurix Plans</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">Simple, transparent pricing</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">Choose the level that fits your trade activity. All self-serve plans start with a 7-day free trial.</p>
        </div>
      </section>

      <Pricing />

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center sm:flex-row sm:text-left dark:border-slate-800 dark:bg-slate-900/40">
          <div>
            <h2 className="text-lg font-bold text-slate-950 dark:text-white">Need a tailored setup?</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Banks, insurers, logistics teams and high-volume organizations can request a custom commercial plan.</p>
          </div>
          <Link href="/#contact" className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-bold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900">Request Demo</Link>
        </div>
      </section>
    </main>
  );
}
