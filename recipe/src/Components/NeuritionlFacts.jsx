import React from "react";

function NeuritionlFacts({
  recipeTitle,
  factRecipeDetails,
  setNeutriFactsStatus,
  nutritionlValues,
  setNutritionlValues,
}) {
  const extractNumber = (str) => {
    if (typeof str === "number") return str;
    const match = String(str).match(/(\d+(\.\d+)?)/);
    return match ? parseFloat(match[0]) : 0;
  };

  const sugarNutrient = factRecipeDetails?.nutrients?.find(
    (nutrient) => nutrient.name === "Sugar"
  );
  const sugarAmount = sugarNutrient ? sugarNutrient.amount : "Not available";

  const handleClick = () => {
    setNeutriFactsStatus(false);
    const newValues = {
      Calories:
        extractNumber(nutritionlValues.Calories) +
        extractNumber(factRecipeDetails.calories),
      Fats:
        extractNumber(nutritionlValues.Fats) +
        extractNumber(factRecipeDetails.fat),
      Carbohydrates:
        extractNumber(nutritionlValues.Carbohydrates) +
        extractNumber(factRecipeDetails.carbs),
      Sugar: extractNumber(nutritionlValues.Sugar) + extractNumber(sugarAmount),
      Proteins:
        extractNumber(nutritionlValues.Proteins) +
        extractNumber(factRecipeDetails.protein),
    };
    setNutritionlValues(newValues);
  };

  return (
    <div className="w-full max-w-[400px] h-auto min-h-[500px] bg-white rounded-lg shadow-lg p-4 sm:p-6 overflow-auto mx-auto">
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
