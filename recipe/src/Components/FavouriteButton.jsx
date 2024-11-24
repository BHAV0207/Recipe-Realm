import React from "react";

function FavouriteButton({ favouriteBtn, setFavouriteBtn }) {
  return (
    <button className="bg-orange-500 p-2 rounded-md" onClick={() => setFavouriteBtn(!favouriteBtn)}>
      {favouriteBtn ? "HideFavourites" : "Favourites"}
    </button>
  );
}

export default FavouriteButton;
