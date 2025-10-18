import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import HowItWorks from './HowItWorks';
import marketplaceImg from '../assets/images/MARKETPLACE.png';
import mystryBoxImg from '../assets/images/MYSTRY-BOX.png';
import surplusImg from '../assets/images/SURPLUS.png';
import surplus2Img from '../assets/images/SURPLUS2.png';
import surplus3Img from '../assets/images/SURPLUS3.png';
import surplus4Img from '../assets/images/SURPLUS4.png';

const CounterNumber = ({ target, isCounting, isDecimal }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isCounting) return;

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = isDecimal 
        ? parseFloat((target * progress).toFixed(1))
        : Math.floor(target * progress);
      
      setValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isCounting, target, isDecimal]);

  return <>{value}</>;
};

export default function MarketplaceComponent() {
  const [visibleSections, setVisibleSections] = useState({});
  const [startCounters, setStartCounters] = useState(false);
  const [formData, setFormData] = useState({
    userType: '',
    businessName: '',
    email: '',
    phoneNumber: '',
    city: '',
    agreeToNewsletter: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionId = section.getAttribute('data-section');
        
        if (rect.top < window.innerHeight * 0.8 && !visibleSections[sectionId]) {
          setVisibleSections((prev) => ({ ...prev, [sectionId]: true }));

          if (sectionId === 'good-business' && !startCounters) {
            setStartCounters(true);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSections, startCounters]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotateY(0deg);
          }
          50% {
            transform: translateY(-10px) rotateY(5deg);
          }
        }

        @keyframes popOut {
          0% {
            transform: translateZ(0) scale(1);
          }
          50% {
            transform: translateZ(100px) scale(1.2);
          }
          100% {
            transform: translateZ(80px) scale(1.15);
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

        .scroll-animate-scale {
          opacity: 0;
        }

        .scroll-animate-scale.animate-visible {
          animation: scaleIn 0.4s ease-out forwards;
        }

        .image-3d-container {
          perspective: 1500px;
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
          transform: translateZ(50px) scale(1.08) rotateY(5deg) rotateX(-3deg);
          filter: drop-shadow(0 30px 60px rgba(0,0,0,0.4)) 
                  drop-shadow(0 0 20px rgba(255,255,255,0.15));
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
          transform: translateZ(50px) scale(1.08) rotateY(-5deg) rotateX(-3deg);
          filter: drop-shadow(0 30px 60px rgba(0,0,0,0.4))
                  drop-shadow(0 0 20px rgba(255,255,255,0.15));
        }

        .image-3d-left:hover::before {
          opacity: 1;
        }

        .image-3d-icon {
          transform-style: preserve-3d;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          filter: drop-shadow(0 15px 30px rgba(0,0,0,0.3));
          position: relative;
        }

        .image-3d-icon::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          border-radius: inherit;
        }

        .image-3d-icon:hover {
          transform: translateZ(50px) scale(1.15) rotateY(8deg) rotateX(-5deg);
          filter: drop-shadow(0 30px 60px rgba(0,0,0,0.4))
                  drop-shadow(0 0 25px rgba(34, 197, 94, 0.3));
          animation: popOut 0.6s ease-out;
        }

        .image-3d-icon:hover::after {
          opacity: 1;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Section 1: Hero - Solid Dark Green Background */}
      <SectionWrapper id="hero">
        <div className="relative w-full min-h-screen overflow-hidden bg-green-900 py-12 sm:py-16 md:py-20">
          <div className="relative z-20 min-h-screen flex items-center px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              <div className={`scroll-animate-left ${visibleSections['hero'] ? 'animate-visible' : ''}`}>
                <p className={`text-yellow-300 text-xs sm:text-sm font-bold tracking-widest mb-3 sm:mb-4 scroll-animate ${visibleSections['hero'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.1s' }}>
                  MARKETPLACE SURPRISE BAGS
                </p>
                <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 sm:mb-8 scroll-animate ${visibleSections['hero'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
                  PROFIT FROM YOUR SURPLUS FOOD
                </h1>
                <p className={`text-white text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 scroll-animate ${visibleSections['hero'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.3s' }}>
                  Our marketplace connects your business with 100 million registered users across 19 countries – all eager to buy surplus food.
                </p>
                <button className={`border-2 border-white text-white px-6 sm:px-8 py-3 hover:bg-white hover:text-green-900 transition-all duration-300 text-sm sm:text-base font-medium uppercase tracking-wide scroll-animate ${visibleSections['hero'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.4s' }}>
                  Sign up your business →
                </button>
              </div>

              <div className={`image-3d-container flex justify-center lg:justify-end scroll-animate-right ${visibleSections['hero'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
                <img
                  src={marketplaceImg}
                  alt="Surplus food bags"
                  className="image-3d w-full max-w-md lg:max-w-lg h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 2: Introducing The Surprise Bag */}
      <SectionWrapper id="surprise-bag">
        <div className="w-full bg-stone-100 px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className={`image-3d-container flex justify-center scroll-animate-left ${visibleSections['surprise-bag'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.1s' }}>
              <img
                src={mystryBoxImg}
                alt="Surprise Bags"
                className="image-3d-left w-full max-w-sm md:max-w-md h-auto object-contain"
              />
            </div>

            <div className={`scroll-animate-right ${visibleSections['surprise-bag'] ? 'animate-visible' : ''}`}>
              <p className={`text-green-700 text-sm sm:text-base font-bold tracking-wide mb-3 sm:mb-4 scroll-animate ${visibleSections['surprise-bag'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.15s' }}>
                INTRODUCING
              </p>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 scroll-animate ${visibleSections['surprise-bag'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
                The Surprise Bag
              </h2>
              <p className={`text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 scroll-animate ${visibleSections['surprise-bag'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.25s' }}>
                The Too Good To Go app is the world's largest marketplace for surplus food. Sell your unsold food in 'Surprise Bags', for local users to collect in-store at the time you set.
              </p>
              <p className={`text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed scroll-animate ${visibleSections['surprise-bag'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.3s' }}>
                Surprise Bags are sold at 25-50% of their contents' original retail value. You unlock revenue from unsold food and welcome customers into your store, customers save money, and together we help save the planet; Win-Win-Win.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 3: Good For Business */}
      <SectionWrapper id="good-business">
        <div className="w-full bg-stone-200 px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-12 sm:mb-16 scroll-animate-scale ${visibleSections['good-business'] ? 'animate-visible' : ''}`}>
              <p className="text-green-700 text-sm sm:text-base font-bold tracking-wide mb-2 sm:mb-3">
                GREAT FOR THE PLANET
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                GOOD FOR BUSINESS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-12 sm:mb-16">
              <div className={`text-center scroll-animate-scale ${visibleSections['good-business'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.1s' }}>
                <div className="image-3d-container inline-block">
                  <img
                    src={surplusImg}
                    alt="Money icon"
                    className="image-3d-icon w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6"
                  />
                </div>
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-900 mb-2 sm:mb-3">
                  <CounterNumber target={41} isCounting={startCounters} isDecimal={false} />%
                </h3>
                <p className="text-green-900 text-sm sm:text-base md:text-lg font-bold mb-2">
                  OF CUSTOMERS PURCHASED ADDITIONAL ITEMS
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  when collecting a Surprise Bag.
                </p>
              </div>

              <div className={`text-center scroll-animate-scale ${visibleSections['good-business'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
                <div className="image-3d-container inline-block">
                  <img
                    src={surplus2Img}
                    alt="Store icon"
                    className="image-3d-icon w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6"
                  />
                </div>
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-900 mb-2 sm:mb-3">
                  <CounterNumber target={61} isCounting={startCounters} isDecimal={false} />%
                </h3>
                <p className="text-green-900 text-sm sm:text-base md:text-lg font-bold mb-2">
                  ONLY VISITED THE STORE
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  because of their Surprise Bag collection.
                </p>
              </div>

              <div className={`text-center scroll-animate-scale ${visibleSections['good-business'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.3s' }}>
                <img
                  src={surplus3Img}
                  alt="CO2 icon"
                  className="image-3d-icon w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6"
                />
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-900 mb-2 sm:mb-3">
                  <CounterNumber target={2.7} isCounting={startCounters} isDecimal={true} />KG
                </h3>
                <p className="text-green-900 text-sm sm:text-base md:text-lg font-bold mb-2">
                  OF CO2E EMISSIONS
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  avoided with every Surprise Bag saved.
                </p>
              </div>
            </div>

            <div className={`text-center scroll-animate ${visibleSections['good-business'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.4s' }}>
              <button className="bg-green-900 hover:bg-green-800 text-white px-6 sm:px-8 py-3 transition-all duration-300 text-sm sm:text-base font-medium uppercase tracking-wide">
                Sign up your business →
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 4: How It Works */}
      <SectionWrapper id="how-it-works">
        <HowItWorks />
      </SectionWrapper>

      {/* Section 5: Sign Up Form */}
      <SectionWrapper id="signup-form">
        <div className="w-full bg-stone-100 px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            <div className={`scroll-animate-left ${visibleSections['signup-form'] ? 'animate-visible' : ''}`}>
              <p className={`text-green-700 text-sm sm:text-base font-bold mb-2 sm:mb-3 scroll-animate ${visibleSections['signup-form'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.1s' }}>
                Sign Up
              </p>
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 scroll-animate ${visibleSections['signup-form'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.15s' }}>
                START SELLING YOUR SURPLUS FOOD
              </h2>

              <div className="space-y-4 sm:space-y-6">
                <div className={`scroll-animate ${visibleSections['signup-form'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Which best describes you? <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="userType"
                    value={formData.userType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                  >
                    <option value="">--- Select Choice ---</option>
                    <option value="food-business">Food business</option>
                    <option value="user">User (I want surprise bags)</option>
                  </select>
                </div>

                {formData.userType === 'food-business' && (
                  <>
                    <div className={`scroll-animate ${visibleSections['signup-form'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.25s' }}>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Business name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                      />
                    </div>

                    <div className={`scroll-animate ${visibleSections['signup-form'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.3s' }}>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                      />
                    </div>
                  </>
                )}

                <div className={`scroll-animate ${visibleSections['signup-form'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.35s' }}>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                  />
                </div>

                <div className={`scroll-animate ${visibleSections['signup-form'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.4s' }}>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                  />
                </div>

                <div className={`scroll-animate ${visibleSections['signup-form'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.45s' }}>
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeToNewsletter"
                      checked={formData.agreeToNewsletter}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-green-700 border-gray-300 focus:ring-green-700"
                    />
                    <span className="text-sm text-gray-700">
                      I agree to receive newsletters and information from Too Good To Go by email, SMS, and push notifications. I can unsubscribe at any time.
                    </span>
                  </label>
                </div>

                <div className={`scroll-animate ${visibleSections['signup-form'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.5s' }}>
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-green-700 hover:bg-green-800 text-white px-6 py-3 sm:py-4 transition-all duration-300 text-sm sm:text-base font-medium uppercase tracking-wide"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>

            <div className={`flex justify-center lg:justify-end scroll-animate-right ${visibleSections['signup-form'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
              <img
                src={surplus4Img}
                alt="Chef with surplus food"
                className="image-3d w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
}