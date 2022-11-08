import ScrollToTop from "react-scroll-to-top";

import "./App.css";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Hero />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop smooth />
    </div>
  );
}

export default App;
