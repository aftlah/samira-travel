import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';

import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Profile />
      <Packages />
      <Gallery />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
