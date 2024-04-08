import { Modal } from "@/Components/Modal";
import { FlyoutCart } from "@/Components/FlyoutCart";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { delFromCart, updateCart } from "@/lib";

export const dynamic = "force-dynamic";

export default async function Product({ params }) {
  async function delItem(e) {
    "use server";
    await delFromCart(e);
  }

  async function updateItem({ id, quantity }) {
    "use server";
    await updateCart({ id, quantity });
  }

  return (
    <Modal>
      <FlyoutCart
        // initialCart={cart}
        delItem={delItem}
        updateItem={updateItem}
      />
    </Modal>
  );
}
