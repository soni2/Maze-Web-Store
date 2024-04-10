import { products } from "@/Mocks/Products.json";

export async function GET(req) {
  // const data = await fetch(products).then((res) =>
  //   res.json()
  // );

  // const { products } = data;

  // return Response.json({ products: products });

  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get("page")) || "1";
  const limit = parseInt(url.searchParams.get("limit")) || "12";
  const minPrice = parseInt(url.searchParams.get("minPrice")) || "1";
  let modelCategory = url.searchParams.get("category") || "all";
  const searchQuery = url.searchParams.get("search");

  const productId = url.searchParams.get("productId");

  if (productId)
    return Response.json(
      products.filter((item) => item.id === JSON.parse(productId))
    );

  if (modelCategory === undefined) {
    modelCategory = "all";
  }

  const modelCategoryList = [...new Set(products.map((item) => item.category))];

  const searchProducts = (i) => {
    return i.filter(
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

  const totalPage = Math.ceil(filterProduct(products).length / limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const initialProducts = {};

  initialProducts.search = searchQuery;

  initialProducts.totalPages = totalPage;

  if (startIndex > 0) {
    initialProducts.previousPage = {
      page: page - 1,
      limit: limit,
    };
  }

  if (endIndex < filterProduct(products).length) {
    initialProducts.nextPage = {
      page: page + 1,
      limit: limit,
    };
  }

  initialProducts.category = modelCategoryList;
  initialProducts.products = filterProduct(products).slice(
    startIndex,
    endIndex
  );

  return Response.json({ products: initialProducts });
}
