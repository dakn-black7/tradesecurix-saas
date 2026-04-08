"use client";
import Link from "next/link";
import { Shield } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-800 bg-gray-950 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shield className="h-8 w-8 text-blue-600" />
          <div className="font-bold text-2xl tracking-tight">
            <span className="text-white">Trade</span>
            <span className="text-blue-600">Securix</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/dashboard" className="hover:text-blue-400 transition">Dashboard</Link>
          <Link href="/upload" className="hover:text-blue-400 transition">Analyze Document</Link>
          <Link href="/verification" className="hover:text-blue-400 transition">Verify Company</Link>
          <Link href="/pricing" className="hover:text-blue-400 transition">Pricing</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/auth/login" className="px-5 py-2 text-sm font-medium border border-gray-700 rounded-2xl hover:bg-gray-900 transition">Log in</Link>
          <Link href="/auth/signup" className="px-5 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-500 rounded-2xl transition">Get Started</Link>
        </div>
      </div>
    </nav>
  );
}

