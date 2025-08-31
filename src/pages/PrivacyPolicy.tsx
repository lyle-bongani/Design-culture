import React from 'react';
import { useSEO } from '../hooks/useSEO';

const PrivacyPolicy: React.FC = () => {
  useSEO({
    title: 'Privacy Policy — Design Culture',
    description: 'Read Design Culture\'s privacy policy regarding data collection and usage.',
    canonicalPath: '/privacy-policy',
  });
  return (
    <section className="container mx-auto px-4 py-8 text-left">
      <h1 className="text-3xl font-semibold text-gray-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: 31 Aug 2025</p>

      <p className="mt-6 text-gray-700">
        At Design Culture ("we", "us", "our"), we respect your privacy and are committed to protecting the personal
        information you share with us. This policy explains what we collect, how we use it, and your choices.
      </p>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Information we collect</h2>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-700">
        <li>
          <span className="font-semibold">Contact data:</span> name, email, phone number, company, and message content when you
          contact us via forms, email, or phone.
        </li>
        <li>
          <span className="font-semibold">Usage data:</span> pages visited, referring URLs, device/browser information, and approximate
          location, typically collected via analytics and server logs.
        </li>
        <li>
          <span className="font-semibold">Transactional or project data:</span> details you provide for quotes, proposals, and service delivery.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-bold text-gray-900">How we use your information</h2>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-700">
        <li>Respond to enquiries and provide quotes or proposals.</li>
        <li>Deliver and improve our services and customer experience.</li>
        <li>Operate, maintain, and secure our website.</li>
        <li>Send service-related communications and, where permitted, marketing updates (you can opt out at any time).</li>
        <li>Comply with legal obligations and enforce agreements.</li>
      </ul>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Legal bases (EEA/UK)</h2>
      <p className="mt-3 text-gray-700">
        Where applicable, we process data on the basis of consent, performance of a contract, legitimate interests
        (e.g., improving our services, securing our website), and/or legal obligations.
      </p>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Sharing your information</h2>
      <p className="mt-3 text-gray-700">
        We do not sell your personal information. We may share data with trusted service providers who assist with
        hosting, analytics, communications, and operations, subject to appropriate safeguards. We may also disclose
        information to comply with the law or protect our rights.
      </p>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Data retention</h2>
      <p className="mt-3 text-gray-700">
        We retain personal information only for as long as needed to fulfill the purposes described above, comply with
        legal obligations, resolve disputes, and enforce agreements.
      </p>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Your rights</h2>
      <p className="mt-3 text-gray-700">
        Depending on your location, you may have rights to access, correct, delete, or restrict processing of your
        personal information, and to object or withdraw consent. To exercise these rights, please contact us using the
        details below.
      </p>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Cookies and analytics</h2>
      <p className="mt-3 text-gray-700">
        We may use cookies and similar technologies to operate the site and understand usage. You can control cookies
        via your browser settings. Disabling cookies may affect site functionality.
      </p>

      <h2 className="mt-8 text-xl font-bold text-gray-900">International transfers</h2>
      <p className="mt-3 text-gray-700">
        If we transfer your information internationally, we will ensure appropriate safeguards are in place consistent
        with applicable data protection laws.
      </p>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Contact us</h2>
      <p className="mt-3 text-gray-700">
        For privacy enquiries or to exercise your rights, contact Design Culture at
        <span className="font-semibold"> info@designculture.co.zw</span> or by phone at the numbers listed on our
        Contact page.
      </p>

      <p className="mt-8 text-xs text-gray-500">
        This Privacy Policy may be updated from time to time. Material changes will be indicated by updating the
        "Last updated" date above.
      </p>
    </section>
  );
};

export default PrivacyPolicy;
