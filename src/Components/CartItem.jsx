"use client";

import { useEffect, useState } from "react";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

export function CartItem({ item, updateItem, delItem }) {
  const [loading, setLoading] = useState(item.loading);

  function deleteIt(id) {
    delItem(id);

    setLoading(true);
  }

  function addOne(id, quantity) {
    updateItem({ id, quantity: quantity + 1 });
    setLoading(true);
  }
  function removeOne(id, quantity) {
    if (quantity === 0) return;

    updateItem({ id, quantity: quantity - 1 });

    setLoading(true);
  }

  useEffect(() => {
    setLoading(false);
  }, [item]);

  return (
    <li
      key={item.id}
      className={`grid grid-cols-7 items-center py-3 border-solid border-b-[1px] border-blackjustify-between gap-3 duration-500 ${
        loading && "opacity-45 cursor-wait pointer-events-none"
      }`}
      disabled={loading}
    >
      <img src={item.thumbnail} className="h-16 w-16 object-cover mr-4" />
      <div className="flex-1 col-span-3">
        <h1 className="text-sm font-bold">{item.title}</h1>
        <span className="text-sm font-medium">${item.price}.00</span>
      </div>
      <div className="col-span-2 flex justify-center">
        <button onClick={() => removeOne(item.id, item.quantity)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => addOne(item.id, item.quantity)}>+</button>
      </div>
      <button
        className="text-gray-600 hover:text-red-500 duration-300 w-full flex justify-end"
        onClick={() => deleteIt(item.id)}
      >
        <RemoveShoppingCartIcon />
      </button>
    </li>
  );
}
