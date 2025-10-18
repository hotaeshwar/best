import React, { useState, useEffect } from 'react';
import Footer from './Footer';

// Import images
import dataImage from '../assets/images/data.png';
import data1 from '../assets/images/data1.png';
import data3 from '../assets/images/data3.png';
import data4 from '../assets/images/data4.png';
import data5 from '../assets/images/data5.png';
import data6 from '../assets/images/data6.png';
import data7 from '../assets/images/data7.png';

const Data = () => {
  const [formData, setFormData] = useState({
    userType: '',
    businessName: '',
    email: '',
    phone: '',
    city: '',
    newsletter: false
  });

  const [counters, setCounters] = useState({
    countries: 0,
    brands: 0,
    products: 0
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          
          // Trigger counter animation when stats section is visible
          if (entry.target.classList.contains('stats-section') && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) observer.observe(statsSection);

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      observer.disconnect();
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const startTime = Date.now();
    
    const targetValues = {
      countries: 15,
      brands: 550,
      products: 6
    };

    const animateValue = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounters({
        countries: Math.floor(progress * targetValues.countries),
        brands: Math.floor(progress * targetValues.brands),
        products: Math.floor(progress * targetValues.products)
      });

      if (progress < 1) {
        requestAnimationFrame(animateValue);
      }
    };

    requestAnimationFrame(animateValue);
  };

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

  return (
    <div className="w-full overflow-x-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
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
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .scroll-animate-left.animate-visible {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .scroll-animate-right.animate-visible {
          animation: fadeInRight 0.8s ease-out forwards;
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
          transform: translateZ(150px) scale(1.5) rotateY(15deg) rotateX(-10deg);
          filter: drop-shadow(0 50px 100px rgba(0,0,0,0.6))
                  drop-shadow(0 0 60px rgba(34, 197, 94, 0.6));
          animation: popOut 0.6s ease-out;
        }

        .image-3d-icon:hover::after {
          opacity: 1;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Hero Section - Dark Green Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-green-900">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center max-w-6xl mx-auto">
            <div className="text-white space-y-4 scroll-animate scroll-animate-left">
              <p className="text-yellow-300 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                LOOK-SMELL-TASTE DATE LABELLING INITIATIVE
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                TRUST YOUR SENSES, REDUCE FOOD WASTE
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-xl">
                Too Good To Go's Look-Smell-Taste label helps remind people that a product past its 'Best Before' date could still be good to eat. You can trust your senses: simply look, smell and taste, before you waste.
              </p>
              <button className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-white text-white text-sm font-semibold rounded hover:bg-white hover:text-green-900 transition-all duration-300 group">
                Found Out More
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            <div className="image-3d-container flex justify-center lg:justify-end scroll-animate scroll-animate-right">
              <img 
                src={dataImage} 
                alt="Woman eating food" 
                className="image-3d w-64 sm:w-72 md:w-80 lg:w-[420px] h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 scroll-animate">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How does it work?
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto scroll-animate">
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
              <iframe
                src="https://player.vimeo.com/video/995266369?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1&h=d4a0d09605#t="
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Stats and Info Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white stats-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed scroll-animate scroll-animate-left">
              <p>
                What is the difference between Best Before date and Use By date?
              </p>
              <p>
                The Use By date is for food safety. Food should not be eaten after the Use By date.
              </p>
              <p>
                The Best Before date is about optimal food quality. In many cases, food can still safely be consumed after the Best Before date, if stored correctly.
              </p>
              <p>
                We launched our Look-Smell-Taste initiative to encourage people to trust their senses when assessing Best Before products, avoiding unnecessary food waste at home.
              </p>
              <p className="text-xs text-gray-600">
                Source: European Commission, 2018.
              </p>
            </div>

            <div className="image-3d-container flex justify-center scroll-animate scroll-animate-right">
              <img 
                src={data1} 
                alt="Past My Date Labels" 
                className="image-3d w-full max-w-md h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 lg:mt-16">
            <div className="text-center scroll-animate">
              <div className="image-3d-container inline-block">
                <img src={data3} alt="Globe icon" className="image-3d-icon w-16 h-16 mx-auto mb-4" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{counters.countries} Countries</h3>
              <p className="text-sm text-gray-600">in which the initiative is live</p>
            </div>
            
            <div className="text-center scroll-animate" style={{ animationDelay: '0.2s' }}>
              <div className="image-3d-container inline-block">
                <img src={data4} alt="Handshake icon" className="image-3d-icon w-16 h-16 mx-auto mb-4" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{counters.brands} ACTIVE</h3>
              <p className="text-sm text-gray-600">Partner Brands</p>
            </div>
            
            <div className="text-center scroll-animate" style={{ animationDelay: '0.4s' }}>
              <div className="image-3d-container inline-block">
                <img src={data5} alt="Products icon" className="image-3d-icon w-16 h-16 mx-auto mb-4" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{counters.products} BILLION</h3>
              <p className="text-sm text-gray-600">Product Packs with the Label annually</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Your Senses Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-green-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="image-3d-container flex justify-center lg:justify-start scroll-animate scroll-animate-left">
              <img 
                src={data6} 
                alt="Woman smelling food" 
                className="image-3d-left w-full max-w-md lg:max-w-lg h-auto rounded-lg shadow-xl"
              />
            </div>

            <div className="text-white space-y-4 scroll-animate scroll-animate-right">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                TRUST YOUR SENSES
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold">
                It's Time For A Sense Check
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                With the Look-Smell-Taste initiative, we aim to reduce unnecessary waste in households. Our Look-Smell-Taste label is a gentle reminder to trust your senses: if a Best Before-labelled food has been stored correctly, and looks, smells, and tastes okay, then it's perfectly safe to consume.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Form Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white rounded-lg shadow-lg p-5 sm:p-6 lg:p-8 scroll-animate scroll-animate-left">
              <div className="mb-5">
                <p className="text-green-600 font-semibold text-xs mb-2">Sign Up</p>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  START SELLING YOUR SURPLUS FOOD
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1.5 text-xs">
                    Which best describes you? <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="userType"
                    value={formData.userType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition text-gray-700"
                    required
                  >
                    <option value="">--- Select Choice ---</option>
                    <option value="food-business">Food business</option>
                    <option value="user">User (I want surprise bags)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1.5 text-xs">
                    Business name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1.5 text-xs">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1.5 text-xs">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1.5 text-xs">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                    required
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="mt-0.5 w-3.5 h-3.5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <label className="ml-2 text-xs text-gray-600">
                    I agree to receive newsletters and information from Too Good To Go by email, SMS, and push notifications. I can unsubscribe at any time.
                  </label>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-green-600 text-white font-semibold py-2.5 sm:py-3 text-sm rounded hover:bg-green-700 transition-colors duration-300"
                >
                  Submit
                </button>
              </div>
            </div>

            <div className="image-3d-container order-1 lg:order-2 flex justify-center scroll-animate scroll-animate-right">
              <img 
                src={data7} 
                alt="Ice cream container" 
                className="image-3d w-64 sm:w-72 md:w-80 lg:w-96 h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Data;