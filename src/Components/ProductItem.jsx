import Link from "next/link";
import { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
    setLoading(true);
    if (getInfo) return;

    addToCart(product);
  };

  return (
    <li
      title={product.title}
      key={product.id}
      className={` flex flex-col gap-1 bg-white
      text-gray-900 dark:text-white p-3 justify-between duration-500 dark:bg-blackDark cursor-pointer ${
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
        <h1 className="text-gray-300 text-sm capitalize col-span-3 items-stretch text-ellipsis text-nowrap">
          {product.category}
        </h1>
        {session ? (
          <button
            type="button"
            className={`py-2 rounded-md row-span-2 flex justify-center items-center w-full  ${
              !productIn
                ? "bg-primary text-white hover:bg-keppel-600  duration-300 cursor-pointer"
                : "bg-slate-700 hover:bg-slate-600 cursor-not-allowed text-white"
            }`}
            onClick={() => handleCart(product)}
            title={!productIn ? "Add to cart" : "Already in cart"}
            disabled={productIn}
          >
            <ShoppingCartIcon />
          </button>
        ) : (
          <button
            type="button"
            className="row-span-2 flex justify-center items-center w-full rounded-md bg-gray-400 text-white cursor-not-allowed"
            disabled
            title="Must log-in to add this item to your cart"
          >
            <ShoppingCartIcon />
          </button>
        )}

        <h1>${product.price}</h1>
      </div>
    </li>
  );
}
