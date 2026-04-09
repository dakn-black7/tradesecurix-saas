import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Upload Document",
    description: "Submit trade documents, contracts, or verification requests through our secure dashboard or API.",
  },
  {
    number: "2",
    title: "Instant Analysis",
    description: "Our ML model analyzes document structure, metadata, and content patterns against billions of known documents.",
  },
  {
    number: "3",
    title: "Counterparty Verification",
    description: "Cross-reference company information with global registries, sanctions lists, and verification databases.",
  },
  {
    number: "4",
    title: "Risk Report",
    description: "Get an audit-ready risk assessment with full transparency on analysis methodology and confidence scores.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            How TradeSecurix Works
          </h2>
          <p className="text-xl text-zinc-400">
            Streamlined workflow from verification to confidence in your counterparties
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-6">
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600/20 border border-blue-600/50 ring-2 ring-blue-600/30 font-bold text-lg text-blue-400">
                  {step.number}
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1 pt-1">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{step.description}</p>

                {idx < steps.length - 1 && (
                  <div className="mt-8 ml-6 w-0.5 h-12 bg-gradient-to-b from-blue-600/50 to-transparent" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
