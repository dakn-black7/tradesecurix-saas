"use client";

import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
            <p className="text-zinc-400">Log in to your TradeSecurix account</p>
          </div>
          <SignIn path="/auth/login" routing="path" signUpUrl="/auth/signup" />
        </div>
      </div>
    </main>
  );
}
