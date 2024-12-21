import React from "react";

function NeuritionlFacts({ recipeTitle, factRecipeDetails }) {
  console.log(factRecipeDetails);
  return (
    <div className="w-[400px] h-[500px] bg-white rounded-lg shadow-lg p-6 overflow-auto">
    
      <h1 className="text-2xl font-semibold text-center mb-4">{recipeTitle}</h1>

      <div className="space-y-5 space-x-6">
        <div>
          <h2 className="font-semibold text-lg">Calories</h2>
          <p className="text-gray-700">{factRecipeDetails.calories}</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg">Protein</h2>
          <p className="text-gray-700">{factRecipeDetails.protein}</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg">Fat</h2>
          <p className="text-gray-700">{factRecipeDetails.fat}</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg">Carbs</h2>
          <p className="text-gray-700">{factRecipeDetails.carbs}</p>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button className="bg-orange-400 text-white py-2 px-6 rounded-lg hover:bg-orange-500 transition duration-300">
          Add
        </button>
      </div>
    </div>
  );
}

export default NeuritionlFacts;
