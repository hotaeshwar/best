import React, { useEffect, useState } from 'react';
import { Download, Store } from 'lucide-react';

export default function BestbyBitesBanner() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check if screen is small
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsSmallScreen(width < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Calculate responsive height
  const getContainerHeight = () => {
    if (typeof window === 'undefined') return '100vh';

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Mobile phones (portrait)
    if (width < 768) {
      return Math.min(height * 0.6, 500);
    }
    // Tablets
    else if (width < 1024) {
      return Math.min(height * 0.7, 600);
    }
    // Desktop
    else {
      return '100vh';
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden flex items-center justify-center bg-green-900"
      style={{
        height: getContainerHeight(),
        minHeight: isSmallScreen ? '300px' : '400px'
      }}
    >
      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto py-12 sm:py-16 md:py-20 lg:py-24">
          
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-5 leading-tight drop-shadow-lg">
            Eat Well. Pay Less.
            <span className="block mt-1">Waste Less.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 md:mb-10 font-light drop-shadow-md">
            Join Bestby Bites today.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center items-center">
            
            {/* Download App Button */}
            <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-green-500 hover:bg-green-400 transition-all duration-300 text-white font-semibold text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2">
              <Download size={20} className="md:w-5 md:h-5" />
              <span>Download the App</span>
            </button>

            {/* Sign Up Business Button */}
            <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-green-500 hover:bg-green-400 transition-all duration-300 text-white font-semibold text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2">
              <Store size={20} className="md:w-5 md:h-5" />
              <span>Sign up your business</span>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}