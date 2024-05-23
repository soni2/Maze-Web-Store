"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@/Hooks/useQuery";
import Button from "./ui/Button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export function FlyoutMenu() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const router = useRouter();

  const [product, setProduct] = useState([]);

  const { handleMenuToggle, menuOpen, setQueries } = useQuery();

  const handleSignOut = async () => {
    const supabase = createClientComponentClient();

    await supabase.auth.signOut();
    location.reload();
  };

  const getProductsData = async () => {
    fetch(`${baseUrl}/api/items`)
      .then((res) => res.json())
      .then((res) => {
        return setProduct(res.products.category);
      });
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
    handleMenuToggle();
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div
      className={`fixed inset-0 z-10 block sm:hidden overflow-hidden backdrop-blur-sm ${
        menuOpen ? "block" : "hidden"
      } `}
    >
      <div
        className="absolute inset-0 bg-black opacity-60"
        onClick={handleMenuToggle}
      ></div>
      <div className="fixed inset-y-0 h-full w-2/3 flex content-between">
        <div className="h-full w-full">
          <div className="bg-white h-full flex flex-col justify-between px-4 pb-4">
            <div className="overflow-auto row-span-9 relative flex flex-col gap-4 py-4">
              <a href="/">
                <h1 className="uppercase font-bold text-sm">Home</h1>
              </a>
              <ul>
                <h1
                  className="uppercase font-bold text-sm"
                  onClick={() => handleCategory("all")}
                >
                  Products
                </h1>
                {product?.map((e, i) => (
                  <li
                    className="py-2  text-sm pl-3 duration-200 rounded-sm uppercase"
                    key={i}
                  >
                    <a
                      onClick={() => handleCategory(e)}
                      //   href={`/products?page=1&minPrice=0&category=${e}`}
                    >
                      {e}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <Button action={handleSignOut}>Log Out</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
