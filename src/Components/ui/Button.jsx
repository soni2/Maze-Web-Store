import { useCart } from "@/Hooks/useCart";

// #region Regular Button
export default function Button({ title, children, type, action }) {
  return (
    <button
      type={type}
      className="inline-block w-full flex-none px-4 py-3 font-medium bg-black text-white hover:bg-primary dark:bg-white dark:text-black duration-500 hover:shadow-button"
      title={title}
      onClick={action}
    >
      {children}
    </button>
  );
}

// #region Cart Button
export function CartButton({ action, children, type, session, id }) {
  const { productInCart, loading } = useCart();

  const productIn = productInCart(id);

  return session ? (
    <button
      onClick={action}
      type={type}
      className={`row-span-2 flex justify-center px-4 py-3 items-center w-full  ${
        !productIn
          ? "bg-black text-white hover:bg-primary duration-300 cursor-pointer dark:bg-white dark:text-black"
          : "bg-slate-500 hover:bg-slate-600 cursor-not-allowed text-white dark:bg-slate-700"
      } ${loading && "opacity-25 cursor-wait"}
      `}
      title={!productIn ? "Add To Cart" : "Already in cart"}
      disabled={productIn || loading}
    >
      {children}
    </button>
  ) : (
    <button
      type={type}
      className="row-span-2 flex justify-center items-center w-full px-4 py-3  bg-gray-400 text-white cursor-not-allowed"
      disabled
      title="Must log-in to add this item to your cart"
    >
      {children}
    </button>
  );
}
