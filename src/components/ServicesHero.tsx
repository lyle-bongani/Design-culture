import React from 'react';

const ServicesHero: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-10 sm:py-12">
      <div className="relative overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.18)] ring-1 ring-black/10">
        {/* Background image (replace path with your services hero image) */}
        <img
          src="/images/pics/abouthhero.jpg"
          alt="Our Services"
          className="h-[520px] w-full object-cover sm:h-[560px] md:h-[600px]"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
          <div className="max-w-3xl text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Our Services</h1>
            <p className="mt-4 text-xs sm:text-sm leading-5 sm:leading-6 text-white/95">
              At Design Culture, we offer a full spectrum of design services crafted to bring your brand's vision to life.
              Whether you're a startup looking to make a splash or an established business ready to evolve, we've got you
              covered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
