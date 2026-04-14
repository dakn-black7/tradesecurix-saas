"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Download, ShieldCheck, Sparkles, ArrowUpRight } from "lucide-react";
import { Show, useUser } from "@clerk/nextjs";
import { generateReport, formatRiskScore, getRiskColor } from "@/lib/report";

interface HistoryRow {
  id: string;
  type: "Document" | "Company";
  name: string;
  date: string;
  riskScore: number;
  status: "Cleared" | "Review" | "Flagged";
}

const historyData: HistoryRow[] = [
  {
    id: "a1",
    type: "Document",
    name: "Invoice 99284",
    date: "Apr 9, 2026",
    riskScore: 16,
    status: "Cleared",
  },
  {
    id: "b2",
    type: "Company",
    name: "Astra Global Trade",
    date: "Apr 7, 2026",
    riskScore: 42,
    status: "Review",
  },
  {
    id: "c3",
    type: "Document",
    name: "Bill of Lading C12",
    date: "Apr 3, 2026",
    riskScore: 74,
    status: "Flagged",
  },
  {
    id: "d4",
    type: "Company",
    name: "Harbor Logistics Co.",
    date: "Mar 29, 2026",
    riskScore: 28,
    status: "Review",
  },
];

const statusClasses = {
  Cleared: "bg-emerald-500/10 text-emerald-200",
  Review: "bg-amber-500/10 text-amber-200",
  Flagged: "bg-red-500/10 text-red-200",
};

function SignedOutRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return null;
}

function DashboardContent() {
  const { user } = useUser();

  const downloadReport = async (row: HistoryRow) => {
    const pdf = await generateReport({
      fileName: `${row.name} Report`,
      riskScore: row.riskScore,
      findings: [
        {
          type: "info",
          message: "Analysis completed by Trade Securix",
          severity: "low",
        },
      ],
      timestamp: row.date,
    });

    const url = window.URL.createObjectURL(pdf);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${row.name.replace(/\s+/g, "-").toLowerCase()}-report.pdf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-gray-950 px-4 py-10 text-white md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="rounded-3xl border border-gray-800 bg-gray-900/95 p-8 shadow-2xl shadow-black/20">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-2 text-sm font-semibold text-blue-200">
                <ShieldCheck className="h-4 w-4" />
                Business Integrity Dashboard
              </div>
              <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white">
                Welcome back, {user?.firstName || "User"}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
                A premium audit trail of verified documents and company checks. Secure, compliant, and ready for executive review.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-800 bg-gray-950 p-4 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">Active session</p>
                  <p className="mt-1 text-lg font-semibold">{user?.emailAddresses[0]?.emailAddress || "Secure access enabled"}</p>
                </div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/15 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4 text-sm text-zinc-400">Use the user menu to manage your profile, sessions, and sign out securely.</div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">Total reviews</p>
            <p className="mt-5 text-3xl font-semibold text-white">{historyData.length}</p>
            <p className="mt-3 text-sm text-zinc-500">Secure analysis records stored and ready for compliance audits.</p>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">Average risk</p>
            <p className="mt-5 text-3xl font-semibold text-white">{Math.round(historyData.reduce((sum, item) => sum + item.riskScore, 0) / historyData.length)}%</p>
            <p className="mt-3 text-sm text-zinc-500">Trend across recent verifications with color-coded severity.</p>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">Trusted coverage</p>
            <p className="mt-5 text-3xl font-semibold text-white">Global</p>
            <p className="mt-3 text-sm text-zinc-500">Document and company checks with enterprise-grade visibility.</p>
          </div>
        </section>

        <section className="rounded-3xl border border-gray-800 bg-gray-900 p-6">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">Audit history</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Recent verification activity</h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-600/30 bg-blue-600/10 px-4 py-2 text-sm text-blue-200">
              <ArrowUpRight className="h-4 w-4" /> Latest entries first
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-gray-800 bg-gray-950">
            <table className="min-w-full divide-y divide-gray-800 text-left text-sm text-zinc-300">
              <thead className="bg-gray-900/90 text-zinc-400">
                <tr>
                  <th className="px-6 py-4 font-medium">Type</th>
                  <th className="px-6 py-4 font-medium">Name</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Risk Score</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 bg-gray-950">
                {historyData.map((row) => (
                  <tr key={row.id} className="transition hover:bg-white/5">
                    <td className="px-6 py-4 font-semibold text-white">{row.type}</td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-white">{row.name}</div>
                    </td>
                    <td className="px-6 py-4 text-zinc-400">{row.date}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${getRiskColor(row.riskScore)}`}>
                        {formatRiskScore(row.riskScore)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${statusClasses[row.status]}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        type="button"
                        onClick={() => downloadReport(row)}
                        className="inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:border-blue-600 hover:text-blue-300"
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="rounded-3xl border border-gray-800 bg-gray-900 p-6 text-sm text-zinc-500">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>Trade Securix LLC (in formation)</p>
            <p>600 Main Street, Suite 200 · New York, NY 10001</p>
          </div>
          <p className="mt-4 text-zinc-400">All verifications are securely logged and protected to support regulatory reviews and risk management.</p>
        </footer>
      </div>
    </main>
  );
}

export default function DashboardPage() {
  return (
    <>
      <Show when="signed-in">
        <DashboardContent />
      </Show>
      <Show when="signed-out">
        <SignedOutRedirect />
      </Show>
    </>
  );
}
