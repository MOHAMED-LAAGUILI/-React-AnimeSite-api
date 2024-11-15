const Footer = () => {
    return (
      <footer
        className="mt-10 transform  z-50 w-[100%]
                   bg-gray-900 dark:bg-slate-700 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg 
                   transition-all duration-300 px-4 py-4"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {/* Site Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-gray-100 dark:text-gray-200">
              Anime Channel
            </h3>
            <p className="text-sm text-gray-100 dark:text-gray-300">
              © {new Date().getFullYear()} Anime Channel. All Rights Reserved.
            </p>
          </div>
  
          {/* Developer Info */}
          <div className="text-center sm:text-right">
            <h3 className="text-lg font-semibold text-gray-100 dark:text-gray-200">
              Developed by
            </h3>
            <a
              href="https://laaguili.app.genez.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white hover:underline transition"
            >
              laaguili.app.genez.io
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  