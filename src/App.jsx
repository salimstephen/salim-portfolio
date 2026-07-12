import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contacts />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;