import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Aboutus from "./components/Aboutus";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ToTop from "./components/ToTop";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Aboutus />
        <Pricing />
        <Contact />
        <ToTop />
      </main>
      <Footer />
    </>
  );
};

export default App;
