import React from 'react';

type ServiceItem = {
  title: string;
  description: string;
  imageSrc?: string;
  iconSrc?: string;
};

type ServicesProps = {
  items?: ServiceItem[];
  onSeeAllClick?: () => void;
};

const DefaultItems: ServiceItem[] = [
  {
    title: 'Branding',
    description:
      "At Design Culture, we believe every brand has a unique soul waiting to be revealed. Our process begins with discovery uncovering your mission, vision, and market edge. We sketch and develop visual concepts that reflect your brand’s essence. Then refine color, typography, and elements into a cohesive identity. Finally, we deliver a polished logo built to inspire across all platforms.",
    iconSrc: '/images/icons/branding.png',
    imageSrc: '/images/pics/branding.jpg',
  },
  {
    title: 'Print Design',
    description:
      "We design brochures and flyers that grab attention and deliver your message with impact. Our business cards impress with standout designs and premium finishes. Bold posters and banners bring your events and promotions to life. We craft packaging that enhances brand presence and customer experience. Every piece reflflects your brand’s unique identity with creativity and intention.",
    iconSrc: '/images/icons/print.png',
    imageSrc: '/images/pics/Print Design.jpg',
  },
  {
    title: 'Indoor & Outdoor Branding',
    description:
      "Play your best game in our custom sublimated Golf t-shirts by Design Culture made for comfort, performance, and style on the course. Not readily available; we create them per order only to ensure a perfect fit and unique design every time.Not readily available; we create them per order only to ensure a perfect fifit and unique design every timeNot readily available; we create them per order only to ensure a perfect fit and unique design every time",
    iconSrc: '/images/icons/sewing.png',
    imageSrc: '/images/pics/Indoor & Outdoor Branding.jpg',
  },
];

const IconBadge: React.FC<{ src?: string; alt?: string }> = ({ src, alt }) => (
  <div className="h-20 w-20 rounded-full ring-4 ring-white bg-[#1F2429] flex items-center justify-center shadow-md">
    {src ? (
      <img
        src={src}
        alt={alt || 'icon'}
        className={`${(alt && alt.toLowerCase().includes('branding')) ? 'h-16 w-16 invert' : (alt && alt.toLowerCase().includes('print')) ? 'h-12 w-12 invert' : (src && src.includes('sewing')) ? 'h-12 w-12 invert' : 'h-12 w-12'} object-contain`}
      />
    ) : (
      <svg viewBox="0 0 24 24" className="h-12 w-12 text-white" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3l3 7h7l-5.5 4 2 7-6.5-4.5L5.5 21l2-7L2 10h7l3-7z" />
      </svg>
    )}
  </div>
);

const ServiceCard: React.FC<ServiceItem> = ({ title, description, imageSrc, iconSrc }) => (
  <div className="relative h-full">
    <div className="h-full rounded-xl border border-gray-200 bg-white text-gray-900 shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col min-h-[500px] md:min-h-[540px]">
      {/* Top image */}
      <div className="relative h-48 bg-gray-200">
        {imageSrc ? (
          <img src={imageSrc} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300" />
        )}
        {/* Centered badge at the seam */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-10">
          <IconBadge src={iconSrc} alt={title} />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pt-14 pb-8 text-center flex-1">
        <h4 className="text-lg sm:text-xl font-extrabold tracking-tight">{title}</h4>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700">{description}</p>
      </div>
    </div>
  </div>
);

const Services: React.FC<ServicesProps> = ({ items = DefaultItems, onSeeAllClick }) => {
  return (
    <section className="w-full bg-[#1F2429] mt-10 sm:mt-12 md:mt-16 py-10 sm:py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Our Services</h3>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-3 items-stretch">
          {items.map((item, idx) => (
            <div key={idx} className="h-full">
              <ServiceCard {...item} />
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={onSeeAllClick}
            className="rounded-full bg-white/90 px-6 py-3 text-sm sm:text-base font-semibold text-gray-900 shadow hover:bg-white"
          >
            See All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
