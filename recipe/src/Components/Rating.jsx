import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

function Rating({ setRatingBtn, addRating, ratingRecipe }) {
  let [rating, setRating] = useState(0);

  const handelChange = (newRating) => {
    setRating(newRating);
  };

  const handleRating = () => {
    if (ratingRecipe) {
      addRating(ratingRecipe.id, rating);
    }
    setRatingBtn(false);
  };

  // Dynamic star size based on screen width
  const getStarSize = () => {
    if (window.innerWidth < 380) return 30; // Extra small screens
    if (window.innerWidth < 640) return 40; // Small screens
    return 80; // Larger screens
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div
        className="bg-gray-300 min-h-[200px] w-[95%] max-w-[500px] p-3 sm:p-6 
                    flex flex-col justify-center items-center rounded-lg"
      >
        <h2 className="text-sm sm:text-base md:text-lg font-bold mb-2">
          Rate this Recipe
        </h2>
        <div className="scale-75 sm:scale-100">
          <ReactStars
            count={5}
            size={getStarSize()}
            activeColor="#ffd700"
            onChange={handelChange}
          />
        </div>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-700">
          Rating: {rating}
        </p>
        <button
          className="bg-black text-white px-3 py-1 sm:px-4 sm:py-2 rounded mt-2 sm:mt-4 
                   text-sm sm:text-base hover:bg-gray-800"
          onClick={handleRating}
        >
          Rate
        </button>
      </div>
    </div>
  );
}

export default Rating;
