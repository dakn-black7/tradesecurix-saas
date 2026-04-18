import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import VerificationClient from "@/components/VerificationClient";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function VerificationPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/auth/signup");
  }

  const hasAccess = false; // later from DB

  if (!hasAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6 py-16">
        <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-gray-900 p-10 shadow-2xl shadow-black/30 text-center">
          <h1 className="text-3xl font-semibold text-white">Start your 14-day free trial</h1>
          <p className="mt-4 text-zinc-400">
            Unlock full company verification reports and risk analysis.
          </p>
          <button className="mt-8 inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
            Start Free Trial
          </button>
        </div>
      </div>
    );
  }

  return <VerificationClient />;
}
