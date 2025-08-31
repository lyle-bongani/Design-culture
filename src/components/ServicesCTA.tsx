import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCTA: React.FC = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 py-12 sm:py-14">
        <div className="rounded-2xl bg-gray-100 ring-1 ring-black/10 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
          <div className="grid items-center gap-8 p-6 sm:p-8 md:grid-cols-2">
            {/* Left: headline + sub + CTA */}
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                Discover how RemoteEaze can
                <br className="hidden sm:block" />
                transform your business.
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-gray-700">Contact us for a customized solution</p>
              <div className="mt-6">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black/30"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right: replace mockup with provided phone image */}
            <div className="mx-auto w-full max-w-2xl">
              <img
                src="/images/pics/phone.png"
                alt="Phone mockup"
                className="mx-auto h-auto w-full max-w-[36rem] md:max-w-[42rem] object-contain drop-shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
