import React, { useEffect, useState } from "react";
import MealChart from "../Components/MealChart";

function MealPlanning() {
  let [mealPlan, setMealPlan] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  let [targetCalories, setCalories] = useState(2000);
  let [userDietPreference, setUserDietPreference] = useState("vegetarian");
  const API_KEY = "35bcce9214244e5eacde12a139eabbe7";
  // console.log(userDietPreference);
  // console.log(targetCalories);

  const fetchMealPlan = async () => {
    setLoading(true);
    setError(null);

    try {
      const fetchMealPlan = await fetch(
        `https://api.spoonacular.com/mealplanner/generate?timeFrame=week&targetCalories=${targetCalories}&diet=${userDietPreference}&apiKey=${API_KEY}`
      );

      const data = await fetchMealPlan.json();
      // console.log(data);
      setMealPlan(data.week);
      // console.log(mealPlan);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMealPlan();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <MealChart
        mealPlan={mealPlan}
        fetchMealPlan={fetchMealPlan}
        setCalories={setCalories}
        setUserDietPreference={setUserDietPreference}
      ></MealChart>
    </div>
  );
}

export default MealPlanning;
