import React from 'react';
import Handshake from '@mui/icons-material/Handshake';

const values = [
  {
    title: 'Creativity With Purpose',
    subtitle: 'Every design tells a story and builds a connection',
  },
  {
    title: 'Client Partnership',
    subtitle: 'We collaborate closely to understand and elevate your brand',
  },
  {
    title: 'Results-Driven Excellence',
    subtitle: 'Design that delivers impact and meets marketing goals',
  },
  {
    title: 'Craftsmanship & Innovation',
    subtitle: 'High-quality execution with forward-thinking solutions',
  },
];

const IconBadge = () => (
  <div className="absolute top-10 left-1/2 -translate-x-1/2 grid place-items-center h-14 w-14 rounded-full bg-[#1F2429] ring-4 ring-white text-white">
    <Handshake sx={{ fontSize: 30 }} />
  </div>
);

const ValuesSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8 sm:py-10">
      <div className="rounded-2xl bg-gray-200/70 p-5 sm:p-6 ring-1 ring-black/10 shadow-[0_6px_20px_rgba(0,0,0,0.07)]">
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-700">What Drives Us</p>
          <h2 className="mt-1 text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900">
            We Center Our Company Around Four Main Values:
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-2">
          {values.map((v, idx) => (
            <div key={idx} className="relative pt-20">
              <IconBadge />
              <div className="rounded-xl bg-[#1F2429] text-white px-5 py-5 sm:px-6 shadow-[0_8px_20px_rgba(0,0,0,0.30)] ring-1 ring-white/10">
                <div className="text-center">
                  <h3 className="text-white font-extrabold uppercase tracking-widest text-xs sm:text-sm">{v.title}</h3>
                  <p className="mt-1 text-xs sm:text-sm text-white/85">{v.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
