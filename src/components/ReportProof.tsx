import Link from "next/link";

export default function ReportProof() {
  return (
    <section className="bg-slate-950 py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mx-auto max-w-3xl mb-10">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-400 font-semibold mb-3">
            Sample Risk Report
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Structured findings instead of a black-box verdict.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-8">
            This illustrative example shows how a future transaction review can organize document findings, counterparty context and items requiring human verification.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-[2rem] border border-white/10 bg-gray-900 p-7 shadow-2xl shadow-black/30">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-2">Illustrative case</p>
                <h3 className="text-2xl font-semibold text-white">Transaction Review</h3>
                <p className="mt-3 text-sm text-zinc-400 max-w-xl">
                  Example only. Scores and findings below are not based on a real company or live registry data.
                </p>
              </div>
              <span className="w-fit rounded-full bg-blue-600/10 px-4 py-2 text-xs font-semibold text-blue-300 border border-blue-500/20">
                Sample
              </span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-slate-950 p-5">
                <p className="text-sm text-zinc-500">Review score</p>
                <p className="mt-3 text-3xl font-semibold text-amber-300">74</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950 p-5">
                <p className="text-sm text-zinc-500">Status</p>
                <p className="mt-3 text-2xl font-semibold text-white">Review</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950 p-5">
                <p className="text-sm text-zinc-500">Priority</p>
                <p className="mt-3 text-2xl font-semibold text-white">Medium</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/auth/signup"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Start 7-Day Trial
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Request Demo
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900 p-6 shadow-2xl shadow-black/30">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Example findings</p>
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-950 p-5">
                <p className="font-semibold text-white">Document consistency</p>
                <p className="mt-2 text-sm text-zinc-400">Invoice amount does not match the purchase order total.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950 p-5">
                <p className="font-semibold text-white">Counterparty context</p>
                <p className="mt-2 text-sm text-zinc-400">Submitted company information requires supporting evidence before approval.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950 p-5">
                <p className="font-semibold text-white">Recommended action</p>
                <p className="mt-2 text-sm text-zinc-400">Hold the transaction for human review and request clarification.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
