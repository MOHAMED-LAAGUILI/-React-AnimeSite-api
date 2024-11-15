import Layout from "../Layout/layout";
import Title from "../components/Title";
import { FaFilm, FaClock } from "react-icons/fa";

const MoviePage = () => {
  return (
    <Layout title={"Movies Page"}>
      {/* Hero Section */}
      <div className="text-center mt-12 space-y-6">
        <Title text={"🎬 Movies Page"} />
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Our movie section is on the way! Stay tuned for a world of cinema magic. 🌟
        </p>
      </div>

      {/* Content Section */}
      <div className="mt-16 flex flex-col items-center space-y-12">
        {/* Movie Icon Section */}
        <div className="flex flex-col items-center text-center space-y-4">
          <FaFilm className="text-6xl text-red-600 dark:text-red-400" />
          <p className="text-md text-gray-500 dark:text-gray-400 max-w-lg">
            We’re curating the best movie experiences for you. From blockbusters to indie gems, it’s all coming soon.
          </p>
        </div>

        {/* Countdown or Placeholder */}
        <div className="flex flex-col items-center text-center space-y-6">
          <FaClock className="text-5xl text-yellow-500 dark:text-yellow-400" />
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-lg">
            The movie page is under development and will be ready shortly. We promise it’ll be worth the wait! 🚀
          </p>
        </div>

        {/* Call to Action or Notification */}
        <div className="w-full max-w-md bg-gradient-to-br from-red-600 to-yellow-500 dark:from-red-500 dark:to-yellow-400 p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-bold text-white mb-4">
            Be the First to Know
          </h3>
          <p className="text-sm text-gray-200 mb-6">
            Want to stay updated? Join our mailing list or follow us for the latest news about the Movies Page launch.
          </p>
          <button
            className="inline-block px-6 py-3 bg-white text-red-600 font-semibold rounded-lg shadow-lg 
                       hover:bg-red-50 transition-all duration-200"
          >
            <a  href="https://laaguili.app.genez.io">
            Notify Me
            </a>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default MoviePage;
