"use client";
import Link from "next/link";
import { LayoutDashboard, Upload, Search } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 h-screen p-6 hidden lg:flex flex-col">
      <div className="space-y-8">
        <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-800 text-blue-400">
          <LayoutDashboard className="h-5 w-5" />
          <span className="font-medium">Dashboard</span>
        </Link>
        <div className="space-y-2">
          <Link href="/upload" className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-800">
            <Upload className="h-5 w-5" />
            <span className="font-medium">Upload Document</span>
          </Link>
          <Link href="/verification" className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-800">
            <Search className="h-5 w-5" />
            <span className="font-medium">Company Verification</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
