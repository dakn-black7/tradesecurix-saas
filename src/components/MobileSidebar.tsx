"use client";
import Link from "next/link";
import { X, Twitter, Linkedin } from "lucide-react";

interface MobileSidebarProps {
  onClose: () => void;
}

export default function MobileSidebar({ onClose }: MobileSidebarProps) {
  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-xs bg-gray-900 border-l border-gray-800 shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <span className="font-bold text-xl">Menu</span>
          <button onClick={onClose} className="p-2 hover:bg-gray-800 rounded-lg transition">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          <Link href="#features" onClick={onClose} className="block text-lg font-medium text-zinc-300 hover:text-white transition">Features</Link>
          <Link href="#how-it-works" onClick={onClose} className="block text-lg font-medium text-zinc-300 hover:text-white transition">How It Works</Link>
          <Link href="/pricing" onClick={onClose} className="block text-lg font-medium text-zinc-300 hover:text-white transition">Pricing</Link>
          <Link href="#security" onClick={onClose} className="block text-lg font-medium text-zinc-300 hover:text-white transition">Security</Link>
        </div>
        <div className="px-6 py-4 border-t border-gray-800 space-y-3">
          <Link
            href="/auth/login"
            onClick={onClose}
            className="block w-full py-3 text-center text-sm font-semibold text-zinc-300 border border-gray-700 rounded-xl hover:border-gray-500 hover:text-white transition"
          >
            Sign In
          </Link>
          <Link
            href="/auth/signup"
            onClick={onClose}
            className="block w-full py-3 text-center bg-blue-600 hover:bg-blue-500 font-semibold rounded-xl transition text-white text-sm"
          >
            Start Free Trial
          </Link>
          <div className="flex items-center justify-center gap-4 pt-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-800 rounded-lg transition text-zinc-400 hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-800 rounded-lg transition text-zinc-400 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
