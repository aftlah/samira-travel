import React from 'react';
import Hero from '../components/Hero';
import Profile from '../components/Profile';
import Packages from '../components/Packages';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <Profile />
      <Packages />
      <Testimonials />
    </>
  );
};

export default Home;