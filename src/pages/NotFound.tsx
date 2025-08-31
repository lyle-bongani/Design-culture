import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

const NotFound: React.FC = () => {
  useSEO({
    title: '404 — Page unavailable | Design Culture',
    description: 'This page is being manufactured or unavailable. Please use the links below to navigate.',
    canonicalPath: window.location.pathname,
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
              <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
              <path d="M8 12h8M8 16h5M8 8h8" />
            </svg>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            404 — Page unavailable
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            This page is either <span className="font-semibold text-gray-900">being manufactured</span> or is
            <span className="font-semibold text-gray-900"> unavailable</span>. We’re sorry for the inconvenience.
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
            Error code: 404 • If you think this is a mistake, please reach out.
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
