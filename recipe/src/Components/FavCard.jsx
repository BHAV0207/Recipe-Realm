import React from "react";

function FavCard({ recipe , handelRemoveFavourites}) {

  const func = () => {
    handelRemoveFavourites(recipe.id);
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={recipe.image}
        alt={recipe.title}
      />
      <div className="p-2">
        <h3 className="text-lg font-bold">{recipe.title}</h3>
      </div>

      <button onClick={func} className="bg-red-500 rounded-md p-1">Remove</button>
    </div>
  );
}

export default FavCard;
