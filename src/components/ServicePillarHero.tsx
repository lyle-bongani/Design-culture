import React from 'react';

type Props = {
  imageSrc?: string;
  title?: string;
  desc?: string;
};

const ServicePillarHero: React.FC<Props> = ({
  imageSrc = '/images/pics/servicespillarhero.jpg',
  title = 'Design Culture',
  desc =
    'Empowering Brands with Bold Design Solutions. We connect businesses with cutting-edge graphic design that sparks engagement, drives visibility, and elevates brand impact. From logos to digital media, we deliver innovative visuals that tell your story and boost results. Let our design expertise be the catalyst that moves your brand forward.',
}) => {
  return (
    <section className="container mx-auto px-4 py-10 sm:py-12">
      <div className="relative">
        {/* Hero media */}
        <div className="overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
          <img
            src={imageSrc}
            alt={title}
            className="h-[380px] w-full object-cover sm:h-[460px] md:h-[520px]"
          />
        </div>

        {/* Overlapping info card */}
        <div className="pointer-events-auto relative z-10 mx-auto -mt-6 sm:-mt-10 md:-mt-12 w-full max-w-4xl rounded-2xl bg-white px-6 py-6 text-center ring-1 ring-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.12)] sm:px-8 sm:py-7">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gray-900 text-white ring-4 ring-white shadow overflow-hidden">
            <img
              src="/images/icons/satisfaction.png"
              alt="Satisfaction"
              className="h-6 w-6 object-contain filter brightness-0 invert"
              loading="lazy"
            />
          </div>
          <h1 className="mt-3 text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
            {title}
          </h1>
          <p className="mx-auto mt-2 max-w-3xl text-xs sm:text-sm leading-6 text-gray-700">
            {desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicePillarHero;
