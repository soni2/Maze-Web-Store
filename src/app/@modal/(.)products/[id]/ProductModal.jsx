"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import { CartButton } from "@/Components/ui/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export function ProductModal({
  id,
  title,
  thumbnail,
  images,
  description,
  price,
  rating,
  addToCart,
  session,
}) {
  const [thumb, setThumb] = useState(thumbnail);
  const [quantity, setQuantity] = useState(1);

  //#region Function
  function addQuantity() {
    //Add more quantity to product
    if (quantity === 10) {
      setQtyModal(true);
      setQtyMsg("Can't add more items");
      setTimeout(() => {
        setQtyModal(false);
      }, [3000]);
      return;
    }
    return setQuantity(quantity + 1);
  }

  function removeQuantity() {
    //Remove quantity

    if (quantity === 1) {
      setQtyModal(true);
      setQtyMsg("Quantity shouldn't be empty");
      setTimeout(() => {
        setQtyModal(false);
      }, [3000]);
      return;
    }
    setQuantity(quantity - 1);
  }

  function placeQuantity(e) {
    //Place quantity in the inputs

    if (e.target.value > 10) {
      return setQuantity(10);
    } else if (e.target.value < 0) {
      return setQuantity(1);
    } else {
      return setQuantity(e.target.value);
    }
  }

  const handleCart = (e) => {
    e.preventDefault();
    setLoading(true);

    //Add item to cart
    const getInfo = cart.some((item) => item.prod_id === id);
    // setLoading(true);
    if (getInfo) return;

    addToCart({
      id,
      title,
      thumbnail,
      price,
      quantity,
    });
  };

  const router = useRouter();
  return (
    <div className="shadow-lg bg-white max-w-screen-lg min-h-[450px] border-0 overflow-hidden">
      <div className="mt-3 grid grid-cols-4 grid-flow-col !m-0 items-center justify-center">
        <div className="min-h-[450px] col-span-2 relative overflow-hidden flex items-center justify-center">
          <div
            className={`z-50 min-h-full min-w-full block absolute inset-0 bg-contain bg-no-repeat bg-center`}
            alt={title}
            style={{
              backgroundImage: `url("${thumb}")`,
            }}
          ></div>
          <div
            className={`block blur-lg absolute inset-0 bg-cover bg-no-repeat bg-center`}
            alt={title}
            style={{
              backgroundImage: `url("${thumb}")`,
            }}
          ></div>
        </div>
        <div className="mt-2 px-7 py-3 col-span-2 flex flex-col justify-between min-h-full">
          <div className="flex min-w-full justify-end">
            <button
              className="text-sm font-bold text-black hover:text-red-600 hover:rotate-90 duration-500"
              onClick={() => router.back()}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="flex">
            <div className="ml-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {title}
              </h3>
              <div className="flex">
                {[...Array(5)].map((star, index) => {
                  const currentRating = index + 1;

                  return (
                    <StarIcon
                      key={index}
                      className={`${
                        currentRating <= rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      } h-5 w-5`}
                    />
                  );
                })}
              </div>
              <p className="text-4xl font-bold text-gray-900 mt-4">${price}</p>
              <div className="border-t-2 border-gray-200 mt-3" />
              <p className="text-gray-600 mt-3">{description}</p>
              <div className="mt-4">
                <div className="grid grid-cols-6 gap-4">
                  <span className="flex items-center col-span-3 gap-2 border border-solid border-gray-200 px-3 justify-between">
                    <p>Quantity: </p>
                    <button onClick={removeQuantity}>-</button>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="1"
                      value={quantity}
                      max="10"
                      onChange={placeQuantity}
                      className=" w-12 py-1 px-3 text-center "
                    />
                    <button onClick={addQuantity}>+</button>
                  </span>
                  <form className="col-span-3" onSubmit={handleCart}>
                    <CartButton session={session} id={id} type={"submit"}>
                      Add To Cart <ShoppingCartIcon />
                    </CartButton>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            {images?.map((image, index) => (
              <img
                alt="Smartwatch thumbnail"
                className="h-12 w-12 rounded-full border-2 border-blue-500 mx-1"
                src={image}
                style={{
                  aspectRatio: "50/50",
                  objectFit: "cover",
                }}
                key={index}
                onMouseEnter={() => setThumb(image)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
