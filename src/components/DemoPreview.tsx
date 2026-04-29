import {
  Upload,
  AlertTriangle,
  CheckCircle2,
  FileText,
  Globe,
  ShieldAlert,
} from "lucide-react";

// ─── Document Scanning Preview ─────────────────────────────────────────────────
function DocumentScanPreview() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-gray-900 shadow-2xl shadow-black/30 overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-gray-800 bg-gray-950/80 px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/50" />
        <span className="ml-3 text-xs text-zinc-500">Document Analysis</span>
        <span className="ml-auto rounded-full bg-blue-600/20 px-2 py-0.5 text-[10px] font-semibold text-blue-300">
          LIVE
        </span>
      </div>

      <div className="p-6 space-y-5">
        {/* Upload area */}
        <div className="rounded-2xl border-2 border-dashed border-blue-600/40 bg-blue-600/5 p-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/15">
            <FileText className="h-6 w-6 text-blue-400" />
          </div>
          <p className="text-sm font-semibold text-white">Invoice_Meridian_Apr2026.pdf</p>
          <p className="mt-1 text-xs text-zinc-500">Uploaded · 342 KB</p>
          {/* Scanning progress */}
          <div className="mt-4 overflow-hidden rounded-full bg-gray-800">
            <div className="h-1.5 w-4/5 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 animate-pulse" />
          </div>
          <p className="mt-2 text-xs text-blue-400">Scanning for anomalies…</p>
        </div>

        {/* Risk score result */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-4">
            <p className="text-[10px] uppercase tracking-widest text-zinc-500">Risk Score</p>
            <p className="mt-2 text-3xl font-bold text-amber-400">68</p>
            <p className="mt-1 text-xs text-amber-300">High Risk</p>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-4">
            <p className="text-[10px] uppercase tracking-widest text-zinc-500">Status</p>
            <p className="mt-2 text-lg font-bold text-white">Review</p>
            <p className="mt-1 text-xs text-zinc-500">3 flags found</p>
          </div>
        </div>

        {/* Anomaly findings */}
        <div className="space-y-2">
          {[
            {
              icon: AlertTriangle,
              color: "text-red-400",
              bg: "bg-red-500/10 border-red-600/20",
              text: 'Suspicious term detected: "offshore account"',
            },
            {
              icon: AlertTriangle,
              color: "text-amber-400",
              bg: "bg-amber-500/10 border-amber-600/20",
              text: "Multiple monetary amounts detected (6) — verify consistency",
            },
            {
              icon: CheckCircle2,
              color: "text-emerald-400",
              bg: "bg-emerald-500/10 border-emerald-600/20",
              text: "Company registration found in global database",
            },
          ].map(({ icon: Icon, color, bg, text }, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 rounded-xl border p-3 ${bg}`}
            >
              <Icon className={`mt-0.5 h-4 w-4 flex-shrink-0 ${color}`} />
              <p className="text-xs text-zinc-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Company Verification Preview ─────────────────────────────────────────────
function CompanyVerificationPreview() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-gray-900 shadow-2xl shadow-black/30 overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-gray-800 bg-gray-950/80 px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/50" />
        <span className="ml-3 text-xs text-zinc-500">Company Verification</span>
        <span className="ml-auto rounded-full bg-emerald-600/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
          VERIFIED
        </span>
      </div>

      <div className="p-6 space-y-5">
        {/* Company Profile */}
        <div className="rounded-2xl border border-gray-800 bg-gray-950 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-zinc-500">Company</p>
              <p className="mt-2 text-lg font-bold text-white">Everbridge Logistics Ltd.</p>
              <p className="text-sm text-zinc-400">Registered in United Kingdom</p>
            </div>
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-600/15">
              <Globe className="h-5 w-5 text-blue-400" />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-zinc-500">Reg. Number</p>
              <p className="mt-1 text-sm font-semibold text-zinc-200">GB-14829034</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-zinc-500">Founded</p>
              <p className="mt-1 text-sm font-semibold text-zinc-200">2018</p>
            </div>
          </div>
        </div>

        {/* Trust Score */}
        <div className="rounded-2xl border border-emerald-600/20 bg-emerald-600/5 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-zinc-500">Trust Score</p>
              <p className="mt-2 text-4xl font-bold text-emerald-400">87</p>
              <p className="text-xs text-emerald-300">Low Risk · Registry Confirmed</p>
            </div>
            {/* Mini ring chart */}
            <svg className="h-16 w-16 -rotate-90" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="16" fill="none" stroke="#1f2937" strokeWidth="4" />
              <circle
                cx="20"
                cy="20"
                r="16"
                fill="none"
                stroke="#10b981"
                strokeWidth="4"
                strokeDasharray={`${(87 / 100) * 100.53} 100.53`}
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Risk indicators */}
        <div className="space-y-2">
          {[
            { Icon: CheckCircle2, color: "text-emerald-400", label: "Sanctions screening: Clear" },
            { Icon: CheckCircle2, color: "text-emerald-400", label: "Company registry match confirmed" },
            { Icon: ShieldAlert, color: "text-amber-400", label: "UBO disclosure — 1 additional review" },
          ].map(({ Icon, color, label }, i) => (
            <div key={i} className="flex items-center gap-3 text-sm text-zinc-300">
              <Icon className={`h-4 w-4 flex-shrink-0 ${color}`} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── DemoPreview Section ───────────────────────────────────────────────────────
export default function DemoPreview() {
  return (
    <section id="demo" className="py-24 px-6 border-t border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300 mb-4">
            Live Product Preview
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            See TradeSecurix in Action
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Real interface mockups showing how we detect fraud in documents and verify global companies.
          </p>
        </div>

        {/* Two-column demos */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Column 1: Document Scanning */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600/15">
                  <Upload className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Document Scanning</h3>
                  <p className="text-sm text-zinc-400">Upload → Analyze → Risk Score</p>
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Drop any trade document — invoice, bill of lading, contract — and get a structured risk report
                with highlighted anomalies in seconds.
              </p>
            </div>
            <DocumentScanPreview />
          </div>

          {/* Column 2: Company Verification */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600/15">
                  <Globe className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Company Verification</h3>
                  <p className="text-sm text-zinc-400">Name + Country → Trust Score</p>
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Enter a company name and jurisdiction. We cross-reference 195+ global registries and sanctions
                databases to generate a verified trust profile.
              </p>
            </div>
            <CompanyVerificationPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
