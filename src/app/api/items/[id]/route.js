// import { products } from "@/Mocks/Products.json";

export async function GET(req, { params }) {
  const url = process.env.NEXT_PUBLIC_API;
  const id = params.id;

  const data = await fetch(`${url}/${id}`);
  const products = await data.json();

  // const product = products.find((item) => item.id === JSON.parse(data));

  // product.suggestion = products.filter(
  //   (item) => item.category === product.category && item.id !== product.id
  // );

  const categoryUrl = `${process.env.NEXT_PUBLIC_API}/category/${products.category}`;
  products.suggestions = await fetch(categoryUrl)
    .then((res) => res.json())
    .then((res) => res.products);

  return Response.json({ product: products });
}
