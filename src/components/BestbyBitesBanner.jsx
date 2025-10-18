import React, { useEffect, useRef, useState } from 'react';
import { Download, Store } from 'lucide-react';

export default function BestbyBitesBanner() {
  const videoRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration errors
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Screen size detection for iPad and small screens
  useEffect(() => {
    if (!isMounted) return;

    const checkScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      const isIPad = (
        (width === 768 && height === 1024) ||
        (width === 820 && height === 1180) ||
        (width === 834 && height === 1194) ||
        (width === 1024 && height === 1366) ||
        (height === 768 && width === 1024) ||
        (height === 820 && width === 1180) ||
        (height === 834 && width === 1194) ||
        (height === 1024 && width === 1366) ||
        navigator.userAgent.includes('iPad') || 
        (navigator.userAgent.includes('Macintosh') && 'ontouchend' in document)
      );
      
      setIsSmallScreen(width < 768 && !isIPad);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, [isMounted]);

  // Video optimization and iPad adjustments
  useEffect(() => {
    if (!isMounted) return;

    const video = videoRef.current;
    
    if (video) {
      // Essential video settings
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;
      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');
      
      // Performance optimizations
      video.preload = 'auto';
      video.poster = '';
      video.loading = 'eager';
      video.crossOrigin = 'anonymous';
      
      // Disable animations during load
      video.style.transition = 'none';
      video.style.animation = 'none';
      
      // Browser optimization
      video.style.willChange = 'auto';
      video.style.backfaceVisibility = 'hidden';
      video.style.perspective = '1000px';
      video.style.transformStyle = 'preserve-3d';
      
      // Network-aware quality reduction
      if ('connection' in navigator) {
        const connection = navigator.connection;
        if (connection.effectiveType === '2g' || connection.effectiveType === '3g') {
          video.style.filter = 'blur(0.5px)';
        }
      }
      
      // iPad-specific video adjustments
      const adjustVideoFit = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        const isIPad = (
          (width === 768 && height === 1024) ||
          (width === 820 && height === 1180) ||
          (width === 834 && height === 1194) ||
          (width === 1024 && height === 1366) ||
          (height === 768 && width === 1024) ||
          (height === 820 && width === 1180) ||
          (height === 834 && width === 1194) ||
          (height === 1024 && width === 1366) ||
          navigator.userAgent.includes('iPad') || 
          (navigator.userAgent.includes('Macintosh') && 'ontouchend' in document)
        );
        
        const screenRatio = width / height;
        const videoRatio = 16 / 9;
        
        // Base styles
        video.style.objectFit = 'cover';
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.position = 'absolute';
        video.style.top = '0';
        video.style.left = '0';
        video.style.transform = 'translateZ(0)';
        
        // iPad-specific positioning
        if (isIPad) {
          video.style.objectPosition = 'center center';
          video.style.minWidth = '100%';
          video.style.minHeight = '100%';
        }
        else if (screenRatio > videoRatio) {
          video.style.objectPosition = 'center center';
        } else {
          video.style.objectPosition = 'center 40%';
        }
      };
      
      adjustVideoFit();
      window.addEventListener('resize', adjustVideoFit);
      
      return () => window.removeEventListener('resize', adjustVideoFit);
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Container with responsive height */}
      <div className="relative w-full h-screen sm:h-auto md:h-screen lg:h-screen min-h-96 flex items-center justify-center">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://bestbybites.com/wp-content/uploads/2025/10/BEST-BY-BITE-BANNER-2.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Overlay - responsive opacity */}
        <div className="absolute inset-0 bg-green-900 opacity-40 sm:opacity-45 md:opacity-50 lg:opacity-50 z-5"></div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="text-center max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
            
            {/* Main Heading - fully responsive */}
            <h1 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-2 sm:mb-3 md:mb-4 lg:mb-6 xl:mb-8 leading-tight drop-shadow-lg">
              Eat Well. Pay Less.
              <span className="block mt-1 sm:mt-2 md:mt-3">Waste Less.</span>
            </h1>

            {/* Subheading - responsive */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white mb-4 sm:mb-5 md:mb-7 lg:mb-9 xl:mb-12 font-light drop-shadow-md px-2">
              Join Bestby Bites today.
            </p>

            {/* Buttons Container - responsive layout */}
            <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 justify-center items-center w-full px-2">
              
              {/* Download App Button */}
              <button className="w-full xs:w-auto px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-2 xs:py-2.5 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 bg-green-500 hover:bg-green-600 active:bg-green-700 transition-all duration-300 text-white font-semibold text-xs xs:text-sm sm:text-base md:text-base lg:text-lg xl:text-xl rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap">
                <Download size={16} className="xs:w-4 xs:h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
                <span>Download the App</span>
              </button>

              {/* Sign Up Business Button */}
              <button className="w-full xs:w-auto px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-2 xs:py-2.5 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 bg-green-500 hover:bg-green-600 active:bg-green-700 transition-all duration-300 text-white font-semibold text-xs xs:text-sm sm:text-base md:text-base lg:text-lg xl:text-xl rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap">
                <Store size={16} className="xs:w-4 xs:h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
                <span>Sign up your business</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
