import React from 'react';

type Props = {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
};

const ContactHero: React.FC<Props> = ({
  title = 'Contact Us',
  subtitle = "For inquiries, partnerships, or service info, reach out to us. We're here to help you optimize your business solutions.",
  imageSrc = '/images/pics/contact-hero.jpg',
}) => {
  return (
    <section className="container mx-auto px-4 pt-6 sm:pt-8">
      <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
        {/* Background image */}
        <img
          src={imageSrc}
          alt={title}
          className="h-[260px] w-full object-cover sm:h-[340px] md:h-[420px]"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Centered content */}
        <div className="absolute inset-0 grid place-items-center px-6 text-center">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">{title}</h1>
            <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm leading-6 text-white/80">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
