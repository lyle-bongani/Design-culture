import React from 'react';
import { useSEO } from '../hooks/useSEO';

const TermsOfService: React.FC = () => {
  useSEO({
    title: 'Terms of Service — Design Culture',
    description: 'Read the terms governing your use of Design Culture services and website.',
    canonicalPath: '/terms-of-service',
  });
  return (
    <section className="container mx-auto px-4 py-8 text-left">
      <h1 className="text-3xl font-semibold text-gray-900">Terms of Service</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: 31 Aug 2025</p>

      <p className="mt-6 text-gray-700">
        These Terms of Service ("Terms") govern your access to and use of the Design Culture website and services.
        By accessing or using our site or engaging our services, you agree to these Terms.
      </p>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Use of website</h2>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-700">
        <li>You agree not to misuse the site or attempt to disrupt its normal operation.</li>
        <li>All content is provided for general information and marketing purposes.</li>
        <li>We may modify or discontinue any part of the site without notice.</li>
      </ul>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Engaging our services</h2>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-700">
        <li>Project scope, timelines, and fees are set out in a written quote or agreement.</li>
        <li>Deposits may be required. Work begins after acceptance and payment of any required deposit.</li>
        <li>Client is responsible for timely feedback, content, and approvals.</li>
        <li>Revisions are limited as specified in your quote; extra work may incur additional fees.</li>
      </ul>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Intellectual property</h2>
      <p className="mt-3 text-gray-700">
        Unless otherwise agreed, we retain ownership of working files, methods, and non-final assets. Upon full payment,
        you receive the rights specified in your agreement to use the final deliverables for the agreed purposes.
      </p>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Payments and refunds</h2>
      <p className="mt-3 text-gray-700">
        Invoices are due as stated on the invoice. Late payments may pause work. Deposits and completed work are not
        refundable. If a project is cancelled, you are responsible for work performed up to the cancellation date.
      </p>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Warranties and liability</h2>
      <p className="mt-3 text-gray-700">
        The site and services are provided "as is". We disclaim all warranties to the extent permitted by law. We are
        not liable for indirect or consequential losses. Our total liability is limited to the fees paid for the
        specific services giving rise to the claim.
      </p>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Third-party materials</h2>
      <p className="mt-3 text-gray-700">
        We may incorporate third-party assets (e.g., fonts, stock images) under their respective licenses. You agree to
        comply with such licenses for your use of the deliverables.
      </p>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Governing law</h2>
      <p className="mt-3 text-gray-700">
        These Terms are governed by the laws of Zimbabwe, without regard to conflict of laws principles.
      </p>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Contact</h2>
      <p className="mt-3 text-gray-700">
        Questions about these Terms? Contact us at <span className="font-semibold">info@designculture.co.zw</span>.
      </p>
    </section>
  );
};

export default TermsOfService;
