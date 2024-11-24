import React, { useState } from "react";
import FavCard from "./FavCard";

function Favourites({ favourites , handelRemoveFavourites}) {
  return (
    <div className="font-bold">
      <h2 className="text-xl mb-4">Your Favourites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favourites.map((recipe) => (
          <FavCard key={recipe.id} recipe={recipe} handelRemoveFavourites={handelRemoveFavourites} />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
