'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-500">
          Tradesecurix
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          <Link href="/app/upload" className="text-gray-400 hover:text-white transition">
            Upload
          </Link>
          <Link href="/app/verification" className="text-gray-400 hover:text-white transition">
            Verify
          </Link>
          <Link href="/sample-report" className="text-gray-400 hover:text-white transition">
            Sample Report
          </Link>
          <Link href="/pricing" className="text-gray-400 hover:text-white transition">
            Pricing
          </Link>
          <Link href="/contact" className="btn-secondary text-sm">
            Contact Sales
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-800 p-4 space-y-4">
          <Link href="/app/upload" className="block text-gray-400 hover:text-white">
            Upload
          </Link>
          <Link href="/app/verification" className="block text-gray-400 hover:text-white">
            Verify
          </Link>
          <Link href="/sample-report" className="block text-gray-400 hover:text-white">
            Sample Report
          </Link>
          <Link href="/pricing" className="block text-gray-400 hover:text-white">
            Pricing
          </Link>
          <Link href="/contact" className="block text-gray-400 hover:text-white">
            Contact Sales
          </Link>
        </div>
      )}
    </nav>
  )
}
