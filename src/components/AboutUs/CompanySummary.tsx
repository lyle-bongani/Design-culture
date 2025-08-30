import React from 'react';

const avatars = [
  '/images/team/Ethel Muza.jpg',
  '/images/team/Brian Makwindi.jpg',
  '/images/team/Panashe Bwanali.jpg',
  '/images/team/Brilliant Muchima.jpeg',
  '/images/team/Portia Karisa.jpg',
  '/images/team/Micheal Anesu Maposa.jpg',
];

const CompanySummary: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-10 sm:py-12">
      <div className="flex items-center gap-6 rounded-2xl bg-gray-200/70 p-4 sm:p-6 ring-1 ring-black/10 shadow-[0_6px_20px_rgba(0,0,0,0.08)]">
        {/* Overlapping avatar stack */}
        <div className="flex -space-x-4">
          {avatars.slice(0, 5).map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Team member ${idx + 1}`}
              className="h-14 w-14 rounded-full object-cover ring-4 ring-white grayscale"
            />
          ))}
          {/* Plus circle */}
          <div className="grid h-14 w-14 place-items-center rounded-full bg-[#1F2429] ring-4 ring-white text-white text-2xl font-light">
            +
          </div>
        </div>

        {/* Copy */}
        <p className="text-left text-[13px] sm:text-sm leading-5 text-gray-800">
          Design Culture is a Zimbabwean graphic design firm that delivers impactful branding, print, and digital design
          solutions. With over five years of experience, our skilled team transforms brand identities into powerful visual
          stories that connect with audiences and drive results.
        </p>
      </div>
    </section>
  );
};

export default CompanySummary;
