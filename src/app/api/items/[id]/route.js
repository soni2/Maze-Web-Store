import { products } from "@/Mocks/Products.json";

export async function GET(req, { params }) {
  const data = params.id;

  const product = products.find((item) => item.id === JSON.parse(data));

  return Response.json({ product });
}
