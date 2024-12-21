import React from "react";

function NutritionValues({
  nutritionParameters,
  setNutritionParameters,
  setNutritionState,
}) {
  const handleApplyButton = () => {
    setNutritionState(false);
  };

  return (
    <div className="w-[400px] h-450px] bg-white ">
      <div className="mb-4 font-extrabold text-2xl flex items-center justify-center">
        <h1>Nutrition Goal</h1>
      </div>
      <div className="flex flex-col max-w-md mx-auto p-6 space-y-6 bg-white shadow-lg rounded-lg">
        {[
          { label: "Calories", placeholder: "In Kcal" },
          { label: "Fats", placeholder: "In g" },
          { label: "Carbohydrates", placeholder: "In g" },
          { label: "Sugar", placeholder: "In g" },
          { label: "Proteins", placeholder: "In g" },
        ].map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <label
              htmlFor={item.label.toLowerCase()}
              className="font-semibold text-gray-700 w-1/3"
            >
              {item.label}
            </label>
            <input
              id={item.label.toLowerCase()}
              type="number"
              placeholder={item.placeholder}
              className="w-2/3 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700"
              onChange={(e) =>
                setNutritionParameters({
                  ...nutritionParameters,
                  [item.label]: e.target.value,
                })
              }
            />
          </div>
        ))}
        <div className="mt-6 flex justify-center">
          <button
            className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-green-600 "
            onClick={handleApplyButton}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default NutritionValues;
