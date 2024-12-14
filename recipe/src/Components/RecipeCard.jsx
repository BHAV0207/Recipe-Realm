import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const RecipeCard = ({
  recipe,
  favourites,
  handleAddToFavourites,
  handelRemoveFavourites,
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
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [favState, setFavState] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleFavChange = () => {
    setFavState(!favState);
    if (favState == false) {
      handleAddToFavourites(recipe);
    } else {
      handelRemoveFavourites(recipe.id);
    }
  };

  const isFavourite = favourites.some((fav) => fav.id === recipe.id);

  const setChanges = () => {
    setRecipeCollectionBtn(!recipeCollectionBtn);
    setRecipeForCollection(recipe);
    setDropdownOpen(false); // Close dropdown after selection
  };

  const handleRating = () => {
    setRatingRecipe(recipe);
    setRatingBtn(true);
    setDropdownOpen(false); // Close dropdown after selection
  };

  const handleNotes = () => {
    setNoteBtn(true);
    setNoteRecipe(recipe);
    setDropdownOpen(false); // Close dropdown after selection
  };

  recipe.id;
  return (
    <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={recipe.image}
        alt={recipe.title}
      />
      <div className="p-2">
        <h3 className="text-lg font-bold">{recipe.title}</h3>
        <div className="flex justify-between items-center mt-2">
          <Link
            to={`/recipe/${recipe.id}`}
            className="text-blue-500 hover:text-blue-700 font-medium text-sm"
          >
            View Recipe
          </Link>
          <div>
            {/* Heart Button for Favourites */}
            <button onClick={handleFavChange} className="focus:outline-none">
              <FaHeart
                size={20}
                className={`transition-colors ${
                  isFavourite ? "text-red-500" : "text-gray-400"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
      {/* Dropdown Menu */}
      <div className="relative mt-2">
        <button
          onClick={toggleDropdown}
          className="bg-gray-300 rounded-md p-2 w-full text-center"
        >
          Options
        </button>
        {dropdownOpen && (
          <div className="absolute bg-white border rounded-md mt-1 shadow-lg w-full z-10">
            <button
              className="block px-4 py-2 text-left hover:bg-gray-100 w-full"
              onClick={setChanges}
            >
              Add to Collection
            </button>
            <button
              className="block px-4 py-2 text-left hover:bg-gray-100 w-full"
              onClick={handleRating}
            >
              Rate Recipe
            </button>
            <button
              className="block px-4 py-2 text-left hover:bg-gray-100 w-full"
              onClick={handleNotes}
            >
              Add Notes
            </button>
          </div>
        )}
      </div>
      {/* Display Notes and Rating */}
      <div className="mt-2 flex justify-between items-center">
        <p className="text-sm text-gray-600">
          {note ? `Note: ${note}` : "No Notes Added"}
        </p>
        <p className="text-yellow-500 font-bold text-sm flex items-center">
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
      </div>
    </div>
  );
};

export default RecipeCard;
