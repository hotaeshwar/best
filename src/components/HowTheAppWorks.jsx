import { ArrowRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import howWork1 from '/src/assets/images/howwork.png';
import howWork2 from '/src/assets/images/howwork2.png';
import howWork3 from '/src/assets/images/howwork3.png';
import HowItWorks from './HowItWorks';
import Footer from './Footer';

export default function HowTheAppWorks() {
  const [animateSection1, setAnimateSection1] = useState(false);
  const [animateSection2, setAnimateSection2] = useState(false);
  const [animateSection3, setAnimateSection3] = useState(false);
  
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      if (section1Ref.current) {
        const top = section1Ref.current.offsetTop;
        if (scrollPosition > top + 150) {
          setAnimateSection1(true);
        }
      }

      if (section2Ref.current) {
        const top = section2Ref.current.offsetTop;
        if (scrollPosition > top + 150) {
          setAnimateSection2(true);
        }
      }

      if (section3Ref.current) {
        const top = section3Ref.current.offsetTop;
        if (scrollPosition > top + 150) {
          setAnimateSection3(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
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
      `}</style>

      {/* Section 1: How does the app work - Dark Green Background */}
      <section 
        ref={section1Ref}
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-12 md:py-0 bg-gradient-to-r from-green-900 via-green-800 to-green-700"
      >
        {/* Content */}
        <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-12 md:py-20">
          <div className="w-full max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              
              {/* Left Content */}
              <div 
                className={`flex flex-col justify-center space-y-6 md:space-y-8 transition-all duration-1000 ease-out ${
                  animateSection1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
                }`}
              >
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-300 drop-shadow-lg">
                    THE APP
                  </h3>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg leading-tight">
                  How does the Best By Bites app work?
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed max-w-2xl drop-shadow-md font-medium">
                  With the Too Good To Go app you can easily see which cafes, restaurants, bakeries and/or stores in your local area have perfectly good food left over for you to save and enjoy at half of the price or less.
                </p>

                <div className="pt-4 md:pt-6">
                  <button className="w-fit flex items-center gap-3 px-6 md:px-8 py-2 md:py-3 border-2 border-white text-white font-semibold text-sm md:text-base hover:bg-white hover:text-green-900 transition-all duration-300 rounded-lg">
                    <span>Download the App</span>
                    <ArrowRight size={20} className="md:w-5" />
                  </button>
                </div>
              </div>

              {/* Right Image */}
              <div 
                className={`image-3d-container flex justify-center items-center order-first lg:order-last transition-all duration-1000 ease-out ${
                  animateSection1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                  <img
                    src={howWork1}
                    alt="How the app works"
                    className="image-3d w-full h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* HowItWorks Component */}
      <HowItWorks />

      {/* Section 2: Discover new local favourites */}
      <section 
        ref={section2Ref}
        className="w-full py-12 md:py-20 lg:py-28 bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-16"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            
            {/* Left Image */}
            <div 
              className={`image-3d-container flex justify-center items-center transition-all duration-1000 ease-out ${
                animateSection2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                <img
                  src={howWork2}
                  alt="Discover new local favourites"
                  className="image-3d-left w-full h-auto object-contain drop-shadow-lg"
                />
              </div>
            </div>

            {/* Right Content */}
            <div 
              className={`flex flex-col justify-center space-y-4 md:space-y-6 transition-all duration-1000 ease-out ${
                animateSection2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Discover new local favourites
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Discover (new) local favourites with a wide range of food available for you to rescue. Use the Discover feed to see personalised recommendations, bags available for collection today and/or tomorrow, segment-specific filters, and highlights of new, recently added Surprise Bags.
              </p>

              <div className="pt-2 md:pt-4">
                <button className="w-fit flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 bg-teal-600 text-white font-semibold text-sm md:text-base hover:bg-teal-700 transition-all duration-300 rounded-lg">
                  <span>Learn More</span>
                  <ArrowRight size={20} className="md:w-5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Browse local cafes, restaurants and more */}
      <section 
        ref={section3Ref}
        className="w-full py-12 md:py-20 lg:py-28 bg-white px-4 sm:px-6 md:px-8 lg:px-16"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div 
              className={`flex flex-col justify-center space-y-4 md:space-y-6 transition-all duration-1000 ease-out ${
                animateSection3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Browse local cafes, restaurants and more
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Browse the map of your preferred local area, set the filters based on your individual preferences and immediately see which stores, cafes, restaurants or bakeries have food available for you to reserve and collect. You can easily sort results by distance, price, and more.
              </p>

              <div className="pt-2 md:pt-4">
                <button className="w-fit flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 bg-teal-600 text-white font-semibold text-sm md:text-base hover:bg-teal-700 transition-all duration-300 rounded-lg">
                  <span>Get Started</span>
                  <ArrowRight size={20} className="md:w-5" />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div 
              className={`image-3d-container flex justify-center items-center transition-all duration-1000 ease-out ${
                animateSection3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                <img
                  src={howWork3}
                  alt="Browse local cafes and restaurants"
                  className="image-3d w-full h-auto object-contain drop-shadow-lg"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}