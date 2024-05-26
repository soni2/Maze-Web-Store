"use client";

import { useEffect, useState } from "react";
import ReviewModal from "./ReviewModal";
import { useCart } from "@/Hooks/useCart";
import StarIcon from "@mui/icons-material/Star";
import { CartButton } from "@/Components/ui/Button";
import EmptyBox from "@/Components/ui/EmptyBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Carousel } from "@/Components/HomePage/Carousel";

export function ProductPage({
  id,
  title,
  thumbnail,
  images,
  description,
  price,
  addReview,
  route,
  session,
  addToCart,
  suggestion,
}) {
  //#region State
  const [thumb, setThumb] = useState(thumbnail);
  const [modalOpen, setModalOpen] = useState(false);
  const [ratings, setRating] = useState([]);
  const [avg, setAvg] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [qtyModal, setQtyModal] = useState(false);
  const [qtyMsg, setQtyMsg] = useState("");

  //#region Custom Hooks
  const { baseUrl, cart, setLoading } = useCart();

  //#region Functions
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

  useEffect(() => {
    const url = `${baseUrl}/api/ratings/${route}`;

    const fetchReview = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setRating(res.data);
          setAvg(res.avg);
        });
    };

    fetchReview();
  }, []);

  //#region Component
  return (
    <div className="bg-white pb-4 dark:bg-blackDark  dark:text-white max-w-[1200px]">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 xl:gap-12 items-start max-w-6xl px-4 mx-auto py-6 ">
        <div className="grid gap-4 md:gap-10 items-start order-2 md:order-1 w-full h-full">
          <div className="flex items-start h-full w-full">
            <div className="grid gap-4 content-between h-full w-full">
              <div className="flex flex-col gap-4">
                <h1 className="font-bold text-3xl capitalize">{title}</h1>
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((star, index) => {
                      const currentRating = index + 1;

                      return (
                        <StarIcon
                          key={index}
                          className={`${
                            currentRating <= avg
                              ? "text-yellow-400"
                              : "text-gray-300"
                          } h-5 w-5`}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p>{description}</p>
                  <div className=" font-medium flex flex-row">
                    <span>us$</span>
                    <span className="text-4xl">{price}</span>
                    <span>00</span>
                  </div>
                </div>
              </div>
              <div
                className={`col-span-5 border-2 border-red-600 flex items-center justify-center py-3 bg-red-600/20 duration-300 ${
                  qtyModal ? "flex opacity-100" : "hidden opacity-0"
                }`}
              >
                {qtyMsg}
              </div>
              <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-5 gap-4">
                <span className="flex items-center col-span-3 md:col-span-2 gap-2 border border-solid border-gray-200 px-4 justify-between">
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
        <div className="grid gap-4">
          <img
            alt="Product Image"
            className="aspect-square object-cover border border-gray-200 w-full overflow-hidden dark:border-gray-800"
            height={600}
            src={thumb}
            width={600}
          />
          <div className="hidden md:flex gap-4 items-start">
            {images?.map((image, index) => (
              <button
                key={index}
                className="border hover:border-gray-900 overflow-hidden transition-colors dark:hover:border-gray-50"
              >
                <img
                  alt="Preview thumbnail"
                  className="aspect-square object-cover"
                  height={100}
                  src={image}
                  width={100}
                  onMouseEnter={() => setThumb(image)}
                />
                <span className="sr-only">View Image 4</span>
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-3 items-start order-1"></div>
      </div>
      <div className="grid gap-6 md:gap-12 max-w-6xl px-4">
        {/* Carousel */}
        <div>
          <h2 className="text-2xl font-bold">Related Products</h2>
          <Carousel
            addToCart={addToCart}
            session={session}
            products={suggestion}
            id={id}
          />
        </div>
        {/* Ratings */}
        <div className="grid gap-4">
          <div className="flex gap-2 items-center">
            <h2 className="text-2xl font-bold">Customer Reviews |</h2>
            {session && (
              <button
                onClick={() => setModalOpen(true)}
                className="border-2 border-solid border-primary bg-white dark:bg-blackDark px-4 py-3 font-bold hover:bg-primary duration-500 "
              >
                Write a Review
              </button>
            )}
          </div>
          <div className="grid gap-4">
            {ratings.length === 0 ? (
              <div className="flex w-full items-center justify-center hover:opacity-100 duration-500">
                <EmptyBox className="fill-black/15 w-[360px] dark:fill-white/40 hover:fill-primary duration-100" />
              </div>
            ) : (
              ratings?.map((e, i) => {
                const date = new Date(e.created_at);

                const month = date.toString().split(" ")[1];
                const day = date.toString().split(" ")[2];
                const year = date.toString().split(" ")[3];

                return (
                  <div key={i} className="grid gap-2 border-t pt-4">
                    <h3 className="text-lg font-semibold">{e.header}</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((star, index) => {
                          const currentRating = index + 1;
                          return (
                            <StarIcon
                              key={index}
                              className={`${
                                currentRating <= e.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              } h-5 w-5`}
                            />
                          );
                        })}
                      </div>
                      <span className="text-muted">{`${month} / ${day} / ${year}`}</span>
                    </div>
                    <p>{e.content}</p>
                  </div>
                );
              })
            )}
          </div>
        </div>
        <ReviewModal
          title={title}
          thumbnail={thumbnail}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          addReview={addReview}
          id={id}
        />
      </div>
    </div>
  );
}
