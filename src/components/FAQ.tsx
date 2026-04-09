"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does document analysis take?",
    answer: "Most document analyses complete within 2-5 minutes. Complex documents with multiple anomalies may take up to 15 minutes. Real-time alerts notify you immediately upon completion.",
  },
  {
    question: "What document formats do you support?",
    answer: "We support PDF, Excel, Word documents, images (JPG/PNG), and email screenshots. Documents up to 50MB are accepted. API integrations can handle batch processing.",
  },
  {
    question: "Is my data stored permanently?",
    answer: "Documents are analyzed but not permanently stored by default. You can opt into our archive feature for compliance and audit trail purposes. All archived data is encrypted and access-controlled.",
  },
  {
    question: "Can I integrate TradeSecurix with my existing systems?",
    answer: "Yes. We offer a comprehensive REST API with webhooks, Zapier integration, and direct integrations with popular platforms. Documentation and sandbox environment available for testing.",
  },
  {
    question: "What compliance standards do you follow?",
    answer: "TradeSecurix is built to SOC 2 Type II standards and follows GDPR and CCPA compliance requirements. We maintain detailed audit trails for regulatory compliance.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes. All tiers include a 14-day free trial with full feature access. No credit card required to start.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes. Monthly subscriptions can be cancelled anytime with no penalties. Annual plans offer discounts and have a 30-day money-back guarantee.",
  },
  {
    question: "What if I have more questions?",
    answer: "Our team is available via email at contact@tradesecurix.com or through the demo request form. We typically respond within 2 business hours.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 border-t border-gray-800 bg-gradient-to-b from-gray-950 to-gray-900/50">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-zinc-400">
            Everything you need to know about TradeSecurix
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition"
            >
              {/* Question */}
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/50 transition group"
              >
                <span className="font-semibold text-left text-white text-lg group-hover:text-blue-400 transition">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-blue-600 flex-shrink-0 transition transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === idx && (
                <div className="px-6 py-4 bg-gray-900/50 border-t border-gray-800">
                  <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center">
          <p className="text-zinc-400 mb-4">
            Didn't find what you were looking for?
          </p>
          <a
            href="#contact"
            className="text-blue-400 hover:text-blue-300 font-semibold transition"
          >
            Request a demo and chat with our team →
          </a>
        </div>
      </div>
    </section>
  );
}
