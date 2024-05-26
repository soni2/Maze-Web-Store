"use client";

import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Button from "@/Components/ui/Button";
import Input from "@/Components/ui/Input";

function ReviewModal({
  thumbnail,
  title,
  modalOpen,
  setModalOpen,
  addReview,
  id,
}) {
  //#region State
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [header, setHeader] = useState(null);
  const [content, setContent] = useState(null);

  //#region Function
  function handleReviewToggle() {
    setModalOpen(false);
  }

  function submitReview(e) {
    e.preventDefault();
    addReview({
      rating,
      title,
      header,
      content,
      id,
    });
  }

  function handleHeader(e) {
    setHeader(e.target.value);
  }
  function handleContent(e) {
    setContent(e.target.value);
  }

  const ratings = ["terrible", "bad", "average", "good", "amazing"];

  return (
    <div
      className={`fixed inset-0 z-10 overflow-hidden flex items-center justify-center backdrop-blur-sm ${
        modalOpen ? "block" : "hidden"
      } `}
    >
      <div
        className="absolute inset-0 bg-black opacity-60"
        onClick={handleReviewToggle}
      ></div>
      <div className="relative grid grid-row-6 gap-2 w-11/12 md:w-2/3 lg:w-2/3 shadow-lg rounded-md bg-white dark:bg-keppel-950 max-w-xl min-h-[450px] border-0 overflow-hidden p-4">
        {/* <h2 className="font-bold text-sm">
          Help us improve our product for you
        </h2> */}
        <div
          className="flex flex-col gap-2 row-span-2 items-center"
          // md:grid md:grid-cols-6
        >
          {/* <div
            className="aspect-square overflow-hidden bg-cover bg-no-repeat bg-center rounded-md hidden md:flex"
            style={{
              backgroundImage: `url("${thumbnail}")`,
              width: "150px",
            }}
          /> */}
          <h1 className="font-extrabold col-span-5 text-2xl uppercase w-full text-center tracking-wider">
            {title}
          </h1>
        </div>
        <p className="text-center w-full">
          How would you like to describe your experience with this product?
        </p>
        <form
          className="flex flex-col min-h-full row-span-4"
          onSubmit={submitReview}
        >
          <div className="w-full flex items-center justify-center">
            <div className="flex flex-row justify-between w-full max-w-[600px]  md:px-8">
              {ratings.map((star, index) => {
                const currentRating = index + 1;

                return (
                  <label key={index} className="flex">
                    <input
                      type="radio"
                      name="rating"
                      value={currentRating}
                      onClick={() => setRating(currentRating)}
                      className="hidden"
                    />
                    <div
                      onMouseEnter={() => setHover(currentRating)}
                      onMouseLeave={() => setHover(null)}
                      className="flex flex-col items-center"
                    >
                      <div className="px-4 py-3 rounded-lg">
                        {currentRating <= rating ? (
                          <StarIcon className="cursor-pointer text-primary" />
                        ) : currentRating <= hover ? (
                          <StarBorderIcon className="cursor-pointer text-keppel-700" />
                        ) : (
                          <StarBorderIcon className="cursor-pointer text-gray-300" />
                        )}
                      </div>
                      <h1 className="uppercase text-sm">{star}</h1>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
          <div className="relative mt-4 mb-4">
            <label className="font-bold text-sm">Healine</label>
            <Input
              type="text"
              action={handleHeader}
              className="border-none dark:border-none"
            />
          </div>

          <h2 className="font-bold text-sm">Review</h2>
          <div className="w-full md:w-full mb-2">
            <textarea
              className="leading-normal resize-none w-full h-40 py-2 px-3 text-sm text-gray-900 bg-gray-50 border-none dark:border-none focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-keppel-800"
              name="body"
              placeholder="Type Your Comment"
              onChange={handleContent}
              required
            ></textarea>
          </div>
          <Button
            type="submit"
            className="bg-slate-200 py-3 rounded-md font-bold hover:bg-blue-600 hover:text-white duration-500 "
          >
            Add Review
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ReviewModal;
