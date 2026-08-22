const steps = [
  {
    number: "1",
    title: "Create a transaction",
    description: "Open a case and add the importer, exporter and basic transaction information.",
  },
  {
    number: "2",
    title: "Add trade documents",
    description: "Upload the available invoices, packing lists, purchase orders, contracts and supporting documents for review.",
  },
  {
    number: "3",
    title: "Review inconsistencies",
    description: "TradeSecurix organizes findings such as missing information, mismatched values and items that require additional verification.",
  },
  {
    number: "4",
    title: "Make the human decision",
    description: "Use the structured findings and transaction context to support due diligence before payment, shipment or approval.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 px-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How TradeSecurix Works</h2>
          <p className="text-lg text-zinc-400">
            A simple review flow from transaction setup to decision support.
          </p>
        </div>

        <div className="space-y-7">
          {steps.map((step, idx) => (
            <div key={step.number} className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/20 border border-blue-600/50 font-bold text-blue-400">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{step.description}</p>
                {idx < steps.length - 1 && (
                  <div className="mt-6 ml-5 w-0.5 h-8 bg-gradient-to-b from-blue-600/40 to-transparent" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
