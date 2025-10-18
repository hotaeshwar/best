import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import shopImage from '/src/assets/images/A-one-stop-shop.png';

export default function GroceryLanding() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-gray-50">
      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Section - Single Combined Image - Slides from Left */}
          <div 
            className={`flex justify-center lg:justify-start transition-all duration-1000 ease-out ${
              animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
            }`}
          >
            <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={shopImage} 
                alt="A one-stop shop for all your grocery needs" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Right Section - Content - Slides from Right */}
          <div 
            className={`flex flex-col gap-6 lg:gap-8 transition-all duration-1000 ease-out ${
              animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
          >
            
            {/* Heading */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-900 leading-tight">
                A one-stop shop for all your grocery needs
              </h1>
            </div>
            
            {/* Features List */}
            <div className="space-y-4 lg:space-y-5">
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 mt-1.5">
                  <div className="w-2 h-2 rounded-full bg-teal-900"></div>
                </div>
                <p className="text-base lg:text-lg text-gray-800 leading-relaxed">
                  <span className="font-medium">Fresh food and better-for-you ingredients</span> for every kind of diet
                </p>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 mt-1.5">
                  <div className="w-2 h-2 rounded-full bg-teal-900"></div>
                </div>
                <p className="text-base lg:text-lg text-gray-800 leading-relaxed">
                  <span className="font-medium">Discover unique new finds</span> and limited-time deals every week
                </p>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 mt-1.5">
                  <div className="w-2 h-2 rounded-full bg-teal-900"></div>
                </div>
                <p className="text-base lg:text-lg text-gray-800 leading-relaxed">
                  <span className="font-medium">Ugly produce, rescued food,</span> and high-quality groceries
                </p>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 mt-1.5">
                  <div className="w-2 h-2 rounded-full bg-teal-900"></div>
                </div>
                <p className="text-base lg:text-lg text-gray-800 leading-relaxed">
                  <span className="font-medium">Sourced from farms and brands</span> building a better food system
                </p>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <button className="w-full sm:w-auto px-10 lg:px-12 py-4 bg-green-500 hover:bg-green-600 text-teal-900 font-semibold text-base lg:text-lg rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                Learn About Our Groceries
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}