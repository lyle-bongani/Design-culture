import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F2429] text-white mt-0 text-left">
      <div className="container mx-auto px-4 py-8 sm:py-10 text-left">
        {/* Top brand row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo/DESIGN_CULTURE_LOGO.png"
              alt="Design Culture logo"
              className="h-12 sm:h-16 w-auto invert brightness-0 scale-[2] sm:scale-[2.5] ml-3 sm:ml-4"
            />
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/p/Design-Culture-ZW-100063802613214/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full ring-4 ring-white/10 bg-[#111827] text-white hover:opacity-90"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.64-1.3 1.3V12h2.3l-.37 3h-1.93v7A10 10 0 0 0 22 12Z"/></svg>
            </a>
            <a
              href="https://www.tiktok.com/@design.culture.zw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-11 w-11 items-center justify-center rounded-full ring-4 ring-white/10 bg-[#111827] text-white hover:opacity-90"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M14.5 2h2.2c.2 1.2 1 2.3 2.1 3 1 .6 2 .8 3.2.8v2.2c-1.4 0-2.8-.4-4.1-1.2v6.8c0 3.7-3 6.6-6.6 6.6S4.7 17.3 4.7 13.6c0-3.1 2.1-5.7 5-6.4v2.4c-1.6.6-2.7 2.1-2.7 4 0 2.3 1.9 4.2 4.2 4.2s4.2-1.9 4.2-4.2V2z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/designculturezw/reels/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full ring-4 ring-white/10 bg-[#111827] text-white hover:opacity-90"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3Zm10 1.5a1 1 0 1 0 0 2 1  1 0 0 0 0-2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"/></svg>
            </a>
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

          {/* Quick Links */}
          <div>
            <h4 className="font-extrabold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/90 text-sm">
              <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="hover:underline">Disclaimer</Link></li>
              <li><Link to="/credits" className="hover:underline">Credits</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-extrabold mb-4">Newsletter</h4>
            <p className="text-sm text-white/90">Get exclusive news by signing up to our Newsletter</p>
            <form
              action="https://formsubmit.co/Info@desigculture.co.zw"
              method="POST"
              className="mt-4 flex flex-col gap-3"
            >
              {/* FormSubmit config */}
              <input type="hidden" name="_subject" value="Newsletter signup — Design Culture" />
              <input type="hidden" name="_captcha" value="true" />
              {/* Honeypot */}
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
              <label className="sr-only" htmlFor="newsletter-email">Email</label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full rounded-full bg-white text-gray-900 placeholder:text-gray-500 px-4 py-2 shadow focus:outline-none"
              />
              <button type="submit" className="w-full rounded-full border border-white/60 px-4 py-2 text-white bg-transparent hover:bg-white/10">
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 h-px w-full bg-white/30" />

        {/* Bottom row */}
        <div className="mt-4 flex flex-col gap-3 items-start sm:flex-row sm:items-center text-sm text-white/90">
          <div>
            Copyright © 2025, All rights reserved. designed by{' '}
            <a href="https://www.spemedia.co.zw/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              speMedia
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
