import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RecipeDetails from "./Pages/RecipeDetails";
import { useState } from "react";
import image from "../public/image.png"; // Adjust the path based on your image location
import MealPlanning from "./Pages/MealPlanning";

function App() {
  let [message, setMessage] = useState(true);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route
              path="/mealPlanning"
              element={<MealPlanning></MealPlanning>}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

const Header = () => {
  return (
    <header className="bg-orange-500 text-white py-2 mb-4 shadow-xl drop-shadow-lg">
      <div className="container mx-auto px-4 flex justify-between">
        <div className="flex items-center">
          <div className="w-12 h-12 mr-3">
            <img src={image} alt="Chef Logo" className="w-full h-full" />
          </div>

          <div className="text-left">
            <h1 className="text-4xl font-bold tracking-wide font-extrabold">
              RecipeRealm
            </h1>
          </div>
        </div>
        <div className="mt-1">
          <Link
            to={"/mealPlanning"}
            className="text-3xl font-semibold text-white hover:text-blue-500 bg-black rounded p-1"
          >
            Plan Meal
          </Link>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-gray-100 py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm font-light">
          &copy; 2024 RecipeRealm. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
