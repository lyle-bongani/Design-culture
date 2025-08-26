import React from 'react';

type BrandShowcaseProps = {
  backgroundSrc?: string;
  backgroundAlt?: string;
  overlayOpacity?: number; // 0..100 for Tailwind opacity steps
  logoImageSrc?: string; // optional centered logo image
};

const BrandShowcase: React.FC<BrandShowcaseProps> = ({
  backgroundSrc = '/images/pics/abouthhero.jpg',
  backgroundAlt = 'Design Culture background',
  overlayOpacity = 60,
  logoImageSrc,
}) => {
  // Map overlayOpacity to Tailwind class like bg-black/60
  const clamped = Math.min(100, Math.max(0, overlayOpacity));
  const overlayClass = `bg-black/${clamped}`;

  return (
    <section className="container mx-auto px-4 py-10 sm:py-12">
      <div className="relative overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/10">
        {/* Background image */}
        {backgroundSrc ? (
          <img src={backgroundSrc} alt={backgroundAlt} className="h-[460px] w-full object-cover sm:h-[520px] md:h-[600px]" />
        ) : (
          <div className="h-[460px] w-full bg-gray-300 sm:h-[520px] md:h-[600px]" />
        )}
        {/* Dark overlay */}
        <div className={`absolute inset-0 ${overlayClass}`} />

        {/* Centered logo lockup */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-6">
          {logoImageSrc ? (
            <img src={logoImageSrc} alt="Design Culture logo" className="h-16 w-auto sm:h-20 md:h-24 object-contain" />
          ) : (
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="text-white font-extrabold tracking-tight text-4xl sm:text-5xl">DC</div>
              <div className="h-10 w-px bg-white/70 hidden sm:block" />
              <div className="text-left">
                <div className="text-white font-extrabold tracking-wide text-xl sm:text-2xl leading-none">DESIGN</div>
                <div className="text-white font-extrabold tracking-wide text-xl sm:text-2xl leading-none">CULTURE</div>
                <div className="text-white/80 text-[10px] sm:text-xs tracking-widest mt-1">WE ARE JUST CREATIVES</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
