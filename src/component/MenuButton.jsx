import { motion } from "framer-motion";

const MenuButton = ({ onClick, isOpen }) => {
  return (
    <motion.button onClick={onClick} className="cursor-pointer sm:hidden p-2 flex items-end justify-end z-100" initial={false} animate={isOpen ? "open" : "closed"}>
      <motion.svg width="33" height="33" viewBox="0 0 24 24" stroke="white" strokeWidth="2.5" strokeLinecap="round">
        {/* Top Line */}
        <motion.path variants={{closed: { d: "M 3 6 L 21 6" }, open: { d: "M 6 6 L 18 18" },}} initial="closed" animate={isOpen ? "open" : "closed"} transition={{ duration: 0.3 }}/>
        {/* Middle Line */}
        <motion.path variants={{closed: { d: "M 3 12 L 21 12", opacity: 1 }, open: { opacity: 0 },}}initial="closed"animate={isOpen ? "open" : "closed"}transition={{ duration: 0.1 }}/>
        {/* Bottom Line */}
        <motion.path variants={{closed: { d: "M 3 18 L 21 18" }, open: { d: "M 6 18 L 18 6" },}} initial="closed" animate={isOpen ? "open" : "closed"} transition={{ duration: 0.3 }}/>
      </motion.svg>
    </motion.button>
  );
};

export default MenuButton;
