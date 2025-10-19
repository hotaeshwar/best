import React, { useEffect, useRef, useState } from 'react';
import { Download, Store } from 'lucide-react';

export default function BestbyBitesBanner() {
  const imageRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration errors
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Screen size detection and image optimization
  useEffect(() => {
    if (!isMounted) return;

    // Check if screen is small or iPad
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const isIPad = (
        (width === 768) || (width === 820) || (width === 834) || (width === 1024) ||
        navigator.userAgent.includes('iPad') || 
        (navigator.userAgent.includes('Macintosh') && 'ontouchend' in document)
      );
      setIsSmallScreen(width < 768 && !isIPad);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    // Optimized image handling with performance improvements
    const image = imageRef.current;
    
    if (image) {
      // Essential settings for smooth image loading
      image.setAttribute('loading', 'lazy');
      image.setAttribute('decoding', 'async');
      image.style.transition = 'none';
      image.style.animation = 'none';
      
      // Performance optimizations
      image.style.willChange = 'auto';
      image.style.backfaceVisibility = 'hidden';
      image.style.perspective = '1000px';
      image.style.transformStyle = 'preserve-3d';
      image.style.transform = 'translateZ(0)';
      
      // Reduce quality on slower connections
      if ('connection' in navigator) {
        const connection = navigator.connection;
        if (connection.effectiveType === '2g' || connection.effectiveType === '3g') {
          image.style.filter = 'blur(0.3px)';
        }
      }
      
      // iPad and device-specific image adjustments
      const adjustImageFit = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        // Detect iPad devices
        const isIPad = (
          (width === 768 && height === 1024) ||
          (width === 820 && height === 1180) ||
          (width === 834 && height === 1194) ||
          (width === 1024 && height === 1366) ||
          (height === 768 && width === 1024) ||
          (height === 820 && width === 1180) ||
          (height === 834 && width === 1194) ||
          (height === 1024 && width === 1366) ||
          (navigator.userAgent.includes('iPad') || 
           (navigator.userAgent.includes('Macintosh') && 'ontouchend' in document))
        );
        
        // Calculate aspect ratios
        const screenRatio = width / height;
        const imageRatio = 16 / 9; // Assuming your image is 16:9
        
        // Base styles for all devices
        image.style.objectFit = 'cover';
        image.style.width = '100%';
        image.style.height = '100%';
        image.style.position = 'absolute';
        image.style.top = '0';
        image.style.left = '0';
        image.style.transform = 'translateZ(0)';
        image.style.display = 'block';
        
        // iPad-specific positioning to prevent stretching
        if (isIPad) {
          image.style.objectPosition = 'center center';
          image.style.minWidth = '100%';
          image.style.minHeight = '100%';
        }
        // Other devices
        else if (screenRatio > imageRatio) {
          image.style.objectPosition = 'center center';
        } else {
          image.style.objectPosition = 'center 40%';
        }
      };
      
      // Apply initial adjustments
      adjustImageFit();
      
      // Re-adjust on window resize
      window.addEventListener('resize', adjustImageFit);
      
      return () => {
        window.removeEventListener('resize', adjustImageFit);
        window.removeEventListener('resize', checkScreenSize);
      };
    }

    return () => window.removeEventListener('resize', checkScreenSize);
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Container with full screen height - landscape mobile */}
      <div className="relative w-full h-screen min-h-screen flex items-center justify-center">
        
        {/* Background Image */}
        <img
          ref={imageRef}
          src="https://bestbybites.com/wp-content/uploads/2025/10/BEST-BY-BITE-BANNER-2.jpg"
          alt="Best by Bites Banner"
          className="absolute inset-0 w-full h-full z-0"
          loading="lazy"
          decoding="async"
        />

        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/50 via-green-900/40 to-green-900/60 z-5"></div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="text-center w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
            
            {/* Main Heading */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-2 sm:mb-3 md:mb-4 lg:mb-6 xl:mb-8 leading-tight drop-shadow-lg">
              Eat Well. Pay Less.
              <span className="block mt-1 sm:mt-2 md:mt-3 lg:mt-4">Waste Less.</span>
            </h1>

            {/* Subheading */}
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 font-light drop-shadow-md">
              Join Bestby Bites today.
            </p>

            {/* Buttons Container - stacked on mobile, row on tablet+ */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-center items-center w-full px-2">
              
              {/* Download App Button */}
              <button className="w-full sm:w-auto px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-green-500 hover:bg-green-600 active:bg-green-700 transition-all duration-300 text-white font-semibold text-xs sm:text-sm md:text-base lg:text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap">
                <Download size={18} className="sm:w-4 md:w-5 lg:w-6" />
                <span>Download the App</span>
              </button>

              {/* Sign Up Business Button */}
              <button className="w-full sm:w-auto px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-green-500 hover:bg-green-600 active:bg-green-700 transition-all duration-300 text-white font-semibold text-xs sm:text-sm md:text-base lg:text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap">
                <Store size={18} className="sm:w-4 md:w-5 lg:w-6" />
                <span>Sign up your business</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
