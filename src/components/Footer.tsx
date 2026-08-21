import Link from "next/link";
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-14 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-white sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Trade risk intelligence</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Review the transaction before money or goods move.</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
              See how TradeSecurix brings counterparty checks, document review and transaction risk signals into one workspace.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
            <Link
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-bold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
            >
              Request Demo
            </Link>
            <Link
              href="/auth/signup"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-500"
            >
              Start 7-Day Free Trial
            </Link>
          </div>
        </div>

        <div className="grid gap-10 border-b border-slate-200 pb-10 dark:border-slate-800 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                <Shield className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-tight">Trade<span className="text-blue-600">Securix</span></span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600 dark:text-slate-400">
              Decision-support tools for international trade document and counterparty risk review.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold">Product</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <Link href="#features" className="block hover:text-slate-950 dark:hover:text-white">Product</Link>
              <Link href="#how-it-works" className="block hover:text-slate-950 dark:hover:text-white">How It Works</Link>
              <Link href="/pricing" className="block hover:text-slate-950 dark:hover:text-white">Pricing</Link>
              <Link href="#security" className="block hover:text-slate-950 dark:hover:text-white">Security</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold">Use cases</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <p>Importers & Exporters</p>
              <p>Insurance</p>
              <p>Banks & Trade Finance</p>
              <p>Freight Forwarders</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold">Contact</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <a href="mailto:contact@tradesecurix.com" className="block hover:text-slate-950 dark:hover:text-white">contact@tradesecurix.com</a>
              <Link href="#contact" className="block hover:text-slate-950 dark:hover:text-white">Request Demo</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs leading-5 text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 TradeSecurix. All rights reserved.</p>
          <p className="max-w-2xl sm:text-right">
            TradeSecurix supports human due diligence and risk review. It does not guarantee the legitimacy, solvency or performance of any counterparty.
          </p>
        </div>
      </div>
    </footer>
  );
}
