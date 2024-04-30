import { FlyoutCart } from "@/Components/FlyoutCart";
import Header from "@/Components/Header";
import "@/app/globals.css";
import { Footer } from "@/Components/Footer";
import { delFromCart, getSession, updateCart } from "@/lib";

export default async function Layout({ children }) {
  const session = await getSession();

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
      <Header session={session} />
      <div className="flex justify-center ">
        <div className="min-w-80 pb-8">
          {children}
          <FlyoutCart delItem={delItem} updateItem={updateItem} />
        </div>
      </div>
      <Footer />
    </>
  );
}
