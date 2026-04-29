"use client";

import { useState } from "react";
import { FileText, Building2, ShieldCheck, AlertTriangle, CheckCircle2, Upload, Search } from "lucide-react";

export default function DemoPreview() {
  const [activeTab, setActiveTab] = useState<"document" | "company">("document");

  return (
    <section className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300 mb-6">
            Live Product Preview
          </div>
          <h2 className="text-4xl font-semibold text-white">See TradeSecurix in Action</h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
            Our platform analyzes documents and verifies companies in seconds — giving you actionable risk intelligence before you commit.
          </p>
        </div>

        {/* Tab Switch */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-2xl border border-gray-800 bg-gray-900 p-1">
            <button
              onClick={() => setActiveTab("document")}
              className={`flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold transition ${
                activeTab === "document"
                  ? "bg-blue-600 text-white shadow"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <FileText className="h-4 w-4" />
              Document Scanning
            </button>
            <button
              onClick={() => setActiveTab("company")}
              className={`flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold transition ${
                activeTab === "company"
                  ? "bg-blue-600 text-white shadow"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Building2 className="h-4 w-4" />
              Company Verification
            </button>
          </div>
        </div>

        {/* Document Scanning Preview */}
        {activeTab === "document" && (
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Upload Mock */}
            <div className="rounded-3xl border border-gray-800 bg-gray-900 p-6 shadow-xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-blue-600/10 p-2 text-blue-400">
                  <Upload className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">Document Upload</p>
                  <p className="text-xs text-zinc-500">PDF, DOCX, JPG, PNG supported</p>
                </div>
              </div>
              <div className="rounded-2xl border-2 border-dashed border-gray-700 bg-gray-950 p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10">
                  <FileText className="h-8 w-8 text-blue-400" />
                </div>
                <p className="font-semibold text-white">invoice_shipment_99284.pdf</p>
                <p className="mt-1 text-xs text-zinc-500">2.4 MB · Processing complete</p>
                <div className="mt-4 h-1.5 w-full rounded-full bg-gray-800">
                  <div className="h-1.5 w-full rounded-full bg-blue-600" />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                {["Signature verification", "Counterparty registry check", "Keyword anomaly scan", "Date consistency check"].map((step, i) => (
                  <div key={step} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                    <span className="text-zinc-300">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Score Result */}
            <div className="rounded-3xl border border-gray-800 bg-gray-900 p-6 shadow-xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-amber-600/10 p-2 text-amber-400">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">Risk Assessment Result</p>
                  <p className="text-xs text-zinc-500">Analysis completed in 1.8s</p>
                </div>
              </div>

              {/* Score gauge */}
              <div className="flex items-center justify-between rounded-2xl border border-amber-500/20 bg-amber-500/5 px-6 py-5 mb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Risk Score</p>
                  <p className="mt-1 text-5xl font-bold text-amber-300">62</p>
                  <p className="mt-1 text-sm font-semibold text-amber-400">High Risk</p>
                </div>
                <div className="relative h-24 w-24">
                  <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                    <circle cx="60" cy="60" r="45" fill="none" stroke="#374151" strokeWidth="10" />
                    <circle cx="60" cy="60" r="45" fill="none" stroke="#f59e0b" strokeWidth="10"
                      strokeDasharray={`${2 * Math.PI * 45}`}
                      strokeDashoffset={`${2 * Math.PI * 45 * (1 - 0.62)}`}
                      strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Findings */}
              <div className="space-y-2">
                <div className="flex items-start gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                  <div>
                    <p className="text-sm font-medium text-white">Suspicious keyword detected: "advance payment"</p>
                    <p className="text-xs text-zinc-500">Severity: High</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                  <div>
                    <p className="text-sm font-medium text-white">Date inconsistency: invoice predates registry record</p>
                    <p className="text-xs text-zinc-500">Severity: Medium</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <div>
                    <p className="text-sm font-medium text-white">Company registration found in global database</p>
                    <p className="text-xs text-zinc-500">Severity: Low</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Company Verification Preview */}
        {activeTab === "company" && (
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Input Mock */}
            <div className="rounded-3xl border border-gray-800 bg-gray-900 p-6 shadow-xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-violet-600/10 p-2 text-violet-400">
                  <Search className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">Company Verification</p>
                  <p className="text-xs text-zinc-500">200+ country coverage</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-zinc-400">Company Name</label>
                  <div className="rounded-xl border border-blue-600/40 bg-gray-950 px-4 py-3 text-white">
                    Everbridge Logistics Ltd.
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-zinc-400">Country</label>
                  <div className="rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-white">
                    United Kingdom
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-zinc-400">Registration Number (optional)</label>
                  <div className="rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-zinc-500">
                    SC482901
                  </div>
                </div>
                <div className="flex w-full items-center justify-center rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white">
                  <Search className="mr-2 h-4 w-4" />
                  Verify Company
                </div>
              </div>
            </div>

            {/* Company Profile Card Result */}
            <div className="rounded-3xl border border-gray-800 bg-gray-900 p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-emerald-600/10 p-2 text-emerald-400">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Company Profile</p>
                    <p className="text-xs text-zinc-500">Verification complete</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Verified
                </span>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-gray-950 p-5 mb-4">
                <h3 className="text-lg font-semibold text-white">Everbridge Logistics Ltd.</h3>
                <p className="text-sm text-zinc-400">United Kingdom · SC482901</p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Trust Score</p>
                    <p className="mt-1 text-2xl font-bold text-emerald-300">87 <span className="text-sm font-normal text-zinc-400">/ 100</span></p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Risk Level</p>
                    <p className="mt-1 text-2xl font-bold text-emerald-300">Low</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span className="text-zinc-300">Companies House registration confirmed</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span className="text-zinc-300">No sanctions matches found</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span className="text-zinc-300">Active trading status confirmed</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <AlertTriangle className="h-4 w-4 text-amber-400" />
                  <span className="text-zinc-300">Director change within 6 months — monitor</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
