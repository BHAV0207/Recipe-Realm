const API_KEY = "a6cdb4c452d944fe98c856460c2642b7";
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
