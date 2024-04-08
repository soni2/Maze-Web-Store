import {
  createServerActionClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function getSession() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session;
}

export async function delFromCart(id) {
  const supabase = createServerComponentClient({ cookies });
  const { error } = await supabase.from("cart").delete().eq("id", id);

  if (error) {
    console.log(error);
  }
}

export async function updateCart({ id, quantity }) {
  const supabase = createServerComponentClient({ cookies });
  const { error } = await supabase
    .from("cart")
    .update({ quantity: quantity })
    .eq("id", id);

  if (error) {
    console.log(error);
  }
  revalidatePath("/shoppingcart");
}
