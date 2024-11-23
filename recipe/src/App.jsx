import { BrowserRouter as Router, Routes, Route, useSearchParams } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RecipeDetails from "./Pages/RecipeDetails";
import { useState } from "react";

function App() {
  let [message , setMessage] = useState(true)
  return (
    <Router>
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
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
    <header className="bg-blue-600 text-white py-1 mb-4 shadow-md">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold">RecipeRealm</h1>
        <p className="mt-2 text-lg">Your Ultimate Recipe Guide</p>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 RecipeRealm. All Rights Reserved.</p>
      </div>
    </footer>
  );
};