import React, { useState } from 'react';
import { Download, Store } from 'lucide-react';

export default function BestbyBitesBanner() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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
      className="relative w-full overflow-hidden flex items-center justify-center bg-black"
      style={{
        height: getContainerHeight(),
        minHeight: '400px'
      }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://bestbybites.com/wp-content/uploads/2025/10/BEST-BY-BITE-BANNER-2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900 opacity-50 z-5"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto py-12 sm:py-16 md:py-20 lg:py-24">
          
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-5 leading-tight drop-shadow-lg">
            Better Food. Better Prices.
            <span className="block mt-1">A Better Planet.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 md:mb-10 font-light drop-shadow-md">
            Join Bestby Bites today.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center items-center">
            
            {/* Download App Button */}
            <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-green-500 hover:bg-green-600 transition-all duration-300 text-white font-semibold text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2">
              <Download size={20} className="md:w-5 md:h-5" />
              <span>Download the App</span>
            </button>

            {/* Sign Up Business Button */}
            <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-green-500 hover:bg-green-600 transition-all duration-300 text-white font-semibold text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2">
              <Store size={20} className="md:w-5 md:h-5" />
              <span>Sign up your business</span>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
