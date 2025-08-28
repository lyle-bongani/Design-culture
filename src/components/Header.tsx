import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-white">
      <nav className="container mx-auto flex items-center gap-6 px-4 py-4" aria-label="Main">
        {/* Logo placeholder; replace with your image later */}
        <Link to="/" className="flex items-center gap-3" aria-label="Home">
          <div className="h-12 w-12 rounded bg-gray-900 text-white grid place-items-center text-lg font-semibold">DC</div>
          <div className="hidden sm:block">
            <span className="block text-base font-semibold tracking-wide text-gray-900">DESIGN</span>
            <span className="block -mt-1 text-sm tracking-wide text-gray-500">CULTURE</span>
          </div>
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

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden border-t border-gray-200 transition-[max-height,opacity] duration-200 ease-out overflow-hidden ${open ? 'max-h-[460px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="container mx-auto px-4 py-3">
          <ul className="flex flex-col gap-1 text-base">
            <li>
              <NavLink onClick={()=>setOpen(false)} to="/" end className={({isActive})=> `block rounded-md px-3 py-2 ${isActive? 'bg-gray-100 text-gray-900':'text-gray-700 hover:bg-gray-50'}`}>Home</NavLink>
            </li>
            <li><NavLink onClick={()=>setOpen(false)} to="/about-us" className={({isActive})=> `block rounded-md px-3 py-2 ${isActive? 'bg-gray-100 text-gray-900':'text-gray-700 hover:bg-gray-50'}`}>About Us</NavLink></li>
            <li><NavLink onClick={()=>setOpen(false)} to="/services" className={({isActive})=> `block rounded-md px-3 py-2 ${isActive? 'bg-gray-100 text-gray-900':'text-gray-700 hover:bg-gray-50'}`}>Services</NavLink></li>
            <li><NavLink onClick={()=>setOpen(false)} to="/service-pillar" className={({isActive})=> `block rounded-md px-3 py-2 ${isActive? 'bg-gray-100 text-gray-900':'text-gray-700 hover:bg-gray-50'}`}>Service Pillar</NavLink></li>
          </ul>
          <div className="mt-3">
            <Link
              to="/contact-us"
              onClick={()=>setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-5 py-2.5 text-base font-medium text-white shadow-sm hover:bg-black"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
