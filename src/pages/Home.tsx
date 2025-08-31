import React from 'react';
import { useSEO } from '../hooks/useSEO';
import Hero from '../components/Home/Hero';
import UnderHeroSection from '../components/Home/UnderHeroSection';
import AboutUsTeaser from '../components/Home/AboutUsTeaser';
import VisionMission from '../components/Home/VisionMission';
import CoreValues from '../components/Home/CoreValues';
import Services from '../components/Home/Services';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import BrandShowcase from '../components/Home/BrandShowcase';
import ContactSection from '../components/Home/ContactSection';

const Home: React.FC = () => {
  useSEO({
    title: 'Design Culture — Zimbabwe Graphic Design & Branding Agency',
    description:
      'Design Culture is a Zimbabwean graphic design and branding agency delivering logos, print, digital design, and marketing collateral.',
    canonicalPath: '/',
    ogImage: '/images/pics/homehero.jpg',
    twitterCard: 'summary_large_image',
  });
  return (
    <>
      <div className="container mx-auto px-4 relative h-0">
        <h2 className="absolute left-1/2 -translate-x-1/2 translate-y-6 sm:translate-y-8 md:translate-y-10 text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Design Culture
        </h2>
      </div>
      <div className="mt-6 sm:mt-8 md:mt-12">
        <Hero backgroundUrl="/images/pics/homehero.jpg" />
      </div>
      <UnderHeroSection />
      <AboutUsTeaser />
      <VisionMission />
      <CoreValues />
      <Services />
      <WhyChooseUs rightImageSrc="/images/pics/Why Choose Us  Our Differentiators.jpeg" />
      <BrandShowcase logoImageSrc="/images/logo/DESIGN_CULTURE_LOGO.png" />
      <ContactSection />
    </>
  );
};

export default Home;
