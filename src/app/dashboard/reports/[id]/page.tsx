import Link from "next/link";

export default function ReportPage() {
  // Real reports must be loaded from an authenticated, user-scoped data store.
  // The previous hard-coded "Verified" report was fictional and is disabled.
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 p-8">
        <h1 className="text-2xl font-semibold">Report unavailable</h1>
        <p className="mt-4 text-slate-300">
          Verified reports are not available until evidence-backed analysis and secure report storage are enabled.
          No company or document has been verified by this page.
        </p>
        <Link href="/dashboard" className="mt-6 inline-block text-cyan-300 underline">Back to dashboard</Link>
      </div>
    </main>
  );
}
