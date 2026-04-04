'use client'

import { siteConfig } from '@/lib/site'

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-5xl font-bold mb-8">Terms of Service</h1>
      <p className="text-gray-400 mb-8">Last updated: April 2026</p>

      <div className="prose prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
          <p className="text-gray-400">
            By accessing or using the Tradesecurix website or platform, you agree to these terms. If you do not agree, please do not use the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Use of the Service</h2>
          <p className="text-gray-400">
            You may use the service only for lawful business purposes and in accordance with these terms. You are responsible for the information and documents you submit and for maintaining any required rights to use them.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. Service Availability</h2>
          <p className="text-gray-400">
            We may modify, suspend, or discontinue portions of the website or platform as the product evolves. We may also update these terms from time to time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Disclaimer</h2>
          <p className="text-gray-400">
            The service is provided on an as-is and as-available basis. Tradesecurix does not guarantee that every issue or inconsistency will be detected, and review decisions should be made by qualified personnel using appropriate internal controls.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
          <p className="text-gray-400">
            To the fullest extent permitted by law, Tradesecurix will not be liable for indirect, incidental, special, consequential, or punitive damages arising from or related to use of the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">6. Customer Responsibilities</h2>
          <p className="text-gray-400">
            Customers are responsible for user access management, review decisions, and ensuring submitted documents comply with applicable law and internal policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">7. Governing Law</h2>
          <p className="text-gray-400">
            These terms are governed by the laws of the State of Wyoming, without regard to conflict of law principles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
          <p className="text-gray-400">
            Legal email: {siteConfig.legalEmail}
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
