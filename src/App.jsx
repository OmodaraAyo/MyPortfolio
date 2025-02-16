import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Projects from "./component/Projects";
import Footer from "./component/Footer";

const App = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <Navbar/>
      <Hero/>
      <Projects/>
      <Footer/>
    </div>
  );
};

export default App;
