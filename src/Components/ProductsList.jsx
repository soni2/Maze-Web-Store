"use client";
import "./products.css";

import { useQuery } from "@/Hooks/useQuery";
import { useRouter } from "next/navigation";

export function ProductsList() {
  const router = useRouter();

  const {
    loading,
    productsData,
    currentPage,
    queries,
    setQueries,
    limit,
    minPrice,
    category,
  } = useQuery();
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

  return (
    <main className="flex flex-col items-center w-4/5">
      <div className="products">
        <ul className="grid grid-cols-4 gap-4">
          {!loading ? (
            products?.map((product) => (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <strong>{product.title}</strong> - ${product.price}
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
        {/* {!previousPage ? (
          <button
            className="bg-gray-400 text-white font-bold py-2 px-4 mr-2 rounded"
            disabled
          >
            Previous
          </button>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
            onClick={handlePrevPage}
          >
            Previous
          </button>
        )}
        {`${currentPage} / ${totalPages}  `}
        {!nextPage ? (
          <button
            className="bg-gray-400 text-white font-bold py-2 px-4 mr-2 rounded"
            disabled
          >
            Next
          </button>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleNextPage}
          >
            Next
          </button>
        )} */}
      </div>
    </main>
  );
}
