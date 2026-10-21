import { SignIn } from "@clerk/nextjs";

// Clerk's path-based sign-in flow uses nested URLs such as /auth/login/sso-callback.
export default function LoginSubroutePage() {
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
