"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Create account</h1>
            <p className="text-zinc-400">Join TradeSecurix to start verifying trade documents</p>
          </div>
          <SignUp path="/auth/signup" routing="path" signInUrl="/auth/login" />
        </div>
      </div>
    </main>
  );
}
