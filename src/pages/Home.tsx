import React from 'react';
import Hero from '../components/Home/Hero';
import UnderHeroSection from '../components/Home/UnderHeroSection';
import AboutUsTeaser from '../components/Home/AboutUsTeaser';
import VisionMission from '../components/Home/VisionMission';
import CoreValues from '../components/Home/CoreValues';
import Services from '../components/Home/Services';
import WhyChooseUs from '../components/Home/WhyChooseUs';

const Home: React.FC = () => {
  return (
    <>
      <div className="container mx-auto px-4 relative h-0">
        <h2 className="absolute left-1/2 -translate-x-1/2 translate-y-6 sm:translate-y-8 md:translate-y-10 text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Design Culture
        </h2>
      </div>
      <div className="mt-6 sm:mt-8 md:mt-12">
        <Hero />
      </div>
      <UnderHeroSection />
      <AboutUsTeaser />
      <VisionMission />
      <CoreValues />
      <Services />
      <WhyChooseUs />
    </>
  );
};

export default Home;
