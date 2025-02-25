import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Footer from "./Footer";
import Skills from "./Skills";


const Layout = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  return (
    <div className="min-h-screen bg-blend-soft-light from-blue-400 relative">
      <Navbar />
      <div className="absolute bg-black h-[64rem] sm:h-[65rem] md:h-[48rem] lg:h-[42rem] w-full opacity-10 blur-2xl"></div>
      <Hero />
      <AboutMe />
      {startAnimation && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.3, ease: "easeInOut" }}
          className="absolute border-2 border-gray-900 md:max-w-[32rem] lg:max-w-[39rem] rounded-2xl"
        />
      )}

      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default Layout;
