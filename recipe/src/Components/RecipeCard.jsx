import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
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
    </div>
  );
};

export default RecipeCard;
