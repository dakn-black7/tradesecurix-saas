import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Users, Globe, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About TradeSecurix | Trade Document Fraud Review & Company Verification",
  description:
    "Learn about TradeSecurix — the trade document fraud review and company verification platform built for traders, analysts, and compliance professionals.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="border-b border-gray-800 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-300">
            About Us
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Built for Trust in Global Trade
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            TradeSecurix is a trade document fraud review and company verification platform
            designed for traders, analysts, and compliance professionals who need fast,
            accurate due diligence.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid gap-16 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Cross-border trade is plagued by document fraud, misrepresented counterparties, and
              opaque supply chains. TradeSecurix was created to eliminate that uncertainty —
              giving traders and compliance teams structured, audit-ready risk reports before
              financial decisions are made.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              We focus on what matters: verification, risk scoring, and clear reporting. We do not
              hold funds or execute trades. We are an analytics platform that puts actionable
              intelligence in the hands of the people who need it most.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gray-900 p-8 space-y-6">
            {[
              {
                icon: Shield,
                title: "Document Fraud Review",
                desc: "ML-powered analysis of trade documents for structural and metadata anomalies.",
              },
              {
                icon: Globe,
                title: "Global Company Verification",
                desc: "Cross-reference counterparties across 195+ jurisdictions in real-time.",
              },
              {
                icon: Target,
                title: "Risk-Scored Reporting",
                desc: "Audit-ready reports with full methodology transparency for compliance teams.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/15 text-blue-400">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">{title}</p>
                  <p className="text-sm text-zinc-400 mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="border-t border-gray-800 py-20 px-6 bg-gray-900/30">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 uppercase tracking-widest">
            <Users className="h-4 w-4" />
            Company Information
          </div>
          <h2 className="text-3xl font-bold text-white">Trade Securix LLC (in formation)</h2>
          <p className="text-zinc-400 leading-relaxed">
            Headquartered at Randall Ave Ste 100, Cheyenne, WY 82001, USA. We are an early-stage
            company building institutional-grade compliance tooling for cross-border trade. Our
            compliance framework aligns with FinCEN KYC/AML regulations and trade finance
            industry standards.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition"
            >
              Contact Us
            </Link>
            <Link
              href="/#pricing"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
