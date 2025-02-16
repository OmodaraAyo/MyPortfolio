const Navbar = () => {
  return (
    <nav className="bg-gradient-to-br from-blue-900 to-gray-900 p-4 text-white border-b-2 border-dotted ">
      <div className="container mx-auto flex justify-between items-center px-5">
        <div className="text-[32px] font-bold font-pacifico"><span className="text-blue-400">O</span>modara <span className="text-blue-400">E</span>mmanuel</div>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-blue-300">About</a></li>
          <li><a href="#projects" className="hover:text-blue-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;