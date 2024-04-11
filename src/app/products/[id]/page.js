import { ProductPage } from "./ProductPage";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({ params }) {
  const url = `${baseUrl}/items/${params.id}`;

  const res = await fetch(url);
  const { product: data } = await res.json();

  return {
    title: `${data.title} | Maze`,
  };
}

export default async function Product({ params }) {
  const url = `${baseUrl}/items/${params.id}`;

  const res = await fetch(url);
  const { product } = await res.json();

  return product && <ProductPage {...product} />;
}
