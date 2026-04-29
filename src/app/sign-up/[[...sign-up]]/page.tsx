import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-950 px-6 py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Start your free trial</h1>
          <p className="text-zinc-400">Create your TradeSecurix account — no credit card required</p>
        </div>
        <SignUp
          path="/sign-up"
          routing="path"
          signInUrl="/sign-in"
          fallbackRedirectUrl="/dashboard"
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "bg-gray-900 border border-gray-800 shadow-2xl rounded-2xl",
              headerTitle: "text-white",
              headerSubtitle: "text-zinc-400",
              socialButtonsBlockButton: "bg-gray-800 border-gray-700 text-white hover:bg-gray-700",
              formFieldLabel: "text-zinc-300",
              formFieldInput: "bg-gray-800 border-gray-700 text-white",
              footerActionLink: "text-blue-400 hover:text-blue-300",
              formButtonPrimary: "bg-blue-600 hover:bg-blue-500",
            },
          }}
        />
      </div>
    </main>
  );
}
