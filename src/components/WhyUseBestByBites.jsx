import React, { useState, useEffect, useRef } from 'react';
import touchUpIcon from '/src/assets/images/touchUp.a389be3c.svg';
import globeIcon from '/src/assets/images/globe.9210ea52.svg';
import packageIcon from '/src/assets/images/package.273ed99d.svg';
import percentIcon from '/src/assets/images/percent.94b60741.svg';
import mobileImage from '/src/assets/images/WHYBESTBYBITES.png';
import appStoreButton from '/src/assets/images/appstore.png';
import playStoreButton from '/src/assets/images/playstore.png';

export default function WhyUseBestByBites() {
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
    <section ref={sectionRef} className="w-full bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section - Mission Statement */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-teal-900 mb-4 sm:mb-6 leading-tight">
            Best By Bites is a social impact company<br />
            on a mission to inspire and empower<br />
            everyone to fight food waste together.
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Our app is the world's largest marketplace for surplus food. We help users rescue good food from going to waste, offering great value for money at local stores, cafes and restaurants.
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#" className="hover:opacity-80 transition-opacity duration-300">
              <img 
                src={appStoreButton} 
                alt="Download on App Store" 
                className="h-12 sm:h-14 md:h-16 w-auto"
              />
            </a>
            
            <a href="#" className="hover:opacity-80 transition-opacity duration-300">
              <img 
                src={playStoreButton} 
                alt="Get it on Google Play" 
                className="h-12 sm:h-14 md:h-16 w-auto"
              />
            </a>
          </div>
        </div>

        {/* Why Use Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-600 mb-2">
            Why Use
          </h3>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-teal-900">
            Best By Bites
          </h3>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Features */}
          <div className="space-y-8 sm:space-y-12 order-2 lg:order-1">
            
            {/* Feature 1 - Great Quality */}
            <div 
              className={`text-center lg:text-right transition-all duration-1000 ease-out ${
                animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
              }`}
            >
              <div className="flex justify-center lg:justify-end mb-3">
                <img src={touchUpIcon} alt="Great Quality" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-teal-900 mb-2">
                Great Quality<br />Premium<br />Products
              </h4>
              <p className="text-sm sm:text-base text-gray-600 max-w-xs mx-auto lg:ml-auto lg:mr-0">
                High-quality groceries directly from top suppliers.
              </p>
            </div>

            {/* Feature 2 - Sustainable */}
            <div 
              className={`text-center lg:text-right transition-all duration-1000 delay-200 ease-out ${
                animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
              }`}
            >
              <div className="flex justify-center lg:justify-end mb-3">
                <img src={globeIcon} alt="Sustainable" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-teal-900 mb-2">
                Sustainable<br />Lifestyle
              </h4>
              <p className="text-sm sm:text-base text-gray-600 max-w-xs mx-auto lg:ml-auto lg:mr-0">
                Support a greener planet by shopping sustainably.
              </p>
            </div>

          </div>

          {/* Middle Column - Phone Image */}
          <div 
            className={`flex justify-center items-center order-1 lg:order-2 transition-all duration-1000 delay-300 ease-out ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
            }`}
          >
            <div className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80">
              <img 
                src={mobileImage} 
                alt="Best By Bites App" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-8 sm:space-y-12 order-3">
            
            {/* Feature 3 - Friendly Experience */}
            <div 
              className={`text-center lg:text-left transition-all duration-1000 ease-out ${
                animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
              }`}
            >
              <div className="flex justify-center lg:justify-start mb-3">
                <img src={packageIcon} alt="Friendly Experience" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-teal-900 mb-2">
                Friendly<br />Experience
              </h4>
              <p className="text-sm sm:text-base text-gray-600 max-w-xs mx-auto lg:mr-auto lg:ml-0">
                Easily find everything you need delivered to your doorstep.
              </p>
            </div>

            {/* Feature 4 - Up 50% Off */}
            <div 
              className={`text-center lg:text-left transition-all duration-1000 delay-200 ease-out ${
                animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
              }`}
            >
              <div className="flex justify-center lg:justify-start mb-3">
                <img src={percentIcon} alt="Up 50% Off" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-teal-900 mb-2">
                Up 50% Off<br />Market Price
              </h4>
              <p className="text-sm sm:text-base text-gray-600 max-w-xs mx-auto lg:mr-auto lg:ml-0">
                Up 50% Off Market Price
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}