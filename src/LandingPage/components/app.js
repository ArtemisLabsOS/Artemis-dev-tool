import React from 'react';
import Navbar from './Navbar';
import Exemplar from './Exemplar';
import Features from './Features';
import About from './About';
import LatestNews from './LatestNews';
import SocialBrand from './SocialBrand';
import Footer from './Footer';

const App = () => {
  return (
    <div id="app">
      <Navbar />

      <Exemplar />
      <Features />
      <About />
      <LatestNews />
      <SocialBrand />
      <Footer />
    </div>
  );
};

export default App;