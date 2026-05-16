import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-gray-950">
      <SignIn
        path="/auth/login"
        routing="path"
        signUpUrl="/auth/signup"
        forceRedirectUrl="/dashboard"
      />
    </main>
  );
}
