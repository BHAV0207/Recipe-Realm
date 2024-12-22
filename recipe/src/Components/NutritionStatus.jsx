import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { saveToStorage } from "../utils/localStorage";

function NutritionStatus() {
  const location = useLocation();
  const nutritionParameters = location.state?.nutritionParameters;
  const nutritionlValues = location.state?.nutritionlValues;

  const navigate = useNavigate();

  const handleReset = () => {
    const resetValues = {
      Calories: 0,
      Fats: 0,
      Carbohydrates: 0,
      Sugar: 0,
      Proteins: 0,
    };

    saveToStorage("nutritionlValues", resetValues);
    navigate(-1);
  };

  const handleResetGoals = () => {
    const resetGoals = {
      Calories: "no Limit Set",
      Fats: "no Limit Set",
      Carbohydrates: "no Limit Set",
      Sugar: "no Limit Set",
      Proteins: "no Limit Set",
    };
    saveToStorage("nutritionParameters", resetGoals);
    navigate(-1);
  };

  return (
    <div className="flex flex-col p-4">
      <div className="flex justify-left ml-4 space-x-5">
        <button
          className="rounded bg-red-500 p-1 px-2"
          onClick={() => navigate(-1)}
        >
          back
        </button>
      </div>
      <div className="flex flex-col lg:flex-row justify-center space-y-6 lg:space-y-0 lg:space-x-10 mt-10">
        <div className="w-full lg:w-[500px] bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center space-y-6">
          <div className="text-2xl font-extrabold text-center">
            Nutritional Goals
          </div>
          <div className="w-full space-y-4">
            {nutritionParameters
              ? Object.entries(nutritionParameters).map(
                  ([key, value], index) => (
                    <div key={index} className="flex flex-col space-y-2">
                      <label
                        htmlFor={key.toLowerCase()}
                        className="text-lg font-semibold text-gray-700"
                      >
                        {key}
                      </label>
                      <div className="w-full bg-gray-300 h-6 rounded-full relative">
                        <div
                          className="bg-green-500 h-full rounded-full"
                          style={{ width: `${Math.min(value, 100)}%` }}
                        ></div>
                        <span className="absolute left-1/2 transform -translate-x-1/2 top-0 text-sm text-white font-semibold">
                          {value}
                        </span>
                      </div>
                    </div>
                  )
                )
              : "No Nutrition Data Available"}
          </div>
          <button
            className="rounded bg-yellow-500 p-1 ml-2 px-2"
            onClick={handleResetGoals}
          >
            Reset Goals
          </button>
        </div>
        <div className="w-full lg:w-[500px] bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center space-y-6">
          <div className="text-2xl font-extrabold text-center">
            Nutrition Consumed
          </div>
          <div className="w-full space-y-4">
            {nutritionlValues
              ? Object.entries(nutritionlValues).map(([key, value], index) => (
                  <div key={index} className="flex flex-col space-y-2">
                    <label
                      htmlFor={key.toLowerCase()}
                      className="text-lg font-semibold text-gray-700"
                    >
                      {key}
                    </label>
                    <div className="w-full bg-gray-300 h-6 rounded-full relative">
                      <div
                        className="bg-green-500 h-full rounded-full"
                        style={{ width: `${Math.min(value, 100)}%` }}
                      ></div>
                      <span className="absolute left-1/2 transform -translate-x-1/2 top-0 text-sm text-white font-semibold">
                        {value} {key == "Calories" ? "cal" : "g"}
                      </span>
                    </div>
                  </div>
                ))
              : "No Nutrition Data Available"}
          </div>
          <button
            className="rounded bg-yellow-500 p-1 ml-2 px-2"
            onClick={handleReset}
          >
            Reset Values
          </button>
        </div>
      </div>
    </div>
  );
}

export default NutritionStatus;
