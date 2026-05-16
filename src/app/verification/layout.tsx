import { redirect } from "next/navigation";
import { getCurrentUserSubscription } from "@/lib/subscription";

export default async function VerificationLayout({ children }: { children: React.ReactNode }) {
  const subscription = await getCurrentUserSubscription();

  if (!subscription.isActive) {
    redirect("/pricing?required=subscription");
  }

  return <>{children}</>;
}
