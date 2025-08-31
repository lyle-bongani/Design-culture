import React from 'react';
import { useSEO } from '../hooks/useSEO';

const Credits: React.FC = () => {
  useSEO({
    title: 'Credits — Design Culture',
    description: 'Credits and acknowledgements for assets and contributors featured on Design Culture.',
    canonicalPath: '/credits',
  });
  return (
    <section className="container mx-auto px-4 py-10 text-left">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Credits</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: 31 Aug 2025</p>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Design & Development</h2>
      <p className="mt-3 text-gray-700">
        Website design and development by <span className="font-semibold">Design Culture</span>.
      </p>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Brand & Assets</h2>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-700">
        <li>Logo, color palette, and typography system crafted by Design Culture.</li>
        <li>Custom graphics and layouts produced in-house unless otherwise noted.</li>
      </ul>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Photography & Media</h2>
      <p className="mt-3 text-gray-700">
        Selected images are sourced from client-provided libraries and licensed stock resources. If you believe any
        media has been used in error, please contact <span className="font-semibold">info@designculture.co.zw</span> for prompt review and removal.
      </p>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Icons & Illustrations</h2>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-700">
        <li>Interface icons from open-source libraries and custom sets, optimized for accessibility.</li>
      </ul>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Technology</h2>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-700">
        <li>Built with React, TypeScript, Vite, and Tailwind CSS.</li>
        <li>Routing by React Router.</li>
        <li>Performance and SEO optimizations implemented across pages.</li>
      </ul>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Acknowledgements</h2>
      <p className="mt-3 text-gray-700">
        We thank our clients, partners, and community for inspiration and collaboration.
      </p>
    </section>
  );
};

export default Credits;
