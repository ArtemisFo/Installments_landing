import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const next_response = NextResponse.next();


  return next_response;
}
