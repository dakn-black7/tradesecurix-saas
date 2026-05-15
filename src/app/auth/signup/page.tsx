"use client";
import Link from "next/link";
import { Shield } from "lucide-react";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-gray-950">
      <div className="w-full max-w-md">
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl">
              <span className="text-white">Trade</span>
              <span className="text-blue-600">Securix</span>
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-2 text-white">Create account</h1>
          <p className="text-zinc-400 mb-8">Start your 14-day free trial — no credit card required</p>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">First name</label>
                <input
                  type="text"
                  placeholder="Jane"
                  className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-600 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">Last name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-600 transition"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1">Work email</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-600 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-600 transition"
              />
            </div>
            <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition mt-2">
              Start Free Trial
            </button>
          </div>
          <p className="mt-6 text-center text-sm text-zinc-500">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-blue-400 hover:text-blue-300 transition">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
