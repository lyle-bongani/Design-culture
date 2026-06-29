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
import { getLocalBusinessSchema, getWebSiteSchema, getFAQSchema } from '../lib/seo/json-ld';

const Home: React.FC = () => {
  useSEO({
    title: 'Zimbabwe Graphic Design & Branding Agency',
    description:
      'Design Culture ZW is a creative agency in Harare offering branding, corporate communication, and design services including corporate profiles, signage, brochures, apparel branding, and marketing materials.',
    canonicalPath: '/',
    keywords: 'Graphic Design, Branding Agency, Zimbabwe, Logo Design, Digital Design, Print Design, Marketing Collateral',
    jsonLd: [
      getLocalBusinessSchema(),
      getWebSiteSchema(),
      getFAQSchema([
        {
          question: 'Why should my business invest in professional branding and corporate identity design?',
          answer: 'Investing in professional branding and corporate identity design is the single most effective way to build long-term value, trust, and memorability for your business. A brand is not merely a logo; it is the entire emotional and visual representation of your company. Professional identity design ensures consistency across all communication channels—from physical business cards and signage to your digital website and social media graphics. This consistency signals reliability and professionalism to your clients, which directly improves customer retention and conversion rates. Furthermore, having a clear brand guidelines manual helps your internal teams align and build a cohesive company culture. Design Culture ZW creates bespoke logo systems and complete corporate kits specifically tailored to help Zimbabwean enterprises stand out in competitive markets.'
        },
        {
          question: 'What is the difference between screen printing and sublimation printing for corporate apparel?',
          answer: 'The primary difference lies in the technology and durability of the finished product. Screen printing involves applying layers of ink directly onto the surface of the fabric, which is excellent for simple designs on cotton garments but can crack, peel, or fade over time with heavy washing. Sublimation printing, on the other hand, uses heat to dye the actual polyester fibers of the garment. This process chemically embeds the ink within the threads, resulting in a design that is completely permanent—it will never crack, peel, or fade, even after years of active wear. Sublimation allows for unlimited colors, gradients, and full-bleed patterns, making it the premier choice for custom corporate golf shirts, uniform wear, and high-performance sports jerseys designed by Design Culture ZW in Harare.'
        }
      ])
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
