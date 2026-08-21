import { auth } from "@clerk/nextjs/server";

export type SubscriptionStatus = {
  isActive: boolean;
  status: "authenticated" | "signed_out";
};

export async function getCurrentUserSubscription(): Promise<SubscriptionStatus> {
  const { userId } = await auth();

  return {
    isActive: Boolean(userId),
    status: userId ? "authenticated" : "signed_out",
  };
}
