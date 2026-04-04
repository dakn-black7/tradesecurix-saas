'use client'

import Link from 'next/link'
import { Shield, Lock, Eye, CheckCircle, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export default function Security() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Security and trust</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Tradesecurix is designed to support controlled review of sensitive trade documents. We share current security, hosting, and workflow details during customer evaluation.
        </p>
      </section>

      <section className="bg-gray-900/50 border-y border-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Security overview</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-start gap-4 mb-8">
                <Lock className="text-blue-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Access and review flow</h3>
                  <p className="text-gray-400">
                    The product is designed around controlled review workflows so teams can examine findings, escalate issues, and document decisions in a consistent way.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-8">
                <Shield className="text-blue-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Security program</h3>
                  <p className="text-gray-400">
                    We continue to mature our product security, vendor review, and deployment documentation. Current details are shared during customer security review.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Eye className="text-blue-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Auditability</h3>
                  <p className="text-gray-400">
                    Findings and reports are structured to help reviewers explain what was checked, what looked unusual, and what needs follow-up.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-4 mb-8">
                <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Data handling</h3>
                  <p className="text-gray-400">
                    Documents submitted through the workflow are used to generate analysis results and reporting outputs. We can discuss current retention and handling practices during onboarding.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-8">
                <Shield className="text-blue-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Hosting and deployment review</h3>
                  <p className="text-gray-400">
                    Hosting architecture, deployment model, and vendor details can be reviewed with your team as part of procurement or security assessment.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Lock className="text-blue-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Incident communication</h3>
                  <p className="text-gray-400">
                    Security questions and responsible disclosure reports can be sent to our team through the security contact below.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">Program notes</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Current status</h3>
            <p className="text-gray-400 mb-4">
              We do not present unsupported certification or audit claims on this site. Contact us for the most current information about controls, vendors, and roadmap items.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Privacy and data requests</h3>
            <p className="text-gray-400 mb-4">
              Questions about data handling, privacy requests, or customer review can be directed to our privacy contact.
            </p>
            <Link href="/privacy" className="text-blue-500 hover:text-blue-400 transition text-sm">
              View Privacy Policy →
            </Link>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Documentation review</h3>
            <p className="text-gray-400 mb-4">
              We can walk your team through workflow design, current controls, and deployment details during evaluation and procurement.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Security contact</h3>
            <p className="text-gray-400 mb-4">
              Report security issues or request additional security information through our dedicated channel.
            </p>
            <a href={`mailto:${siteConfig.securityEmail}`} className="text-blue-500 hover:text-blue-400 transition text-sm">
              {siteConfig.securityEmail} →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-900/50 border-y border-gray-800 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Built for careful review</h2>
          <p className="text-lg text-gray-400 mb-8">
            Security and compliance conversations are part of how teams evaluate software for sensitive trade workflows. We aim to make those conversations clear, direct, and practical.
          </p>
          <p className="text-lg text-gray-400">
            Contact us to review the current state of the product, data handling approach, and onboarding process.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">Questions about security?</h2>
        <p className="text-xl text-gray-400 mb-8">
          Our team can walk through current controls, workflow details, and evaluation requirements.
        </p>
        <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
          Contact Us <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  )
}
