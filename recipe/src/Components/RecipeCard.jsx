import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <img
        src={recipe.image}
        alt={recipe.title}
      />
      <div>
        <h3>{recipe.title}</h3>
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
