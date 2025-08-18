import { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { projectsSectionData } from "../../data/project";

const Projects = () => {
  const INITIAL_COUNT = 6;
  const LOAD_MORE_COUNT = 3;
  const [activeCard, setActiveCard] = useState(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [loadingMore, setLoadingMore] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleViewMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
      setLoadingMore(false);
    }, 1000);
  };

  const isMoreToShow = visibleCount < projectsSectionData.length;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="container mx-auto px-6 md:px-4 mt-20 md:mt-35"
      id="projects"
    >
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
        My{" "}
        <span className="text-blue-600 underline underline-offset-3">
          Project
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-3">
        {projectsSectionData.slice(0, visibleCount).map((project, index) => {
          const delay = 0.3 + index * 0.15;

          return (
            <motion.div
              key={index}
              initial={ isLargeScreen ? { opacity: 0, x: 20 } : { opacity: 0, y: 20 } }
              whileInView={ isLargeScreen ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 } }
              transition={{ duration: 0.6, delay, ease: "easeIn" }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className={`bg-gray-800 rounded-2xl p-6 transition-all duration-500 
                  cursor-pointer flex flex-col h-full 
                  relative will-change-transform z-0 isolation-auto overflow-hidden
                  ${activeCard === index ? "z-10" : ""}`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div
                  className={`transition-transform duration-500 ${
                    activeCard === index ? "scale-105 -translate-y-2 transform-gpu" : "scale-100"
                  }`}
                  style={{
                    transformOrigin: "center center",
                  }}
                >
                  
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${activeCard === index ? "text-blue-400 hover:text-blue-500" : "text-white"}`}
                      title="View on GitHub"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                </div>

                <p className="text-[0.757rem] font-normal text-[#d8d8d8] mb-4 cursor-auto">
                  Date Created: {project.date}
                </p>

                <p className="text-gray-400 mb-5 w-full px-1 py-2 text-start text-[1rem] cursor-auto">
                  {project.description}
                </p>

                <div className="flex-grow"></div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex border w-full items-center justify-center gap-2 px-4 py-2 text-white ${activeCard === index ? "bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-800" : "border-white  bg-transparent"} rounded-3xl z-10 transform transition-all duration-300`}
                >
                  <FiExternalLink className="w-4 h-4" />
                  <p>Explore Site</p>
                </a>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Skeletons */}
        {loadingMore &&
          Array.from({ length: LOAD_MORE_COUNT }).map((_, index) => (
            <motion.div
              key={`skeleton-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-gray-200 animate-pulse rounded-2xl p-6 h-[200px]"
            ></motion.div>
          ))}
      </div>

      {isMoreToShow && !loadingMore && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleViewMore}
            className="px-6 py-2 text-white bg-blue-700 rounded-xl hover:bg-blue-800 transition duration-300 cursor-pointer"
          >
            View More
          </button>
        </div>
      )}
    </motion.section>
  );
};

export default Projects;
