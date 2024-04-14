import Link from "next/link";
import { useEffect, useState } from "react";
import { CartIcon } from "./icons";
import { useCart } from "@/Hooks/useCart";

export default function ProductItem({
  product,
  session,
  addToCart,
  productIn,
  cart,
}) {
  const [loading, setLoading] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [cart]);

  const handleCart = () => {
    const getInfo = cart.some((item) => item.prod_id === product.id);
    if (getInfo) return;

    addToCart(product);
    setLoading(true);
  };

  return (
    <li
      title={product.title}
      key={product.id}
      className={` flex flex-col gap-1 bg-white
      text-gray-900 dark:text-white p-4 justify-between duration-500 dark:bg-gray-900 cursor-pointer ${
        loading && "opacity-25 cursor-wait"
      }`}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <Link href={`/products/${product.id}`} passHref>
        <img
          className={`${hover && "scale-[1.02]"} duration-500`}
          src={product.thumbnail}
          alt={product.title}
          style={{
            aspectRatio: "10/12",
            objectFit: "cover",
          }}
        />
      </Link>

      <Link href={`/products/${product.id}`} scroll={false} passHref>
        <div className="overflow-hidden text-ellipsis text-nowrap">
          <strong>{product.title}</strong>
        </div>
      </Link>

      <div className="grid grid-cols-4">
        <h1 className="text-gray-300 text-sm capitalize col-span-3 items-stretch">
          {product.category}
        </h1>
        {session ? (
          <button
            type="button"
            className={`py-2 rounded-md row-span-2 flex justify-center items-center w-full  ${
              !productIn
                ? "bg-yellow-400 text-black hover:bg-yellow-500  duration-300 cursor-pointer"
                : "bg-slate-700 hover:bg-slate-600 cursor-not-allowed"
            }`}
            onClick={() => handleCart(product)}
            title={!productIn ? "Add to cart" : "Already in cart"}
            disabled={productIn}
          >
            {!productIn ? (
              <CartIcon width={22} height={22} fill="#000" />
            ) : (
              <CartIcon width={22} height={22} />
            )}
          </button>
        ) : (
          <button
            type="button"
            className="row-span-2 flex justify-center items-center w-full rounded-md bg-gray-400 text-gray-300 cursor-not-allowed"
            disabled
            title="Must log-in to add this item to your cart"
          >
            <CartIcon width={22} height={22} />
          </button>
        )}

        <h1>${product.price}</h1>
      </div>
    </li>
  );
}
