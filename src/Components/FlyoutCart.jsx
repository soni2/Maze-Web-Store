"use client";

import { useQuery } from "@/Hooks/useQuery";
import { CartItem } from "@/Components/CartItem";
import { useCart } from "@/Hooks/useCart";

export const FlyoutCart = () => {
  const { cartOpen, handleCartToggle, productsData } = useQuery();
  const { cart } = useCart();

  return (
    <div
      className={`fixed inset-0 overflow-hidden ${
        cartOpen ? "block" : "hidden"
      }`}
    >
      <div
        className="absolute inset-0 bg-black opacity-60"
        // onMouseEnter={handleCartToggle}
      ></div>
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md">
          {/* Your cart content goes here */}
          <div className="bg-white h-full p-4">
            <h2 className="text-xl font-semibold mb-4 text-black">
              Shopping Cart
            </h2>
            <ul>
              {cart?.map((item) => (
                <CartItem
                  key={item.id}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  price={item.price}
                  id={item.id}
                  quantity={item.quantity}
                />
              ))}
            </ul>
            {/* Cart items, totals, etc. */}
            <button
              onClick={handleCartToggle}
              className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded"
            >
              Close Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
