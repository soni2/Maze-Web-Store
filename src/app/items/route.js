import { products as initialProducts } from "@/Mocks/Products.json";

export async function GET(req) {
  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get("page")) || "1";
  const limit = parseInt(url.searchParams.get("limit")) || "12";
  const minPrice = parseInt(url.searchParams.get("minPrice")) || "1";
  let modelCategory = url.searchParams.get("category") || "all";
  const searchQuery = url.searchParams.get("search");

  if (modelCategory === undefined) {
    modelCategory = "all";
  }

  const modelCategoryList = [
    ...new Set(initialProducts.map((item) => item.category)),
  ];

  const searchProducts = (products) => {
    return products.filter(
      (item) =>
        item.description.toLowerCase().includes(searchQuery) ||
        item.category.toLowerCase().includes(searchQuery) ||
        item.title.toLowerCase().includes(searchQuery)
    );
  };

  const filterProduct = (product) => {
    if (searchQuery) {
      return searchProducts(
        product.filter(
          (item) =>
            item.price >= minPrice &&
            (modelCategory === "all" || item.category === modelCategory)
        )
      );
    }

    return product.filter(
      (item) =>
        item.price >= minPrice &&
        (modelCategory === "all" || item.category === modelCategory)
    );
  };

  const totalPage = Math.ceil(filterProduct(initialProducts).length / limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const products = {};

  products.search = searchQuery;

  products.totalPages = totalPage;

  if (startIndex > 0) {
    products.previousPage = {
      page: page - 1,
      limit: limit,
    };
  }

  if (endIndex < filterProduct(initialProducts).length) {
    products.nextPage = {
      page: page + 1,
      limit: limit,
    };
  }

  products.category = modelCategoryList;
  products.products = filterProduct(initialProducts).slice(
    startIndex,
    endIndex
  );

  return Response.json({ products });
}
