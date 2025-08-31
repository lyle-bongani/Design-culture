import React from 'react';
import { useSEO } from '../hooks/useSEO';

const Disclaimer: React.FC = () => {
  useSEO({
    title: 'Disclaimer — Design Culture',
    description: 'Read the Design Culture disclaimer regarding information accuracy and limitations of liability.',
    canonicalPath: '/disclaimer',
  });
  return (
    <section className="container mx-auto px-4 py-10 text-left">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Disclaimer</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: 31 Aug 2025</p>

      <p className="mt-6 text-gray-700">
        The information on the Design Culture website is provided for general informational and marketing purposes only.
        While we strive for accuracy, we make no representations or warranties of any kind, express or implied, about
        the completeness, accuracy, reliability, suitability or availability with respect to the website or the
        information, products, services, or related graphics contained on the website for any purpose.
      </p>

      <h2 className="mt-8 text-xl font-bold text-gray-900">No professional advice</h2>
      <p className="mt-3 text-gray-700">
        Content on this website does not constitute professional advice. You should not rely on it as a substitute for
        professional consultation tailored to your situation.
      </p>

      <h2 className="mt-8 text-xl font-bold text-gray-900">External links</h2>
      <p className="mt-3 text-gray-700">
        Our website may contain links to external sites that are not provided or maintained by us. We do not guarantee
        the accuracy, relevance, timeliness, or completeness of any information on these external websites.
      </p>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Limitation of liability</h2>
      <p className="mt-3 text-gray-700">
        To the fullest extent permitted by law, Design Culture shall not be liable for any loss or damage including
        without limitation, indirect or consequential loss or damage, arising out of or in connection with the use of
        this website.
      </p>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Changes</h2>
      <p className="mt-3 text-gray-700">
        We may update this Disclaimer from time to time. Material changes will be indicated by updating the "Last
        updated" date above.
      </p>
    </section>
  );
};

export default Disclaimer;
