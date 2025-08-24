import React from 'react';

const UnderHeroSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 pt-4 sm:pt-6 pb-10 sm:pb-12">
      <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
        {/* Left dark card */}
        <div className="relative overflow-hidden rounded-2xl bg-[#1F2429] text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-white/5">
          <div className="mx-auto max-w-2xl px-6 py-10 sm:px-8 sm:py-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Design Culture</h3>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/85">
              We craft bold ideas into timeless design—where innovation meets identity, and every pixel tells a story of purpose, passion & possibility.
              Rooted in creativity, driven by curiosity, and dedicated to elevating brands through meaningful visual language, we believe design isn't
              decoration—it's transformation.
            </p>
          </div>
        </div>

        {/* Right light card */}
        <div className="relative overflow-hidden rounded-2xl bg-gray-200 text-gray-900 shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
          <div className="mx-auto max-w-2xl px-6 py-10 sm:px-8 sm:py-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">A Tale of Resilience and Creativity</h3>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700">
              From humble beginnings to industry recognition, our journey has been a tapestry of challenges, breakthroughs & late-night brainstorming sessions.
              We've weathered design storms, emerging stronger and more passionate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderHeroSection;
