import { ProductPage } from "./ProductPage";
import { cookies } from "next/headers";
import { getSession } from "@/lib";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({ params }) {
  const url = `${baseUrl}/api/items/${params.id}`;

  const res = await fetch(url);
  const { product: data } = await res.json();

  return {
    title: `${data.title} | Mazed`,
  };
}

export default async function Product({ params }) {
  const session = await getSession();

  const url = `${baseUrl}/api/items/${params.id}`;

  const res = await fetch(url);
  const { product } = await res.json();

  const addReview = async (e) => {
    "use server";
    cookies().getAll();
    const supabase = createServerActionClient({ cookies });

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { error } = await supabase.from("ratings").insert({
        rating: e.rating,
        header: e.header,
        content: e.content,
        prod_id: e.id,
        product_title: e.title,
        user_id: user.id,
      });
      if (error) console.log(error);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    product && (
      <ProductPage {...product} addReview={addReview} route={params.id} />
    )
  );
}
