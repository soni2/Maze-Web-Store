import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export const dynamic = "force-dynamic";

export async function GET(req) {
  const supabase = createRouteHandlerClient({ cookies });

  const { data, error } = await supabase
    .from("ratings")
    .select(
      "prod_id, product_title, rating, header, content, users(user_name)"
    );

  if (data.length === 0) {
    return Response.json({ data: "nothing here" });
  }

  const itemsNumbers = [];

  function pickThreeRandomItems(items) {
    // Check if there are at least three items in the array
    if (items.length < 3) {
      console.log("Array should contain at least three items.");
      return;
    }

    // Shuffle the array to get a random order
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

    // Pick the first three items and log them to the console
    for (let i = 0; i < 3; i++) {
      itemsNumbers.push(items[i]);
    }
  }

  pickThreeRandomItems(data);

  return Response.json(itemsNumbers);
}
