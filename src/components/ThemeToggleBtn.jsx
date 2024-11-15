import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-2 py-2 bg-gray-900 dark:bg-gray-200 text-gray-700 dark:text-gray-200 rounded-full shadow-md transition-all duration-200"
    >
      {theme === 'dark' ? 
      (<FaSun className="text-3xl text-orange-500"/>) 
          :
      (<FaMoon className="text-3xl text-blue-500"/>)}
    </button>
  );
};

export default ThemeToggleButton;
