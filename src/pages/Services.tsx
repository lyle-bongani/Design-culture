import React from 'react';
import ServicesHero from '../components/ServicesHero';
import ServicePillars from '../components/ServicePillars';
import ServicesCTA from '../components/ServicesCTA';
import ServicesStory from '../components/ServicesStory';

const Services: React.FC = () => {
  return (
    <>
      <ServicesHero />
      {/* Page-scoped wrapper to adjust layout only on this page */}
      <div className="services-page">
        <ServicePillars />
      </div>
      {/* Lower only the second row of cards (items 4-6) on this page */}
      <style>{`
        /* Desktop: target the grid children produced by ServicePillars */
        @media (min-width: 1024px) {
          .services-page .grid > div:nth-child(4),
          .services-page .grid > div:nth-child(5),
          .services-page .grid > div:nth-child(6) {
            margin-top: 2.5rem; /* adjust as desired */
          }
        }
        /* Tablet: two columns, second row is items 3-4 */
        @media (min-width: 640px) and (max-width: 1023.98px) {
          .services-page .grid > div:nth-child(3),
          .services-page .grid > div:nth-child(4) {
            margin-top: 2rem;
          }
        }
        /* Mobile stays single column, no extra spacing */
      `}</style>
      <ServicesCTA />
      <ServicesStory />
    </>
  );
};

export default Services;
