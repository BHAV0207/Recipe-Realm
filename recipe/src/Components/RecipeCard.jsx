import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({
  recipe,
  favourites,
  handleAddToFavourites,
  setRecipeCollectionBtn,
  recipeCollectionBtn,
  setRecipeForCollection,
  setRatingBtn,
  setRatingRecipe,
  rating,
}) => {
  const handleAdd = () => {
    handleAddToFavourites(recipe); // Add to favourites
  };

  const isFavourite = favourites.some((fav) => fav.id === recipe.id);

  const setChanges = () => {
    setRecipeCollectionBtn(!recipeCollectionBtn);
    setRecipeForCollection(recipe);
  };

  const handleRating = () => {
    setRatingRecipe(recipe);
    setRatingBtn(true);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={recipe.image}
        alt={recipe.title}
      />
      <div className="p-2">
        <h3 className="text-lg font-bold">{recipe.title}</h3>
        <div className="flex justify-between">
          <Link
            to={`/recipe/${recipe.id}`}
            className="mt-2 text-blue-500 hover:text-blue-700 font-medium text-sm"
          >
            View Recipe
          </Link>
          <div className="flex space-x-2">
            <p className="text-yellow-500 font-bold text-sm text-center mt-2">
              {rating ? `Rating: ${rating}/5` : "No Rating Yet"}
            </p>
            <button
              className="bg-orange-300 rounded-md p-0.5"
              onClick={handleRating}
            >
              Rate
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={handleAdd}
        disabled={isFavourite}
        className={`mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg ${
          isFavourite ? "opacity-50" : ""
        }`}
      >
        {isFavourite ? "Added to Favourites" : "Add to Favourites"}
      </button>

      <button className="bg-green-300 rounded-md p-2 ml-2" onClick={setChanges}>
        Add To Collection
      </button>
    </div>
  );
};

export default RecipeCard;
