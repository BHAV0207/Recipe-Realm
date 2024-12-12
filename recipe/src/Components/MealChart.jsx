import React from "react";
import { Link } from "react-router-dom";
import RecipeDetails from "../Pages/RecipeDetails";

function MealChart({ mealPlan, fetchMealPlan , setCalories , setUserDietPreference}) {
  let days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  const reRender = () => {
    fetchMealPlan();
  };

  if (!mealPlan) {
    return <p>No meal plan available. Please regenerate the plan.</p>;
  }
  console.log(mealPlan);

  return (
    <div className="flex justify-center items-center flex-col ">
      <input type="text" />
      <button
        className="bg-green-400 p-2 rounded font-semibold "
        onClick={reRender}
      >
        ReGenerate
      </button>
      <div className="meal-planner grid grid-cols-4 gap-4 p-6 ">
        <div className="font-bold text-2xl">Day</div>
        <div className="font-bold text-2xl">Breakfast</div>
        <div className="font-bold text-2xl">Lunch</div>
        <div className="font-bold text-2xl">Dinner</div>

        {days.map((day) => (
          <React.Fragment key={day}>
            <div className="font-semibold text-xl">{day}</div>
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
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default MealChart;
