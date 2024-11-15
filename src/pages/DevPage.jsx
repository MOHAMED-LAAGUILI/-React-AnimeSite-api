import Layout from "../Layout/layout";
import Title from "../components/Title";
import { FaTools, FaLightbulb } from "react-icons/fa";

const DevPage = () => {
  return (
    <Layout title={"Dev Page"}>
      {/* Hero Section */}
      <div className="text-center mt-12 space-y-6">
        <Title text={"🚧 Under Development"} />
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          This site is a work in progress, and were building something exciting for you! 🚀 
          Stay tuned for updates, and don’t hesitate to contribute or share your ideas.
        </p>
      </div>

      {/* Content Section */}
      <div className="mt-16 flex flex-col items-center space-y-12">
        {/* Development Progress Info */}
        <div className="flex flex-col items-center text-center space-y-4">
          <FaTools className="text-6xl text-indigo-600 dark:text-indigo-400 mb-4" />
          <p className="text-md text-gray-500 dark:text-gray-400 max-w-lg">
            Our team is actively working on delivering innovative features and improved user experiences. We value your feedback and are open to collaborations.
          </p>
        </div>

        {/* Invitation to Collaborate */}
        <div className="flex flex-col items-center text-center space-y-6">
          <FaLightbulb className="text-5xl text-yellow-500 dark:text-yellow-400" />
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-lg">
            Have ideas or suggestions? Interested in participating or collaborating? Wed love to hear from you! Your input can shape the future of this project.
          </p>
        </div>

        {/* Call to Action */}
        <div className="w-full max-w-md bg-gradient-to-br from-indigo-600 to-purple-500 dark:from-indigo-500 dark:to-purple-400 p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-bold text-white mb-4">
            Share Your Ideas or Get in Touch
          </h3>
          <p className="text-sm text-gray-200 mb-6">
            Reach out directly via our contact form or contribute to this exciting journey. 
          </p>
          <a
            href="https://laaguili.app.genez.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg 
                       hover:bg-indigo-50 transition-all duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default DevPage;
