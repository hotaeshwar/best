import { Download, ArrowRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import appImage from '/src/assets/images/theapp.png';
import banner1 from '/src/assets/images/HOMEPAGESMALLBANNER1.jpg';
import banner2 from '/src/assets/images/HOMEPAGESMALLBANNER2.jpg';
import banner3 from '/src/assets/images/HOMEPAGESMALLBANNER3.jpg';
import shareWithFriend from '/src/assets/images/SHAREWITHFRIEND1.jpg';
import bestByBiteParcel from '/src/assets/images/BESTBYBITEPARCEL.jpg';
import Footer from './Footer';

export default function BestByBitesHero() {
  const videoRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [animateBanners, setAnimateBanners] = useState(false);
  const [animateFeature1, setAnimateFeature1] = useState(false);
  const [animateFeature2, setAnimateFeature2] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const [isMounted, setIsMounted] = useState(false);

  const heroRef = useRef(null);
  const bannersRef = useRef(null);
  const feature1Ref = useRef(null);
  const feature2Ref = useRef(null);

  // Prevent hydration errors
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log('Video autoplay failed');
      });
    }
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      if (heroRef.current) {
        const heroTop = heroRef.current.offsetTop;
        if (scrollPosition > heroTop + 200) {
          setAnimate(true);
        }
      }

      if (bannersRef.current) {
        const bannersTop = bannersRef.current.offsetTop;
        if (scrollPosition > bannersTop + 200) {
          setAnimateBanners(true);
        }
      }

      if (feature1Ref.current) {
        const feature1Top = feature1Ref.current.offsetTop;
        if (scrollPosition > feature1Top + 200) {
          setAnimateFeature1(true);
        }
      }

      if (feature2Ref.current) {
        const feature2Top = feature2Ref.current.offsetTop;
        if (scrollPosition > feature2Top + 200) {
          setAnimateFeature2(true);
        }
      }

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
  }, [visibleSections, isMounted]);

  if (!isMounted) {
    return null;
  }

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
          border-radius: 8px;
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
          border-radius: 8px;
        }

        @media (hover: hover) {
          .image-3d:hover {
            transform: translateZ(80px) scale(1.15) rotateY(8deg) rotateX(-4deg);
            filter: drop-shadow(0 40px 80px rgba(0,0,0,0.5)) 
                    drop-shadow(0 0 30px rgba(255,255,255,0.2));
          }

          .image-3d:hover::before {
            opacity: 1;
          }
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
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(225deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 100%);
          opacity: 0;
          transition: opacity 0.6s ease;
          pointer-events: none;
          border-radius: 8px;
        }

        @media (hover: hover) {
          .image-3d-left:hover {
            transform: translateZ(80px) scale(1.15) rotateY(-8deg) rotateX(-4deg);
            filter: drop-shadow(0 40px 80px rgba(0,0,0,0.5))
                    drop-shadow(0 0 30px rgba(255,255,255,0.2));
          }

          .image-3d-left:hover::before {
            opacity: 1;
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Hero Section */}
      <section data-section="section1" ref={heroRef} className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-green-900">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-green-800 to-transparent" />

        <div className="relative z-20 w-full h-full flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 py-12 sm:py-16 md:py-20">
          <div className="w-full max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
              
              <div 
                className={`flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8 transition-all duration-1000 ease-out scroll-animate-left ${
                  animate ? 'animate-visible' : ''
                }`}
              >
                <div>
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-yellow-300 drop-shadow-lg">
                    THE APP
                  </h1>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow-lg leading-tight">
                  How to collect Best By Bites?
                </h2>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 leading-relaxed max-w-2xl drop-shadow-md font-medium">
                  Surprise Bags are to be collected in-store within the time window specified in the item listing in the Too Good To Go app. When you show the app, and swipe the in-app slider as proof of your reservation, the store staff will hand you your Surprise Bag.
                </p>

                <div className="pt-2 sm:pt-3 md:pt-4 lg:pt-6">
                  <button className="w-fit flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 border-2 border-white text-white font-semibold text-sm sm:text-base md:text-lg hover:bg-white hover:text-green-900 transition-all duration-300 rounded-lg">
                    <span>Download the App</span>
                    <ArrowRight size={20} className="sm:w-5 md:w-6" />
                  </button>
                </div>
              </div>

              <div 
                className={`flex justify-center items-center order-first lg:order-last transition-all duration-1000 ease-out image-3d-container scroll-animate-right ${
                  animate ? 'animate-visible' : ''
                }`}
              >
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                  <img
                    src={appImage}
                    alt="Best By Bites App"
                    className="image-3d w-full h-auto object-contain drop-shadow-lg sm:drop-shadow-xl"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Banners Section */}
      <section data-section="section2" ref={bannersRef} className="w-full bg-gray-100 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            
            <div 
              className={`rounded-lg sm:rounded-xl overflow-hidden shadow-lg transition-all duration-1000 scroll-animate ${
                animateBanners ? 'animate-visible' : ''
              }`}
              style={{ animationDelay: '0ms' }}
            >
              <img 
                src={banner1} 
                alt="Restaurants Banner"
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div 
              className={`rounded-lg sm:rounded-xl overflow-hidden shadow-lg transition-all duration-1000 scroll-animate ${
                animateBanners ? 'animate-visible' : ''
              }`}
              style={{ animationDelay: '200ms' }}
            >
              <img 
                src={banner2} 
                alt="Grocery Stores Banner"
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div 
              className={`rounded-lg sm:rounded-xl overflow-hidden shadow-lg transition-all duration-1000 sm:col-span-2 lg:col-span-1 scroll-animate ${
                animateBanners ? 'animate-visible' : ''
              }`}
              style={{ animationDelay: '400ms' }}
            >
              <img 
                src={banner3} 
                alt="Best By Bites Parcels Banner"
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Ask-a-Friend Feature Section */}
      <section data-section="section3" ref={feature1Ref} className="w-full bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
            
            <div className={`transition-all duration-1000 ease-out image-3d-container scroll-animate-left ${animateFeature1 ? 'animate-visible' : ''}`}>
              <div className="rounded-lg sm:rounded-2xl overflow-hidden shadow-lg md:shadow-xl max-w-xs sm:max-w-sm mx-auto lg:mx-0">
                <img 
                  src={shareWithFriend} 
                  alt="Ask-a-friend feature"
                  className="image-3d-left w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-300 ease-out scroll-animate-right ${animateFeature1 ? 'animate-visible' : ''}`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight">
                Ask-a-friend feature
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                It is now possible to delegate pick-up of your Surprise Bag to someone else. Thanks to the 'Ask-a-Friend' feature in the Too Good To Go app, someone else can now collect your order for you.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Best By Bites Parcels Delivery Section */}
      <section data-section="section4" ref={feature2Ref} className="w-full bg-gray-100 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
            
            <div className={`transition-all duration-1000 ease-out scroll-animate-left ${animateFeature2 ? 'animate-visible' : ''}`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight">
                Best By Bites Parcels delivery
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                With the Too Good To Go app you can now also order (larger) Parcels of perfectly good surplus food from manufacturers or wholesalers, delivered directly to your home or a preferred pick-up point in your local area
              </p>
            </div>

            <div className={`transition-all duration-1000 delay-300 ease-out image-3d-container scroll-animate-right ${animateFeature2 ? 'animate-visible' : ''}`}>
              <div className="rounded-lg sm:rounded-2xl overflow-hidden shadow-lg md:shadow-xl max-w-xs sm:max-w-sm mx-auto lg:mx-0">
                <img 
                  src={bestByBiteParcel} 
                  alt="Best By Bites Parcels delivery"
                  className="image-3d w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
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
