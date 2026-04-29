import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Passthrough middleware — add Clerk/auth protection here once keys are configured
export function middleware(req: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)'],
};
