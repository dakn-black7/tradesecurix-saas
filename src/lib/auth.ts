import { auth as clerkAuth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function requireAuth() {
  const { userId } = await clerkAuth();
  if (!userId) redirect("/");
  return userId;
}

export async function getAuthUser() {
  const { userId } = await clerkAuth();
  return userId;
}
