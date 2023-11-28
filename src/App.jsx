import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import StarsCanvas from "./components/canvas/Stars";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FixedLink from "./components/FixedLink";
import Footer from "./components/Footer";


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative bg-gray-300 z-99">
        <Navbar />
        <FixedLink />
        
        <Content />
        <About />
        <Projects />
        <Contact />
        <Footer/>
   
      </div>
    </BrowserRouter>
  );
};

export default App;
