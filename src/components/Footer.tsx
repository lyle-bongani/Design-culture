import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F2429] text-white mt-0 text-left">
      <div className="container mx-auto px-4 py-8 sm:py-10 text-left">
        {/* Top brand row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="text-white font-extrabold tracking-tight text-2xl sm:text-3xl">DC</div>
              <div className="hidden sm:block h-8 w-px bg-white/40" />
              <div className="hidden sm:block">
                <div className="text-white font-extrabold tracking-wide text-sm leading-none">DESIGN</div>
                <div className="text-white font-extrabold tracking-wide text-sm leading-none">CULTURE</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {[0,1,2].map((i) => (
              <div key={i} className="flex h-9 w-9 items-center justify-center rounded-full ring-4 ring-white/10 bg-white/10 text-white">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 h-px w-full bg-white/30" />

        {/* Middle columns */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          {/* Head Office */}
          <div>
            <h4 className="font-extrabold mb-4">Head Office</h4>
            <p className="text-sm text-white/90 leading-6">
              54 Jason Moyo<br/>
              Three Anchor House<br/>
              Harare | Zimbabwe
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-extrabold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/90 text-sm">
              <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:underline">Term Of Service</Link></li>
              <li><Link to="/disclaimer" className="hover:underline">Disclaimer</Link></li>
              <li><Link to="/credits" className="hover:underline">Credits</Link></li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-extrabold mb-4">Pages</h4>
            <ul className="space-y-2 text-white/90 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about-us" className="hover:underline">About Us</Link></li>
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li><Link to="/service-pillar" className="hover:underline">Service Pillar</Link></li>
              <li><Link to="/contact-us" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-extrabold mb-4">Newsletter</h4>
            <p className="text-sm text-white/90">Get exclusive news by signing up to our Newsletter</p>
            <div className="mt-4 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-full bg-white text-gray-900 placeholder:text-gray-500 px-4 py-2 shadow focus:outline-none"
              />
              <button className="w-full rounded-full border border-white/60 px-4 py-2 text-white bg-transparent hover:bg-white/10">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 h-px w-full bg-white/30" />

        {/* Bottom row */}
        <div className="mt-4 flex flex-col gap-3 items-start justify-between sm:flex-row sm:items-center text-sm text-white/90">
          <div>
            Copyright c 2025, All rights reserved. designed by Design Culture
          </div>
          <div className="flex items-center gap-6">
            <Link to="/terms-of-service" className="hover:underline">Terms and Condits</Link>
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
