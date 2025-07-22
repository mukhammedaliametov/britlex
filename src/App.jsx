import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Aboutus from './components/Aboutus';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Aboutus />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>

  );
};

export default App;