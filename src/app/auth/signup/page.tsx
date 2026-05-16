import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-gray-950">
      <SignUp
        path="/auth/signup"
        routing="path"
        signInUrl="/auth/login"
        forceRedirectUrl="/pricing"
      />
    </main>
  );
}
