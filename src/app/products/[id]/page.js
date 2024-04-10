import { ProductPage } from "./ProductPage";

export async function generateMetadata({ params }) {
  const url = `http://localhost:3000/items?productId=${params.id}`;

  const res = await fetch(url);
  const data = await res.json();

  return {
    title: `${data[0].title} | Maze`,
  };
}

export default async function Product({ params }) {
  const url = `http://localhost:3000/items?productId=${params.id}`;

  const res = await fetch(url);
  const data = await res.json();

  return data && <ProductPage {...data[0]} />;
}
