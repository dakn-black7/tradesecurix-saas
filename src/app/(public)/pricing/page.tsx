'use client'

import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')

  const plans = [
    {
      name: 'Starter',
      price: billingCycle === 'monthly' ? '$299' : '$2,990',
      period: billingCycle === 'monthly' ? '/month' : '/year',
      description: 'For smaller teams building a repeatable review process.',
      features: [
        '50 document analyses per month',
        '10 company reviews per month',
        'Structured findings and summaries',
        'Email support',
        'Up to 3 team members',
      ],
      cta: 'Book Demo',
      highlighted: false,
    },
    {
      name: 'Professional',
      price: billingCycle === 'monthly' ? '$799' : '$7,990',
      period: billingCycle === 'monthly' ? '/month' : '/year',
      description: 'For growing operations reviewing higher document volume.',
      features: [
        '500 document analyses per month',
        '100 company reviews per month',
        'Advanced findings and reporting',
        'Priority support',
        'Up to 10 team members',
        'API access',
        'Audit-ready exports',
      ],
      cta: 'Book Demo',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For organizations with custom workflow, procurement, or security review requirements.',
      features: [
        'High-volume document review',
        'Expanded team access',
        'Custom reporting and workflow scoping',
        'Priority onboarding support',
        'Commercial and security review support',
        'Custom agreement options',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ]

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Pricing built for serious review workflows</h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Start with a demo, review the workflow, and choose the package that fits your team, document volume, and approval process.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              billingCycle === 'monthly'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              billingCycle === 'annual'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Annual
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card ${
                plan.highlighted
                  ? 'border-2 border-blue-500 bg-blue-500/5 transform md:scale-105'
                  : 'border border-gray-800'
              }`}
            >
              {plan.highlighted && (
                <div className="mb-4 inline-block px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-gray-400">{plan.period}</span>}
              </div>

              <Link
                href="/contact"
                className={`w-full mb-8 py-3 rounded-lg font-semibold transition-colors block text-center ${
                  plan.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {plan.cta}
              </Link>

              <div className="space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-900/50 border-y border-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Included in every package</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Check className="text-blue-500" size={24} />
              </div>
              <h4 className="font-bold mb-2">Structured review workflow</h4>
              <p className="text-gray-400 text-sm">Clear findings, evidence, and shareable outputs.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Check className="text-blue-500" size={24} />
              </div>
              <h4 className="font-bold mb-2">Document analysis</h4>
              <p className="text-gray-400 text-sm">Review invoices and trade files in a consistent format.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Check className="text-blue-500" size={24} />
              </div>
              <h4 className="font-bold mb-2">Reporting support</h4>
              <p className="text-gray-400 text-sm">Summaries that can be shared with finance and compliance teams.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Check className="text-blue-500" size={24} />
              </div>
              <h4 className="font-bold mb-2">Guided onboarding</h4>
              <p className="text-gray-400 text-sm">Start with a demo and implementation discussion.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">Pricing FAQ</h2>
        <div className="space-y-6">
          <div className="card">
            <h3 className="font-bold mb-2">Can I change plans later?</h3>
            <p className="text-gray-400 text-sm">
              Yes. We can adjust your package as your review volume, team size, or workflow requirements change.
            </p>
          </div>
          <div className="card">
            <h3 className="font-bold mb-2">Do you offer custom pricing?</h3>
            <p className="text-gray-400 text-sm">
              Yes. Enterprise pricing is available for organizations with custom onboarding, reporting, or procurement requirements.
            </p>
          </div>
          <div className="card">
            <h3 className="font-bold mb-2">How does onboarding work?</h3>
            <p className="text-gray-400 text-sm">
              We begin with a demo, confirm your workflow and document types, and then scope the right plan for your team.
            </p>
          </div>
          <div className="card">
            <h3 className="font-bold mb-2">Can you support larger teams or volume?</h3>
            <p className="text-gray-400 text-sm">
              Yes. Contact sales if you need expanded usage, commercial review, or custom implementation support.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to review a live workflow?</h2>
        <p className="text-xl text-gray-400 mb-8">
          Book a demo to see Tradesecurix in action and choose the right package for your process.
        </p>
        <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
          Book Demo <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  )
}
