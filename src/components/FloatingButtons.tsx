import React, { useState, useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
      {/* WhatsApp Button (MUI) */}
      <Tooltip title="Chat with us on WhatsApp" arrow>
        <Fab
          color="success"
          aria-label="whatsapp"
          component="a"
          href="https://wa.me/263771234567"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ width: 56, height: 56, boxShadow: '0 10px 20px rgba(0,0,0,0.25)' }}
        >
          <WhatsAppIcon />
        </Fab>
      </Tooltip>

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
