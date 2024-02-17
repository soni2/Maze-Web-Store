"use client";
import "./products.css";

import { useQuery } from "@/Hooks/useQuery";
import { useRouter } from "next/navigation";
import { useCart } from "@/Hooks/useCart";

export function ProductsList() {
  const router = useRouter();

  const { loading, productsData, currentPage, queries, setQueries } =
    useQuery();
  const { products, previousPage, totalPages, nextPage } = productsData;

  const page = parseInt(queries.page);
  const handleNextPage = () => {
    router.push(
      `/products?minPrice=0${queries.page && `&page=${page + 1}`}${
        queries.category &&
        `&category=${queries.category}${
          queries.limit && `&limit=${queries.limit}`
        }`
      }`
    );
    setQueries((prevState) => ({
      ...prevState,
      page: page + 1,
    }));
  };

  const handlePrevPage = () => {
    router.push(
      `/products?minPrice=0${queries.page && `&page=${page - 1}`}${
        queries.category &&
        `&category=${queries.category}${
          queries.limit && `&limit=${queries.limit}`
        }`
      }`
    );
    setQueries((prevState) => ({
      ...prevState,
      page: page - 1,
    }));
  };

  const { setCart } = useCart();
  function addToCart(e) {
    setCart((prevState) => [
      ...prevState,
      {
        title: e.title,
        thumbnail: e.thumbnail,
        id: e.id,
        price: e.price,
        quantity: 1,
      },
    ]);
  }

  return (
    <main className="flex flex-col items-center w-4/5">
      <div className="products">
        <ul className="grid grid-cols-4 gap-4">
          {!loading ? (
            products?.map((product) => (
              <li key={product.id} className="flex flex-row justify-between">
                <img src={product.thumbnail} alt={product.title} />
                <strong>{product.title}</strong> - ${product.price}
                <button
                  className="bg-slate-700 py-2 rounded-md hover:bg-slate-900"
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button>
              </li>
            ))
          ) : (
            <h1>Loading</h1>
          )}
        </ul>
      </div>
      <div>
        <button
          className={`${
            !previousPage ? "bg-gray-400" : "bg-blue-500"
          } text-white font-bold py-2 px-4 mr-2 rounded`}
          disabled={previousPage ? false : true}
          onClick={handlePrevPage}
        >
          Previous
        </button>
        {`${currentPage} / ${totalPages}  `}
        <button
          className={`${
            !nextPage ? "bg-gray-400" : "bg-blue-500"
          } text-white font-bold py-2 px-4 mr-2 rounded`}
          disabled={nextPage ? false : true}
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </main>
  );
}
