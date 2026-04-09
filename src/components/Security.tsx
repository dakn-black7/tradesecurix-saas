import { Shield, Lock, FileCheck } from "lucide-react";

export default function Security() {
  return (
    <section id="security" className="py-20 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Enterprise Security & Compliance
          </h2>
          <p className="text-xl text-zinc-400">
            Your data security is non-negotiable. Built with institutional-grade standards.
          </p>
        </div>

        {/* Security Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
            <Shield className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-lg font-bold mb-3">SOC 2 Type II</h3>
            <p className="text-zinc-400">
              Annual independent security audits. Full compliance with SOC 2 requirements for security, availability, and confidentiality.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
            <Lock className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-lg font-bold mb-3">256-Bit Encryption</h3>
            <p className="text-zinc-400">
              Military-grade AES-256 encryption for all data at rest. TLS 1.3 for all data in transit between systems.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
            <FileCheck className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-lg font-bold mb-3">Audit Trails</h3>
            <p className="text-zinc-400">
              Complete immutable logs of every analysis, verification, and data access. Full regulatory compliance for audits.
            </p>
          </div>
        </div>

        {/* Compliance Info */}
        <div className="bg-gradient-to-r from-gray-900/50 to-blue-900/20 border border-gray-800 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-4">Regulatory Compliance</h3>
          <p className="text-zinc-400 mb-6">
            Trade Securix is currently in formation. We are building our compliance framework in accordance with FinCEN KYC/AML regulations 
            and relevant trade finance compliance standards. Our legal and compliance team ensures adherence to all applicable laws and regulations.
          </p>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>✓ GDPR-compliant data processing</li>
            <li>✓ CCPA-compliant privacy practices</li>
            <li>✓ Industry best practices for trade finance</li>
            <li>✓ Ongoing regulatory monitoring and updates</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
