import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 flex flex-col">
      <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center gap-6">
          <Link href="/" className="text-2xl font-bold text-blue-500">
            {siteConfig.brand}
          </Link>

          <div className="hidden md:flex gap-8 items-center text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition">
              Product
            </Link>
            <Link href="/pricing" className="text-gray-400 hover:text-white transition">
              Pricing
            </Link>
            <Link href="/security" className="text-gray-400 hover:text-white transition">
              Security
            </Link>
            <Link href="/case-studies" className="text-gray-400 hover:text-white transition">
              Case Studies
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition">
              Contact
            </Link>
            <Link href="/auth/login" className="text-gray-400 hover:text-white transition">
              Login
            </Link>
            <Link href={siteConfig.bookDemoHref} className="btn-primary text-sm">
              Book Demo
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-gray-800 bg-gray-950/50 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-blue-500 mb-4">{siteConfig.brand}</h3>
              <p className="text-gray-400 text-sm mb-4">
                Fraud detection for cross-border trade documents and counterparties.
              </p>
              <div className="flex gap-4 text-sm">
                <a
                  href={siteConfig.linkedinUrl}
                  className="text-gray-400 hover:text-white transition"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
                <a
                  href={siteConfig.xUrl}
                  className="text-gray-400 hover:text-white transition"
                  aria-label="X"
                >
                  X
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/" className="hover:text-white transition">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href={siteConfig.sampleReportHref} className="hover:text-white transition">
                    Sample Report
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="hover:text-white transition">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="hover:text-white transition">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/privacy" className="hover:text-white transition">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href={`mailto:${siteConfig.supportEmail}`}
                    className="text-white hover:text-blue-500 transition"
                  >
                    {siteConfig.supportEmail}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">Address</p>
                  <p className="text-white">{siteConfig.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {currentYear} {siteConfig.brand}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
