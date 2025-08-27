import React from 'react';
import ServicesHero from '../components/ServicesHero';
import ServicePillars from '../components/ServicePillars';
import ServicesCTA from '../components/ServicesCTA';
import ServicesStory from '../components/ServicesStory';

const Services: React.FC = () => {
  return (
    <>
      <ServicesHero />
      <ServicePillars />
      <ServicesCTA />
      <ServicesStory />
    </>
  );
};

export default Services;
