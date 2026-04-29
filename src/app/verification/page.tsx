import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import VerificationClient from "@/components/VerificationClient";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function VerificationPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return <VerificationClient />;
}
