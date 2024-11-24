import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { recipeDetails } from "../Functions/Api";
import ReactMarkdown from "react-markdown";

function RecipeDetails() {
  const { id } = useParams();

  let [isLoading, setIsLoading] = useState(true);
  let [err, setErr] = useState(false);
  let [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getRecipeDetails = async () => {
      try {
        const data = await recipeDetails(id);
        setRecipe(data);
        setIsLoading(false);
      } catch (err) {
        setErr(err);
        setIsLoading(false);
      }
    };

    getRecipeDetails();
  }, [id]);


  if (isLoading) return <div className="text-center text-xl">Loading...</div>;
  if (err) return <div className="text-center text-xl text-red-500">Error fetching recipe details</div>;
  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        className="w-full rounded-lg mb-4"
        src={recipe.image}
        alt={recipe.title}
      />
  
      <h3 className="text-2xl font-semibold mb-2">Ingredients</h3>
      <ul className="list-disc pl-5">
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id} className="mb-1">
            {ingredient.original}
          </li>
        ))}
      </ul>
  
      <h3 className="text-2xl font-semibold mt-4 mb-2">Instructions</h3>
   
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: recipe.instructions }}
      />
  
      <h4 className="text-xl font-medium mt-4">
        Cooking Time: {recipe.readyInMinutes} minutes
      </h4>
    </div>
  );  
};

export default RecipeDetails;
