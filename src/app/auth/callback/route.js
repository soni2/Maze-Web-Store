import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { createSearchParamsBailoutProxy } from "next/dist/client/components/searchparams-bailout-proxy";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
  const requestURL = new URL(req.url);
  const code = requestURL.searchParams.get("code");

  if (code) {
    const supabase = createRouteHandlerClient({ cookies });
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    console.log(error)
  }

  return NextResponse.redirect(requestURL.origin);
}
