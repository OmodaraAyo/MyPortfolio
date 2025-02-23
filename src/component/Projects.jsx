import { useState } from 'react';

const Projects = () => {
  const [activeCard, setActiveCard] = useState(null);
  const projects = [
    { title: "E-commerce", description: "Description of Project 1" },
    { title: "Project 2", description: "Description of Project 2" },
    { title: "Project 3", description: "Description of Project 3" },
  ];

  return (
   <section className="container mx-auto px-4 py-20" id='projects'>
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          My <span className='text-blue-600'>Work</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative bg-gray-800 rounded-2xl p-6 transform transition-all duration-500 
              hover:-translate-y-4 cursor-pointer ${
                activeCard === index ? "ring-4 ring-blue-500" : ""
              }`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              style={{
                transform:
                  activeCard === index
                    ? "perspective(1000px) rotateX(3deg) rotateY(3deg) scale(1.05)"
                    : "perspective(1000px) rotateX(0) rotateY(0) scale(1)",
                boxShadow:
                  activeCard === index
                    ? "0 25px 50px -12px rgba(59, 130, 246, 0.3)"
                    : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-transparent opacity-10 rounded-2xl"></div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

  );
};

export default Projects;