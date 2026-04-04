'use client'

import { useState } from 'react'
import { Mail, MapPin, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Book a demo</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Tell us about your review workflow and we will help you evaluate whether Tradesecurix is the right fit.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="card">
            <h2 className="text-2xl font-bold mb-8">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  placeholder="Optional"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  placeholder="Tell us about your workflow, document volume, or review challenges."
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                Send Message <ArrowRight size={20} />
              </button>
              {submitted && (
                <p className="text-green-500 text-sm">
                  Thanks. We received your message and will follow up through the contact details you provided.
                </p>
              )}
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8">Contact information</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="text-blue-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <a href={`mailto:${siteConfig.supportEmail}`} className="text-gray-400 hover:text-white transition">
                    {siteConfig.supportEmail}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold mb-1">Address</h3>
                  <p className="text-gray-400">{siteConfig.address}</p>
                </div>
              </div>
            </div>

            <div className="card mt-8 bg-blue-500/10 border-blue-500/20">
              <p className="text-sm text-gray-300">
                We use the contact form to scope demos, answer security and procurement questions, and coordinate next steps.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
