import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RecipeDetails from "./Pages/RecipeDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/recipe/:id" element={<RecipeDetails></RecipeDetails>} />
      </Routes>
    </Router>
  );
}

export default App;
