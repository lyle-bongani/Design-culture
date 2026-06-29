import React from 'react';
import { useSEO } from '../hooks/useSEO';
import ServicePillarHero from '../components/ServicePillarHero';
import ServicePillarGrid from '../components/ServicePillarGrid';
import ServicePillarBanner from '../components/ServicePillarBanner';
import { getProductSchema, getBreadcrumbSchema } from '../lib/seo/json-ld';

const ServicePillar: React.FC = () => {
  useSEO({
    title: 'Service Pillar',
    description: 'Discover our core service pillars and how we deliver end-to-end design solutions.',
    canonicalPath: '/service-pillar',
    jsonLd: [
      getProductSchema(
        'logo-branding',
        'Logo & Brand Identity Pack',
        'Professional brand identity design, logo variations, color guides, and type guidelines.',
        350,
        'USD',
        4.9,
        28
      ),
      getProductSchema(
        'print-packaging',
        'Corporate Print Suite',
        'Flyers, business cards, brochures, and banner graphics custom styled.',
        199,
        'USD',
        4.8,
        15
      ),
      getBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Service Pillar', path: '/service-pillar' }
      ])
    ]
  });
  return (
    <>
      <ServicePillarHero />
      <ServicePillarGrid />
      <ServicePillarBanner imageSrc="/images/pics/mostgenericimageever.jpeg" />
    </>
  );
};

export default ServicePillar;
