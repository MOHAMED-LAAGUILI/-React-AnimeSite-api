import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleBtn";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import logo from "/src/assets/images/anime-channel.png";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const location = useLocation();
  const { user } = useUser();

  const navItems = {
    Home: "/",
    Animes: "/anime",
    Movies: "/movies",
    "Dev Info": "/dev-info",
  };

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-7xl 
                bg-gradient-to-r from-gray-800 via-gray-900 to-slate-800 
                dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 
                rounded-xl shadow-lg px-4 py-3 transition-all duration-300"
    >
      <div className="flex items-center justify-between h-16">
        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-gray-100 rounded-lg 
                       hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                       text-2xl transition-all"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <FaWindowClose /> : <FaBars />}
          </button>
        </div>

        {/* Logo and Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link to={"/"}>
            <img className="h-28" src={logo} alt="Anime Channel" />
          </Link>
          <div className="hidden sm:flex space-x-4">
            {Object.entries(navItems).map(([name, link]) => (
              <Link
                key={name}
                to={link}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                  isActive(link)
                    ? "bg-gray-700 text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>

        {/* Theme Toggle and User Profile */}
        <div className="flex items-center space-x-4">
          <ThemeToggleButton />
          <ClerkLoaded>
            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton />
                <span className="text-sm text-gray-300 dark:text-gray-200">
                  Welcome, {user.firstName}!
                </span>
              </div>
            ) : (
              <div>
                <SignInButton mode="modal">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-lg transition-all">
                    Sign In
                  </button>
                </SignInButton>
              </div>
            )}
          </ClerkLoaded>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="sm:hidden space-y-2 px-4 py-4 bg-gray-900 rounded-lg shadow-lg transition-all"
        >
          {Object.entries(navItems).map(([name, link]) => (
            <Link
              key={name}
              to={link}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-base font-medium text-white rounded-md transition-all ${
                isActive(link) ? "bg-gray-700" : "hover:bg-gray-800"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
