"use client";

import Link from "next/link";
import { Shield, X } from "lucide-react";
import { UserButton, useAuth } from "@clerk/nextjs";

interface MobileSidebarProps {
  onClose: () => void;
}

export default function MobileSidebar({ onClose }: MobileSidebarProps) {
  const { isSignedIn } = useAuth();

  const navItems = [
    { href: "#features", label: "Product" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "#security", label: "Security" },
  ];

  return (
    <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <button
        className="absolute inset-0 h-full w-full bg-slate-950/45 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close navigation"
      />

      <aside className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col border-l border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-950">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-800">
          <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
              <Shield className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold tracking-tight text-slate-950 dark:text-white">
              Trade<span className="text-blue-600">Securix</span>
            </span>
          </Link>
          <button
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex min-h-12 items-center rounded-xl px-4 text-base font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {isSignedIn && (
            <div className="mt-6 border-t border-slate-200 pt-6 dark:border-slate-800">
              <p className="mb-3 px-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Workspace</p>
              <div className="space-y-1">
                <Link href="/dashboard" onClick={onClose} className="block rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900">Dashboard</Link>
                <Link href="/upload" onClick={onClose} className="block rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900">Document Analysis</Link>
                <Link href="/verification" onClick={onClose} className="block rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900">Counterparty Check</Link>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-slate-200 bg-slate-50 px-5 py-5 dark:border-slate-800 dark:bg-slate-900/40">
          {!isSignedIn ? (
            <div className="space-y-3">
              <Link
                href="#contact"
                onClick={onClose}
                className="flex min-h-12 w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-4 text-sm font-bold text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
              >
                Request Demo
              </Link>
              <Link
                href="/auth/signup"
                onClick={onClose}
                className="flex min-h-12 w-full items-center justify-center rounded-xl bg-blue-600 px-4 text-sm font-bold text-white shadow-sm transition hover:bg-blue-500"
              >
                Start 7-Day Free Trial
              </Link>
              <Link
                href="/auth/login"
                onClick={onClose}
                className="block py-2 text-center text-sm font-semibold text-slate-500 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
              >
                Already a customer? Sign in
              </Link>
            </div>
          ) : (
            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Account</span>
              <UserButton />
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
