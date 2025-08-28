import React, { useState, useEffect } from 'react';

const FloatingButtons: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/263771234567" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-12 w-12 place-items-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.46 3.48 1.32 4.95L2 22l5.25-1.38c1.41.79 3.02 1.22 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91c0-5.46-4.45-9.91-9.92-9.91zM17.23 15.3c-.27-.14-1.59-.78-1.84-.87c-.25-.09-.43-.14-.61.14c-.18.27-.69.87-.85 1.04c-.15.18-.3.2-.55.07c-.25-.14-1.06-.39-2.02-1.25c-.75-.67-1.26-1.5-1.41-1.75c-.15-.25-.02-.38.12-.51c.13-.12.27-.3.41-.45c.14-.15.18-.25.27-.42c.09-.18.05-.34-.02-.48c-.07-.14-.61-1.45-.83-1.99c-.22-.53-.45-.46-.61-.46c-.16 0-.34-.02-.52-.02c-.18 0-.46.07-.7.34c-.25.27-.95.93-.95 2.26c0 1.33.97 2.62 1.11 2.8c.14.18 1.96 3.01 4.76 4.2c.67.29 1.2.47 1.61.6c.7.22 1.33.19 1.82.11c.53-.08 1.59-.65 1.81-1.28c.22-.63.22-1.17.15-1.28c-.07-.11-.25-.18-.52-.31z"/>
        </svg>
      </a>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="grid h-12 w-12 place-items-center rounded-full bg-gray-900 text-white shadow-lg hover:bg-black transition-opacity"
          aria-label="Go to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;
