import { FileText, Building2, Scale } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Document Intelligence",
    description: "Review invoices, packing lists, contracts and supporting trade documents for missing fields, inconsistencies and signals that deserve human attention.",
  },
  {
    icon: Building2,
    title: "Counterparty Workspace",
    description: "Keep importer and exporter information together with the transaction record so teams can compare submitted company details and supporting evidence in context.",
  },
  {
    icon: Scale,
    title: "Transaction Risk Review",
    description: "Combine document findings and counterparty information into a structured review workflow with clear findings, severity and recommended follow-up checks.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            One workspace for the trade review
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Focused tools for reviewing the parties, documents and inconsistencies around an international transaction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-7 hover:border-gray-700 transition"
              >
                <Icon className="h-10 w-10 text-blue-500 mb-5" />
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
