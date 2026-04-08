import Link from "next/link";
import { Shield, FileCheck, Globe, ArrowRight, Lock, Zap, BarChart3 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-3xl px-4 py-2 text-sm mb-6">
          <span className="text-green-400">●</span> Now protecting $2.4B in cross-border trade
        </div>
        <h1 className="text-6xl font-bold tracking-tighter mb-6">
          Secure every trade.<br />Detect fraud instantly.
        </h1>
        <p className="text-xl text-zinc-400 mb-10">
          AI fraud detection for cross-border trade documents.<br />
          Global company verification. Enterprise-grade audit reports.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/upload" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl text-lg font-semibold flex items-center gap-3 transition">
            Analyze Document Now <ArrowRight className="h-5 w-5" />
          </Link>
          <Link href="/verification" className="px-8 py-4 border border-gray-700 hover:bg-gray-900 rounded-2xl text-lg font-semibold transition">
            Verify a Company
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8 border-y border-gray-800">
        <div className="text-center">
          <FileCheck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Document Analysis</h3>
          <p className="text-zinc-400">AI-powered fraud detection across 50+ document types</p>
        </div>
        <div className="text-center">
          <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Global Verification</h3>
          <p className="text-zinc-400">Real-time company verification in 195+ countries</p>
        </div>
        <div className="text-center">
          <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Risk Scoring</h3>
          <p className="text-zinc-400">Enterprise audit reports with detailed risk metrics</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to secure your trade?</h2>
        <p className="text-xl text-zinc-400 mb-8">Join thousands of businesses protecting their operations.</p>
        <Link href="/auth/signup" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl text-lg font-semibold inline-block transition">
          Get Started Free
        </Link>
      </div>
    </main>
  );
}
