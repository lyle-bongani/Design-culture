import React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import TrackChanges from '@mui/icons-material/TrackChanges';

const AboutOverview: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-10 sm:py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left portrait image */}
        <div className="relative">
          <img
            src="/images/pics/aboutabouthero.jpg"
            alt="Team member"
            className="h-[520px] w-full object-cover rounded-2xl ring-4 ring-[#1F2937] shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
          />
        </div>

        {/* Right stacked cards */}
        <div className="flex flex-col gap-6">
          {/* Vision */}
          <div className="relative rounded-2xl bg-[#1F2429] text-white p-4 sm:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.18)] ring-1 ring-white/10">
            <div className="flex flex-col items-center text-center gap-2">
              {/* Icon circle */}
              <div className="grid place-items-center h-14 w-14 rounded-full bg-[#1F2429] ring-4 ring-white text-white">
                {/* Match Home Vision icon */}
                <Visibility sx={{ fontSize: 40 }} />
              </div>
              <h3 className="text-white font-extrabold tracking-widest uppercase text-lg sm:text-xl">Our Vision</h3>
              <p className="mt-1 text-xs sm:text-sm leading-5 sm:leading-6 text-white/90">
                Our vision is to be a global leader in design, known for our commitment to quality, innovation, and sustainability.
                We aim to build lasting relationships with our clients by consistently delivering exceptional design solutions that
                not only meet but exceed their expectations. Through our work, we aspire to make a positive impact on the world,
                one design at a time.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="relative rounded-2xl bg-[#1F2429] text-white p-4 sm:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.18)] ring-1 ring-white/10">
            <div className="flex flex-col items-center text-center gap-2">
              {/* Icon circle */}
              <div className="grid place-items-center h-14 w-14 rounded-full bg-[#1F2429] ring-4 ring-white text-white">
                {/* Match Home Mission icon */}
                <TrackChanges sx={{ fontSize: 40 }} />
              </div>
              <h3 className="text-white font-extrabold tracking-widest uppercase text-lg sm:text-xl">Our Mission</h3>
              <p className="mt-1 text-xs sm:text-sm leading-5 sm:leading-6 text-white/90">
                At Design Culture, our mission is to create meaningful and innovative design solutions that enhance user experiences
                and add value to our clients' lives. We are dedicated to fostering a collaborative environment where creativity and
                critical thinking thrive, ensuring that every project we undertake is executed with excellence and integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
