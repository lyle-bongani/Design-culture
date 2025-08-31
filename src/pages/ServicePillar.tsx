import React from 'react';
import ServicePillarHero from '../components/ServicePillarHero';
import ServicePillarGrid from '../components/ServicePillarGrid';
import ServicePillarBanner from '../components/ServicePillarBanner';

const ServicePillar: React.FC = () => {
  return (
    <>
      <ServicePillarHero />
      <ServicePillarGrid />
      <ServicePillarBanner imageSrc="/images/pics/mostgenericimageever.jpeg" />
    </>
  );
};

export default ServicePillar;
