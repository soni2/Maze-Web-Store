import { ProductsList } from "@/Components/ProductsList/";
import Menu from "@/Components/Menu";
import { getSession } from "@/lib";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
{
  /*async function getData(props) {
  const { page, limit, minPrice, category } = props;

  await fetch(
    `http://localhost:3000/api?page=${page}&limit=${limit}&minPrice=${minPrice}&category=${
      category === undefined ? "all" : category
    }`
  )
    .then((res) => res.json())
    .then((res) => console.log(res));

  // const res = await fetch(
  //   `http://localhost:3000/api?page=${page}&limit=${limit}&minPrice=${minPrice}&category=${
  //     category === undefined ? "all" : category
  //   }`
  // );
  // const json = await res.json();

  // return { props: { json } };
}*/
}

export const metadata = {
  title: "Products",
  description: "...",
};

export default async function Products() {
  const session = await getSession();

  const addToCart = async (e) => {
    "use server";

    const supabase = createServerActionClient({ cookies });

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { error } = await supabase.from("cart").insert({
        title: e.title,
        price: e.price,
        prod_id: e.id,
        thumbnail: e.thumbnail,
        user_id: user.id,
        quantity: 1,
        loading: false,
      });
      if (error) console.log(error);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex w-full">
      <Menu />
      <ProductsList session={session} addToCart={addToCart} />
    </div>
  );
}
