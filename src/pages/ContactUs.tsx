import React from 'react';
import { useSEO } from '../hooks/useSEO';
import ContactHero from '../components/ContactHero';
import ContactCard from '../components/ContactCard';

const ContactUs: React.FC = () => {
  useSEO({
    title: 'Contact Us — Design Culture',
    description: 'Get in touch with Design Culture for branding, print, and digital design services in Zimbabwe.',
    canonicalPath: '/contact-us',
    ogImage: '/images/pics/closeup-office-wired-telephone.jpg',
    twitterCard: 'summary_large_image',
  });
  return (
    <>
      <ContactHero />
      <ContactCard />
    </>
  );
};

export default ContactUs;
