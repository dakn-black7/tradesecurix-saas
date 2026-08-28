"use client";

import Link from "next/link";
import { Menu, Shield, X } from "lucide-react";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";
import { UserButton, useAuth } from "@clerk/nextjs";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isSignedIn } = useAuth();

  return (
    <>
      <nav className="sticky top-0 z-40 border-b border-slate-800 bg-[#050b18] px-4 py-3 shadow-sm sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <Link href="/" className="flex min-w-0 items-center gap-2.5" aria-label="TradeSecurix home">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-cyan-300 shadow-sm">
              <Shield className="h-5 w-5" />
            </span>
            <span className="truncate text-lg font-bold tracking-tight text-white sm:text-xl">
              Trade<span className="text-cyan-400">Securix</span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 text-sm font-medium lg:flex">
            <Link href="/#features" className="text-slate-300 transition hover:text-white">Product</Link>
            <Link href="/#how-it-works" className="text-slate-300 transition hover:text-white">How It Works</Link>
            <Link href="/pricing" className="text-slate-300 transition hover:text-white">Pricing</Link>
            <Link href="/#security" className="text-slate-300 transition hover:text-white">Security</Link>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            {!isSignedIn ? (
              <>
                <Link href="/auth/login" className="rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-slate-900 hover:text-white">Login</Link>
                <Link href="/#contact" className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-slate-600 hover:bg-slate-800">Request Demo</Link>
                <Link href="/auth/signup" className="rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-bold text-slate-950 shadow-sm transition hover:bg-cyan-300">Start 7-Day Trial</Link>
              </>
            ) : (
              <>
                <Link href="/dashboard" className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-slate-900 hover:text-white">Dashboard</Link>
                <UserButton />
              </>
            )}
          </div>

          <div className="flex items-center gap-2 md:hidden">
            {!isSignedIn && (
              <Link href="/#contact" className="hidden rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-semibold text-white min-[390px]:inline-flex">Demo</Link>
            )}
            <button
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-white shadow-sm transition hover:bg-slate-800"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && <MobileSidebar onClose={() => setIsMobileMenuOpen(false)} />}
    </>
  );
}
