import React, { useState, useEffect } from 'react';
import Video from '../components/video';
import touchUpIcon from '/src/assets/images/touchUp.a389be3c.svg';
import globeIcon from '/src/assets/images/globe.9210ea52.svg';
import packageIcon from '/src/assets/images/package.273ed99d.svg';
import percentIcon from '/src/assets/images/percent.94b60741.svg';
import mobileImage from '/src/assets/images/WHYBESTBYBITES.png';
import appStoreButton from '/src/assets/images/appstore.png';
import playStoreButton from '/src/assets/images/playstore.png';

export default function WhyUseBestByBites() {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionId = section.getAttribute('data-section');
        
        // Trigger animation when section is 20% visible from bottom
        if (rect.top < window.innerHeight * 0.8 && !visibleSections[sectionId]) {
          setVisibleSections((prev) => ({ ...prev, [sectionId]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);

  const SectionWrapper = ({ id, children }) => (
    <div data-section={id}>
      {children}
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .scroll-animate {
          opacity: 0;
        }

        .scroll-animate.animate-visible {
          animation: slideInUp 0.7s ease-out forwards;
        }

        .scroll-animate-left {
          opacity: 0;
        }

        .scroll-animate-left.animate-visible {
          animation: slideInLeft 0.7s ease-out forwards;
        }

        .scroll-animate-right {
          opacity: 0;
        }

        .scroll-animate-right.animate-visible {
          animation: slideInRight 0.7s ease-out forwards;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Main Section with Video */}
      <section className="w-full bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Mission Statement Header */}
          <SectionWrapper id="title-section">
            <div className="text-center mb-8 sm:mb-10 md:mb-14 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-teal-900 mb-4 sm:mb-5 md:mb-6 leading-tight px-2">
                <span className={`inline-block scroll-animate ${visibleSections['title-section'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0s' }}>
                  Best By Bites is a{' '}
                </span>
                <span className={`inline-block text-green-700 font-extrabold scroll-animate ${visibleSections['title-section'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.1s' }}>
                  social impact company
                </span>
                <br className="hidden sm:block" />
                <span className={`inline-block mt-1 sm:mt-0 scroll-animate ${visibleSections['title-section'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
                  {' '}on a mission to{' '}
                </span>
                <span className={`inline-block text-green-700 font-extrabold scroll-animate ${visibleSections['title-section'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.3s' }}>
                  inspire and empower
                </span>
                <br className="hidden sm:block" />
                <span className={`inline-block mt-1 sm:mt-0 scroll-animate ${visibleSections['title-section'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.4s' }}>
                  {' '}everyone to{' '}
                </span>
                <span className={`inline-block text-green-700 font-extrabold scroll-animate ${visibleSections['title-section'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.5s' }}>
                  fight food waste together.
                </span>
              </h2>
              
              <p 
                className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto mb-5 sm:mb-6 md:mb-7 lg:mb-8 leading-relaxed px-4 scroll-animate ${visibleSections['title-section'] ? 'animate-visible' : ''}`}
                style={{ animationDelay: '0.6s' }}
              >
                Our app is the world's largest marketplace for surplus food. We help users rescue good food from going to waste, offering great value for money at local stores, cafes and restaurants.
              </p>

              {/* App Store Download Buttons */}
              <div 
                className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center scroll-animate ${visibleSections['title-section'] ? 'animate-visible' : ''}`}
                style={{ animationDelay: '0.7s' }}
              >
                <a 
                  href="#" 
                  className="hover:opacity-80 hover:scale-105 transition-all duration-300"
                  aria-label="Download on App Store"
                >
                  <img 
                    src={appStoreButton} 
                    alt="Download on App Store" 
                    className="h-11 sm:h-12 md:h-14 lg:h-16 w-auto"
                  />
                </a>
                
                <a 
                  href="#" 
                  className="hover:opacity-80 hover:scale-105 transition-all duration-300"
                  aria-label="Get it on Google Play"
                >
                  <img 
                    src={playStoreButton} 
                    alt="Get it on Google Play" 
                    className="h-11 sm:h-12 md:h-14 lg:h-16 w-auto"
                  />
                </a>
              </div>
            </div>
          </SectionWrapper>

          {/* Video Section */}
          <SectionWrapper id="video-section">
            <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
              <div className={`max-w-5xl mx-auto scroll-animate ${visibleSections['video-section'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0s' }}>
                <Video />
              </div>
            </div>
          </SectionWrapper>

          {/* Why Use Section Title */}
          <SectionWrapper id="why-section">
            <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <h3 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-green-600 mb-1 sm:mb-2 scroll-animate ${visibleSections['why-section'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0s' }}>
                Why Use
              </h3>
              <h3 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-teal-900 scroll-animate ${visibleSections['why-section'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.1s' }}>
                Best By Bites
              </h3>
            </div>

            {/* Features Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center">
              
              {/* Left Column - Features 1 & 2 */}
              <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 order-2 lg:order-1">
                
                {/* Feature 1 - Great Quality */}
                <div 
                  className={`text-center lg:text-right scroll-animate-left ${visibleSections['why-section'] ? 'animate-visible' : ''}`}
                  style={{ animationDelay: '0.2s' }}
                >
                  <div className="flex justify-center lg:justify-end mb-2 sm:mb-3">
                    <img 
                      src={touchUpIcon} 
                      alt="Great Quality" 
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" 
                    />
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-teal-900 mb-2">
                    <span className="text-green-700">Great Quality</span>
                    <br />
                    Premium
                    <br />
                    Products
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-xs mx-auto lg:ml-auto lg:mr-0 px-4 lg:px-0">
                    High-quality groceries directly from top suppliers.
                  </p>
                </div>

                {/* Feature 2 - Sustainable */}
                <div 
                  className={`text-center lg:text-right scroll-animate-left ${visibleSections['why-section'] ? 'animate-visible' : ''}`}
                  style={{ animationDelay: '0.3s' }}
                >
                  <div className="flex justify-center lg:justify-end mb-2 sm:mb-3">
                    <img 
                      src={globeIcon} 
                      alt="Sustainable" 
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" 
                    />
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-teal-900 mb-2">
                    <span className="text-green-700">Sustainable</span>
                    <br />
                    Lifestyle
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-xs mx-auto lg:ml-auto lg:mr-0 px-4 lg:px-0">
                    Support a greener planet by shopping sustainably.
                  </p>
                </div>

              </div>

              {/* Center Column - Phone Mockup */}
              <div 
                className={`flex justify-center items-center order-1 lg:order-2 scroll-animate ${visibleSections['why-section'] ? 'animate-visible' : ''}`}
                style={{ animationDelay: '0.4s' }}
              >
                <div className="w-40 sm:w-48 md:w-56 lg:w-64 xl:w-80">
                  <img 
                    src={mobileImage} 
                    alt="Best By Bites App Interface" 
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Right Column - Features 3 & 4 */}
              <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 order-3">
                
                {/* Feature 3 - Friendly Experience */}
                <div 
                  className={`text-center lg:text-left scroll-animate-right ${visibleSections['why-section'] ? 'animate-visible' : ''}`}
                  style={{ animationDelay: '0.5s' }}
                >
                  <div className="flex justify-center lg:justify-start mb-2 sm:mb-3">
                    <img 
                      src={packageIcon} 
                      alt="Friendly Experience" 
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" 
                    />
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-teal-900 mb-2">
                    <span className="text-green-700">Friendly</span>
                    <br />
                    Experience
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-xs mx-auto lg:mr-auto lg:ml-0 px-4 lg:px-0">
                    Easily find everything you need delivered to your doorstep.
                  </p>
                </div>

                {/* Feature 4 - Up 50% Off */}
                <div 
                  className={`text-center lg:text-left scroll-animate-right ${visibleSections['why-section'] ? 'animate-visible' : ''}`}
                  style={{ animationDelay: '0.6s' }}
                >
                  <div className="flex justify-center lg:justify-start mb-2 sm:mb-3">
                    <img 
                      src={percentIcon} 
                      alt="Up 50% Off" 
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" 
                    />
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-teal-900 mb-2">
                    <span className="text-green-700">Up 50% Off</span>
                    <br />
                    Market Price
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-xs mx-auto lg:mr-auto lg:ml-0 px-4 lg:px-0">
                    Save significantly on quality products.
                  </p>
                </div>

              </div>

            </div>
          </SectionWrapper>

        </div>
      </section>
    </>
  );
}
