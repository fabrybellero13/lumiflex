import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Product from "./components/Product";
import Gallery from "./components/Gallery";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import Reviews from "./components/Reviews";
import Faq from "./components/Faq";
import FinalCTA from "./components/FinalCTA";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Product />
      <Gallery />
      <Benefits />
      <HowItWorks />
      <Reviews />
      <Faq />
      <FinalCTA />
      <WhyUs />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;