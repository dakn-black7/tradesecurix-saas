export default function TrustBlock() {
  return (
    <section className="bg-slate-950 border-t border-white/5 py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-white/10 bg-gray-900 p-10 shadow-2xl shadow-black/20">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-400 font-semibold mb-4">
                Transparency and clarity
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                TradeSecurix is an analytics platform. We do NOT hold funds or execute trades.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-zinc-400">
                Our service focuses on document verification, counterparty risk analysis, and structured risk reporting for trading, compliance, and operational teams.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500 mb-4">Company information</p>
              <div className="space-y-3 text-sm text-zinc-300">
                <p className="font-semibold text-white">Trade Securix LLC (in formation)</p>
                <p>Randall Ave Ste 100, WY 82001, USA</p>
                <p>
                  <a href="mailto:contact@tradesecurix.com" className="text-blue-400 hover:text-blue-300">
                    contact@tradesecurix.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
