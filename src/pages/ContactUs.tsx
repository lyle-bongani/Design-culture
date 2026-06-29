import React from 'react';
import { useSEO } from '../hooks/useSEO';
import ContactHero from '../components/ContactHero';
import ContactCard from '../components/ContactCard';
import { getLocalBusinessSchema, getBreadcrumbSchema, getFAQSchema } from '../lib/seo/json-ld';

const ContactUs: React.FC = () => {
  useSEO({
    title: 'Contact Us',
    description: 'Get in touch with Design Culture for branding, print, and digital design services in Zimbabwe.',
    canonicalPath: '/contact-us',
    keywords: 'Contact Design Culture, Graphic Design Agency Contact, Hire Designers Zimbabwe, Marketing Collateral Help',
    jsonLd: [
      getLocalBusinessSchema(),
      getBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Contact Us', path: '/contact-us' }
      ]),
      getFAQSchema([
        {
          question: 'What design and print services does Design Culture ZW offer in Harare?',
          answer: 'Design Culture ZW is a comprehensive design and branding agency offering a full spectrum of graphic design and printing services in Harare, Zimbabwe. Our service offerings are categorized into six key pillars. First, Branding and Identity design, which includes professional logo creation, corporate style guidelines, color palettes, and typographic systems. Second, Print Design, encompassing brochures, flyers, business cards, posters, and custom packaging layouts. Third, Indoor & Outdoor Branding, providing high-visibility signage, pull-up banners, and exhibition booth materials. Fourth, Digital Design and Web Development, building fully responsive, speed-optimized corporate websites and social media creative assets. Fifth, Custom Sublimated Apparel, producing premium golf shirts, uniforms, and sports jerseys per order. Finally, Marketing Collateral, including company profiles, catalog design, and promotional products to establish powerful physical and digital brand presence.'
        },
        {
          question: 'How does the custom sublimated apparel ordering process work?',
          answer: 'Our Design & Print Sublimated Apparel process is tailor-made for comfort, durability, and visual performance, which is why we produce golf shirts, sports jerseys, and corporate uniforms strictly on a per-order basis. The workflow begins with a consultation where we analyze your brand identity, color codes, and apparel requirements. Our illustrations team then drafts digital mockups showing logo placements, seam styling, and visual flourishes. Once you approve the digital designs, we utilize state-of-the-art sublimation printing technology, which fuses dye directly into the fabric fibers rather than printing on top. This ensures that your branding never cracks, fades, or peels over time. Production typically takes 7 to 14 business days depending on volume, followed by quality assurance testing and final delivery from our Harare head office.'
        },
        {
          question: 'Can Design Culture ZW design and print high-quality company profiles?',
          answer: 'Absolutely. We specialize in designing and printing premium corporate communication tools, with company profiles being a primary focus. A well-designed company profile is crucial for establishing credibility and authoritativeness (E-E-A-T) when pitching to stakeholders or responding to tenders. Our creative team handles everything from conceptual layouts, copywriting assistance, photography selection, infographics for financial data, and visual hierarchy formatting. We design the profiles to be highly engaging, clean, and representative of your corporate values. Additionally, we coordinate the entire print production phase, offering luxury finishes such as spot UV, matte lamination, embossing, and custom binding options. We deliver both high-resolution digital interactive PDFs for email distribution and physical print copies from our office.'
        },
        {
          question: 'What is your turnaround time for graphic design and branding projects?',
          answer: 'The turnaround timeline for our projects is structured to maintain exceptional quality while meeting business deadlines. Standard graphic design assets like marketing flyers, business cards, and social media banners are typically completed within 2 to 4 business days. Comprehensive projects such as full brand identity packages (incorporating primary logos, brand manuals, and asset kits) or corporate profile designs generally require 5 to 10 business days. Custom website design and development cycles range from 2 to 4 weeks depending on structure and content complexity. For printing and manufacturing services, including indoor and outdoor signage, banner stands, and sublimated apparel, production is scheduled post-approval and usually runs 7 to 10 days. We communicate milestones clearly at start.'
        }
      ])
    ]
  });
  return (
    <>
      <ContactHero />
      <ContactCard />
    </>
  );
};

export default ContactUs;
