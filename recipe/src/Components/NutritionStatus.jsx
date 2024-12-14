import React from "react";
import { useLocation } from "react-router-dom";

function NutritionStatus() {
  const location = useLocation();
  const nutritionParameters = location.state?.nutritionParameters;

  return (
    <div className="flex justify-center mt-10">
      <div className="w-[500px] bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center space-y-6">
        <div className="text-2xl font-extrabold text-center">Nutritional Tracker</div>
        <div className="w-full space-y-4">
          {nutritionParameters
            ? Object.entries(nutritionParameters).map(([key, value], index) => (
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
              ))
            : "No Nutrition Data Available"}
        </div>
      </div>
    </div>
  );
}

export default NutritionStatus;
