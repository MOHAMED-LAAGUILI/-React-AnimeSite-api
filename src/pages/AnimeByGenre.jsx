import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To extract genreId from URL
import { useQuery } from "@tanstack/react-query";
import Layout from "../Layout/layout";
import Title from "../components/Title";

// Fetch anime data based on selected genre and sorted by popularity
const fetchAnimeDataByGenreAndPopularity = async (genreId) => {
  const response = await fetch(`https://api.jikan.moe/v4/anime?genres=${genreId}&order_by=popularity&sort=desc&min_score=7.5`);
  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  const data = await response.json();
  return data;
};

// Spinner component
const Spinner = () => (
    <div className="relative h-screen">
      <div className="absolute top-[30%] left-[230%] transform -translate-x-1/2 -translate-y-1/2">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    </div>
  );
  
  
const AnimeByGenre = () => {
  const { genreId } = useParams(); // Extract genreId from URL
  const [setGenres] = useState([]); // This is still unused; can be removed if not necessary

  // Query for fetching anime based on selected genre and sorted by popularity
  const { data, error, isLoading } = useQuery({
    queryKey: ["animeByGenre", genreId],
    queryFn: () => fetchAnimeDataByGenreAndPopularity(genreId),
    enabled: !!genreId,  // Only run the query if genreId is available
  });

  // Fetch genres from the API (optional, if you want a list of genres for other purposes)
  useEffect(() => {
    fetch("https://api.jikan.moe/v4/genres/anime")
      .then((response) => response.json())
      .then((data) => setGenres(data.data))
      .catch((err) => console.error("Failed to fetch genres:", err));
  }, []);

  if (error instanceof Error) return <div>An error occurred: {error.message}</div>;

  return (
    <Layout title="Anime by Genre and Popularity">
      <Title text={"Anime by Genre"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {isLoading ? (
          <Spinner /> // Show spinner while loading
        ) : (
          data?.data?.map((anime) => (
            <div key={anime.mal_id} className="bg-gray-800 dark:bg-gray-900 rounded-lg shadow-md p-4 flex flex-col">
              <img
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl text-white mb-2">{anime.title}</h2>
              <p className="text-sm text-gray-400 line-clamp-3">{anime.synopsis}</p>
              <a
                href={anime.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                View Details
              </a>
            </div>
          ))
        )}
      </div>
    </Layout>
  );
};

export default AnimeByGenre;
