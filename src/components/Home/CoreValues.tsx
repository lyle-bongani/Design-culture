import React from 'react';
import Handshake from '@mui/icons-material/Handshake';

type ValueItem = {
  title: string;
  description: string;
  iconSrc?: string;
  iconAlt?: string;
};

type CoreValuesProps = {
  items?: ValueItem[];
};

const DefaultItems: ValueItem[] = [
  {
    title: 'More Than a Transaction',
    description:
      "Design Culture isn't just a transaction; it's a relationship. When you choose us, you gain more than designs you gain collaborators. We're not just vendors; we are your creative confidantes. We listen to your aspirations, decode your design dreams, and infuse them with our expertise.",
  },
  {
    title: 'Continuous Improvement',
    description:
      "We're committed to innovation and excellence. Staying ahead with the latest design trends and tools. Growth through continuous learning for our team & clients. Fresh, relevant, and impactful solutions—every time.",
    iconSrc: '/images/icons/performance.png',
    iconAlt: 'Performance',
  },
  {
    title: 'Passion and Dedication',
    description:
      "Design Culture isn't just a transaction; it's a relationship. When you choose us, you gain more than designs you gain collaborators. We're not just vendors; we are your creative confidantes. We listen to your aspirations, decode your design dreams, and infuse them with our expertise.",
    iconSrc: '/images/icons/fist.png',
    iconAlt: 'Passion',
  },
  {
    title: 'Commitment to Quality',
    description:
      "Quality is a cornerstone of our work. We are committed to maintaining the highest standards in all our projects, from strategy formulation to execution. Our rigorous quality control processes ensure that every design we create meets our clients' expectations and adds value to their business.",
    iconSrc: '/images/icons/relationship.png',
    iconAlt: 'Quality',
  },
];

const IconCircle: React.FC<{ src?: string; alt?: string; title?: string }> = ({ src, alt, title }) => (
  <div className="absolute -top-10 left-1/2 -translate-x-1/2">
    {src ? (
      <div className="h-20 w-20 rounded-full ring-4 ring-white bg-[#1F2429] flex items-center justify-center shadow-md">
        <img
          src={src}
          alt={alt || 'icon'}
          className={`h-12 w-12 object-contain ${title && (title.toLowerCase().includes('continuous') || title.toLowerCase().includes('passion') || title.toLowerCase().includes('quality')) ? 'invert' : ''}`}
        />
      </div>
    ) : (
      <div className="h-20 w-20 rounded-full ring-4 ring-white bg-[#1F2429] flex items-center justify-center text-white/90 shadow-md">
        {title && title.toLowerCase().includes('transaction') ? (
          <Handshake sx={{ fontSize: 56 }} />
        ) : (
          <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v10M7 12h10" />
          </svg>
        )}
      </div>
    )}
  </div>
);

const ValueCard: React.FC<ValueItem> = ({ title, description, iconSrc, iconAlt }) => (
  <div className="relative h-full">
    <IconCircle src={iconSrc} alt={iconAlt} title={title} />
    <div className="h-full rounded-2xl bg-[#1F2429] text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-white/5 pt-12 flex flex-col sm:min-h-[240px]">
      <div className="px-6 py-8 text-center sm:px-8 flex-1">
        <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight">{title}</h4>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/85">{description}</p>
      </div>
    </div>
  </div>
);

const CoreValues: React.FC<CoreValuesProps> = ({ items = DefaultItems }) => {
  return (
    <section className="container mx-auto px-4 py-10 sm:py-12">
      <h3 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Our Core Values</h3>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2">
        {items.map((item, idx) => (
          <div key={idx} className={(idx >= 2 ? 'mt-6 sm:mt-8 md:mt-10 ' : '') + 'h-full'}>
            <ValueCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
