import React, { useEffect, useRef, useState } from 'react';
import { Download, Store } from 'lucide-react';
import videoFile from '../assets/images/water mark video.mp4';

export default function BestbyBitesBanner() {
  const videoRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check if screen is small or iPad
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

    // Video optimization
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

      // Adjust video fit for different devices
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
        } else if (width / height > 16 / 9) {
          video.style.objectPosition = 'center center';
        } else {
          video.style.objectPosition = 'center 40%';
        }
      };

      adjustVideoFit();

      let resizeTimeout;
      const throttledResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(adjustVideoFit, 500);
      };

      window.addEventListener('resize', throttledResize, { passive: true });
      window.addEventListener('orientationchange', () => {
        setTimeout(adjustVideoFit, 600);
      }, { passive: true });

      // Force video load
      const forceVideoLoad = () => {
        return new Promise((resolve) => {
          if (video.readyState === 4) {
            resolve();
            return;
          }

          const checkLoad = () => {
            if (video.readyState === 4) {
              resolve();
            } else {
              setTimeout(checkLoad, 50);
            }
          };

          video.addEventListener('canplaythrough', resolve, { once: true });
          video.addEventListener('loadeddata', checkLoad, { once: true });
          video.load();
        });
      };

      // Play video
      const playVideo = async () => {
        try {
          await forceVideoLoad();
          await new Promise(resolve => setTimeout(resolve, 200));
          await video.play();
        } catch (error) {
          console.log('Autoplay failed, waiting for user interaction');

          const enableVideo = async () => {
            try {
              await forceVideoLoad();
              await video.play();
              document.removeEventListener('click', enableVideo);
              document.removeEventListener('touchstart', enableVideo);
              document.removeEventListener('scroll', enableVideo);
            } catch (err) {
              console.log('Video play failed:', err);
            }
          };

          document.addEventListener('click', enableVideo, { once: true });
          document.addEventListener('touchstart', enableVideo, { once: true });
          document.addEventListener('scroll', enableVideo, { once: true });
        }
      };

      setTimeout(playVideo, 1000);

      return () => {
        window.removeEventListener('resize', throttledResize);
        window.removeEventListener('orientationchange', adjustVideoFit);
        clearTimeout(resizeTimeout);
      };
    }

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Calculate responsive height
  const getContainerHeight = () => {
    if (typeof window === 'undefined') return '100vh';

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

    // Mobile phones (portrait)
    if (width < 768) {
      return Math.min(height * 0.6, 500);
    }
    // iPad specific handling
    else if (isIPad) {
      return Math.min(width * 0.5625, height * 0.6);
    }
    // Other tablets and small laptops
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
        minHeight: isSmallScreen ? '300px' : '400px'
      }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full"
          src={videoFile}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster=""
          controls={false}
          crossOrigin="anonymous"
          loading="eager"
          disablePictureInPicture
          disableRemotePlayback
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            willChange: 'auto',
            WebkitTransform: 'translateZ(0)',
            WebkitBackfaceVisibility: 'hidden',
            imageRendering: 'optimizeSpeed',
            transformStyle: 'preserve-3d',
            perspective: '1000px',
            transition: 'none',
            animation: 'none',
          }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900 opacity-60 z-5"></div>

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
