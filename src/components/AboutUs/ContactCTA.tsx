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

            {/* Right: phone mockup + peek */}
            <div className="relative mx-auto w-full max-w-sm">
              {/* peek person placeholder (replace with image if available) */}
              <div className="absolute -right-6 bottom-4 hidden h-24 w-24 translate-x-1/2 items-center justify-center overflow-hidden rounded-full bg-white ring-4 ring-gray-200 shadow md:flex">
                {/* Example replacement: <img src="/images/pics/peek.png" className="h-full w-full object-cover"/> */}
                <div className="h-full w-full bg-gradient-to-b from-gray-200 to-gray-300" />
              </div>

              {/* phone body */}
              <div className="relative mx-auto h-96 w-56 rounded-[2rem] border-8 border-gray-300 bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06),0_20px_40px_rgba(0,0,0,0.18)]">
                {/* notch */}
                <div className="absolute left-1/2 top-2 h-6 w-28 -translate-x-1/2 rounded-full bg-gray-300" />

                {/* screen content */}
                <div className="absolute inset-0 grid place-items-center p-6">
                  <div className="flex w-full flex-col items-center gap-4">
                    {/* DC logo placeholder */}
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded bg-black text-white font-bold">DC</div>
                      <div className="h-6 w-28 rounded bg-gray-200" />
                    </div>
                    {/* social row placeholder */}
                    <div className="mt-2 grid w-full grid-cols-3 gap-3">
                      {[0,1,2].map((i)=> (
                        <div key={i} className="grid h-10 place-items-center rounded-lg border border-gray-200">
                          <div className="h-4 w-4 rounded-full bg-gray-300" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* phone shadow base */}
              <div className="pointer-events-none mx-auto mt-4 h-2 w-5/6 rounded-full bg-black/20 blur-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
