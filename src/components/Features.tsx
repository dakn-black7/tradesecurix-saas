import { FileText, Globe, BarChart3, AlertCircle, Lock, Zap } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Document Analysis",
    description: "Machine learning identifies document anomalies that manual review misses. Analyze PDFs, emails, and images for structural inconsistencies, font mismatches, and metadata red flags.",
  },
  {
    icon: Globe,
    title: "Global Counterparty Verification",
    description: "Cross-reference company entities across 195+ jurisdictions. Verify registration status in real-time. Flag UBOs and beneficial ownership changes.",
  },
  {
    icon: BarChart3,
    title: "Risk Scoring & Reporting",
    description: "Proprietary risk model combines document analysis, registry verification, and transaction patterns. Get audit-ready reports with full methodology transparency.",
  },
  {
    icon: AlertCircle,
    title: "Real-Time Alerts",
    description: "Set verification thresholds. Receive alerts when counterparties change status, new filings emerge, or sanctions flags appear.",
  },
  {
    icon: Lock,
    title: "Institutional-Grade Audit Trail",
    description: "Every analysis action is logged. Full compliance with SOC 2 requirements. Export reports for auditors and regulators.",
  },
  {
    icon: Zap,
    title: "API Integration",
    description: "Seamlessly integrate verification into your existing workflow. RESTful API with comprehensive documentation. Sandbox environment for testing.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Built for Serious Traders
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Institutional-grade tools designed to eliminate friction, reduce risk, and accelerate due diligence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition group"
              >
                <Icon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
