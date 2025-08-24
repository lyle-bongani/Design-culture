import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white">
      <nav className="container mx-auto flex items-center gap-6 px-4 py-4" aria-label="Main">
        {/* Logo placeholder; replace with your image later */}
        <a href="/" className="flex items-center gap-3" aria-label="Home">
          <div className="h-12 w-12 rounded bg-gray-900 text-white grid place-items-center text-lg font-semibold">DC</div>
          <div className="hidden sm:block">
            <span className="block text-base font-semibold tracking-wide text-gray-900">DESIGN</span>
            <span className="block -mt-1 text-sm tracking-wide text-gray-500">CULTURE</span>
          </div>
        </a>

        {/* Spacer pushes the following group to the far right */}
        <div className="flex-1" />

        {/* Right group: nav links + CTA close together (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-base">
            <li>
              <a
                href="#home"
                aria-current="page"
                className="rounded-full bg-gray-200 px-4 py-1.5 text-gray-900"
              >
                Home
              </a>
            </li>
            <li><a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a></li>
            <li><a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a></li>
            <li><a href="#pillar" className="text-gray-600 hover:text-gray-900 transition-colors">Service Pillar</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact Us</a></li>
            <li><a href="#privacy" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
            <li><a href="#terms" className="text-gray-600 hover:text-gray-900 transition-colors">Terms Of Service</a></li>
          </ul>
          <a
            href="#contact"
            className="inline-flex items-center rounded-md bg-gray-900 px-5 py-2.5 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile-only CTA remains visible */}
        <a
          href="#contact"
          className="md:hidden inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-base font-medium text-white shadow-sm"
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
};

export default Header;
