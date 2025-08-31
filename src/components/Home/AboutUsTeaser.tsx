import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsTeaser: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-10 sm:py-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:items-center">
        {/* Text column */}
        <div className="max-w-xl md:col-span-2 mx-auto text-center">
          <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">About Us</h3>
          <p className="mt-5 text-base sm:text-lg text-gray-700 leading-relaxed">
            Design Culture is a Zimbabwean registered company which is a leading graphic design firm that specializes in
            providing creative and innovative design solutions to businesses of all sizes. With a team of highly skilled and
            experienced designers, we have been helping our clients achieve their marketing objectives through compelling and
            <span className="font-semibold text-gray-900"> effective design for over 5 years</span>...........
          </p>
          <div className="mt-7 flex justify-center">
            <Link
              to="/about-us"
              className="inline-flex items-center rounded-full bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Image column */}
        <div className="relative md:col-span-3 rounded-lg overflow-hidden">
          <img
            src="/images/pics/abouthhero.jpg"
            alt="Team working in a creative studio"
            className="max-w-none w-[115%] sm:w-[120%] md:w-[130%] -ml-4 sm:-ml-6 md:-ml-8 h-48 sm:h-60 md:h-72 lg:h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsTeaser;
