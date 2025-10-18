import React, { useState, useEffect } from 'react';
import step1 from '/src/assets/images/STEP1IMAGE.jpg';
import step2 from '/src/assets/images/STEP2IMAGE.jpg';
import step3 from '/src/assets/images/STEP3IMAGE.jpg';
import step4 from '/src/assets/images/STEP4IMAGE.jpg';

export default function HowItWorks() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animate, setAnimate] = useState(false);

  const steps = [
    {
      number: '1',
      title: 'Step one',
      description: 'Discover Surprise Bags available at stores and restaurants near you.',
      image: step1,
    },
    {
      number: '2',
      title: 'Step two',
      description: 'Confirm your choice, reserve your food, and pay through the app.',
      image: step2,
    },
    {
      number: '3',
      title: 'Step three',
      description: 'Head to the shop at the specified pickup time, swipe the app, and enjoy your food.',
      image: step3,
    },
    {
      number: '4',
      title: 'Step four',
      description: "You've rescued good food from going to waste and done something good for the planet!",
      image: step4,
    },
  ];

  // Initial animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Auto-advance carousel continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % steps.length);
    }, 5000); // Changed from 3000 to 5000 (5 seconds)

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-teal-900 mb-3 sm:mb-4 md:mb-6 transition-all duration-1000 ease-out ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          How does the Best By Bites app work?
        </h2>

        {/* Description */}
        <p 
          className={`text-center text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ease-out ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          With the best by bites app you can easily see which cafes, restaurants, bakeries and/or stores in your local area have perfectly good food left over for you to save and enjoy at half of the price or less.
        </p>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Desktop/Tablet View (md and above) - Grid Layout with Zoom Effect */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 place-items-center max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-in-out w-full ${
                    index === currentSlide 
                      ? 'scale-110 z-10' 
                      : 'scale-90 opacity-70'
                  }`}
                >
                  {/* Card */}
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full">
                    
                    {/* Image */}
                    <div className="relative overflow-hidden h-48 lg:h-56">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 lg:p-5">
                      <h3 className="text-base lg:text-lg font-bold text-teal-900 mb-2 capitalize">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-teal-600 w-8 h-3'
                      : 'bg-gray-300 w-3 h-3'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile View (below md) - Single Card */}
          <div className="md:hidden">
            
            {/* Single Card */}
            <div className="relative mb-5">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg max-w-sm mx-auto">
                
                {/* Image */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={steps[currentSlide].image}
                    alt={steps[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-teal-900 mb-2 capitalize">
                    {steps[currentSlide].title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {steps[currentSlide].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mb-4">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-teal-600 w-6 h-2'
                      : 'bg-gray-300 w-2 h-2'
                  }`}
                />
              ))}
            </div>

            <p className="text-center text-gray-500 text-xs">
              {currentSlide + 1} / {steps.length}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}