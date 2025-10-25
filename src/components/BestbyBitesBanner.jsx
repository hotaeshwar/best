import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import whybestbybite from '../assets/images/whybestbybite.png';

export default function BestbyBitesBanner() {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [imageParts, setImageParts] = useState([]);
  const [containerSize, setContainerSize] = useState({ width: 600, height: 600 });
  const [isContainerVisible, setIsContainerVisible] = useState(false);
  const imageContainerRef = useRef(null);
  const hasAnimated = useRef(false);
  
  const fullText = 'Join Bestby Bites today.';
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = whybestbybite;
    
    img.onload = () => {
      const width = img.width;
      const height = img.height;
      
      const maxSize = 600;
      let containerWidth = width;
      let containerHeight = height;
      
      if (width > maxSize || height > maxSize) {
        const scale = Math.min(maxSize / width, maxSize / height);
        containerWidth = width * scale;
        containerHeight = height * scale;
      }
      
      setContainerSize({ 
        width: containerWidth, 
        height: containerHeight 
      });
      
      const partWidth = containerWidth / 2;
      const partHeight = containerHeight / 2;
      
      const parts = [];
      
      for (let row = 0; row < 2; row++) {
        for (let col = 0; col < 2; col++) {
          const canvas = document.createElement('canvas');
          canvas.width = partWidth;
          canvas.height = partHeight;
          const ctx = canvas.getContext('2d');
          
          ctx.drawImage(
            img,
            (col * width) / 2,
            (row * height) / 2,
            width / 2,
            height / 2,
            0,
            0,
            partWidth,
            partHeight
          );
          parts.push({
            url: canvas.toDataURL(),
            originalPosition: row * 2 + col
          });
        }
      }
      
      setImageParts(parts);
    };
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      } else {
        const timeout = setTimeout(() => {
          setTypedText(
            isDeleting
              ? fullText.substring(0, typedText.length - 1)
              : fullText.substring(0, typedText.length + 1)
          );
        }, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timeout);
      }
    };

    const timeout = handleTyping();
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, loopNum]);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageContainerRef.current || hasAnimated.current) return;
      
      const rect = imageContainerRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible && !hasAnimated.current) {
        hasAnimated.current = true;
        setTimeout(() => {
          setIsContainerVisible(true);
        }, 100);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [imageParts]);

  const getContainerHeight = () => {
    if (typeof window === 'undefined') return '100vh';
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (width < 768) {
      return Math.min(height * 0.6, 500);
    } else if (width < 1024) {
      return Math.min(height * 0.7, 600);
    } else {
      return '100vh';
    }
  };

  const getPartPosition = (originalPosition) => {
    const partWidth = containerSize.width / 2;
    const partHeight = containerSize.height / 2;
    
    const positions = [
      { x: 0, y: 0 },
      { x: partWidth, y: 0 },
      { x: 0, y: partHeight },
      { x: partWidth, y: partHeight }
    ];
    
    return positions[originalPosition];
  };

  return (
    <div
      className="relative w-full overflow-hidden flex flex-col lg:flex-row items-center justify-between bg-white"
      style={{
        height: getContainerHeight(),
        minHeight: '400px'
      }}
    >
      <div className="relative z-10 w-full lg:w-1/2 flex items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="text-left max-w-2xl py-8 sm:py-12 md:py-16 lg:py-24">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-green-800 mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight">
            Eat Well. Pay Less.
            <span className="block mt-1 sm:mt-2">Waste Less.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-800 mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-normal min-h-[2rem] sm:min-h-[2.5rem]">
            {typedText}
            <span className="inline-block w-0.5 h-5 sm:h-6 bg-green-800 ml-1 animate-pulse"></span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start">
            
            <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-green-600 hover:bg-green-700 transition-all duration-300 text-white font-semibold text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 sm:gap-3">
              <span>Download the App</span>
              <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-green-600 hover:bg-green-700 transition-all duration-300 text-white font-semibold text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 sm:gap-3">
              <span>Sign up your business</span>
              <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

          </div>
        </div>
      </div>

      <div 
        ref={imageContainerRef}
        className="hidden lg:flex relative w-full lg:w-1/2 h-64 sm:h-96 lg:h-full items-center justify-center px-4 sm:px-8 lg:pr-16 py-8 lg:py-0"
      >
        {imageParts.length === 4 && (
          <div 
            className={`relative rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden bg-white transition-all duration-1000 ease-out ${
              isContainerVisible 
                ? 'opacity-100 translate-x-0 scale-100 rotate-0' 
                : 'opacity-0 translate-x-full scale-75 rotate-12'
            }`}
            style={{
              width: `${Math.min(containerSize.width, window.innerWidth < 640 ? 300 : window.innerWidth < 1024 ? 400 : containerSize.width)}px`,
              height: `${Math.min(containerSize.height, window.innerWidth < 640 ? 300 : window.innerWidth < 1024 ? 400 : containerSize.height)}px`,
              transformOrigin: 'center'
            }}
          >
            {imageParts.map((part, index) => {
              const position = getPartPosition(part.originalPosition);
              const partWidth = containerSize.width / 2;
              const partHeight = containerSize.height / 2;
              
              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    width: `${partWidth}px`,
                    height: `${partHeight}px`,
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                  }}
                >
                  <img
                    src={part.url}
                    alt={`Bestby Bites Part ${index + 1}`}
                    className="w-full h-full object-cover"
                    style={{ 
                      display: 'block',
                      width: '100%',
                      height: '100%'
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
