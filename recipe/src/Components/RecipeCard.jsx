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
  setNoteBtn,
  setNoteRecipe,
  note,
}) => {
  const handleAdd = () => {
    handleAddToFavourites(recipe);
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

  const handleNotes = () => {
    setNoteBtn(true);
    setNoteRecipe(recipe);
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
            <p className="text-yellow-500 font-bold text-sm text-center mt-2 flex items-center">
              {note ? <>{note}</> : "No note"}
            </p>
            <button
              onClick={handleNotes}
              className="bg-gray-300 rounded p-0.5 text-center "
            >
              Notes
            </button>
            <p className="text-yellow-500 font-bold text-sm text-center mt-2 flex items-center">
              {rating ? (
                <>
                  {rating}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568L24 9.423l-6 5.844L19.336 24 12 20.201 4.664 24 6 15.267 0 9.423l8.332-1.268z" />
                  </svg>
                </>
              ) : (
                "No Rating"
              )}
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
        {isFavourite ? "Added to Fav" : "Add to Favourites"}
      </button>

      <button className="bg-green-300 rounded-md p-2 ml-2" onClick={setChanges}>
        Add To Collection
      </button>
    </div>
  );
};

export default RecipeCard;
