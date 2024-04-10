import { Modal } from "@/Components/Modal";
import { ProductModal } from "./ProductModal";

export default async function Product({ params }) {
  const url = `/items?productId=${params.id}`;

  const res = await fetch(url);
  const data = await res.json();

  return (
    data && (
      <Modal>
        <ProductModal {...data[0]} />
      </Modal>
    )
  );
}
