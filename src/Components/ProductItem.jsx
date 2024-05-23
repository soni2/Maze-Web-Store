import Link from "next/link";
import { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/navigation";
import { useQuery } from "@/Hooks/useQuery";

export default function ProductItem({
  product,
  session,
  addToCart,
  productIn,
  cart,
}) {
  const [loading, setLoading] = useState(false);
  const [hover, setHover] = useState(false);
  const router = useRouter();
  const { setQueries } = useQuery();

  useEffect(() => {
    setLoading(false);
  }, [cart]);

  const handleCart = () => {
    const getInfo = cart.some((item) => item.prod_id === product.id);
    setLoading(true);
    if (getInfo) return;

    addToCart(product);
  };

  const handleCategory = (e) => {
    router.push(`/products?page=1&minPrice=0&category=${e}`);
    setQueries((prevState) => ({
      ...prevState,
      category: e,
      page: 1,
      minPrice: 0,
      search: "",
    }));
  };

  return (
    <li
      title={product.title}
      key={product.id}
      className={` flex flex-col gap-1
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

      <Link
        href={`/products/${product.id}`}
        scroll={false}
        className="hidden md:flex"
        passHref
      >
        <div className="overflow-hidden text-ellipsis text-nowrap">
          <strong>{product.title}</strong>
        </div>
      </Link>
      <a
        href={`/products/${product.id}`}
        className="overflow-hidden flex md:hidden text-ellipsis text-nowrap"
      >
        <strong>{product.title}</strong>
      </a>

      <div className="grid grid-cols-4">
        <h1
          className="text-gray-300 text-sm capitalize col-span-3 items-stretch text-ellipsis text-nowrap"
          onClick={() => handleCategory(product.category)}
        >
          {product.category}
        </h1>
        {session ? (
          <button
            type="button"
            className={`py-2 row-span-2 flex justify-center items-center w-full  ${
              !productIn
                ? "bg-black text-white hover:bg-primary  duration-300 cursor-pointer dark:bg-white dark:text-black"
                : "bg-slate-300 hover:bg-slate-600 cursor-not-allowed text-white dark:bg-slate-700"
            }`}
            onClick={() => handleCart(product)}
            title={!productIn ? "Add To Cart" : "Already in cart"}
            disabled={productIn}
          >
            <ShoppingCartIcon />
          </button>
        ) : (
          <button
            type="button"
            className="row-span-2 flex justify-center items-center w-full bg-gray-400 text-white cursor-not-allowed"
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
