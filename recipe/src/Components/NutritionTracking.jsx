import React, { useEffect, useState } from "react";
import { fetchNutrients, fetchQuery } from "../Functions/Api";
import NutritionValues from "./NutritionValues";
import { Link } from "react-router-dom";
import NeuritionlFacts from "./NeuritionlFacts";
import { loadFromStorage, saveToStorage } from "../utils/localStorage";

function NutritionTracking() {
  const [query, setQuery] = useState("");
  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState(false);

  const [nutritionState, setNutritionState] = useState(false);
  const [nutritionParameters, setNutritionParameters] = useState(
    loadFromStorage("nutritionParameters", {
      Calories: "No Limit Set",
      Fats: "No Limit Set",
      Carbohydrates: "No Limit Set",
      Sugar: "No Limit Set",
      Proteins: "No Limit Set",
    })
  );

  const [nutritionlValues, setNutritionlValues] = useState(
    loadFromStorage("nutritionlValues", {
      Calories: 0,
      Fats: 0,
      Carbohydrates: 0,
      Sugar: 0,
      Proteins: 0,
    })
  );

  let [neutriFactsStatus, setNeutriFactsStatus] = useState(false);
  let [targetRecipieId, setTargetRecipieId] = useState("");
  let [recipeTitle, setRecipeTitle] = useState("");
  let [factRecipeDetails, setFactRecipeDetails] = useState("");

  useEffect(() => {
    if (!search) return;

    const fetching = async () => {
      try {
        const data = await fetchQuery(query);
        setRecipies(data.results);
      } catch (err) {
        console.error(err);
      }
    };
    fetching();
  }, [search, query]);

  const handleNuterients = (id, title) => {
    setTargetRecipieId(id);
    setRecipeTitle(title);
    setNeutriFactsStatus(!neutriFactsStatus);
  };

  useEffect(() => {
    if (!neutriFactsStatus || !targetRecipieId) return;

    const fetch = async () => {
      try {
        const data = await fetchNutrients(targetRecipieId);
        setFactRecipeDetails(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, [neutriFactsStatus, targetRecipieId]);

  useEffect(() => {
    saveToStorage("nutritionParameters", nutritionParameters);
  }, [nutritionParameters]);

  useEffect(() => {
    saveToStorage("nutritionlValues", nutritionlValues);
  }, [nutritionlValues]);

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="w-full max-w-7xl px-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
          <div className="flex space-x-4">
            <button
              className="bg-orange-400 p-1 rounded"
              onClick={() => setNutritionState(!nutritionState)}
            >
              SetGoal
            </button>

            <Link
              to={"/nutritionStatus"}
              state={{ nutritionParameters, nutritionlValues }}
            >
              <button className="bg-orange-400 p-1 rounded cursor-pointer">
                View Status
              </button>
            </Link>
          </div>

          <div className="flex space-x-4">
            <input
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search Recipes"
              className="border border-gray-500 p-2 rounded"
            />
            <button
              className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
              onClick={() => setSearch(!search)}
            >
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipies.length > 0 ? (
            recipies.map((recipe, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded shadow-md p-4 bg-white"
                onClick={() => handleNuterients(recipe.id, recipe.title)}
              >
                <img
                  src={recipe.image || "https://via.placeholder.com/150"}
                  alt={recipe.title}
                  className="w-full h-32 object-cover rounded mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
              </div>
            ))
          ) : (
            <p className="text-gray-600">
              No recipes found. Please try another search.
            </p>
          )}
        </div>

        {nutritionState && (
          <div
            className="fixed top-[-34px] left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={() => setNutritionState(false)}
          >
            <div
              className="bg-white rounded-lg p-6 shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <NutritionValues
                nutritionParameters={nutritionParameters}
                setNutritionParameters={setNutritionParameters}
                setNutritionState={setNutritionState}
              ></NutritionValues>
            </div>
          </div>
        )}

        {neutriFactsStatus && (
          <div
            className="fixed top-[-34px] left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={() => setNeutriFactsStatus(false)}
          >
            <div
              className="bg-white rounded-lg p-6 shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <NeuritionlFacts
                recipeTitle={recipeTitle}
                factRecipeDetails={factRecipeDetails}
                setNeutriFactsStatus={setNeutriFactsStatus}
                nutritionlValues={nutritionlValues}
                setNutritionlValues={setNutritionlValues}
              ></NeuritionlFacts>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NutritionTracking;
