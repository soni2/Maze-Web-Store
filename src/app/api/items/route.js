import { products } from "@/Mocks/Products.json";

export async function GET(req) {
  // const data = await fetch(`${process.env.NEXT_PUBLIC_API}?limit=100`).then(
  //   (res) => res.json()
  // );

  // const { products } = data;

  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get("page")) || "1";
  const limit = parseInt(url.searchParams.get("limit")) || "16";
  const minPrice = parseInt(url.searchParams.get("minPrice")) || "1";
  let modelCategory = url.searchParams.get("category") || "all";
  const searchQuery = url.searchParams.get("search");

  if (modelCategory === undefined) {
    modelCategory = "all";
  } else if (modelCategory === "home") {
    modelCategory = "home-decoration";
  }
  const modelCategoryList = [
    ...new Set(
      products.map((item) => {
        const mainCategory = item.category.split("-");

        return mainCategory[0];
      })
    ),
  ];

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

    return product.filter((item) => {
      if (modelCategory === "mens") {
        return (
          item.price >= minPrice &&
          (item.category === "mens-shoes" ||
            item.category === "mens-shirts" ||
            item.category === "mens-watches")
        );
      } else if (modelCategory === "womens") {
        return (
          item.price >= minPrice &&
          (item.category === "womens-shoes" ||
            item.category === "womens-bags" ||
            item.category === "womens-jewellery" ||
            item.category === "womens-dresses" ||
            item.category === "womens-watches")
        );
      } else {
        return (
          item.price >= minPrice &&
          (modelCategory === "all" || item.category === modelCategory)
        );
      }
    });
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
