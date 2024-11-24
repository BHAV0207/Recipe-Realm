import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeContainer({ recipies  , favourites, handleAddToFavourites}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {recipies?.map((ele) => (
        <RecipeCard recipe={ele} key={ele.id} favourites={favourites} handleAddToFavourites={handleAddToFavourites} />
      ))}
    </div>
  );
}

export default RecipeContainer;
