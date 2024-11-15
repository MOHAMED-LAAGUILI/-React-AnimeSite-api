import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimePage from "./pages/AnimePage"; // Ensure this is the correct path to your AnimePage
import Home from "./pages/HomePage";
import AnimeByGenre from "./pages/AnimeByGenre";
import DevPage from "./pages/DevPage";
import MoviePage from "./pages/Movies";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page at the root */}
        <Route path="/anime" element={<AnimePage />} /> {/* Anime page with a defined path */}
        <Route path="/anime-by-genre/:genreId" element={<AnimeByGenre/>} />
        <Route path="/dev-info" element={<DevPage />} /> {/* Anime page with a defined path */}
        <Route path="/movies" element={<MoviePage />} /> {/* Anime page with a defined path */}
      </Routes>
    </Router>
  );
};

export default App;
