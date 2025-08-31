import React from 'react';
import { Link } from 'react-router-dom';

const ContactCTA: React.FC = () => {
  return (
    <section className="w-full bg-[#1F2429]">
      <div className="container mx-auto px-4 py-12 sm:py-14">
        <div className="rounded-2xl bg-gray-100 ring-1 ring-black/10 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
          <div className="grid items-center gap-8 p-6 sm:p-8 md:grid-cols-2">
            {/* Left: copy + button */}
            <div className="text-center">
              <p className="mx-auto max-w-md text-sm leading-6 text-gray-800">
                Design Culture: Where Creativity Meets Purpose. We craft meaningful design that connects people to brands.
                Driven by innovation, integrity, and artistic excellence, our expert team turns ideas into stunning visuals
                that stand out.
              </p>
              <div className="mt-6">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black/30"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right: image instead of illustrations */}
            <div className="relative mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl">
              <img
                src="/images/pics/phone.png"
                alt="Design Culture phone preview"
                className="mx-auto w-full object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
