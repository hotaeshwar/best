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
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;
      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');
      
      video.preload = 'auto';
      video.poster = '';
      video.loading = 'eager';
      video.crossOrigin = 'anonymous';
      
      video.style.transition = 'none';
      video.style.animation = 'none';
      
      video.style.willChange = 'auto';
      video.style.backfaceVisibility = 'hidden';
      video.style.perspective = '1000px';
      video.style.transformStyle = 'preserve-3d';
      
      if ('connection' in navigator) {
        const connection = navigator.connection;
        if (connection.effectiveType === '2g' || connection.effectiveType === '3g') {
          video.style.filter = 'blur(0.5px)';
        }
      }
      
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
        
        video.style.objectFit = 'cover';
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.position = 'absolute';
        video.style.top = '0';
        video.style.left = '0';
        video.style.transform = 'translateZ(0)';
        
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
      <div className="relative w-full min-h-screen sm:min-h-screen md:min-h-screen lg:h-screen flex items-center justify-center">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://bestbybites.com/wp-content/uploads/2025/10/BEST-BY-BITE-BANNER-2.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        ></div>

        {/* Overlay - responsive opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/60 via-green-900/50 to-green-900/70 z-5"></div>

        {/* Content Container - Better mobile spacing */}
        <div className="relative z-10 w-full flex items-center justify-center px-3 py-16 sm:py-20 md:py-24 lg:py-0">
          <div className="text-center w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
            
            {/* Main Heading - optimized for mobile */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight drop-shadow-lg">
              Eat Well. Pay Less.
              <span className="block mt-2 sm:mt-3 md:mt-4">Waste Less.</span>
            </h1>

            {/* Subheading - responsive */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-light drop-shadow-md">
              Join Bestby Bites today.
            </p>

            {/* Buttons Container - stacked on mobile */}
            <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center w-full px-3 sm:px-0">
              
              {/* Download App Button */}
              <button className="w-full sm:w-auto px-5 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-green-500 hover:bg-green-600 active:bg-green-700 transition-all duration-300 text-white font-semibold text-sm sm:text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap">
                <Download size={20} className="sm:w-5 md:w-6" />
                <span>Download the App</span>
              </button>

              {/* Sign Up Business Button */}
              <button className="w-full sm:w-auto px-5 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-green-500 hover:bg-green-600 active:bg-green-700 transition-all duration-300 text-white font-semibold text-sm sm:text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap">
                <Store size={20} className="sm:w-5 md:w-6" />
                <span>Sign up your business</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
