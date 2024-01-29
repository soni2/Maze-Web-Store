"use client";

import { useQuery } from "@/Hooks/useQuery";

export function CartItem({ thumbnail, title, price, id }) {
  const {} = useQuery();

  return (
    <li className="text-black flex items-center py-1">
      <img src={thumbnail} className="h-16 w-16 object-cover rounded-md mr-4" />
      <div className="flex-1">
        <h2>{title}</h2>
        <span>${price}</span>
      </div>
      <button class="text-gray-600 hover:text-red-500">
        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path d="M19 13H5v-2h14v2z" />
        </svg>
      </button>
    </li>
  );
}
