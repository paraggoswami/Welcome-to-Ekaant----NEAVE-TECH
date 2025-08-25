import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero";
import About from "./components/About";
import Offerings from "./components/Offerings";
import HowToReach from "./components/HowToReach";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Offerings />
      <HowToReach />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
