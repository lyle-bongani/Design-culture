import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
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
            <li><NavLink to="/privacy-policy" className={({isActive})=> isActive? 'text-gray-900':'text-gray-600 hover:text-gray-900 transition-colors'}>Privacy Policy</NavLink></li>
            <li><NavLink to="/terms-of-service" className={({isActive})=> isActive? 'text-gray-900':'text-gray-600 hover:text-gray-900 transition-colors'}>Terms Of Service</NavLink></li>
          </ul>
          <Link
            to="/contact-us"
            className="inline-flex items-center rounded-md bg-gray-900 px-5 py-2.5 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile-only CTA remains visible */}
        <Link
          to="/contact-us"
          className="md:hidden inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-base font-medium text-white shadow-sm"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
