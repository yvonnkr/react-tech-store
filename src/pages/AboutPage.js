import React from 'react';
import Hero from '../components/Hero';
import Info from '../components/AboutPage/Info';
import aboutBcg from '../images/aboutBcg.jpeg';

const AboutPage = () => {
  return (
    <>
      <Hero img={aboutBcg} />
      <Info />
    </>
  );
};

export default AboutPage;
