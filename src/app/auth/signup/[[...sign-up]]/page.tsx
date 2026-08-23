import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-950 sm:px-6">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">TradeSecurix</p>
          <h1 className="mt-2 text-2xl font-bold text-white">Create your account</h1>
          <p className="mt-2 text-sm text-zinc-400">Start your 7-day trial and continue to the risk workspace.</p>
        </div>
        <SignUp
          path="/auth/signup"
          routing="path"
          signInUrl="/auth/login"
          forceRedirectUrl="/dashboard"
        />
      </div>
    </main>
  );
}
