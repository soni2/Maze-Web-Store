import { ProductsList } from "@/Components/ProductsList/";
import Menu from "@/Components/Menu";
import { FlyoutCart } from "@/Components/FlyoutCart";

{
  /*async function getData(props) {
  const { page, limit, minPrice, category } = props;

  await fetch(
    `http://localhost:3000/api?page=${page}&limit=${limit}&minPrice=${minPrice}&category=${
      category === undefined ? "all" : category
    }`
  )
    .then((res) => res.json())
    .then((res) => console.log(res));

  // const res = await fetch(
  //   `http://localhost:3000/api?page=${page}&limit=${limit}&minPrice=${minPrice}&category=${
  //     category === undefined ? "all" : category
  //   }`
  // );
  // const json = await res.json();

  // return { props: { json } };
}*/
}

export const metadata = {
  title: "Products",
  description: "...",
};

export default async function Products() {
  return (
    <div className="flex w-full">
      <Menu />
      <ProductsList />
      <FlyoutCart />
    </div>
  );
}
