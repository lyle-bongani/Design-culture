import React from 'react';
import { Link } from 'react-router-dom';

type Pillar = {
  id: string;
  number: string;
  title: string;
  desc: string;
  img?: string;
};

const pillars: Pillar[] = [
  {
    id: 'branding',
    number: '01',
    title: 'Branding',
    desc:
      "At Design Culture, we believe every brand has a unique soul waiting to be revealed. Our process begins with discovery—uncovering your mission, vision, and audience. We sketch and develop visual concepts that reflect your brand essence, then refine color, typography, and elements into a cohesive identity. Finally, we deliver a polished logo built to inspire across all platforms.",
    img: '/images/pics/branding.jpg',
  },
  {
    id: 'print',
    number: '02',
    title: 'Print Design',
    desc:
      "We design brochures and flyers that grab attention and deliver your message with impact. Our business cards impress with standout designs and premium finishes. Bold posters and banners bring your events and promotions to life. We craft packaging that enhances brand presence and customer experience. Every piece reflects your brand’s unique identity with creativity and intention.",
    img: '/images/pics/print.jpg',
  },
  {
    id: 'indoor-outdoor',
    number: '03',
    title: 'Indoor & Outdoor Branding',
    desc:
      "Play your best game in our custom sublimated golf shirts by Design Culture—made for comfort, performance, and style on the course. Not readily available? We create them per order only to ensure a perfect fit and unique design every time.",
    img: '/images/pics/indoor-outdoor.jpg',
  },
  {
    id: 'digital',
    number: '04',
    title: 'Digital Design',
    desc:
      "We design user-friendly websites that reflect your brand, craft captivating social visuals to boost engagement, and manage your digital presence with consistent messaging across platforms.",
    img: '/images/pics/digital-design.jpg',
  },
  {
    id: 'sublimated-apparel',
    number: '05',
    title: 'Design & Print Sublimated Apparel',
    desc:
      "From vibrant custom T-shirts and high-quality sports jerseys to sleek corporate apparel and eye-catching merchandise—we bring your brand to life through durable, sublimated designs tailored for any occasion.",
    img: '/images/pics/sublimated-apparel.jpg',
  },
  {
    id: 'marketing',
    number: '06',
    title: 'Marketing Collateral',
    desc:
      "We craft compelling marketing materials—from informative flyers and bold posters to detailed brochures that reflect your brand and captivate your audience. Every piece is tailored to spark interest and leave a lasting impression.",
    img: '/images/pics/marketing-collateral.jpg',
  },
];

const NumberBadge: React.FC<{ n: string }> = ({ n }) => (
  <div className="absolute -top-6 left-1/2 -translate-x-1/2 grid h-12 w-12 place-items-center rounded-full bg-gray-900 text-white text-sm font-extrabold ring-4 ring-white shadow-lg">
    {n}
  </div>
);

const IconBadge: React.FC = () => (
  <div className="grid h-12 w-12 place-items-center rounded-full bg-gray-900 text-white ring-4 ring-white shadow-lg">
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>
  </div>
);

const PillarCard: React.FC<Pillar> = ({ id, number, title, desc, img }) => (
  <div className="relative rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/10">
    <NumberBadge n={number} />
    {/* Image area */}
    <div className="overflow-hidden rounded-t-2xl">
      {img ? (
        <img src={img} alt={title} className="h-48 w-full object-cover" />
      ) : (
        <div className="h-48 w-full bg-gray-200" />
      )}
    </div>
    {/* Mid divider with centered icon */}
    <div className="relative">
      <div className="h-1 w-full bg-gray-300" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <IconBadge />
      </div>
    </div>
    {/* Text area */}
    <div className="px-5 pb-8 pt-8 md:pt-10 text-center">
      <h3 className="text-lg font-extrabold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-700">{desc}</p>
      <div className="mt-5">
        <Link
          to={`/service-pillar/${id}`}
          className="inline-flex items-center justify-center rounded-full border border-gray-900 px-5 py-2 text-xs font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition"
        >
          View Service
        </Link>
      </div>
    </div>
  </div>
);

const ServicePillars: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-10 sm:py-12">
      <h2 className="text-center text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">Service Pillars</h2>

      {/* Subtle bg flourish behind cards */}
      <div className="relative mt-8">
        <div className="pointer-events-none absolute inset-0 -z-10 select-none">
          <div className="mx-auto h-72 w-3/4 rounded-full bg-gradient-to-b from-gray-200/60 to-transparent blur-2xl" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <PillarCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePillars;
