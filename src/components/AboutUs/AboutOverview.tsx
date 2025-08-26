import React from 'react';

const AboutOverview: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-10 sm:py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left portrait image */}
        <div className="relative">
          <img
            src="/images/pics/portrait.jpg"
            alt="Team member"
            className="h-[520px] w-full object-cover rounded-2xl ring-1 ring-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-4 ring-white/10" />
        </div>

        {/* Right stacked cards */}
        <div className="flex flex-col gap-6">
          {/* Vision */}
          <div className="relative rounded-2xl bg-[#1F2429] text-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.18)] ring-1 ring-white/10">
            <div className="flex items-start gap-4">
              {/* Icon circle */}
              <div className="shrink-0 grid place-items-center h-16 w-16 rounded-full bg-[#1F2429] ring-4 ring-white">
                {/* Eye icon */}
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M1.5 12S5.5 5.5 12 5.5 22.5 12 22.5 12 18.5 18.5 12 18.5 1.5 12 1.5 12z" />
                  <circle cx="12" cy="12" r="3.5" />
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-white font-extrabold tracking-widest uppercase">Our Vision</h3>
                <p className="mt-3 text-xs sm:text-sm leading-5 sm:leading-6 text-white/90">
                  Our vision is to be a global leader in design, known for our commitment to quality, innovation, and sustainability.
                  We aim to build lasting relationships with our clients by consistently delivering exceptional design solutions that
                  not only meet but exceed their expectations. Through our work, we aspire to make a positive impact on the world,
                  one design at a time.
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="relative rounded-2xl bg-[#1F2429] text-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.18)] ring-1 ring-white/10">
            <div className="flex items-start gap-4">
              {/* Icon circle */}
              <div className="shrink-0 grid place-items-center h-16 w-16 rounded-full bg-[#1F2429] ring-4 ring-white">
                {/* Target icon */}
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 3v4M21 12h-4M12 21v-4M3 12h4" />
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-white font-extrabold tracking-widest uppercase">Our Mission</h3>
                <p className="mt-3 text-xs sm:text-sm leading-5 sm:leading-6 text-white/90">
                  At Design Culture, our mission is to create meaningful and innovative design solutions that enhance user experiences
                  and add value to our clients' lives. We are dedicated to fostering a collaborative environment where creativity and
                  critical thinking thrive, ensuring that every project we undertake is executed with excellence and integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
