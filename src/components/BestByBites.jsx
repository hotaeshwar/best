import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import best1 from '../assets/images/best1.png';
import best2 from '../assets/images/best2.jpg';
import best3 from '../assets/images/best3.png';
import best4 from '../assets/images/best4.png';
import best5 from '../assets/images/best5.png';
import best6 from '../assets/images/best6.png';
import best7 from '../assets/images/best7.png';
import best8 from '../assets/images/best8.png';
import best9 from '../assets/images/best9.png';

const BestByBites = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    userType: '',
    businessName: '',
    email: '',
    phone: '',
    city: '',
    newsletter: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-scroll-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
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

  const benefits = [
    {
      image: best3,
      title: 'SAVE MONEY',
      description: 'By selling surplus food products easily.'
    },
    {
      image: best4,
      title: 'REDUCE FOOD WASTE',
      description: "And reduce your business' environmental footprint."
    },
    {
      image: best5,
      title: 'STRENGTHEN BRAND REPUTATION',
      description: 'By becoming a partner of Too Good To Go.'
    },
    {
      image: best6,
      title: 'GAIN NEW CUSTOMERS',
      description: 'Through new marketing channels targeting new audiences.'
    },
    {
      image: best7,
      title: 'INCREASE BRAND TRIAL',
      description: 'By getting your product into the hands of new customers.'
    }
  ];

  const faqs = [
    {
      question: 'How does the surplus food reach the customer?',
      answer: 'Best By Bites acquires the unsold food from manufacturers. These food products are carefully mixed and packed into Too Good To Go Parcels, which are delivered to users, at their preferred home or pick up address, at a reduced price.'
    },
    {
      question: 'How much extra work does this create for my business?',
      answer: 'Best By Bites handles all operations once the surplus products have been delivered to our warehouse.'
    },
    {
      question: 'Are these surplus products sold directly to consumers?',
      answer: 'We control our channels of distribution, so you know that your food will be sold D2C and not to wholesalers, traders or distributors. Parcels are sold only to Too Good To Go customers via our Marketplace app.'
    }
  ];

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

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
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

        .benefit-card {
          position: relative;
          transition: all 0.3s ease;
        }

        .benefit-card:nth-child(1) .benefit-icon {
          animation: bounce 2s ease-in-out infinite;
        }

        .benefit-card:nth-child(2) .benefit-icon {
          animation: bounce 2s ease-in-out infinite;
          animation-delay: 0.2s;
        }

        .benefit-card:nth-child(3) .benefit-icon {
          animation: bounce 2s ease-in-out infinite;
          animation-delay: 0.4s;
        }

        .benefit-card:nth-child(4) .benefit-icon {
          animation: bounce 2s ease-in-out infinite;
          animation-delay: 0.6s;
        }

        .benefit-card:nth-child(5) .benefit-icon {
          animation: bounce 2s ease-in-out infinite;
          animation-delay: 0.8s;
        }

        .benefit-icon {
          display: inline-block;
          transition: all 0.3s ease;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Hero Section - Solid Green Background */}
      <section className="relative bg-green-900 min-h-screen flex items-center overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white space-y-6 scroll-animate" data-scroll-animate>
              <p className="text-yellow-300 text-sm sm:text-base font-semibold tracking-wide uppercase">
                BEST BY BITES PARCELS
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Unlock value from surplus food
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl">
                Best By Bites Parcels are created using perfectly good surplus food sourced from 
                manufacturers, sold via the marketplace app and delivered directly to the customer. Our 
                marketplace connects your business with 100 million registered users across 19 countries – 
                all eager to buy surplus food.
              </p>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-green-900 transition-all duration-300 font-semibold text-sm sm:text-base">
                Get In Touch →
              </button>
            </div>
            <div className="image-3d-container flex justify-center lg:justify-end scroll-animate-right" data-scroll-animate>
              <img 
                src={best1} 
                alt="Best By Bites Delivery" 
                className="image-3d w-full max-w-md lg:max-w-lg object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Win-Win-Win Solution Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="image-3d-container order-2 lg:order-1 scroll-animate-left" data-scroll-animate>
              <img 
                src={best2} 
                alt="Store Worker" 
                className="image-3d-left w-full rounded-lg shadow-xl object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6 scroll-animate-right" data-scroll-animate>
              <p className="text-green-700 text-sm sm:text-base font-bold uppercase tracking-wide">
                A WIN-WIN-WIN SOLUTION
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                FOR FMCGs, CUSTOMERS AND THE PLANET
              </h2>
              <div className="space-y-4 text-gray-600 text-base sm:text-lg">
                <p>
                  Best By Bites Parcels empower food manufacturers and wholesalers to reduce their 
                  environmental footprint by reducing food waste, whilst unlocking value from surplus 
                  food and optimising their operations.
                </p>
                <p>
                  Partners benefit from increased product visibility, customers benefit from the 
                  opportunity to try new products, the planet benefits from waste reduction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Benefits Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 scroll-animate" data-scroll-animate>
            <p className="text-green-700 text-sm sm:text-base font-bold uppercase tracking-wide mb-4">
              CORE BENEFITS
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              BEST BY BITES PARCELS HELP BUSINESSES
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card text-center space-y-4 scroll-animate" data-scroll-animate>
                <div className="image-3d-container flex justify-center">
                  <div className="benefit-icon">
                    <img 
                      src={benefit.image} 
                      alt={benefit.title} 
                      className="image-3d-icon w-16 h-16 sm:w-20 sm:h-20 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-green-900 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="image-3d-container order-2 lg:order-1 scroll-animate-left" data-scroll-animate>
              <img 
                src={best8} 
                alt="Family with Best By Bites" 
                className="image-3d-left w-full rounded-lg object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6 scroll-animate-right" data-scroll-animate>
              <p className="text-yellow-400 text-sm sm:text-base font-bold uppercase tracking-wide">
                FAQS
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
                BEST BY BITES PARCELS
              </h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-600">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full py-4 flex justify-between items-center text-left hover:text-gray-300 transition-colors"
                    >
                      <span className="text-white font-semibold text-base sm:text-lg pr-4">
                        {faq.question}
                      </span>
                      <span className="text-white text-2xl flex-shrink-0">
                        {openFaq === index ? '−' : '+'}
                      </span>
                    </button>
                    {openFaq === index && (
                      <div className="pb-4 text-gray-300 text-sm sm:text-base">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="scroll-animate" data-scroll-animate>
              <div className="mb-8">
                <p className="text-green-700 text-sm sm:text-base font-bold uppercase tracking-wide mb-4">
                  Sign Up
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                  START SELLING YOUR SURPLUS FOOD
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Which best describes you? <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="userType"
                    value={formData.userType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  >
                    <option value="">--- Select Choice ---</option>
                    <option value="food-business">Food business</option>
                    <option value="user">User (I want surprise bags)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Business name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <label className="ml-3 text-gray-700 text-sm">
                    I agree to receive newsletters and information from Too Good To Go by email, 
                    SMS, and push notifications. I can unsubscribe at any time.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-green-800 transition-colors duration-300"
                >
                  Submit
                </button>
              </div>
            </div>

            <div className="image-3d-container flex justify-center lg:justify-end scroll-animate-right" data-scroll-animate>
              <img 
                src={best9} 
                alt="Delivery Person" 
                className="image-3d w-full max-w-md object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BestByBites;