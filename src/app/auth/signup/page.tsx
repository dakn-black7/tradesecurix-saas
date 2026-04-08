import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
          <h1 className="text-3xl font-bold mb-2">Create account</h1>
          <p className="text-zinc-400 mb-8">Join TradeSecurix to start verifying trade documents</p>

          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-2">First name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Company</label>
              <input
                type="text"
                placeholder="Your company"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-600"
              />
            </div>

            <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-lg font-semibold transition">
              Create account
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-zinc-400">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-blue-400 hover:text-blue-300 font-semibold">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
