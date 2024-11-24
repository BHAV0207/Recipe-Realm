import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe, favourites, handleAddToFavourites }) => {
  const handleAdd = () => {
    handleAddToFavourites(recipe); // Add to favourites
  };

  const isFavourite = favourites.some((fav) => fav.id === recipe.id);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={recipe.image}
        alt={recipe.title}
      />
      <div className="p-2">
        <h3 className="text-lg font-bold">{recipe.title}</h3>
        <Link
          to={`/recipe/${recipe.id}`}
          className="mt-2 text-blue-500 hover:text-blue-700 font-medium text-sm"
        >
          View Recipe
        </Link>
      </div>
      <button
        onClick={handleAdd}
        disabled={isFavourite}
        className={`mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg ${isFavourite ? 'opacity-50' : ''}`}
      >
        {isFavourite ? "Added to Favourites" : "Add to Favourites"}
      </button>
    </div>
  );
};


export default RecipeCard;
