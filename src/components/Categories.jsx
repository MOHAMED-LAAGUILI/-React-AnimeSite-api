import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation to anime by genre page

const CategoriesSection = () => {
  const [generes, setGeneres] = useState([]); // State for storing genres
  const [currentPage, setCurrentPage] = useState(1); // State for tracking the current page
  const [itemsPerPage] = useState(8); // Items per page (4 genres per page)
  const navigate = useNavigate(); // For navigation after genre click

  // Fetch genres data on component mount
  useEffect(() => {
    fetch("https://api.jikan.moe/v4/genres/anime")
      .then((response) => response.json())
      .then((data) => {
        setGeneres(data.data);
      })
      .catch((err) => console.error("Failed to fetch genres:", err));
  }, []);

  // Handle genre click to navigate to AnimeByGenre with selected genre
  const handleGenreClick = (genreId) => {
    navigate(`/anime-by-genre/${genreId}`); // Navigates to the Anime page based on genreId
  };

  // Calculate the index of the first and last item for the current page
  const indexOfLastGenre = currentPage * itemsPerPage;
  const indexOfFirstGenre = indexOfLastGenre - itemsPerPage;
  const currentGenres = generes.slice(indexOfFirstGenre, indexOfLastGenre);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate the total number of pages
  const totalPages = Math.ceil(generes.length / itemsPerPage);

  return (
    <div>
      {/* Genres Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {currentGenres.map((category) => (
          <div
            key={category.mal_id}
            className="relative flex items-center justify-center rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group bg-gray-800 dark:bg-gray-700 cursor-pointer"
            onClick={() => handleGenreClick(category.mal_id)} // Pass genre id on click
          >
            {/* Add background color and an effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:bg-opacity-50 transition-all duration-300"></div>

            <div className="relative p-6 z-10">
              <h2 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-all duration-300">
                {category.name}
              </h2>
              <p className="text-sm text-gray-300">{category.count} anime</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
      
        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-1 mx-1 text-white rounded-lg hover:bg-gray-700 ${
              currentPage === index + 1 ? "bg-indigo-600" : "bg-gray-800"
            }`}
          >
            {index + 1}
          </button>
        ))}
       
      </div>
    </div>
  );
};

export default CategoriesSection;
