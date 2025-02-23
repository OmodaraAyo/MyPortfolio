import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuButton from "./MenuButton";

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const navbarMenu = ["About", "Projects", "Contact"];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setShowSideBar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <nav className="bg-gradient-to-br from-gray-900 to-gray-900 p-4 text-white border-b-2 border-dotted">
      <div className="container mx-auto flex justify-between items-center px-5">
        {/* Logo */}
        <div className="text-[32px] font-bold font-pacifico">
          <span className="text-blue-600">E</span>mmanuel
        </div>

        {/* Menu Toggle Button */}
        <MenuButton onClick={() => setShowSideBar(true)} isOpen={showSideBar} />

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex sm:space-x-4">
          {navbarMenu.map((menu, index) => (
            <li key={index}>
              <a href={`#${menu.toLowerCase()}`} onClick={() => setShowSideBar(false)} className="hover:text-blue-300">
                {menu}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {showSideBar && (
          <motion.div
            className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-90 z-50 sm:hidden py-3 rounded-b-xs"
            initial={{ y:"-100%" }}
            animate={{ y: 0, transition: { type: "transform", stiffness: 100 } }}
            exit={{ y: "-100%", transition: { duration: 0.3, ease: "easeInOut" } }}
          >
          {/* Close (X) Button Inside Sidebar */}
            <div className="mx-[2.3rem] mt-2"><MenuButton onClick={() => setShowSideBar(false)} isOpen={showSideBar} /></div>

          {/* Sidebar Menu */}
          <ul
            className="space-y-4 text-white text-lg flex flex-col items-center justify-center">
            {navbarMenu.map((menu, index) => (
              <li key={index}>
                <a href={`#${menu.toLowerCase()}`} onClick={() => setShowSideBar(false)} className="hover:text-blue-300">{menu}</a>
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
