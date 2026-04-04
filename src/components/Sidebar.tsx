'use client'

import Link from 'next/link'
import { LayoutDashboard, Upload, Globe, Settings, ArrowRight } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-gray-900 border-r border-gray-800 h-screen sticky top-0">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-blue-500">Tradesecurix</h1>
      </div>

      <nav className="flex-1 p-6 space-y-4">
        <Link href="/app/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-800 text-white">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </Link>
        <Link href="/app/upload" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 transition">
          <Upload size={20} />
          <span>Upload Document</span>
        </Link>
        <Link href="/app/verification" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 transition">
          <Globe size={20} />
          <span>Verify Company</span>
        </Link>
        <Link href="/pricing" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 transition">
          <Settings size={20} />
          <span>Pricing</span>
        </Link>
      </nav>

      <div className="p-6 border-t border-gray-800">
        <Link href="/contact" className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 transition">
          <ArrowRight size={20} />
          <span>Contact Sales</span>
        </Link>
      </div>
    </aside>
  )
}
