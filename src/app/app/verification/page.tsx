import Link from "next/link"

export default function VerificationPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-semibold">Company Verification</h1>
        <p className="mt-3 text-slate-300">
          Counterparty verification and review workflows are available inside the authenticated workspace.
        </p>
        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm text-slate-300">
            Sign in to access verification tools, review history, and internal decision support.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/contact"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
            >
              Contact Sales
            </Link>
            <Link
              href="/sample-report"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-slate-800"
            >
              View Sample Report
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
