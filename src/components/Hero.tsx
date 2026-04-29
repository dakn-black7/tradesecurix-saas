import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";

export default function Hero() {
  return (
    <section className="bg-gray-950 py-24 px-6 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-8 lg:pr-10">
            <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              Trusted by traders and compliance professionals
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Secure Your Transactions. Verify Before You Trust.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
                Detect fraud risks in trade documents and verify global partners before sending money.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <SignInButton mode="modal">
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500">
                  Start Free Trial — 14 Days
                  <ArrowRight className="h-4 w-4" />
                </button>
              </SignInButton>
              <Link
                href="#demo"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See Live Demo
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              {["No credit card required", "14-day free trial", "Cancel anytime"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                  <ShieldCheck className="h-4 w-4 text-blue-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -translate-x-4 -translate-y-4 rounded-[2rem] bg-gradient-to-br from-blue-600/10 via-slate-900/0 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gray-900 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <div className="bg-gray-800/90 px-6 py-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Live dashboard preview</p>
                    <p className="mt-1 text-sm font-semibold text-white">Document risk analysis</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                    ● Live
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-gray-800/60 p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Company</p>
                    <p className="mt-3 text-base font-semibold text-white">Everbridge Logistics</p>
                    <p className="mt-1 text-xs text-zinc-500">United Kingdom</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Trust Score</p>
                    <p className="mt-3 text-3xl font-bold text-emerald-300">87</p>
                    <p className="mt-1 text-xs text-emerald-400">Low Risk</p>
                  </div>
                </div>
                <div className="mt-4 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Document Scan</p>
                      <p className="mt-2 text-base font-semibold text-white">Invoice #99284 — Review needed</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-amber-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                      Risk: 62%
                    </span>
                  </div>
                </div>
                <div className="mt-4 space-y-2 rounded-2xl border border-white/10 bg-gray-800/60 p-5 text-sm text-zinc-400">
                  <p className="font-semibold text-white">Detects fraud before it costs you money</p>
                  <ul className="mt-2 space-y-1.5 text-xs">
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-400" />Document integrity & signature checks</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-400" />Global counterparty verification</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-400" />Audit-ready compliance reports</li>
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
