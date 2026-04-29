import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gray-950 py-24 px-6 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] items-center">
          {/* Left: Copy */}
          <div className="space-y-8 lg:pr-10">
            <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              14-day free trial · No credit card required
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
                Secure Your Transactions.{" "}
                <span className="text-blue-500">Verify Before You Trust.</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
                Detect fraud risks in trade documents and verify global partners before sending money.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/sign-up"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See How It Works
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-500" /> SOC 2 compliant
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-500" /> 195+ jurisdictions
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-500" /> Audit-ready reports
              </span>
            </div>
          </div>

          {/* Right: Dashboard preview */}
          <div className="relative">
            <div className="absolute inset-0 -translate-x-4 -translate-y-4 rounded-[2rem] bg-gradient-to-br from-blue-600/10 via-slate-900/0 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gray-900 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-gray-800 bg-gray-950/80 px-5 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/60" />
                <span className="h-3 w-3 rounded-full bg-amber-500/60" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/60" />
                <span className="ml-3 text-xs text-zinc-500">tradesecurix.com/dashboard</span>
              </div>
              <div className="p-6 space-y-4">
                {/* Stat bar */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Risk Score", val: "34", color: "text-amber-400" },
                    { label: "Docs Reviewed", val: "142" , color: "text-white"},
                    { label: "Alerts", val: "3", color: "text-red-400" },
                  ].map(({ label, val, color }) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-gray-950 p-4">
                      <p className="text-[10px] uppercase tracking-widest text-zinc-500">{label}</p>
                      <p className={`mt-2 text-2xl font-bold ${color}`}>{val}</p>
                    </div>
                  ))}
                </div>
                {/* Recent analyses */}
                <div className="rounded-2xl border border-white/10 bg-gray-950 p-4 space-y-3">
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500">Recent Analyses</p>
                  {[
                    { name: "Invoice 99284.pdf", risk: 16, badge: "Cleared", bClass: "bg-emerald-500/10 text-emerald-300" },
                    { name: "Astra Global Trade", risk: 42, badge: "Review", bClass: "bg-amber-500/10 text-amber-300" },
                    { name: "Bill of Lading C12", risk: 74, badge: "Flagged", bClass: "bg-red-500/10 text-red-300" },
                  ].map(({ name, risk, badge, bClass }) => (
                    <div key={name} className="flex items-center justify-between gap-3">
                      <span className="text-xs text-zinc-300 truncate">{name}</span>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-xs font-semibold text-zinc-400">{risk}%</span>
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${bClass}`}>{badge}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

