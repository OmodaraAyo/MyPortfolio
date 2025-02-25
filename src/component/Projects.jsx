import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const [activeCard, setActiveCard] = useState(null);
  const projects = [
    {
      title: "E-commerce",
      description:
        "The E-Commerce Platform is a web application built with React and Tailwind CSS, integrating a third-party API for backend functionality. It includes user authentication, product management, and order processing. It ensures seamless performance and reliability and was successfully deployed and maintained using Netlify.",
      link: "https://commerceme.netlify.app/",
      date: "23/12/2024 WAT"
    },
    {
      title: "Contact Manager",
      description:
        "The Real-Time Contact Manager is a full-stack web application enabling instant communication without registration. Built with React, Tailwind CSS, and Java Spring Boot, it supports real-time, bidirectional communication between users and the server. Successfully deployed on Netlify, it ensures 100% uptime and scales to meet growing user demand",
      link: "https://contactsmgr.netlify.app",
      date: "05/01/2025 WAT",
    },
    { title: "Real Estate", description: "The Real Estate Platform is a web application built with React and Tailwind CSS. It allows users to send messages and provide testimonials regarding property listings. It ensures seamless performance and reliability and was successfully deployed and maintained using Netlify.", link: "https://dele-estate.netlify.app", date: "10/12/2024 WAT"},
  ];

  return (
    <section className="container mx-auto px-6 md:px-4 py-20" id="projects">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
        My <span className="text-blue-600">Work</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((project, index) => (
    <div
      key={index}
      className={`relative bg-gray-800 rounded-2xl p-6 transform transition-all duration-500 
        hover:-translate-y-4 cursor-pointer 
        flex flex-col h-full  
        ${activeCard === index ? "ring-4 ring-blue-500" : ""}`}
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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-transparent opacity-10 rounded-2xl pointer-events-none"></div>
      <h3 className="text-2xl font-bold text-white mb-4 flex flex-col gap-2">
        <p>{project.title}</p>
        <p className="text-[0.757rem] font-normal text-[#d8d8d8]">Date Created: {project.date}</p>
      </h3>
      <p className="text-gray-400 mb-5 w-full px-1 py-2 text-start">{project.description}</p>
      
      {/* Spacer to push button down */}
      <div className="flex-grow"></div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex border w-full items-center justify-center gap-2 px-4 py-2 text-white hover:bg-blue-600 hover:border-blue-600 rounded-3xl z-10 transform transition-all duration-300"
      >
        <FiExternalLink className="w-4 h-4"/>
        <p>Explore Site</p>
      </a>
    </div>
  ))}
</div>

    </section>
  );
};

export default Projects;
