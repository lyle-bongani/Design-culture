import React from 'react';
import { useSEO } from '../hooks/useSEO';
import ServicesHero from '../components/ServicesHero';
import ServicePillars from '../components/ServicePillars';
import ServicesCTA from '../components/ServicesCTA';
import ServicesStory from '../components/ServicesStory';
import { getServiceSchema, getBreadcrumbSchema } from '../lib/seo/json-ld';

const Services: React.FC = () => {
  useSEO({
    title: 'Services',
    description:
      'Explore our services: branding, print design, digital design, marketing collateral, and more crafted for impact.',
    canonicalPath: '/services',
    keywords: 'Branding Services, Print Design, Digital Design, Marketing Collateral, Logo Creation Zimbabwe',
    jsonLd: [
      getServiceSchema('branding', 'Branding', 'Sketch and develop visual concepts reflecting your brand essence, refining color, typography, and elements into a cohesive identity.'),
      getServiceSchema('print', 'Print Design', 'Standout brochures, flyers, business cards, bold posters, and custom packaging designed to convert interest into action.'),
      getServiceSchema('indoor-outdoor', 'Indoor & Outdoor Branding', 'Custom sublimated golf shirts and apparel branding made for comfort, performance, and style.'),
      getServiceSchema('digital', 'Digital Design', 'Responsive websites, social media visuals, and unified digital presence management.'),
      getServiceSchema('apparel-merch', 'Design & Print Sublimated Apparel', 'Promotional apparel, sport jerseys, corporate merchandise, and custom sublimated wear.'),
      getServiceSchema('marketing-collateral', 'Marketing Collateral', 'Compelling flyers, folders, corporate profiles, and signage designed to spark interest and leave a lasting impression.'),
      getBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' }
      ])
    ]
  });
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
