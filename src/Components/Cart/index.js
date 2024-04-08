import { delFromCart, updateCart } from "@/lib";
import { FlyoutCart } from "../FlyoutCart";

export async function Cart({ children }) {
  async function delItem(e) {
    "use server";
    await delFromCart(e);
  }

  async function updateItem({ id, quantity }) {
    "use server";
    await updateCart({ id, quantity });
  }
  return (
    <>
      {children}
      <FlyoutCart updateItem={updateItem} delItem={delItem} />
    </>
  );
}
