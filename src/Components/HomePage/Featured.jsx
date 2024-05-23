import { Carousel } from "./Carousel";
import { products } from "@/Mocks/products.js";
import { getSession } from "@/lib";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Featured() {
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

  const session = await getSession();

  const getRandomArray = (e, n) => {
    const randomEl = e.slice().sort(() => Math.random - 0.5);
    return randomEl.slice(0, n);
  };

  const initialProducts = await getRandomArray(products, 15);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center space-y-2 dark:text-white px-2">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Discover our top-rated products
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Explore our best-selling items loved by our customers.
          </p>
        </div>
      </div>

      {initialProducts ? (
        <Carousel
          products={initialProducts}
          session={session}
          addToCart={addToCart}
        />
      ) : (
        <h1>Loading</h1>
      )}
    </section>
  );
}
