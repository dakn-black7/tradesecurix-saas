'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const examples = [
  {
    title: 'Supplier onboarding review',
    challenge: 'A new counterparty submitted a mixed document pack with inconsistent company details across files.',
    review: 'Tradesecurix highlighted party-name mismatches, missing registration references, and unusual formatting changes that required manual follow-up.',
    outcome: 'The team escalated the supplier file before approval and documented the review for procurement and compliance stakeholders.',
  },
  {
    title: 'Invoice consistency review',
    challenge: 'Finance received an invoice update shortly before payment with revised beneficiary information and supporting paperwork.',
    review: 'The review surfaced differences between the invoice, shipping documents, and prior payment instructions, giving the team a clearer escalation path.',
    outcome: 'Payment was paused until the business relationship and document set could be revalidated internally.',
  },
  {
    title: 'Audit evidence pack',
    challenge: 'An operations team needed a cleaner record of what had been reviewed and why a shipment was escalated.',
    review: 'Tradesecurix organized the findings, supporting observations, and recommended follow-up into a shareable format.',
    outcome: 'Internal reviewers were able to align faster on the decision and preserve the rationale for later review.',
  },
]

export default function CaseStudies() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Illustrative outcomes</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          The examples below are representative workflow scenarios that show how Tradesecurix can support document review, escalation, and internal reporting.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {examples.map((example) => (
            <div key={example.title} className="card">
              <h2 className="text-2xl font-bold mb-4">{example.title}</h2>
              <div className="space-y-4 text-sm text-gray-400">
                <p><span className="text-white font-semibold">Challenge:</span> {example.challenge}</p>
                <p><span className="text-white font-semibold">Review:</span> {example.review}</p>
                <p><span className="text-white font-semibold">Outcome:</span> {example.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-900/50 border-y border-gray-800 py-20 mt-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-8">
            We do not publish fabricated customer logos, testimonials, or placeholder metrics. Contact us if you would like to discuss a private workflow walk-through during a demo.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Book Demo <ArrowRight size={20} />
            </Link>
            <Link href="/sample-report" className="btn-secondary inline-flex items-center gap-2">
              View Sample Report <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
