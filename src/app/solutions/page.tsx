import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Globe, BarChart3, AlertCircle, Lock, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions | TradeSecurix — Document Verification & Company Risk Analysis",
  description:
    "Explore TradeSecurix solutions for trade document fraud review, counterparty verification, and risk scoring.",
};

const solutions = [
  {
    icon: FileText,
    title: "Document Fraud Review",
    description:
      "Submit trade documents — invoices, bills of lading, certificates of origin — for ML-powered anomaly detection. Identify structural inconsistencies, font mismatches, and metadata red flags before you rely on them.",
    cta: "Start analysis",
    href: "/upload",
  },
  {
    icon: Globe,
    title: "Counterparty Verification",
    description:
      "Verify company registration across 195+ jurisdictions in real-time. Flag changes in beneficial ownership, sanctions matches, and registry status to support KYC and AML obligations.",
    cta: "Verify a company",
    href: "/verification",
  },
  {
    icon: BarChart3,
    title: "Risk Scoring & Reporting",
    description:
      "Receive a structured risk score combining document analysis, registry data, and transaction context. Every report is audit-ready with full methodology transparency.",
    cta: "View sample report",
    href: "/#report-proof",
  },
  {
    icon: AlertCircle,
    title: "Real-Time Alerts",
    description:
      "Set thresholds for counterparty monitoring. Receive alerts when companies update filings, change directors, or appear on sanctions lists. Stay ahead of emerging risk.",
    cta: "Learn more",
    href: "/#features",
  },
  {
    icon: Lock,
    title: "Compliance Audit Trail",
    description:
      "Every analysis action is immutably logged. Provide auditors and regulators with a complete, timestamped record of all due diligence activities. Built to SOC 2 standards.",
    cta: "Learn more",
    href: "/#security",
  },
  {
    icon: Zap,
    title: "API Integration",
    description:
      "Embed verification and risk scoring directly into your existing workflow. RESTful API with webhook support, comprehensive documentation, and a sandbox environment for testing.",
    cta: "Contact sales",
    href: "/contact",
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="border-b border-gray-800 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-300">
            Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Verification at Every Stage of Trade
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            TradeSecurix provides the tools compliance professionals and traders need to
            verify documents, screen counterparties, and generate audit-ready risk reports.
          </p>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map(({ icon: Icon, title, description, cta, href }) => (
            <div
              key={title}
              className="rounded-3xl border border-gray-800 bg-gray-900/50 p-8 flex flex-col hover:border-gray-700 transition group"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600/15 text-blue-400 mb-6">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-zinc-400 leading-relaxed flex-1 mb-6">{description}</p>
              <Link
                href={href}
                className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 transition"
              >
                {cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-800 py-20 px-6 bg-gray-900/30">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
          <p className="text-zinc-400 text-lg">
            See how TradeSecurix can streamline due diligence for your trading operation or
            compliance team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-sm font-semibold text-white hover:bg-blue-500 transition"
            >
              Request a Demo
            </Link>
            <Link
              href="/#pricing"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
