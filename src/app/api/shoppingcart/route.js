import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export const dynamic = "force-dynamic";

export async function GET(req) {
  const supabase = createRouteHandlerClient({ cookies });

  const shoppingCart = {};

  const { data, error } = await supabase
    .from("cart")
    .select("*")
    .order("created_at");

  shoppingCart.products = data;

  if (data.length >= 2) {
    shoppingCart.total = data.reduce((a, b) => a.price + b.price);
  } else if (data.length === 1) {
    shoppingCart.total = data[0].price;
  } else {
    shoppingCart.total = 0;
  }

  if (shoppingCart.total < 100) {
    shoppingCart.shipping = 10.0;
  } else {
    shoppingCart.shipping = 0.0;
  }

  return Response.json(shoppingCart);
}
