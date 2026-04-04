'use client'

import { siteConfig } from '@/lib/site'

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-gray-400 mb-8">Last updated: April 2026</p>

      <div className="prose prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className="text-gray-400">
            Tradesecurix operates the Tradesecurix website and platform. This page explains how we collect, use, and handle personal data when you use the website, contact us, or submit information through the platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
          <p className="text-gray-400">
            We collect information that helps us operate the service, respond to inquiries, and provide product access.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2 mt-4">
            <li>Contact details such as your name, email address, and company information</li>
            <li>Technical and usage data such as browser information and pages visited</li>
            <li>Documents or related data you submit for analysis or review</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. How We Use Information</h2>
          <p className="text-gray-400">
            We use collected data to operate the website and platform, respond to demo or support requests, improve the product experience, and communicate with you about your account or inquiry.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
          <p className="text-gray-400">
            We take reasonable steps to protect the information submitted through the service. No internet transmission or storage method can be guaranteed to be perfectly secure, but we design the product and workflows with security and controlled access in mind.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5. Data Rights and Requests</h2>
          <p className="text-gray-400">
            You may request access to, correction of, or deletion of personal data we hold about you, subject to applicable law and contractual obligations. To make a privacy request, contact us at {siteConfig.privacyEmail}.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">6. International Users</h2>
          <p className="text-gray-400">
            If you are subject to regional privacy laws, including EU or UK privacy requirements, contact us and we will work with you on the appropriate request process based on the data involved and the services used.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
          <p className="text-gray-400">
            Privacy email: {siteConfig.privacyEmail}
            <br />
            Support email: {siteConfig.supportEmail}
            <br />
            Address: {siteConfig.address}
          </p>
        </section>
      </div>
    </div>
  )
}
