import React from 'react';
import { useSEO } from '../hooks/useSEO';
import AboutOverview from '../components/AboutUs/AboutOverview';
import ValuesSection from '../components/AboutUs/ValuesSection';
import LeadershipTeam from '../components/AboutUs/LeadershipTeam';
import CompanySummary from '../components/AboutUs/CompanySummary';
import TrustedClients from '../components/AboutUs/TrustedClients';
import ContactCTA from '../components/AboutUs/ContactCTA';

const AboutUs: React.FC = () => {
  useSEO({
    title: 'About Us — Design Culture',
    description:
      'Learn about Design Culture: a Zimbabwean design studio crafting branding, print, and digital experiences that connect people to brands.',
    canonicalPath: '/about-us',
    ogImage: '/images/pics/aboutpagehero.jpg',
    twitterCard: 'summary_large_image',
  });
  return (
    <>
    <section className="container mx-auto px-4 py-10 sm:py-12">
      <div className="relative overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.18)] ring-1 ring-black/10">
        {/* Background image */}
        <img
          src="/images/pics/aboutpagehero.jpg"
          alt="About Design Culture"
          className="w-full object-cover object-center h-[85vh] md:h-[520px] lg:h-[640px] xl:h-[720px]"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
          <div className="max-w-3xl text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">About Us</h1>

            {/* Mobile short summary */}
            <p className="mt-4 text-sm leading-6 text-white/95 sm:hidden">
              Where creativity meets purpose—meaningful design that connects people to brands.
            </p>

            {/* Full copy for sm and up */}
            <div className="hidden sm:block mt-5 space-y-3 text-sm leading-6 text-white/95">
              <p>
                Design Culture is a Zimbabwean registered company which is a leading graphic design firm that specializes in
                providing creative and innovative design solutions to businesses of all sizes. With a team of highly skilled and
                experienced designers, we have been helping our clients achieve their marketing objectives through compelling and
                effective design for over 5 years.
              </p>
              <p>
                At Design Culture, we believe that good design is more than just aesthetics; it is about telling a story and creating an
                emotional connection with your target audience. Our design philosophy is centered around understanding our clients'
                unique brand identity and creating designs that communicate their message effectively.
              </p>
              <p>
                Our services include a wide range of design solutions such as branding, logo design, print design and digital design.
                Whether you need a new brand identity or a complete redesign, our team of designers will work closely with you to create
                custom solutions that meet your specific needs.
              </p>
              <p>
                We pride ourselves on our ability to deliver high-quality designs that not only look great but also drive results for our
                clients. Our commitment to excellence is reflected in our portfolio of work, which showcases some of our best design
                projects.
              </p>
              <p>
                At Design Culture we are passionate about design and dedicated to delivering exceptional results to our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <AboutOverview />
    <ValuesSection />
    <LeadershipTeam />
    <CompanySummary />
    <TrustedClients />
    <ContactCTA />
    </>
  );
};

export default AboutUs;
