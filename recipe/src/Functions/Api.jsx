const API_KEY = "35bcce9214244e5eacde12a139eabbe7";
// 176b50e9d89f48fdbf08112f2a740160
// f61e9b7543034143a0f3b6cb51354dec
// 35bcce9214244e5eacde12a139eabbe7
const BASE_URL = "https://api.spoonacular.com/recipes";

export const fetchQuery = async (query) => {
  const url = `${BASE_URL}/complexSearch?query=${query}&apiKey=${API_KEY}`;

  try {
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export const fetchRecipies = async (
  query,
  diet,
  cuisine,
  time,
  page = 1,
  number = 10
) => {
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

  try {
    const res = await fetch(url);
    const data = res.json();

    return data;
  } catch (err) {
    throw err;
  }
};

export const fetchNutrients = async (id) => {
  const url = `${BASE_URL}/${id}/nutritionWidget.json?apiKey=${API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
  catch (err)
  {
    throw err;
  }
};
