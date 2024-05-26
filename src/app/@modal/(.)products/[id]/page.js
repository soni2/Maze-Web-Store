import { Modal } from "@/Components/Modal";
import { ProductModal } from "./ProductModal";
import { getSession } from "@/lib";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Product({ params }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const session = await getSession();
  const id = params.id;
  const url = `${baseUrl}/api/items/${id}`;

  const res = await fetch(url);
  const { product } = await res.json();

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
    product && (
      <Modal>
        <ProductModal {...product} session={session} addToCart={addToCart} />
      </Modal>
    )
  );
}
