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
    keywords: 'Graphic Design, Branding Agency, Zimbabwe, Logo Design, Digital Design, Print Design, Marketing Collateral',
    author: 'Design Culture',
    themeColor: '#1F2429',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Design Culture',
        description: 'Design Culture is a Zimbabwean graphic design and branding agency delivering logos, print, digital design, and marketing collateral.',
        url: 'https://designculture.co.zw',
        logo: 'https://designculture.co.zw/images/logo/DESIGN_CULTURE_LOGO.png',
        image: 'https://designculture.co.zw/images/pics/homehero.jpg',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Harare',
          addressCountry: 'ZW'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Design Culture',
        url: 'https://designculture.co.zw'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'SiteNavigationElement',
            position: 1,
            name: 'Services',
            url: 'https://designculture.co.zw/services'
          },
          {
            '@type': 'SiteNavigationElement',
            position: 2,
            name: 'About Us',
            url: 'https://designculture.co.zw/about-us'
          },
          {
            '@type': 'SiteNavigationElement',
            position: 3,
            name: 'Contact Us',
            url: 'https://designculture.co.zw/contact-us'
          }
        ]
      }
    ]
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
