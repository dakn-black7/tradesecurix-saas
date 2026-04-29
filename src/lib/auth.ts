import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

/**
 * Returns the current authenticated user's ID, or redirects to /sign-in.
 */
export async function requireAuth(): Promise<string> {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
  return userId;
}

/**
 * Returns the current authenticated user's ID, or null (does not redirect).
 */
export async function getAuthUser(): Promise<string | null> {
  const { userId } = await auth();
  return userId;
}
