import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import whereBestImg from '../assets/images/wherebest.jpg';
import canadaImg from '../assets/images/canada.jpg';
import usaImg from '../assets/images/usa.jpg';
import losangelesImg from '../assets/images/losangles.jpg';
import parcelImg from '../assets/images/parcel.jpg';

export default function AreaComponent() {
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
    <div className="w-full overflow-x-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes popOut {
          0% {
            transform: translateZ(0) scale(1);
          }
          50% {
            transform: translateZ(200px) scale(1.4);
          }
          100% {
            transform: translateZ(180px) scale(1.35);
          }
        }

        .scroll-animate {
          opacity: 0;
        }

        .scroll-animate.animate-visible {
          animation: fadeInUp 0.4s ease-out forwards;
        }

        .scroll-animate-left {
          opacity: 0;
        }

        .scroll-animate-left.animate-visible {
          animation: fadeInLeft 0.4s ease-out forwards;
        }

        .scroll-animate-right {
          opacity: 0;
        }

        .scroll-animate-right.animate-visible {
          animation: fadeInRight 0.4s ease-out forwards;
        }

        .image-3d-container {
          perspective: 2000px;
          perspective-origin: center;
        }

        .image-3d {
          transform-style: preserve-3d;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          filter: drop-shadow(0 25px 50px rgba(0,0,0,0.4));
          position: relative;
        }

        .image-3d::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 100%);
          opacity: 0;
          transition: opacity 0.6s ease;
          pointer-events: none;
          border-radius: inherit;
        }

        .image-3d:hover {
          transform: translateZ(180px) scale(1.35) rotateY(10deg) rotateX(-6deg);
          filter: drop-shadow(0 60px 120px rgba(0,0,0,0.6)) 
                  drop-shadow(0 0 50px rgba(255,255,255,0.3));
        }

        .image-3d:hover::before {
          opacity: 1;
        }

        .image-3d-left {
          transform-style: preserve-3d;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          filter: drop-shadow(0 25px 50px rgba(0,0,0,0.4));
          position: relative;
        }

        .image-3d-left::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(225deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 100%);
          opacity: 0;
          transition: opacity 0.6s ease;
          pointer-events: none;
          border-radius: inherit;
        }

        .image-3d-left:hover {
          transform: translateZ(180px) scale(1.35) rotateY(-10deg) rotateX(-6deg);
          filter: drop-shadow(0 60px 120px rgba(0,0,0,0.6))
                  drop-shadow(0 0 50px rgba(255,255,255,0.3));
        }

        .image-3d-left:hover::before {
          opacity: 1;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Section 1: Hero - Dark Green Background */}
      <SectionWrapper id="section1">
        <div className="relative w-full px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden bg-green-900">
          {/* Content Container - Matching Section 2 Layout */}
          <div className="relative z-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-4 md:gap-6 lg:gap-8">
            {/* Text Content - Left Side */}
            <div className={`w-full lg:w-1/2 scroll-animate-left ${visibleSections['section1'] ? 'animate-visible' : ''}`}>
              <p className={`text-yellow-300 text-xs sm:text-sm font-bold tracking-widest mb-3 sm:mb-4 scroll-animate ${visibleSections['section1'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.1s' }}>
                BEST BY BITES IN MY AREA
              </p>
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 sm:mb-8 scroll-animate ${visibleSections['section1'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
                WHERE IS BEST BY BITES AVAILABLE RIGHT NOW?
              </h1>
              <button className={`border-2 border-white text-white px-6 sm:px-8 py-3 hover:bg-white hover:text-green-900 transition-all duration-300 text-sm sm:text-base font-medium uppercase tracking-wide scroll-animate ${visibleSections['section1'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.3s' }}>
                Download the App →
              </button>
            </div>

            {/* Image - Right Side with White Frame */}
            <div className={`image-3d-container w-full lg:w-1/2 flex justify-center lg:justify-end scroll-animate-right ${visibleSections['section1'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
              <img
                src={whereBestImg}
                alt="Where Best By Bites is available"
                className="image-3d w-full max-w-sm md:max-w-md h-auto object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 2: Canada - Light Background */}
      <SectionWrapper id="section2">
        <div className="w-full bg-stone-100 px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Image - Left */}
            <div className={`image-3d-container w-full lg:w-1/2 flex justify-center scroll-animate-left ${visibleSections['section2'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.1s' }}>
              <img
                src={canadaImg}
                alt="Family dinner in Canada"
                className="image-3d-left w-full max-w-sm md:max-w-md h-auto object-cover rounded-md"
              />
            </div>

            {/* Content - Right */}
            <div className={`w-full lg:w-1/2 scroll-animate-right ${visibleSections['section2'] ? 'animate-visible' : ''}`}>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 scroll-animate ${visibleSections['section2'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.15s' }}>
                BEST BY BITES IN CANADA
              </h2>
              <p className={`text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 scroll-animate ${visibleSections['section2'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.25s' }}>
                Too Good To Go is currently active in the following European countries: France, Germany, Austria,
                Switzerland, the UK, Ireland, Italy, Spain, Portugal, Denmark, Sweden, Norway, Poland, Czechia,
                Belgium and the Netherlands.
              </p>
              <button className={`bg-green-700 hover:bg-green-800 text-white px-6 sm:px-8 py-3 transition-all duration-300 text-sm sm:text-base font-medium uppercase tracking-wide scroll-animate ${visibleSections['section2'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.35s' }}>
                Download the App →
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 3: USA - Dark Green Background */}
      <SectionWrapper id="section3">
        <div className="w-full bg-green-900 px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Content - Left */}
            <div className={`w-full lg:w-1/2 scroll-animate-left ${visibleSections['section3'] ? 'animate-visible' : ''}`}>
              <p className={`text-yellow-300 text-xs sm:text-sm font-bold tracking-widest mb-2 sm:mb-3 scroll-animate ${visibleSections['section3'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.1s' }}>
                BEST BY BITES IN USA
              </p>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight scroll-animate ${visibleSections['section3'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
                BEST BY BITES IN USA
              </h2>
              <p className={`text-gray-100 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 scroll-animate ${visibleSections['section3'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.3s' }}>
                Browse the map of your preferred local area, set the filters based on your individual preferences and
                immediately see which stores, cafes, restaurants or bakeries have food available for you to reserve and
                collect. You can easily sort results by distance, price, rating or relevance.
              </p>
              <button className={`border-2 border-white text-white px-6 sm:px-8 py-3 hover:bg-white hover:text-green-900 transition-all duration-300 text-sm sm:text-base font-medium uppercase tracking-wide scroll-animate ${visibleSections['section3'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.4s' }}>
                Download the App →
              </button>
            </div>

            {/* Image - Right */}
            <div className={`image-3d-container w-full lg:w-1/2 flex justify-center lg:justify-end scroll-animate-right ${visibleSections['section3'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
              <img
                src={usaImg}
                alt="Woman with groceries"
                className="image-3d w-full max-w-sm md:max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 4: United States - Light Background */}
      <SectionWrapper id="section4">
        <div className="w-full bg-stone-100 px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Image - Left */}
            <div className={`image-3d-container w-full lg:w-1/2 flex justify-center scroll-animate-left ${visibleSections['section4'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.1s' }}>
              <img
                src={losangelesImg}
                alt="Customer service"
                className="image-3d-left w-full max-w-sm md:max-w-md h-auto object-cover rounded-md"
              />
            </div>

            {/* Content - Right */}
            <div className={`w-full lg:w-1/2 scroll-animate-right ${visibleSections['section4'] ? 'animate-visible' : ''}`}>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 scroll-animate ${visibleSections['section4'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.15s' }}>
                BEST BY BITES IN THE UNITED STATES
              </h2>
              <p className={`text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 scroll-animate ${visibleSections['section4'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.25s' }}>
                Too Good To Go is live in New York, Los Angeles, San Francisco, Chicago, Washington, Philadelphia,
                Boston, Austin, Seattle, Miami, Portland, Providence, Dallas, Houston, San Diego, Sacramento, Atlanta,
                Minneapolis, San Antonio, Tampa, Orlando, Denver, Phoenix, Detroit, Raleigh-Durham, Charlotte,
                Cleveland, Columbus, and Cincinnati.
              </p>
              <button className={`bg-green-700 hover:bg-green-800 text-white px-6 sm:px-8 py-3 transition-all duration-300 text-sm sm:text-base font-medium uppercase tracking-wide scroll-animate ${visibleSections['section4'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.35s' }}>
                Download the App →
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 5: India - Dark Green Background */}
      <SectionWrapper id="section5">
        <div className="w-full bg-green-900 px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Content - Left */}
            <div className={`w-full lg:w-1/2 scroll-animate-left ${visibleSections['section5'] ? 'animate-visible' : ''}`}>
              <p className={`text-yellow-300 text-xs sm:text-sm font-bold tracking-widest mb-2 sm:mb-3 scroll-animate ${visibleSections['section5'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.1s' }}>
                BEST BY BITES IN
              </p>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight scroll-animate ${visibleSections['section5'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
                BEST BY BITES IN INDIA
              </h2>
              <p className={`text-gray-100 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 scroll-animate ${visibleSections['section5'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.3s' }}>
                Browse the map of your preferred local area, set the filters based on your individual preferences and
                immediately see which stores, cafes, restaurants or bakeries have food available for you to reserve and
                collect. You can easily sort results by distance, price, rating or relevance.
              </p>
              <button className={`border-2 border-white text-white px-6 sm:px-8 py-3 hover:bg-white hover:text-green-900 transition-all duration-300 text-sm sm:text-base font-medium uppercase tracking-wide scroll-animate ${visibleSections['section5'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.4s' }}>
                Download the App →
              </button>
            </div>

            {/* Image - Right */}
            <div className={`image-3d-container w-full lg:w-1/2 flex justify-center lg:justify-end scroll-animate-right ${visibleSections['section5'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
              <img
                src={parcelImg}
                alt="Parcel delivery"
                className="image-3d w-full max-w-sm md:max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <Footer />
    </div>
  );
}