import React from "react";
import { Link } from "react-router-dom";

function CollectionDisplay({ setDisplayCollection, selectedCollection }) {
  return (
    <div className="p-4 sm:p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">
        {selectedCollection.tag} Recipes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {selectedCollection.recipes.map((recipe, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 rounded-md shadow-md hover:shadow-lg"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="rounded-t-md w-full h-40 object-cover"
            />
            <h3 className="text-lg font-medium mt-2">{recipe.title}</h3>
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-blue-500 mt-2 block hover:text-blue-700"
            >
              View Recipe
            </Link>
          </div>
        ))}
      </div>
      <button
        onClick={() => setDisplayCollection(false)}
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Hide
      </button>
    </div>
  );
}

export default CollectionDisplay;
