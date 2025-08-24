import React from 'react';

type CardProps = {
  title: string;
  description: string;
  iconSrc?: string;
  iconAlt?: string;
};

const Card: React.FC<CardProps> = ({ title, description, iconSrc, iconAlt }) => (
  <div className="relative overflow-hidden rounded-2xl bg-[#1F2429] text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-white/5">
    <div className="mx-auto max-w-xl px-6 py-10 sm:px-8 sm:py-12 text-center">
      {iconSrc ? (
        <div className="mx-auto mb-2 h-20 w-20 rounded-full ring-4 ring-white bg-[#1F2429] flex items-center justify-center">
          <img
            src={iconSrc}
            alt={iconAlt || title}
            className="h-12 w-12 object-contain opacity-95"
          />
        </div>
      ) : (
        <div className="mx-auto mb-2 h-20 w-20 rounded-full ring-4 ring-white bg-[#1F2429] flex items-center justify-center text-white/90">
          <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12s4-6 9-6 9 6 9 6-4 6-9 6-9-6-9-6z" />
            <circle cx="12" cy="12" r="2.5" />
          </svg>
        </div>
      )}
      <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight uppercase">{title}</h3>
      <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/85">{description}</p>
    </div>
  </div>
);

type VisionMissionProps = {
  visionIconSrc?: string;
  visionIconAlt?: string;
  missionIconSrc?: string;
  missionIconAlt?: string;
};

const VisionMission: React.FC<VisionMissionProps> = ({
  visionIconSrc,
  visionIconAlt,
  missionIconSrc,
  missionIconAlt,
}) => {
  return (
    <section className="container mx-auto px-4 pt-8 sm:pt-10 pb-12 sm:pb-14">
      <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
        <Card
          title="Our Vision"
          description="Our vision is to be a global leader in design, known for our commitment to quality, innovation, and sustainability. We aim to build lasting relationships with our clients by consistently delivering exceptional design solutions that not only meet but exceed their expectations. Through our work, we aspire to make a positive impact on the world, one design at a time."
          iconSrc={visionIconSrc}
          iconAlt={visionIconAlt}
        />
        <Card
          title="Our Mission"
          description="At Design Culture, our mission is to create meaningful and innovative design solutions that enhance user experiences and add value to our clients' lives. We are dedicated to fostering a collaborative environment where creativity & critical thinking thrive, ensuring that every project we undertake is executed with excellence and integrity."
          iconSrc={missionIconSrc}
          iconAlt={missionIconAlt}
        />
      </div>
    </section>
  );
};

export default VisionMission;
