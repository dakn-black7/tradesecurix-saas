import { currentUser } from "@clerk/nextjs/server";

const TRIAL_DAYS = 7;
const DAY_MS = 24 * 60 * 60 * 1000;

export type SubscriptionStatus = {
  isActive: boolean;
  status: "trialing" | "trial_expired" | "signed_out";
  isTrial: boolean;
  trialEndsAt: string | null;
  trialDaysRemaining: number;
};

export async function getCurrentUserSubscription(): Promise<SubscriptionStatus> {
  const user = await currentUser();

  if (!user) {
    return {
      isActive: false,
      status: "signed_out",
      isTrial: false,
      trialEndsAt: null,
      trialDaysRemaining: 0,
    };
  }

  const createdAt = new Date(user.createdAt).getTime();
  const trialEndsAtMs = createdAt + TRIAL_DAYS * DAY_MS;
  const remainingMs = trialEndsAtMs - Date.now();
  const trialDaysRemaining = Math.max(0, Math.ceil(remainingMs / DAY_MS));
  const isTrialActive = remainingMs > 0;

  return {
    isActive: isTrialActive,
    status: isTrialActive ? "trialing" : "trial_expired",
    isTrial: isTrialActive,
    trialEndsAt: new Date(trialEndsAtMs).toISOString(),
    trialDaysRemaining,
  };
}
