"use client";
import Link from "next/link";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";
import { Show, SignInButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 border-b border-gray-800 bg-gray-950/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-blue-600" />
            <div className="font-bold text-2xl tracking-tight hidden sm:block">
              <span className="text-white">Trade</span>
              <span className="text-blue-600">Securix</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#features" className="text-zinc-300 hover:text-white transition">
              Features
            </Link>
            <Link href="#how-it-works" className="text-zinc-300 hover:text-white transition">
              How It Works
            </Link>
            <Link href="#pricing" className="text-zinc-300 hover:text-white transition">
              Pricing
            </Link>
            <Link href="#security" className="text-zinc-300 hover:text-white transition">
              Security
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="px-5 py-2 text-sm font-semibold bg-blue-600 text-white rounded-xl shadow-sm hover:bg-blue-500 transition">
                  Sign In
                </button>
              </SignInButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <MobileSidebar onClose={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  );
}

