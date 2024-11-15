import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import Title from "../components/Title";
import Layout from "../Layout/layout";

const fetchAnimeData = async () => {
  const response = await fetch("https://api.jikan.moe/v4/anime?order_by=popularity&sort=desc&min_score=7.5");
  if (response.status === 429) {
    throw new Error("Too Many Requests. Please try again later.");
  }
  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  const data = await response.json();
  return data;
};

const AnimePage = () => {
  //eslint-disable-next-line
  const [genre, setGenres] = useState([]);
  const { data, error, isLoading } = useQuery({
    queryKey: ["anime"],
    queryFn: fetchAnimeData,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/genres/anime")
      .then((response) => response.json())
      .then((data) => setGenres(data.data))
      .catch((err) => console.error("Failed to fetch genres:", err));
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>An error occurred: {error.message}</div>;

  const sortedAnime = data.data.sort((a, b) => {
    return new Date(b.aired.prop.from) - new Date(a.aired.prop.from);
  });

  return (
    <Layout title={"Anime Page"}>
      <Title text="Anime Collection" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedAnime.length !== 0 ? (
          sortedAnime.map((anime) => (
            <div
              key={anime.mal_id}
              className="bg-gray-800 dark:bg-gray-900 rounded-lg shadow-md p-4 flex flex-col"
            >
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
        ) : (
          <div>No anime available</div>
        )}
      </div>
    </Layout>
  );
};

export default AnimePage;
