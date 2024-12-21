import React from "react";

function NeuritionlFacts({
  recipeTitle,
  factRecipeDetails,
  setNeutriFactsStatus,
  nutritionlValues,
  setNutritionlValues,
}) {
  const extractNumber = (str) => {
    const match = str.match(/(\d+(\.\d+)?)/);
    return match ? parseFloat(match[0]) : 0;
  };

  const sugarNutrient = factRecipeDetails?.nutrients?.find(
    (nutrient) => nutrient.name === "Sugar"
  );
  const sugarAmount = sugarNutrient ? sugarNutrient.amount : "Not available";

  const handleClick = () => {
    setNeutriFactsStatus(false);
    setNutritionlValues({
      Calories:
        nutritionlValues.Calories + extractNumber(factRecipeDetails.calories),
      Fats: nutritionlValues.Fats + extractNumber(factRecipeDetails.fat),
      Carbohydrates:
        nutritionlValues.Carbohydrates + extractNumber(factRecipeDetails.carbs),
      Sugar: nutritionlValues.Sugar + sugarAmount,
      Proteins:
        nutritionlValues.Proteins + extractNumber(factRecipeDetails.protein),
    });
  };


  
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
        <div>
          <h2 className="font-semibold text-lg">Sugar</h2>
          <p className="text-gray-700">{sugarAmount} g</p>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          className="bg-orange-400 text-white py-2 px-6 rounded-lg hover:bg-orange-500 transition duration-300"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default NeuritionlFacts;
