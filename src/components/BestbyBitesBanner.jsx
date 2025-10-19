import { ArrowRight } from 'lucide-react';
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

  const heroRef = useRef(null);
  const bannersRef = useRef(null);
  const feature1Ref = useRef(null);
  const feature2Ref = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log('Video autoplay failed');
      });
    }
  }, []);

  useEffect(() => {
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

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);

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

        .image-3d:hover {
          transform: translateZ(80px) scale(1.15) rotateY(8deg) rotateX(-4deg);
          filter: drop-shadow(0 40px 80px rgba(0,0,0,0.5)) 
                  drop-shadow(0 0 30px rgba(255,255,255,0.2));
        }

        .image-3d:hover::before {
          opacity: 1;
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

        .image-3d-left:hover {
          transform: translateZ(80px) scale(1.15) rotateY(-8deg) rotateX(-4deg);
          filter: drop-shadow(0 40px 80px rgba(0,0,0,0.5))
                  drop-shadow(0 0 30px rgba(255,255,255,0.2));
        }

        .image-3d-left:hover::before {
          opacity: 1;
        }

        html {
          scroll-behavior: smooth;
        }

        @media (max-width: 768px) {
          body {
            overflow-x: hidden;
          }

          section[data-section="section1"] {
            min-height: 100vh !important;
            height: auto !important;
            background-position: center right !important;
            background-size: cover !important;
          }

          section[data-section="section1"] .relative.z-20 {
            background: linear-gradient(90deg, rgba(22, 101, 52, 0.65) 0%, rgba(20, 83, 45, 0.45) 60%, rgba(20, 83, 45, 0.1) 100%);
          }

          section[data-section="section1"] .grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }

          section[data-section="section1"] h1 {
            font-size: 14px;
          }

          section[data-section="section1"] h2 {
            font-size: 20px;
            line-height: 1.3;
          }

          section[data-section="section1"] p {
            font-size: 12px;
            line-height: 1.4;
          }

          section[data-section="section1"] button {
            padding: 10px 16px;
            font-size: 13px;
            width: 100%;
          }

          section[data-section="section1"] img {
            display: none !important;
          }

          section[data-section="section2"],
          section[data-section="section3"],
          section[data-section="section4"] {
            min-height: auto !important;
            height: auto !important;
            padding: 16px !important;
          }

          section[data-section="section2"] .grid {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }

          section[data-section="section3"] .grid,
          section[data-section="section4"] .grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }

          section[data-section="section3"] img,
          section[data-section="section4"] img {
            max-width: 100%;
            height: auto;
          }

          section[data-section="section3"] h2,
          section[data-section="section4"] h2 {
            font-size: 18px;
            margin-bottom: 8px;
          }

          section[data-section="section3"] p,
          section[data-section="section4"] p {
            font-size: 12px;
            line-height: 1.4;
          }

          section[data-section="section3"] > div > div > div:first-child,
          section[data-section="section4"] > div > div > div:first-child {
            display: flex;
            justify-content: center;
          }

          section[data-section="section3"] > div > div > div:last-child,
          section[data-section="section4"] > div > div > div:last-child {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section data-section="section1" ref={heroRef} className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-green-900 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(90deg, rgba(22, 101, 52, 0.5) 0%, rgba(20, 83, 45, 0.3) 50%, rgba(20, 83, 45, 0.1) 100%)` }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(/src/assets/images/theapp.png)`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 1 }} />
        <div className="relative z-20 w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-12">
          <div className="w-full max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              
              <div 
                className={`flex flex-col justify-center space-y-6 lg:space-y-8 transition-all duration-1000 ease-out scroll-animate-left ${
                  animate ? 'animate-visible' : ''
                }`}
              >
                <div>
                  <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-yellow-300 drop-shadow-lg">
                    THE APP
                  </h1>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg leading-tight">
                  How to collect Best By Bites?
                </h2>

                <p className="text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed max-w-2xl drop-shadow-md font-medium">
                  Surprise Bags are to be collected in-store within the time window specified in the item listing in the Too Good To Go app. When you show the app, and swipe the in-app slider as proof of your reservation, the store staff will hand you your Surprise Bag.
                </p>

                <div className="pt-4 lg:pt-6">
                  <button className="w-fit flex items-center gap-3 px-8 lg:px-10 py-3 lg:py-4 border-2 border-white text-white font-semibold text-base lg:text-lg hover:bg-white hover:text-green-900 transition-all duration-300 rounded-lg">
                    <span>Download the App</span>
                    <ArrowRight size={24} className="lg:w-6" />
                  </button>
                </div>
              </div>

              <div 
                className={`flex justify-center items-center order-first lg:order-last transition-all duration-1000 ease-out image-3d-container scroll-animate-right ${
                  animate ? 'animate-visible' : ''
                }`}
              >
                <div className="w-full max-w-xs sm:max-w-sm lg:max-w-lg">
                  <img
                    src={appImage}
                    alt="Best By Bites App"
                    className="image-3d w-full h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Banners Section */}
      <section data-section="section2" ref={bannersRef} className="w-full bg-gray-100 py-6 lg:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            
            <div 
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-1000 scroll-animate ${
                animateBanners ? 'animate-visible' : ''
              }`}
              style={{ animationDelay: '0ms' }}
            >
              <img 
                src={banner1} 
                alt="Restaurants Banner"
                className="w-full h-full object-cover"
              />
            </div>

            <div 
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-1000 scroll-animate ${
                animateBanners ? 'animate-visible' : ''
              }`}
              style={{ animationDelay: '200ms' }}
            >
              <img 
                src={banner2} 
                alt="Grocery Stores Banner"
                className="w-full h-full object-cover"
              />
            </div>

            <div 
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-1000 sm:col-span-2 lg:col-span-1 scroll-animate ${
                animateBanners ? 'animate-visible' : ''
              }`}
              style={{ animationDelay: '400ms' }}
            >
              <img 
                src={banner3} 
                alt="Best By Bites Parcels Banner"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Ask-a-Friend Feature Section */}
      <section data-section="section3" ref={feature1Ref} className="w-full bg-gray-50 py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            <div className={`transition-all duration-1000 ease-out image-3d-container scroll-animate-left ${animateFeature1 ? 'animate-visible' : ''}`}>
              <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto lg:mx-0">
                <img 
                  src={shareWithFriend} 
                  alt="Ask-a-friend feature"
                  className="image-3d-left w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-300 ease-out scroll-animate-right ${animateFeature1 ? 'animate-visible' : ''}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Ask-a-friend feature
              </h2>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                It is now possible to delegate pick-up of your Surprise Bag to someone else. Thanks to the 'Ask-a-Friend' feature in the Too Good To Go app, someone else can now collect your order for you.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Best By Bites Parcels Delivery Section */}
      <section data-section="section4" ref={feature2Ref} className="w-full bg-gray-100 py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            <div className={`transition-all duration-1000 ease-out scroll-animate-left ${animateFeature2 ? 'animate-visible' : ''}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Best By Bites Parcels delivery
              </h2>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                With the Too Good To Go app you can now also order (larger) Parcels of perfectly good surplus food from manufacturers or wholesalers, delivered directly to your home or a preferred pick-up point in your local area
              </p>
            </div>

            <div className={`transition-all duration-1000 delay-300 ease-out image-3d-container scroll-animate-right ${animateFeature2 ? 'animate-visible' : ''}`}>
              <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto lg:mx-0">
                <img 
                  src={bestByBiteParcel} 
                  alt="Best By Bites Parcels delivery"
                  className="image-3d w-full h-auto object-cover"
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
