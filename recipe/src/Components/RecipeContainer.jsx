import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeContainer({
  recipies,
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
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {recipies?.map((recipe) => (
        <RecipeCard
          recipe={recipe}
          key={recipe.id}
          favourites={favourites}
          handleAddToFavourites={handleAddToFavourites}
          handelRemoveFavourites={handelRemoveFavourites}
          setRecipeCollectionBtn={setRecipeCollectionBtn}
          recipeCollectionBtn={recipeCollectionBtn}
          setRecipeForCollection={setRecipeForCollection}
          setRatingBtn={setRatingBtn}
          setRatingRecipe={setRatingRecipe}
          rating={rating[recipe.id]}
          setNoteBtn={setNoteBtn}
          setNoteRecipe={setNoteRecipe}
          note={note[recipe.id]}
        />
      ))}
    </div>
  );
}

export default RecipeContainer;
