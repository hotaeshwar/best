import React, { useState, useEffect, useRef } from 'react';
import businessSolutionsImage from '/src/assets/images/businesssolutions.png';

export default function BusinessSolutions() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const imageRef = useRef(null);

  // Prevent hydration errors
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [isMounted]);

  // Auto-switch between cards
  useEffect(() => {
    if (!isMounted) return;

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMounted]);

  const solutions = [
    {
      title: 'SURPRISE BAGS',
      description: 'Unlock revenue from surplus food: Sell your unsold food in Surprise Bags through the Too Good To Go app, for users to come collect in-store at a pre-determined time.'
    },
    {
      title: 'TOO GOOD TO GO PLATFORM',
      description: 'Your end-to-end surplus food management solution: Modular software that helps retailers seamlessly track, manage and redistribute surplus food.'
    },
    {
      title: 'DATE LABELLING INITIATIVE',
      description: "Reduce waste in households: Join a coalition of the world's leading brands with our bespoke 'Look-Smell-Taste' label printed on billions of Best Before products."
    },
    {
      title: 'TOO GOOD TO GO PARCELS',
      description: "Make the most of food that won't reach retail: we create parcels of perfectly good surplus to be sold and delivered via the Too Good To Go app."
    }
  ];

  if (!isMounted) {
    return null;
  }

  return (
    <section className="w-full bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-teal-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight">
            Our Business solutions
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed px-2">
            We offer a range of solutions to empower the world's leading food distributors to avoid good food from going to waste.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Side - Image with Animation */}
          <div 
            ref={imageRef}
            className={`flex justify-center lg:justify-start transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl">
              <img 
                src={businessSolutionsImage} 
                alt="Business Solutions" 
                className="w-full h-auto object-contain drop-shadow-lg sm:drop-shadow-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Right Side - Cards Grid with Zoom Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg sm:rounded-xl lg:rounded-2xl border-2 p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 transition-all duration-700 ease-in-out cursor-pointer ${
                  activeCard === index 
                    ? 'scale-100 sm:scale-110 z-10 border-teal-500 shadow-lg sm:shadow-xl opacity-100' 
                    : 'scale-95 sm:scale-90 opacity-60 sm:opacity-70 border-gray-300'
                }`}
                onClick={() => setActiveCard(index)}
              >
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-teal-900 mb-2 sm:mb-3 md:mb-4 text-center leading-tight">
                  {solution.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-base text-gray-700 leading-relaxed text-center">
                  {solution.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
