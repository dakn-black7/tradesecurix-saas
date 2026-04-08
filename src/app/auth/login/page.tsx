import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-zinc-400 mb-8">Log in to your TradeSecurix account</p>

          <form className="space-y-6">
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
              Log in
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-zinc-400">
              Don't have an account?{" "}
              <Link href="/auth/signup" className="text-blue-400 hover:text-blue-300 font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
