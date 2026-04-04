'use client'

import Link from 'next/link'
import { ArrowRight, Shield, FileCheck, Globe, AlertTriangle, CheckCircle, Zap } from 'lucide-react'
import { useState } from 'react'
import { siteConfig } from '@/lib/site'

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: 'What document types do you support?',
      a: 'Tradesecurix is designed for invoice packs, bills of lading, packing lists, certificates, purchase orders, and other supporting trade documents.',
    },
    {
      q: 'Who is this for?',
      a: 'The product is built for import and export teams, trade finance, procurement, compliance, and operations teams reviewing cross-border transactions.',
    },
    {
      q: 'How does the review workflow work?',
      a: 'Teams upload trade documents, review the resulting findings and evidence, and decide whether to clear, escalate, or reject the transaction.',
    },
    {
      q: 'Can I review the evidence behind findings?',
      a: 'Yes. Findings are presented with supporting observations so reviewers can understand what triggered the risk summary and document their decision.',
    },
    {
      q: 'Is this suitable for compliance teams?',
      a: 'Yes. The workflow is structured around traceable review, supporting evidence, and shareable reporting for internal controls and audit preparation.',
    },
    {
      q: 'How do demos and onboarding work?',
      a: 'Book a demo and we will walk through the workflow, sample outputs, and the best setup for your documents, review process, and reporting needs.',
    },
  ]

  const useCases = [
    {
      title: 'Prevent invoice and payment redirection fraud',
      description: 'Spot altered beneficiary details, suspicious changes, and mismatched instructions before a payment is approved.',
      icon: AlertTriangle,
    },
    {
      title: 'Verify suppliers before onboarding or payment',
      description: 'Review counterparty details before releasing funds or relying on newly submitted trade paperwork.',
      icon: Shield,
    },
    {
      title: 'Detect document inconsistencies across trade files',
      description: 'Compare invoice values, shipment details, parties, and document references across the full trade packet.',
      icon: FileCheck,
    },
    {
      title: 'Create an audit-ready record of findings',
      description: 'Preserve a clear review trail with structured findings, evidence, and follow-up actions for your team.',
      icon: CheckCircle,
    },
  ]

  const whatWeCheck = [
    {
      title: 'Invoice tampering',
      description: 'Review beneficiary details, amounts, dates, and suspicious edits that may indicate manipulation.',
    },
    {
      title: 'Supplier verification',
      description: 'Compare company details and counterparty information before onboarding or payment approval.',
    },
    {
      title: 'Document consistency',
      description: 'Cross-check values, parties, shipment details, and references across invoices and supporting files.',
    },
    {
      title: 'Counterparty risk signals',
      description: 'Highlight incomplete, inconsistent, or unusual information that deserves additional review.',
    },
    {
      title: 'Compliance review support',
      description: 'Organize findings to support compliance workflows, escalation paths, and decision logs.',
    },
    {
      title: 'Evidence-backed reporting',
      description: 'Provide structured summaries and supporting observations that can be shared internally.',
    },
  ]

  const proofPoints = [
    'Built for trade finance and compliance teams',
    'Structured findings and evidence summaries',
    'Shareable, audit-ready review output',
    'Guided onboarding and workflow review',
  ]

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            AI fraud detection for cross-border trade documents
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Verify invoices, bills of lading, packing lists, certificates, and counterparties before money moves so your team catches fraud, inconsistencies, and review issues faster.
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Built for importers, exporters, trade finance, procurement, and compliance teams.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href={siteConfig.bookDemoHref} className="btn-primary flex items-center gap-2">
              Book Demo <ArrowRight size={20} />
            </Link>
            <Link href={siteConfig.sampleReportHref} className="btn-secondary flex items-center gap-2">
              View Sample Report <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-900/50 border-y border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 mb-6">Designed for high-trust trade document review</p>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {proofPoints.map((point) => (
              <div key={point} className="card bg-transparent border-gray-800/70 p-5">
                <p className="text-sm text-gray-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">How it works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-blue-500">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Upload documents</h3>
            <p className="text-gray-400">
              Submit invoices, bills of lading, packing lists, certificates, and supporting files for review.
            </p>
          </div>
          <div className="card">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-blue-500">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Review findings</h3>
            <p className="text-gray-400">
              Tradesecurix highlights inconsistencies, suspicious edits, and missing or unusual details that need attention.
            </p>
          </div>
          <div className="card">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-blue-500">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Document the decision</h3>
            <p className="text-gray-400">
              Share a structured risk summary and evidence trail with finance, compliance, and operations stakeholders.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-900/50 border-y border-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">What we check</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeCheck.map((item) => (
              <div key={item.title} className="card">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">Use cases</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase) => {
            const Icon = useCase.icon
            return (
              <div key={useCase.title} className="card">
                <Icon className="text-blue-500 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-gray-900/50 border-y border-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Security-first workflows</h2>
            <p className="text-xl text-gray-400 mb-8">
              Traceable findings, controlled review flows, and clear documentation for teams handling sensitive trade documents.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="text-left">
                <Shield className="text-blue-500 mb-3" size={24} />
                <h4 className="font-bold mb-2">Controlled review</h4>
                <p className="text-gray-400 text-sm">
                  The workflow is designed to support deliberate review, escalation, and handoff between teams.
                </p>
              </div>
              <div className="text-left">
                <FileCheck className="text-blue-500 mb-3" size={24} />
                <h4 className="font-bold mb-2">Structured evidence</h4>
                <p className="text-gray-400 text-sm">
                  Findings are presented in a format that helps teams explain what was reviewed and what needs follow-up.
                </p>
              </div>
              <div className="text-left">
                <Globe className="text-blue-500 mb-3" size={24} />
                <h4 className="font-bold mb-2">Clear data handling conversations</h4>
                <p className="text-gray-400 text-sm">
                  Current data handling, hosting, and vendor details can be shared during security and procurement review.
                </p>
              </div>
              <div className="text-left">
                <Zap className="text-blue-500 mb-3" size={24} />
                <h4 className="font-bold mb-2">Security review support</h4>
                <p className="text-gray-400 text-sm">
                  We can walk through controls, workflow design, and current roadmap items during evaluation.
                </p>
              </div>
            </div>
            <Link href="/security" className="text-blue-500 hover:text-blue-400 transition mt-8 inline-block">
              Learn more about security →
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Simple, transparent pricing</h2>
          <p className="text-xl text-gray-400 mb-8">
            Book a demo, review the workflow, and choose the package that fits your team and volume.
          </p>
          <Link href="/pricing" className="btn-primary inline-flex items-center gap-2">
            View Pricing <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <section className="bg-gray-900/50 border-y border-gray-800 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={faq.q} className="card">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full text-left flex justify-between items-center"
                >
                  <h3 className="font-bold">{faq.q}</h3>
                  <span className="text-blue-500">{expandedFaq === idx ? '−' : '+'}</span>
                </button>
                {expandedFaq === idx && (
                  <p className="text-gray-400 mt-4 pt-4 border-t border-gray-800">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to protect your trade operations?</h2>
        <p className="text-xl text-gray-400 mb-8">
          Book a demo to see how Tradesecurix supports document review, fraud checks, and evidence-backed reporting.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href={siteConfig.bookDemoHref} className="btn-primary flex items-center gap-2">
            Book Demo <ArrowRight size={20} />
          </Link>
          <Link href="/contact" className="btn-secondary flex items-center gap-2">
            Contact Sales <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
