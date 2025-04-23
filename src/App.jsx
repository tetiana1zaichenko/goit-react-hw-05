import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<h2>HomePage</h2>}></Route>
        <Route path="/movies" element={<h2>MoviesPage</h2>}></Route>
        <Route
          path="/movies/:movieId"
          element={<h2>MovieDetailsPage</h2>}
        ></Route>
        <Route
          path="/movies/:movieId/cast"
          element={<h2>MovieCast</h2>}
        ></Route>
        <Route
          path="/movies/:movieId/reviews"
          element={<h2>MovieReviews</h2>}
        ></Route>
        <Route path="*" element={<h2>NotFoundPage</h2>}></Route>
      </Routes>
    </div>
  );
}

export default App;
