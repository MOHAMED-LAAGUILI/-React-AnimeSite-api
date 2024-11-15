import { Helmet } from "react-helmet";
import PropTypes from "prop-types"; 
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = ({ children, title = 'Anime Channel - Explore Your Favorite Anime' }) => {
  return (
    <div className="min-h-screen dark:bg-gray-800 text-gray-900 dark:text-white">
      {/* Helmet for SEO */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="Explore top-rated anime by genre, category, and much more. Find your next favorite anime on Anime Hub." />
        <meta name="keywords" content="anime, action, comedy, romance, horror, adventure, fantasy" />
        <meta name="author" content="Anime Hub" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Explore top-rated anime by genre, category, and much more. Find your next favorite anime on Anime Hub." />
        <meta property="og:image" content="https://via.placeholder.com/1200x630?text=Anime+Hub" />
        <meta property="og:url" content="https://www.yourwebsite.com" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="Explore top-rated anime by genre, category, and much more. Find your next favorite anime on Anime Hub." />
        <meta name="twitter:image" content="https://via.placeholder.com/1200x630?text=Anime+Hub" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.yourwebsite.com" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <main className="pt-36 container mx-auto">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Validate 'children' prop
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string, // Optional title prop
};

export default Layout;
