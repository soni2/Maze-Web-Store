"use client";

import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

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
      <div className="relative grid grid-row-6 gap-2 w-11/12 md:w-2/3 lg:w-2/3 shadow-lg rounded-md bg-white max-w-screen-lg min-h-[450px] border-0 overflow-hidden p-4">
        <div className="grid grid-cols-6 gap-2 row-span-2">
          <div
            className="aspect-square overflow-hidden bg-cover bg-no-repeat bg-center rounded-md"
            style={{
              backgroundImage: `url("${thumbnail}")`,
            }}
          />
          <h1 className="font-bold col-span-5 text-2xl">{title}</h1>
        </div>
        <form
          className="flex flex-col min-h-full row-span-4"
          onSubmit={submitReview}
        >
          <div className="flex flex-row justify-center gap-8 w-full">
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
                    <div className="bg-gray-100 px-4 py-3 rounded-lg">
                      {currentRating <= rating ? (
                        <StarIcon className="cursor-pointer text-yellow-400" />
                      ) : currentRating <= hover ? (
                        <StarBorderIcon className="cursor-pointer text-yellow-200" />
                      ) : (
                        <StarBorderIcon className="cursor-pointer text-gray-300" />
                      )}
                    </div>
                    <h1 className="capitalize">{star}</h1>
                  </div>
                </label>
              );
            })}
          </div>
          <div className="relative mt-4 mb-4">
            <label className="font-bold">Healine</label>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:bg-neutral-600 dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              onChange={handleHeader}
            />
          </div>

          <h2 className="text-gray-800 text-md font-bold">Review</h2>
          <div className="w-full md:w-full mb-2">
            <textarea
              className="bg-gray-100 rounded leading-normal resize-none w-full h-40 py-2 px-3 font-light placeholder-gray-500 focus:outline-none focus:bg-gray-200"
              name="body"
              placeholder="Type Your Comment"
              onChange={handleContent}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-slate-200 py-3 rounded-md font-bold hover:bg-blue-600 hover:text-white duration-500 "
          >
            Add Review
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReviewModal;
