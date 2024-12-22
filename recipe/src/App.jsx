import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RecipeDetails from "./Pages/RecipeDetails";
import { useState } from "react";
import image from "../public/image.png"; // Adjust the path based on your image location
import MealPlanning from "./Pages/MealPlanning";
import NutritionTracking from "./Components/NutritionTracking";
import NutritionStatus from "./Components/NutritionStatus";

function App() {
  let [message, setMessage] = useState(true);
  let [dropMenu, setDropMenu] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header dropMenu={dropMenu} setDropMenu={setDropMenu} />

        <main className="flex-1 px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route
              path="/mealPlanning"
              element={<MealPlanning></MealPlanning>}
            />
            <Route
              path="/nutritionTracking"
              element={<NutritionTracking></NutritionTracking>}
            />
            <Route
              path="/nutritionStatus"
              element={<NutritionStatus></NutritionStatus>}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

const Header = ({ dropMenu, setDropMenu }) => {
  return (
    <header className="bg-orange-500 text-white py-2 mb-4 shadow-xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12">
              <img src={image} alt="Chef Logo" className="w-full h-full" />
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold">RecipeRealm</h1>
          </Link>

          <div className="relative">
            <button
              className="text-black p-2 bg-orange-400 rounded"
              onClick={() => setDropMenu(!dropMenu)}
            >
              Menu
            </button>
            {dropMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                <Link
                  to="/mealPlanning"
                  className="block px-4 py-2 text-black hover:bg-orange-100"
                  onClick={() => setDropMenu(false)}
                >
                  Meal Plan
                </Link>
                <Link
                  to="/nutritionTracking"
                  className="block px-4 py-2 text-black hover:bg-orange-100"
                  onClick={() => setDropMenu(false)}
                >
                  Nutrition Tracking
                </Link>
              </div>
            )}
          </div>
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
