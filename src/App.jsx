import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
// import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Number from "./components/Number/Number";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/Project";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Project />
        {/* <Services /> */}
        {/* <Portfolio /> */}
        {/* <Number /> */}
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
