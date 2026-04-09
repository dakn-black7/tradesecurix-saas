import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center pt-20 px-6">
      <div className="max-w-5xl mx-auto w-full">
        {/* Trust Badge */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gray-900/50 border border-gray-800 rounded-full px-4 py-2 text-xs font-medium text-zinc-300 backdrop-blur-sm">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            Trusted by institutional traders worldwide
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-center leading-tight">
          <span className="text-white">Trade Intelligence,</span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Not Guesswork
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-zinc-400 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
          Real-time document verification and counterparty risk assessment for cross-border traders. 
          Machine-learned patterns. Human-verified accuracy. Institutional-grade intelligence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link 
            href="#contact" 
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold flex items-center gap-3 transition transform hover:scale-105 w-full sm:w-auto justify-center"
          >
            Request Demo <ArrowRight className="h-5 w-5" />
          </Link>
          <Link 
            href="#pricing" 
            className="px-8 py-4 border border-gray-700 hover:bg-gray-900 rounded-lg font-semibold transition w-full sm:w-auto text-center"
          >
            View Pricing
          </Link>
        </div>

        {/* Features List */}
        <div className="grid sm:grid-cols-3 gap-6 text-sm text-zinc-400 text-center max-w-3xl mx-auto">
          <div>
            <p className="font-semibold text-white mb-1">195+ Countries</p>
            <p>Global verification coverage</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-1">2-Minute Analysis</p>
            <p>Real-time document processing</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-1">SOC 2 Compliant</p>
            <p>Enterprise-grade security</p>
          </div>
        </div>
      </div>
    </section>
  );
}
