import React from 'react';
import { Link } from 'react-router-dom';

type HeroProps = {
  backgroundUrl?: string; // optional background image URL to be provided later
};

const Hero: React.FC<HeroProps> = ({ backgroundUrl }) => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-10 sm:py-14">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 shadow-[0_10px_40px_rgba(0,0,0,0.15)] ring-1 ring-white/5">
          {/* Background image layer */}
          <div
            className="absolute inset-0 bg-center bg-cover opacity-60"
            style={{
              backgroundImage: backgroundUrl
                ? `url(${backgroundUrl})`
                : 'radial-gradient(1200px_600px_at_70%_30%, rgba(255,255,255,0.06), rgba(0,0,0,0.9))',
            }}
          />
          {/* Dark overlay/gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

          {/* Content */}
          <div className="relative z-10 flex min-h-[440px] flex-col items-center justify-center px-6 py-16 text-center sm:min-h-[520px] md:min-h-[600px]">
            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Turning Visions into
              <br className="hidden sm:block" />
              Iconic Brands
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
              Helping businesses stand out through bold designs and strategic branding.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center rounded-full border border-white/70 bg-transparent px-6 py-3 text-base font-semibold text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                Our Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
