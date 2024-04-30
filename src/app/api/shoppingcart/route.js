import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export const dynamic = "force-dynamic";

export async function GET(req) {
  const supabase = createRouteHandlerClient({ cookies });

  const { data, error } = await supabase
    .from("cart")
    .select("*")
    .order("created_at");

  return Response.json(data);
}
