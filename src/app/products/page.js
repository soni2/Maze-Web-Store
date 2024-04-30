import { ProductsList } from "@/Components/ProductsList/";
import Menu from "@/Components/Menu";
import { getSession } from "@/lib";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const metadata = {
  title: "Products",
  description: "...",
};

export default async function Products() {
  const session = await getSession();

  const addToCart = async (e) => {
    "use server";
    cookies().getAll();
    const supabase = createServerActionClient({ cookies });

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { data } = await supabase
        .from("cart")
        .select("*")
        .eq("prod_id", e.id);

      if (data[0]) {
        console.log("item already exists in the cart");
      } else {
        const { error } = await supabase.from("cart").insert({
          title: e.title,
          price: e.price,
          prod_id: e.id,
          thumbnail: e.thumbnail,
          user_id: user.id,
          quantity: 1,
        });
        if (error) console.log(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex w-full max-w-[1024px]">
      <Menu />
      <ProductsList session={session} addToCart={addToCart} />
    </div>
  );
}
