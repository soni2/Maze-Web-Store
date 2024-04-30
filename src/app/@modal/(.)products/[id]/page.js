import { Modal } from "@/Components/Modal";
import { ProductModal } from "./ProductModal";

export default async function Product({ params }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const id = params.id;
  const url = `${baseUrl}/api/items/${id}`;

  const res = await fetch(url);
  const { product } = await res.json();

  return (
    product && (
      <Modal>
        <ProductModal {...product} />
      </Modal>
    )
  );
}
