import React from "react";
import { Link } from "react-router-dom";
import RecipeDetails from "../Pages/RecipeDetails";

function MealChart({
  mealPlan,
  fetchMealPlan,
  setCalories,
  setUserDietPreference,
}) {
  let days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  let mealType = [
    "Vegetarian",
    "Gluten Free",
    "Ketogenic",
    "Lacto-Vegetarian",
    "Vegan",
    "Pescetarian",
    "Paleo",
    "Primal",
  ];

  const reRender = () => {
    fetchMealPlan();
  };

  if (!mealPlan) {
    return <p>No meal plan available. Please regenerate the plan.</p>;
  }
  // console.log(mealPlan);

  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="flex flex-col md:flex-row items-center gap-4 bg-gray-100 p-4 rounded shadow-lg">
        <div className="flex flex-col w-full md:w-auto">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Enter Calories
          </label>
          <input
            type="text"
            placeholder="e.g., 2000"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={(e) => setCalories(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full md:w-auto">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Choose Diet Preference
          </label>
          <select
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={(e) => setUserDietPreference(e.target.value)}
          >
            {mealType.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <button
          className="bg-green-500 text-white font-semibold px-6 py-2 rounded hover:bg-green-600 transition focus:ring-2 focus:ring-green-400 focus:outline-none"
          onClick={reRender}
        >
          ReGenerate
        </button>
      </div>

      <div className="meal-planner grid grid-cols-4 gap-4 p-6 ">
        {/* <div className="font-bold text-2xl">Day</div>
        <div className="font-bold text-2xl">Breakfast</div>
        <div className="font-bold text-2xl">Lunch</div>
        <div className="font-bold text-2xl">Dinner</div> */}

        {days.map((day) => (
          <React.Fragment key={day}>
            <div className="shadow-lg">
              <div className="font-semibold text-xl">{day.toUpperCase()}</div>
              {mealPlan[day]?.meals.map((meal, index) => (
                <div key={index} className="meal-slot border p-2">
                  <Link to={`/recipe/${meal.id}`}>
                    <img
                      src={`https://spoonacular.com/recipeImages/${meal.id}-312x231.${meal.imageType}`}
                      alt={meal.title}
                      className="h-16 w-16 object-cover rounded"
                    />
                    <p className="text-sm font-medium">{meal.title}</p>
                  </Link>
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default MealChart;
