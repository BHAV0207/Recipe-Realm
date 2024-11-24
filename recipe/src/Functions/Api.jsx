const API_KEY = "f61e9b7543034143a0f3b6cb51354dec";
const BASE_URL = "https://api.spoonacular.com/recipes";
export const fetchRecipies = async (query, diet, cuisine, time, page = 1, number = 10) => {
  const offset = (page - 1) * number;

  const url = `${BASE_URL}/complexSearch?apiKey=${API_KEY}&query=${encodeURIComponent(
    query
  )}&diet=${diet}&cuisine=${cuisine}&time=${time}&number=${number}&offset=${offset}`;

  try {
    const res = await fetch(url);

    const data = await res.json();
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
