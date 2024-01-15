import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import readUserSessionInServer from "./lib/supabase/userSessionServer";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { data } = await readUserSessionInServer();

  if (data?.session) {
    console.log("Protected route");
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
}

export const config = {
  matcher: "/auth/:path*",
};
