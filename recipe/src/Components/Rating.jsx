import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

function Rating({setRatingBtn , addRating , ratingRecipe}) {
  let [rating, setRating] = useState(0);

  const handelChange = (newRating) => {
    setRating(newRating);
  };

  const handleRating = () => {
    if(ratingRecipe){
      addRating(ratingRecipe.id , rating);
    }
    setRatingBtn(false)

  }
  return (
    <div className="bg-gray-300 h-[300px] w-[500px] p-6 flex flex-col justify-center items-center">
      <h2 className="text-lg font-bold mb-2">Rate this Recipe</h2>
      <ReactStars
        count={5}
        size={100}
        activeColor="#ffd700"
        onChange={handelChange}
      />
      <p className="mt-4 text-gray-700">Rating : {rating}</p>

      <button className="bg-black text-white p-1 rounded " onClick={handleRating}>Rate</button>
    </div>
  );
}

export default Rating;
