const API_KEY = "176b50e9d89f48fdbf08112f2a740160";
const BASE_URL = "https://api.spoonacular.com/recipes";

export const fetchRecipies = async (query) => {
  const url = `${BASE_URL}/complexSearch?apiKey=${API_KEY}&query=${encodeURIComponent(
    query
  )}`;

  try {
    const res = await fetch(url);
    const data = res.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const recipeDetails = async (id) => {
  const url = `${BASE_URL}/${id}/information?apiKey=${API_KEY}`;

  try{
    const res = await fetch(url);
    const data = res.json();

    return data;
  }
  catch(err){
    throw err;
  }
};
