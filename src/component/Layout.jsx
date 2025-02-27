import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Footer from "./Footer";
import Skills from "./Skills";
import Service from "./Service";

const Layout = () => {
  return (
    <div className="min-h-screen bg-blend-soft-light from-blue-400 relative">
      <Navbar />
      <div className="absolute bg-black h-[64rem] sm:h-[65rem] md:h-[48rem] lg:h-[42rem] w-full opacity-10 blur-2xl"></div>
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Service />
      <Footer />
    </div>
  );
};

export default Layout;
