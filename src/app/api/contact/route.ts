import { NextResponse } from "next/server";

export async function POST() {
  // Do not claim to have received leads until reliable delivery/storage is configured.
  return NextResponse.json(
    { error: "The demo request form is temporarily unavailable. Please contact us by email.", code: "CONTACT_NOT_CONFIGURED" },
    { status: 503, headers: { "Cache-Control": "no-store" } }
  );
}
