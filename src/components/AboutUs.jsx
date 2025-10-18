import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import bestLogo from '/src/assets/images/BESTlogo.png';
import icon1 from '/src/assets/images/icon1.png';
import learnAboutImage from '/src/assets/images/learnabout.jpg';
import aboutImage from '/src/assets/images/ABOUT.jpg';
import Footer from './Footer';

export default function AboutUs() {
  const [animate, setAnimate] = useState(false);
  const [animateHistory, setAnimateHistory] = useState(false);
  const [animateStats, setAnimateStats] = useState(false);
  const [animateBusiness, setAnimateBusiness] = useState(false);
  
  const heroRef = useRef(null);
  const historyRef = useRef(null);
  const statsRef = useRef(null);
  const businessRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      if (heroRef.current) {
        const heroTop = heroRef.current.offsetTop;
        if (scrollPosition > heroTop + 200) {
          setAnimate(true);
        }
      }

      if (historyRef.current) {
        const historyTop = historyRef.current.offsetTop;
        if (scrollPosition > historyTop + 200) {
          setAnimateHistory(true);
        }
      }

      if (statsRef.current) {
        const statsTop = statsRef.current.offsetTop;
        if (scrollPosition > statsTop + 200) {
          setAnimateStats(true);
        }
      }

      if (businessRef.current) {
        const businessTop = businessRef.current.offsetTop;
        if (scrollPosition > businessTop + 200) {
          setAnimateBusiness(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    {
      number: '400+ MILLION',
      description: 'We save good food from going to waste, through Too Good To Go Platform, Too Good To Go Parcels and Surprise Bags.'
    },
    {
      number: '100 MILLION',
      description: 'Using the Too Good To Go app around the world.'
    },
    {
      number: '175,000',
      description: 'Actively helping to save good food from going to waste.'
    },
    {
      number: 'GAIN NEW CUSTOMERS',
      description: 'Through new marketing channels targeting new audiences.'
    },
    {
      number: 'INCREASE BRAND TRIAL',
      description: 'By getting your product into the hands of new customers.'
    }
  ];

  return (
    <>
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

        .image-3d-container {
          perspective: 2000px;
          perspective-origin: center;
        }

        .image-3d {
          transform-style: preserve-3d;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          filter: drop-shadow(0 25px 50px rgba(0,0,0,0.4));
          position: relative;
          border-radius: 16px;
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
          border-radius: 16px;
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
          border-radius: 24px;
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
          border-radius: 24px;
        }

        .image-3d-left:hover {
          transform: translateZ(180px) scale(1.35) rotateY(-10deg) rotateX(-6deg);
          filter: drop-shadow(0 60px 120px rgba(0,0,0,0.6))
                  drop-shadow(0 0 50px rgba(255,255,255,0.3));
        }

        .image-3d-left:hover::before {
          opacity: 1;
        }

        .icon-no-bg {
          mix-blend-mode: multiply;
          filter: contrast(1.1) brightness(1.1);
        }

        .flip-card-container {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          transform-style: preserve-3d;
        }

        .flip-card-container:hover {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          padding: 24px;
          border-radius: 16px;
        }

        .flip-card-front {
          background: white;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          justify-content: center;
          align-items: center;
          text-align: center;
          transition: all 0.6s ease;
        }

        .flip-card-container:hover .flip-card-front {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .flip-card-back {
          transform: rotateY(180deg);
          background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
          justify-content: center;
          align-items: center;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <section className="w-full">
        
        {/* Section 1 - Hero with Two Column Layout */}
        <div ref={heroRef} className="relative w-full min-h-screen bg-[#0d4d4d] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full -mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              <div className={`transition-all duration-1000 ease-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                <div className={`inline-block bg-yellow-400 text-green-900 px-4 py-1.5 mb-6 text-sm font-bold transition-all duration-1000 delay-200 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  ABOUT US
                </div>

                <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-400 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Fighting Food Waste<br />together since 2016
                </h1>

                <p className={`text-base sm:text-lg md:text-xl text-white max-w-3xl mb-8 leading-relaxed transition-all duration-1000 delay-600 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Best by bites is a certified B Corp social impact company, on a mission to inspire and empower everyone to fight food waste together
                </p>

                <div className={`transition-all duration-1000 delay-800 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <button className="px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white font-bold text-base md:text-lg hover:bg-white hover:text-green-900 transition-all duration-300 flex items-center gap-2 rounded-lg">
                    Get In Touch
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>

              <div className={`transition-all duration-1000 ease-out delay-400 image-3d-container ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                <img 
                  src={aboutImage} 
                  alt="About Us" 
                  className="image-3d w-full h-auto object-cover max-w-md mx-auto lg:mx-0"
                />
              </div>

            </div>
          </div>
        </div>

        {/* Section 2 - Our History */}
        <div ref={historyRef} className="w-full bg-gray-50 py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              <div className={`bg-green-900 rounded-3xl p-12 md:p-16 lg:p-20 flex flex-col items-center justify-center min-h-[400px] transition-all duration-1000 ease-out ${animateHistory ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
                <img 
                  src={bestLogo} 
                  alt="Best By Bites Logo" 
                  className="w-32 h-32 md:w-40 md:h-40 mb-8 object-contain"
                />
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-400 text-center mb-4" style={{ fontStyle: 'italic' }}>
                  bestby bites
                </h2>
                <div className="w-full max-w-xs h-1 bg-green-400 mb-2"></div>
                <p className="text-xl md:text-2xl text-green-400 tracking-wider text-center">
                  FOOD MARKETPLACE
                </p>
              </div>

              <div className={`transition-all duration-1000 delay-300 ease-out ${animateHistory ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                <h3 className="text-green-700 text-lg md:text-xl font-bold mb-4 uppercase tracking-wide">
                  DISCOVER
                </h3>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  OUR HISTORY
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Too Good To Go was founded in 2016 in Copenhagen to fight food waste. In 9 years, the company has grown to over 100 million registered users and 175,000 active business partners across 19 countries in Europe and North America. Too Good To Go has helped to save over 400 million meals from being wasted, the equivalent of 1.1M tonnes of CO2e avoided
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Section 3 - Stats with Flip Cards */}
        <div ref={statsRef} className="w-full bg-gray-100 py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${animateStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-green-700 text-lg md:text-xl font-bold mb-4 uppercase tracking-wide">
                WE DREAM OF A PLANET WITH
              </h3>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
                NO FOOD WASTE
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-1000 ${animateStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="h-64">
                    <div className="flip-card-container h-full">
                      
                      <div className="flip-card-front">
                        <div className="flex justify-center mb-4">
                          <img src={icon1} alt="Icon" className="w-24 h-24 md:w-28 md:h-28 object-contain icon-no-bg" />
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                          {stat.number}
                        </h4>
                      </div>

                      <div className="flip-card-back">
                        <p className="text-sm md:text-base text-white leading-relaxed">
                          {stat.description}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Section 4 - Business Model */}
        <div ref={businessRef} className="w-full bg-gray-50 py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              <div className={`transition-all duration-1000 ease-out image-3d-container ${animateBusiness ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
                <img 
                  src={learnAboutImage} 
                  alt="Learn About Our Business Model" 
                  className="image-3d-left w-full h-full object-cover"
                />
              </div>

              <div className={`bg-gradient-to-br from-green-800 to-green-900 rounded-3xl p-8 md:p-12 lg:p-16 transition-all duration-1000 delay-300 ease-out ${animateBusiness ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                <h3 className="text-yellow-400 text-lg md:text-xl font-bold mb-4 uppercase tracking-wide">
                  LEARN ABOUT
                </h3>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
                  our business model
                </h2>
                <div className="space-y-6 text-white">
                  <p className="text-base md:text-lg leading-relaxed">
                    We operate a win-win-win business model: For people, profit and the planet.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    Too Good To Go's focus is to help save good food from going to waste. By doing so, we help businesses unlock revenue from their surplus, help consumers enjoy good food at great value for money, and empower our people and partners to help protect the environment.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    Reducing food waste is the number one action you can take to help tackle climate change, by limiting the temperature rise to just 2°C by 2100 (<span className="text-green-400">Project Drawdown, 2020</span>).
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      <Footer />
    </>
  );
}