import React from 'react';
import { useSEO } from '../hooks/useSEO';
import ServicePillarHero from '../components/ServicePillarHero';
import ServicePillarGrid from '../components/ServicePillarGrid';
import ServicePillarBanner from '../components/ServicePillarBanner';

const ServicePillar: React.FC = () => {
  useSEO({
    title: 'Service Pillar — Design Culture',
    description: 'Discover our core service pillars and how we deliver end-to-end design solutions.',
    canonicalPath: '/service-pillar',
    ogImage: '/images/pics/mostgenericimageever.jpeg',
    twitterCard: 'summary_large_image',
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
