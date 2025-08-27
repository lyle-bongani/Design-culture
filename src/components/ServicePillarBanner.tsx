import React from 'react';

type Props = {
  imageSrc?: string;
  alt?: string;
};

const ServicePillarBanner: React.FC<Props> = ({
  imageSrc = '/images/pics/servicepillar-banner.jpg',
  alt = 'Our Team',
}) => {
  return (
    <section className="container mx-auto px-4 py-10 sm:py-12">
      <div className="overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
        <img
          src={imageSrc}
          alt={alt}
          className="h-[260px] w-full object-cover sm:h-[340px] md:h-[420px]"
        />
      </div>
    </section>
  );
};

export default ServicePillarBanner;
