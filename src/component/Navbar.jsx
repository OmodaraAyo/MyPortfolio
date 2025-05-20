import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuButton from "./MenuButton";

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const navbarMenu = [
    { label: "About Me", page: "aboutme" },
    { label: "Projects", page: "projects" },
    { label: "Skills", page: "skills" },
    { label: "Service", page: "service" },
    { label: "Contact", page: "contact" },
  ];

  // Collapse sidebar on window resize >= 640px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setShowSideBar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Disable/enable scrolling when sidebar is open
  useEffect(() => {
    if (showSideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSideBar]);

  return (
    <nav className="bg-gradient-to-br from-gray-900 to-gray-900 p-4 text-white border-b-2 border-dotted">
      <div className="container mx-auto flex justify-between items-center px-5">
        {/* Logo */}
        <div className="text-[32px] font-bold font-pacifico px-2 py-1">
          <span className="text-blue-600">E</span>mmanuel
        </div>

        {/* Menu Toggle Button */}
        <MenuButton onClick={() => setShowSideBar(prev => !prev)} isOpen={showSideBar} />

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex sm:space-x-6 py-3 px-2">
          {navbarMenu.map((menu, index) => (
            <li key={index}>
              <a
                href={`#${menu.page.toLowerCase()}`}
                onClick={() => setShowSideBar(false)}
                className="relative inline-block text-white hover:text-blue-400 transition-colors duration-300 ease-in-out after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {menu.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {showSideBar && (
          <motion.div
            className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-90 z-50 sm:hidden py-9 rounded-b-xs"
            initial={{ y: "-100%" }}
            animate={{ y: 0, transition: { type: "transform", stiffness: 100 } }}
            exit={{ y: "-100%", transition: { duration: 0.3, ease: "easeInOut" } }}
          >
            {/* Sidebar Menu */}
            <ul className="space-y-4 text-white text-lg flex flex-col items-center justify-center pt-10">
              {navbarMenu.map((menu, index) => (
                <li key={index}>
                  <a
                    href={`#${menu.page.toLowerCase()}`}
                    onClick={() => setShowSideBar(false)}
                    className="hover:text-blue-300 transition-colors duration-300"
                  >
                    {menu.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
