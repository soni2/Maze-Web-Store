import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Cart() {
  const supabase = createServerComponentClient({ cookies });

  const { data: cart } = await supabase.from("cart").select("*, users(*)");
  return (
    <div>
      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </div>
  );
}
