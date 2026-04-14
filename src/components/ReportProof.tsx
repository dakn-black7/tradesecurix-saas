import Link from "next/link";

export default function ReportProof() {
  return (
    <section className="bg-slate-950 py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mx-auto max-w-3xl mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400 font-semibold mb-3">
            See a Real Report
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Authentic risk insight in a compact, professional report.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-8">
            Review a sample company assessment with score, status, and document context to see how TradeSecurix turns verification into structured decision support.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-gray-900 p-8 shadow-2xl shadow-black/30">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-2">Example company</p>
                <h3 className="text-3xl font-semibold text-white">Everbridge Logistics</h3>
                <p className="mt-3 text-base text-zinc-400 max-w-xl">
                  Sample counterparty assessment showing how TradeSecurix combines document review and company verification into a single risk report.
                </p>
              </div>
              <span className="rounded-full bg-blue-600/10 px-4 py-2 text-sm font-semibold text-blue-300 border border-blue-500/20">
                Company report
              </span>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-slate-950 p-5">
                <p className="text-sm text-zinc-500">Risk score</p>
                <p className="mt-3 text-3xl font-semibold text-white">71</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950 p-5">
                <p className="text-sm text-zinc-500">Report status</p>
                <p className="mt-3 text-3xl font-semibold text-white">Review needed</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950 p-5">
                <p className="text-sm text-zinc-500">Document type</p>
                <p className="mt-3 text-3xl font-semibold text-white">Invoice</p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                View Report
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Download PDF
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 shadow-2xl shadow-black/30">
            <div className="mb-6 rounded-3xl border border-white/10 bg-slate-950 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Report overview</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Structured risk output</p>
                </div>
                <div className="rounded-2xl bg-blue-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">
                  Audit-ready
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <div className="rounded-3xl border border-white/10 bg-gray-900 p-5">
                <p className="text-sm text-zinc-500">Verified counterparty</p>
                <p className="mt-2 text-lg font-semibold text-white">Everbridge Logistics</p>
                <p className="mt-3 text-sm text-zinc-400">Confirmed registration and document metadata for KYC support.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-gray-900 p-5">
                <p className="text-sm text-zinc-500">Document checks</p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                  <li>• Signature validation</li>
                  <li>• Company registration match</li>
                  <li>• Invoice reference consistency</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 bg-gray-900 p-5">
                <p className="text-sm text-zinc-500">Compliance signal</p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-sm font-semibold text-amber-200">
                  Review required
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
