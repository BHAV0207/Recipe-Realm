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

        <main className="flex-1">
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
    <header className="bg-orange-500 text-white py-2 mb-4 shadow-xl drop-shadow-lg relative">
      <div className="container mx-auto px-4 flex justify-between">
        <Link to="/">
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
        </Link>

        <div className="mt-1 px-2 relative">
          <button
            className="text-black p-2 bg-orange-400"
            onClick={() => setDropMenu(!dropMenu)}
          >
            Menu
          </button>
          {dropMenu && (
            <div
              className="absolute top-40 right-0 bg-white shadow-lg rounded mt-2 z-10"
              style={{ transform: "translateY(-100%)" }}
            >
              <Link
                onClick={() => setDropMenu(!dropMenu)}
                to="/mealPlanning"
                className="block px-4 py-2 text-black hover:bg-orange-100"
              >
                Meal Plan
              </Link>
              <Link
                onClick={() => setDropMenu(!dropMenu)}
                to="/nutritionTracking"
                className="block px-4 py-2 text-black hover:bg-orange-100"
              >
                Nutrition Tracking
              </Link>
            </div>
          )}
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
