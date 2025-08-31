import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

const Maintenance: React.FC = () => {
  useSEO({
    title: '503 — Being manufactured | Design Culture',
    description: 'This page is being manufactured or temporarily unavailable. Please check back soon.',
    canonicalPath: '/maintenance',
    noindex: true,
  });
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-white">
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-[#111827] text-white ring-4 ring-white shadow">
            <svg
              viewBox="0 0 24 24"
              className="h-10 w-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M3 21h18" />
              <path d="M9 8l3-3 3 3" />
              <path d="M12 5v11" />
            </svg>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            503 — Being manufactured
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            This page is currently <span className="font-semibold text-gray-900">being manufactured</span> or
            temporarily <span className="font-semibold text-gray-900">unavailable</span> while we improve your
            experience. We’ll be back shortly.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center rounded-full bg-[#111827] px-6 py-3 text-white font-semibold shadow hover:bg-[#0f1629] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111827]/60"
            >
              Go to Home
            </Link>
            <Link
              to="/contact-us"
              className="inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3 text-gray-900 font-semibold shadow hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
            >
              Contact Support
            </Link>
          </div>

          <div className="mt-10 text-sm text-gray-500">
            Status: 503 Service Unavailable • Thanks for your patience.
          </div>
        </div>
      </section>
    </main>
  );
};

export default Maintenance;
