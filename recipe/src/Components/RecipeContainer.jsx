import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeContainer({
  recipies,
  favourites,
  handleAddToFavourites,
  setRecipeCollectionBtn,
  recipeCollectionBtn,
  setRecipeForCollection,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {recipies?.map((recipe) => (
        <RecipeCard
          recipe={recipe}
          key={recipe.id}
          favourites={favourites}
          handleAddToFavourites={handleAddToFavourites}
          setRecipeCollectionBtn={setRecipeCollectionBtn}
          recipeCollectionBtn={recipeCollectionBtn}
          setRecipeForCollection={setRecipeForCollection}
        />
      ))}
    </div>
  );
}

export default RecipeContainer;
