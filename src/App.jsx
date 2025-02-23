import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Projects from "./component/Projects";
import Footer from "./component/Footer";
import AboutMe from "./component/AboutMe";

const App = () => {

  return (
    <div className="min-h-screen bg-blend-soft-light from-blue-400">
      <Navbar/>
      <div className="absolute bg-black h-[64rem] sm:h-[65rem] md:h-[48rem] lg:h-[42rem] w-full opacity-10"></div>
      <Hero/>
      <AboutMe/>
      <div className="absolute w-screen border-2 border-gray-900 md:max-w-[32rem] lg:max-w-[39rem] rounded-2xl"></div>
      <Projects/>
      <Footer/>
    </div>
  );
};

export default App;
