'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">About Tradesecurix</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          We are building document review workflows that help trade, finance, and compliance teams catch risk before money moves.
        </p>
      </section>

      <section className="bg-gray-900/50 border-y border-gray-800 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-lg text-gray-400 mb-6">
            Cross-border trade depends on trust, but teams still review critical invoices and supporting documents under time pressure. Small inconsistencies can create outsized financial and compliance risk.
          </p>
          <p className="text-lg text-gray-400 mb-6">
            Tradesecurix helps teams review trade documents, organize findings, and document their decisions in a more consistent way.
          </p>
          <p className="text-lg text-gray-400">
            Our goal is simple: give teams a clearer, more reliable way to review trade paperwork before it becomes a costly problem.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="text-2xl font-bold mb-4">Trust first</h3>
            <p className="text-gray-400">
              We build tools that help teams make confident decisions, explain their reasoning, and escalate the right issues.
            </p>
          </div>
          <div className="card">
            <h3 className="text-2xl font-bold mb-4">Operational clarity</h3>
            <p className="text-gray-400">
              Review workflows should reduce confusion, not add to it. We focus on structured outputs and practical decision support.
            </p>
          </div>
          <div className="card">
            <h3 className="text-2xl font-bold mb-4">Built for real trade teams</h3>
            <p className="text-gray-400">
              The product is designed around finance, procurement, operations, and compliance workflows that depend on complete documentation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-900/50 border-y border-gray-800 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Built for careful review</h2>
          <p className="text-lg text-gray-400 mb-8">
            Tradesecurix is focused on helping teams review sensitive documents with more consistency, better evidence, and clearer communication across stakeholders.
          </p>
          <p className="text-lg text-gray-400">
            We continue to refine the workflow with customer feedback, onboarding conversations, and real-world trade review needs.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">See the workflow for yourself</h2>
        <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
          Book Demo <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  )
}
