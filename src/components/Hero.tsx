import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-slate-950 py-24 px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-8 lg:pr-10">
            <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              Built for traders, analysts, and compliance professionals
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Verify Companies. Analyze Risk. Trade with Confidence.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
                TradeSecurix helps traders and analysts verify counterparties and analyze documents through structured risk reports — before making financial decisions.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#report-proof"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                View Sample Report
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Request Demo
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -translate-x-4 -translate-y-4 rounded-[2rem] bg-gradient-to-br from-blue-600/10 via-slate-900/0 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <div className="bg-slate-900/90 px-6 py-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Sample dashboard</p>
                    <p className="mt-1 text-sm font-semibold text-white">Document risk overview</p>
                  </div>
                  <div className="rounded-2xl bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.3em] text-zinc-300">
                    Preview
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-slate-900 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Company</p>
                    <p className="mt-3 text-xl font-semibold text-white">Everbridge Logistics</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-900 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Score</p>
                    <p className="mt-3 text-xl font-semibold text-white">71</p>
                  </div>
                </div>
                <div className="mt-6 rounded-3xl border border-white/10 bg-slate-900 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Status</p>
                      <p className="mt-2 text-lg font-semibold text-white">Review needed</p>
                    </div>
                    <span className="rounded-full bg-amber-500/10 px-3 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">
                      Risk signal
                    </span>
                  </div>
                </div>
                <div className="mt-6 space-y-3 rounded-3xl border border-white/10 bg-slate-900 p-5 text-sm text-zinc-400">
                  <p className="font-semibold text-white">Snapshot</p>
                  <ul className="space-y-2">
                    <li>• Counterparty verification</li>
                    <li>• Document integrity checks</li>
                    <li>• Structured risk guidance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
