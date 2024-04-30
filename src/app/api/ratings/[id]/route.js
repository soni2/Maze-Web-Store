import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export const dynamic = "force-dynamic";

export async function GET(req, { params }) {
  const id = params.id;

  const ratings = {};

  const supabase = createRouteHandlerClient({ cookies });

  const { data, error } = await supabase
    .from("ratings")
    .select("*, users(*)")
    .eq("prod_id", id);

  if (data.length === 0) {
    return Response.json({ data });
  }
  ratings.data = data;
  if (data.length === 1) {
    ratings.avg = data[0].rating;
  } else {
    ratings.avg = data.reduce((a, b) => (a.rating + b.rating) / data.length);
  }

  return Response.json(ratings);
}
