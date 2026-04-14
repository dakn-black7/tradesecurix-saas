"use client";
import Link from "next/link";
import { LayoutDashboard, Upload, Search, FileText, CreditCard, Settings, BarChart3 } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 h-screen p-6 hidden lg:flex flex-col">
      <div className="space-y-8">
        {/* Logo */}
        <div className="flex items-center gap-3 px-4">
          <div className="font-bold text-xl tracking-tight">
            <span className="text-white">Trade</span>
            <span className="text-blue-600">Securix</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-800 text-blue-400 bg-gray-800/50">
            <LayoutDashboard className="h-5 w-5" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link href="/dashboard/analyses" className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-800">
            <BarChart3 className="h-5 w-5" />
            <span className="font-medium">Analyses</span>
          </Link>
          <Link href="/dashboard/verifications" className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-800">
            <Search className="h-5 w-5" />
            <span className="font-medium">Verifications</span>
          </Link>
          <Link href="/dashboard/reports" className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-800">
            <FileText className="h-5 w-5" />
            <span className="font-medium">Reports</span>
          </Link>
          <Link href="/dashboard/billing" className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-800">
            <CreditCard className="h-5 w-5" />
            <span className="font-medium">Billing</span>
          </Link>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-800">
            <Settings className="h-5 w-5" />
            <span className="font-medium">Settings</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
