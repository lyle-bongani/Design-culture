import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <header className="sticky top-0 z-[70] w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="container mx-auto flex items-center gap-6 px-4 py-4" aria-label="Main">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" aria-label="Home">
          <img
            src="/images/logo/DESIGN_CULTURE_LOGO.png"
            alt="Design Culture logo"
            className="h-12 sm:h-16 w-auto scale-[1.7] sm:scale-[2.125] ml-3 sm:ml-4"
          />
        </Link>

        {/* Spacer pushes the following group to the far right */}
        <div className="flex-1" />

        {/* Right group: nav links + CTA close together (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-base">
            <li>
              <NavLink to="/" end className={({isActive})=> `px-4 py-1.5 rounded-full ${isActive? 'bg-gray-200 text-gray-900':'text-gray-600 hover:text-gray-900'}`}>
                Home
              </NavLink>
            </li>
            <li><NavLink to="/about-us" className={({isActive})=> isActive? 'text-gray-900':'text-gray-600 hover:text-gray-900 transition-colors'}>About Us</NavLink></li>
            <li><NavLink to="/services" className={({isActive})=> isActive? 'text-gray-900':'text-gray-600 hover:text-gray-900 transition-colors'}>Services</NavLink></li>
            <li><NavLink to="/service-pillar" className={({isActive})=> isActive? 'text-gray-900':'text-gray-600 hover:text-gray-900 transition-colors'}>Service Pillar</NavLink></li>
            <li><NavLink to="/contact-us" className={({isActive})=> isActive? 'text-gray-900':'text-gray-600 hover:text-gray-900 transition-colors'}>Contact Us</NavLink></li>
          </ul>
          <Link
            to="/contact-us"
            className="inline-flex items-center rounded-md bg-gray-900 px-5 py-2.5 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile: Hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50"
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className={`h-5 w-5 transition ${open ? 'opacity-0' : 'opacity-100'}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg
            className={`absolute h-5 w-5 transition ${open ? 'opacity-100' : 'opacity-0'}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </nav>
    </header>

    {/* Mobile side drawer */}
      {/* Backdrop */}
      <div
        className={`md:hidden fixed inset-0 bg-black/40 transition-opacity duration-200 z-[90] ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />
      {/* Drawer panel */}
      <aside
        role="dialog"
        aria-modal="true"
        className={`md:hidden fixed right-0 top-0 h-full w-80 max-w-[88vw] bg-white shadow-xl border-l border-gray-200 transition-transform duration-200 ease-out z-[100] ${open ? 'translate-x-0' : 'translate-x-full'} rounded-l-2xl overflow-hidden`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <img src="/images/logo/DESIGN_CULTURE_LOGO.png" alt="Design Culture logo" className="h-12 w-auto" />
          </div>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="px-4 py-3 h-[calc(100%-64px)] overflow-y-auto">
          <ul className="flex flex-col text-base divide-y divide-gray-100">
            <li>
              <NavLink onClick={()=>setOpen(false)} to="/" end className={({isActive})=> `flex items-center justify-between px-2 py-4 ${isActive? 'text-gray-900':'text-gray-700 hover:text-gray-900'}`}>
                Home
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={()=>setOpen(false)} to="/about-us" className={({isActive})=> `flex items-center justify-between px-2 py-4 ${isActive? 'text-gray-900':'text-gray-700 hover:text-gray-900'}`}>
                About Us
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={()=>setOpen(false)} to="/services" className={({isActive})=> `flex items-center justify-between px-2 py-4 ${isActive? 'text-gray-900':'text-gray-700 hover:text-gray-900'}`}>
                Services
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={()=>setOpen(false)} to="/service-pillar" className={({isActive})=> `flex items-center justify-between px-2 py-4 ${isActive? 'text-gray-900':'text-gray-700 hover:text-gray-900'}`}>
                Service Pillar
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={()=>setOpen(false)} to="/contact-us" className={({isActive})=> `flex items-center justify-between px-2 py-4 ${isActive? 'text-gray-900':'text-gray-700 hover:text-gray-900'}`}>
                Contact Us
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </NavLink>
            </li>
          </ul>

          <div className="mt-6">
            <Link
              to="/contact-us"
              onClick={()=>setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-black"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-4">
            <p className="text-xs text-gray-500 mb-3">Connect with us</p>
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#0A66C2] text-white">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4.01 0 4.75 2.64 4.75 6.08V24h-4v-7.1c0-1.69-.03-3.87-2.36-3.87-2.36 0-2.72 1.84-2.72 3.75V24h-4V8z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#1877F2] text-white">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.64-1.3 1.3V12h2.3l-.37 3h-1.93v7A10 10 0 0 0 22 12Z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3Zm10 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
