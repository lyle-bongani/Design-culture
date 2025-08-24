import React from 'react';

type BenefitItem = {
  label: string;
  iconSrc?: string;
};

type WhyChooseUsProps = {
  rightImageSrc?: string;
  rightImageAlt?: string;
  benefits?: BenefitItem[];
  title?: string;
  leftTitle?: string;
};

const DefaultBenefits: BenefitItem[] = [
  { label: 'Creative Excellence' },
  { label: 'Experienced Team' },
  { label: 'Tailored Solutions' },
  { label: 'Wide Service Range' },
  { label: 'Results-Oriented' },
  { label: 'Client-Centered Approach' },
];

const IconRing: React.FC<{ src?: string; alt?: string }> = ({ src, alt }) => (
  <div className="flex h-10 w-10 items-center justify-center rounded-full ring-4 ring-white bg-[#1F2429] shadow">
    {src ? (
      <img src={src} alt={alt || 'icon'} className="h-6 w-6 object-contain" />
    ) : (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l3 7h7l-5.5 4 2 7-6.5-4.5L5.5 21l2-7L2 10h7l3-7z" />
      </svg>
    )}
  </div>
);

const BenefitPill: React.FC<BenefitItem> = ({ label, iconSrc }) => (
  <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-black/10">
    <IconRing src={iconSrc} alt={label} />
    <span className="font-medium text-gray-900">{label}</span>
  </div>
);

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  rightImageSrc,
  rightImageAlt = 'Team member',
  benefits = DefaultBenefits,
  title = 'Why Choose Us / Our Differentiators',
  leftTitle = 'Benefits',
}) => {
  return (
    <section className="container mx-auto px-4 py-12 sm:py-16">
      {/* Title */}
      <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
        {title}
      </h3>

      {/* 2-column layout */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 items-stretch">
        {/* Left panel */}
        <div className="h-full">
          <div className="h-full rounded-2xl bg-gray-100 p-5 sm:p-6 md:p-7 shadow ring-1 ring-black/5">
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-800">{leftTitle}</h4>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {benefits.map((b, i) => (
                <BenefitPill key={i} {...b} />
              ))}
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="h-full">
          <div className="h-full overflow-hidden rounded-2xl ring-1 ring-black/5 shadow">
            {rightImageSrc ? (
              <img
                src={rightImageSrc}
                alt={rightImageAlt}
                className="h-[420px] w-full object-cover md:h-[460px]"
              />
            ) : (
              <div className="h-[420px] w-full bg-gradient-to-br from-gray-200 to-gray-300 md:h-[460px]" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
