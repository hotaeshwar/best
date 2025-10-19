import React, { useState, useEffect } from 'react';
import platform1 from '../assets/images/platform1.jpg';
import platform2 from '../assets/images/platform2.png';
import platform3 from '../assets/images/platform3.png';
import platform4 from '../assets/images/platform4.png';
import platform5 from '../assets/images/platform5.png';
import platform6 from '../assets/images/platform6.jpg';
import Footer from './Footer';

const FlipCard = ({ icon, title, subtitle, description, delay }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-64 sm:h-72 md:h-80 lg:h-80 xl:h-80 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{
        perspective: '1000px',
        animation: `fadeInUp 0.6s ease-out forwards`,
        animationDelay: delay
      }}
    >
      <style>{`
        @keyframes flipCard {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(180deg); }
        }

        .flip-card-container {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card-container.flipped {
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
          padding: 16px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
        }

        @media (min-width: 640px) {
          .flip-card-front, .flip-card-back { padding: 20px; }
        }

        @media (min-width: 768px) {
          .flip-card-front, .flip-card-back { padding: 24px; }
        }

        .flip-card-front {
          background: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .flip-card-back {
          transform: rotateY(180deg);
          background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
          justify-content: center;
          align-items: center;
          text-align: center;
        }
      `}</style>

      <div className={`flip-card-container ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front">
          <div className="flex flex-col items-center">
            <img src={icon} alt={title} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-3 sm:mb-4 md:mb-6" />
            <h3 className="text-green-700 font-bold text-xs sm:text-sm md:text-base lg:text-xl leading-tight">
              {title}
            </h3>
          </div>
        </div>

        <div className="flip-card-back">
          <div className="flex flex-col justify-center items-center h-full">
            <h4 className="text-teal-100 font-semibold text-xs sm:text-sm md:text-lg mb-2 sm:mb-3 md:mb-4">
              {subtitle}
            </h4>
            <p className="text-xs sm:text-xs md:text-sm leading-relaxed text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Platform = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const [formData, setFormData] = useState({
    userType: '',
    businessName: '',
    email: '',
    phone: '',
    city: '',
    newsletter: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionId = section.getAttribute('data-section');
        
        if (rect.top < window.innerHeight * 0.8 && !visibleSections[sectionId]) {
          setVisibleSections((prev) => ({ ...prev, [sectionId]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
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
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .scroll-animate { opacity: 0; }
        .scroll-animate.animate-visible { animation: fadeInUp 0.4s ease-out forwards; }

        .scroll-animate-left { opacity: 0; }
        .scroll-animate-left.animate-visible { animation: fadeInLeft 0.4s ease-out forwards; }

        .scroll-animate-right { opacity: 0; }
        .scroll-animate-right.animate-visible { animation: fadeInRight 0.4s ease-out forwards; }

        .scroll-animate-scale { opacity: 0; }
        .scroll-animate-scale.animate-visible { animation: scaleIn 0.4s ease-out forwards; }

        .image-3d-container { perspective: 2000px; perspective-origin: center; }

        .image-3d {
          transform-style: preserve-3d;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          filter: drop-shadow(0 25px 50px rgba(0,0,0,0.4));
          position: relative;
          border-radius: 8px;
        }

        .image-3d::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 100%);
          opacity: 0;
          transition: opacity 0.6s ease;
          pointer-events: none;
          border-radius: 8px;
        }

        @media (hover: hover) {
          .image-3d:hover {
            transform: translateZ(50px) scale(1.08) rotateY(5deg) rotateX(-3deg);
            filter: drop-shadow(0 30px 60px rgba(0,0,0,0.4)) drop-shadow(0 0 20px rgba(255,255,255,0.15));
          }
          .image-3d:hover::before { opacity: 1; }
        }

        .image-3d-left {
          transform-style: preserve-3d;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          filter: drop-shadow(0 25px 50px rgba(0,0,0,0.4));
          position: relative;
          border-radius: 8px;
        }

        .image-3d-left::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(225deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 100%);
          opacity: 0;
          transition: opacity 0.6s ease;
          pointer-events: none;
          border-radius: 8px;
        }

        @media (hover: hover) {
          .image-3d-left:hover {
            transform: translateZ(50px) scale(1.08) rotateY(-5deg) rotateX(-3deg);
            filter: drop-shadow(0 30px 60px rgba(0,0,0,0.4)) drop-shadow(0 0 20px rgba(255,255,255,0.15));
          }
          .image-3d-left:hover::before { opacity: 1; }
        }

        html { scroll-behavior: smooth; }
      `}</style>

      {/* Hero Section */}
      <SectionWrapper id="hero">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-green-900">
          <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-center">
              <div className={`text-white space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 scroll-animate-left ${visibleSections['hero'] ? 'animate-visible' : ''}`}>
                <p className={`text-yellow-300 text-xs sm:text-sm md:text-base font-semibold tracking-wide uppercase scroll-animate ${visibleSections['hero'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.1s' }}>
                  BEST BY BITES PLATFORM
                </p>
                <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight scroll-animate ${visibleSections['hero'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
                  END-TO-END SURPLUS FOOD MANAGEMENT SOLUTION
                </h1>
                <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl scroll-animate ${visibleSections['hero'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.3s' }}>
                  Best by bites Platform enables retailers to unlock value from excess inventory, with modular software that seamlessly tracks and redistributes surplus food.
                </p>
                <button className={`inline-flex items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 border-2 border-white text-white text-sm sm:text-base font-semibold rounded hover:bg-white hover:text-green-900 transition-all duration-300 group scroll-animate ${visibleSections['hero'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.4s' }}>
                  Get In Touch
                  <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              <div className={`flex justify-center lg:justify-end image-3d-container scroll-animate-right ${visibleSections['hero'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
                <img 
                  src={platform1} 
                  alt="Best by bites Platform App" 
                  className="image-3d w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* Core Benefits Section */}
      <SectionWrapper id="benefits">
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-50">
          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
            <div className={`text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 scroll-animate-scale ${visibleSections['benefits'] ? 'animate-visible' : ''}`}>
              <p className="text-green-600 font-semibold text-xs sm:text-sm md:text-base mb-2 sm:mb-3">
                CORE BENEFITS
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                MANAGE, SELL AND REDISTRIBUTE<br className="hidden sm:block" /> YOUR SURPLUS FOOD
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
              <FlipCard 
                icon={platform2}
                title="MANAGE NEAR-EXPIRY PRODUCTS"
                subtitle="EXPIRY DATE MANAGEMENT+"
                description="Identify and manage near-expiry products digitally to boost profit and efficiency"
                delay="0.1s"
              />
              <FlipCard 
                icon={platform3}
                title="SELL NEAR-EXPIRY PRODUCTS"
                subtitle="AI-POWERED DISCOUNTING"
                description="Set optimal discounts with real-time data to drive effective markdowns and improve sell-through"
                delay="0.2s"
              />
              <FlipCard 
                icon={platform4}
                title="SELL SURPLUS FOOD CONSUMER"
                subtitle="MARKETPLACE"
                description="Sell surplus food through Too Good To Go's 100M app users to enhance margins and increase consumer engagement"
                delay="0.3s"
              />
              <FlipCard 
                icon={platform5}
                title="REDISTRIBUTE SURPLUS FOOD"
                subtitle="DONATIONS+"
                description="Redistribute surplus food through a network of charities to enhance efficiency and traceability"
                delay="0.4s"
              />
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* Sign Up Form Section */}
      <SectionWrapper id="signup">
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-100">
          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 items-center">
              <div className={`order-2 lg:order-1 bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 scroll-animate-left ${visibleSections['signup'] ? 'animate-visible' : ''}`}>
                <div className="mb-4 sm:mb-5 md:mb-6">
                  <p className={`text-green-600 font-semibold text-xs sm:text-sm mb-1 sm:mb-2 scroll-animate ${visibleSections['signup'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.1s' }}>Sign Up</p>
                  <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight scroll-animate ${visibleSections['signup'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.15s' }}>
                    START SELLING YOUR<br />SURPLUS FOOD
                  </h2>
                </div>

                <div className="space-y-3 sm:space-y-4 md:space-y-5">
                  <div className={`scroll-animate ${visibleSections['signup'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
                    <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-xs sm:text-sm">
                      Which best describes you? <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="userType"
                      value={formData.userType}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded text-xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition text-gray-700"
                      required
                    >
                      <option value="">--- Select Choice ---</option>
                      <option value="food-business">Food business</option>
                      <option value="user">User (I want surprise bags)</option>
                    </select>
                  </div>

                  <div className={`scroll-animate ${visibleSections['signup'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.25s' }}>
                    <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-xs sm:text-sm">
                      Business name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded text-xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                      required
                    />
                  </div>

                  <div className={`scroll-animate ${visibleSections['signup'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.3s' }}>
                    <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-xs sm:text-sm">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded text-xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                      required
                    />
                  </div>

                  <div className={`scroll-animate ${visibleSections['signup'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.35s' }}>
                    <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-xs sm:text-sm">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded text-xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  <div className={`scroll-animate ${visibleSections['signup'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.4s' }}>
                    <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-xs sm:text-sm">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded text-xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                      required
                    />
                  </div>

                  <div className={`flex items-start scroll-animate ${visibleSections['signup'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.45s' }}>
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label className="ml-2 sm:ml-3 text-xs sm:text-sm text-gray-600">
                      I agree to receive newsletters and information from Too Good To Go by email, SMS, and push notifications. I can unsubscribe at any time.
                    </label>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className={`w-full bg-green-600 text-white font-semibold py-2 sm:py-3 md:py-4 rounded text-sm sm:text-base hover:bg-green-700 transition-colors duration-300 scroll-animate ${visibleSections['signup'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.5s' }}
                  >
                    Submit
                  </button>
                </div>
              </div>

              <div className={`order-1 lg:order-2 flex justify-center image-3d-container scroll-animate-right ${visibleSections['signup'] ? 'animate-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
                <img 
                  src={platform6} 
                  alt="Woman checking product in store" 
                  className="image-3d-left w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Platform;
