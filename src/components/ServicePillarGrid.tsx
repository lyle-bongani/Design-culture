import React from 'react';

type Item = {
  id: string;
  title: string;
  desc: string;
  iconSrc?: string;
};

const items: Item[] = [
  {
    id: 'branding-identity',
    title: 'Branding & Identity Design',
    desc:
      "We develop compelling brand identities that capture your business ethos. This includes logo creation, typography, color systems, and brand guidelines tailored for consistency. Through discovery, concept development, and strategic design, we ensure your brand speaks volumes across every interaction and builds lasting recognition.",
    iconSrc: '/images/icons/branding.png',
  },
  {
    id: 'print-marketing',
    title: 'Print & Marketing Collateral',
    desc:
      "From marketing flyers to corporate brochures, we create striking print materials that make your message heard. Our design philosophy blends clarity with creativity, ensuring every piece is memorable and aligned with your brand story. Business cards, posters, and event collateral are designed to convert interest into action.",
    iconSrc: '/images/icons/print.png',
  },
  {
    id: 'packaging',
    title: 'Packaging Design',
    desc:
      "Great packaging turns products into experiences. We design packaging that’s functional, beautiful, and aligned with your brand values. Whether minimalist or bold, our work attracts attention on shelves and builds excitement in the hands of consumers.",
    iconSrc: '/images/icons/packaging-design.png',
  },
  {
    id: 'digital-web',
    title: 'Digital Design & Web Solutions',
    desc:
      "We create digital assets that engage and perform. From responsive websites to social media graphics and digital ads, our designs are optimized for every screen. Your brand’s digital footprint becomes a seamless extension of your identity.",
    iconSrc: '/images/icons/digital-drawing.png',
  },
  {
    id: 'exhibition-display',
    title: 'Exhibition & Display Design',
    desc:
      "Stand out at expos and events with custom booths and displays. We design immersive experiences that attract foot traffic and spark curiosity. Strategic layouts, bold graphics, and thoughtful details make your brand a destination.",
    iconSrc: '/images/icons/tent.png',
  },
  {
    id: 'outdoor-graphics',
    title: 'Outdoor Graphics',
    desc:
      "Our signage, vehicle wraps & billboards command attention in public spaces. We design for visibility, durability, & impact, ensuring your message shines wherever it’s placed.",
    iconSrc: '/images/icons/bilboard.png',
  },
  {
    id: 'apparel-merch',
    title: 'Apparel & Merchandise Design',
    desc:
      "Transform everyday items into promotional powerhouses. Our apparel and merchandise designs reflect brand style while staying wearable, shareable, and memorable. From T-shirts to tote bags, we bring your brand into the real world.",
    iconSrc: '/images/icons/sewing.png',
  },
  {
    id: 'custom-design',
    title: 'Custom Design Solutions',
    desc:
      "Some brands need something totally unique—we’re built for that. We tailor every detail to your market, goals, and audiences, creating one-of-a-kind designs that move beyond convention and deliver results with personality and precision.",
    iconSrc: '/images/icons/Tailored Solutions.png',
  },
];

const IconCircle: React.FC<{ src?: string; alt?: string }> = ({ src, alt }) => (
  <div className="grid h-14 w-14 place-items-center rounded-full ring-4 shadow bg-gray-900 text-white ring-white">
    {src ? (
      <img src={src} alt={alt || 'icon'} className="h-8 w-8 object-contain filter brightness-0 invert" loading="lazy" />
    ) : (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" />
      </svg>
    )}
  </div>
);

const Card: React.FC<Item> = ({ title, desc, iconSrc }) => (
  <div className="group relative rounded-2xl bg-white p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/10 transition-colors hover:bg-[#1F2429] hover:text-white">
    <div className="flex justify-center"><IconCircle src={iconSrc} alt={title} /></div>
    <h3 className="mt-4 text-lg font-extrabold text-gray-900 group-hover:text-white">{title}</h3>
    <p className="mt-2 text-xs leading-5 text-gray-700 group-hover:text-white/90">{desc}</p>
  </div>
);

const ServicePillarGrid: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-10 sm:py-12">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <Card key={it.id} {...it} />
        ))}
      </div>
    </section>
  );
};

export default ServicePillarGrid;
