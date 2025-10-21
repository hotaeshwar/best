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
  const [animate, setAnimate] = useState(false);
  const [animateBanners, setAnimateBanners] = useState(false);
  const [animateFeature1, setAnimateFeature1] = useState(false);
  const [animateFeature2, setAnimateFeature2] = useState(false);

  const heroRef = useRef(null);
  const bannersRef = useRef(null);
  const feature1Ref = useRef(null);
  const feature2Ref = useRef(null);

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
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .scroll-animate-left {
          opacity: 0;
        }

        .scroll-animate-left.animate-visible {
          animation: fadeInLeft 0.6s ease-out forwards;
        }

        .scroll-animate-right {
          opacity: 0;
        }

        .scroll-animate-right.animate-visible {
          animation: fadeInRight 0.6s ease-out forwards;
        }

        .image-3d-container {
          perspective: 2000px;
          perspective-origin: center;
        }

        .image-3d {
          transform-style: preserve-3d;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          filter: drop-shadow(0 25px 50px rgba(0,0,0,0.15));
          border-radius: 8px;
        }

        @media (hover: hover) {
          .image-3d:hover {
            transform: translateZ(40px) scale(1.05) rotateY(5deg) rotateX(-3deg);
            filter: drop-shadow(0 40px 80px rgba(0,0,0,0.25));
          }

          .image-3d-left:hover {
            transform: translateZ(40px) scale(1.05) rotateY(-5deg) rotateX(-3deg);
            filter: drop-shadow(0 40px 80px rgba(0,0,0,0.25));
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full min-h-screen flex items-center justify-center bg-white">
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              
              {/* Text Content */}
              <div 
                className={`space-y-6 lg:space-y-8 scroll-animate-left ${animate ? 'animate-visible' : ''}`}
              >
                <div>
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-green-700 mb-4">
                    THE APP
                  </h1>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-900 leading-tight">
                  How to collect Best By Bites?
                </h2>

                <p className="text-base md:text-lg lg:text-xl text-green-800 leading-relaxed">
                  Surprise Bags are to be collected in-store within the time window specified in the item listing in the Too Good To Go app. When you show the app, and swipe the in-app slider as proof of your reservation, the store staff will hand you your Surprise Bag.
                </p>

                <div className="pt-4">
                  <button className="flex items-center gap-3 px-8 py-4 border-2 border-green-700 text-green-700 font-semibold text-base md:text-lg hover:bg-green-700 hover:text-white transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl">
                    <span>Download the App</span>
                    <ArrowRight size={24} />
                  </button>
                </div>
              </div>

              {/* App Image */}
              <div 
                className={`flex justify-center items-center image-3d-container scroll-animate-right ${animate ? 'animate-visible' : ''}`}
              >
                <div className="w-full max-w-md lg:max-w-lg">
                  <img
                    src={appImage}
                    alt="Best By Bites App"
                    className="image-3d w-full h-auto object-contain"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Banners Section */}
      <section ref={bannersRef} className="w-full bg-gray-50 py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            
            {/* Banner 1 */}
            <div 
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 scroll-animate ${animateBanners ? 'animate-visible' : ''}`}
              style={{ animationDelay: '0ms' }}
            >
              <img 
                src={banner1} 
                alt="Restaurants Banner"
                className="w-full h-64 sm:h-72 lg:h-80 object-contain bg-white"
              />
            </div>

            {/* Banner 2 */}
            <div 
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 scroll-animate ${animateBanners ? 'animate-visible' : ''}`}
              style={{ animationDelay: '200ms' }}
            >
              <img 
                src={banner2} 
                alt="Grocery Stores Banner"
                className="w-full h-64 sm:h-72 lg:h-80 object-contain bg-white"
              />
            </div>

            {/* Banner 3 */}
            <div 
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 scroll-animate ${animateBanners ? 'animate-visible' : ''} sm:col-span-2 lg:col-span-1`}
              style={{ animationDelay: '400ms' }}
            >
              <img 
                src={banner3} 
                alt="Best By Bites Parcels Banner"
                className="w-full h-64 sm:h-72 lg:h-80 object-contain bg-white"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Ask-a-Friend Feature Section */}
      <section ref={feature1Ref} className="w-full bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className={`image-3d-container scroll-animate-left ${animateFeature1 ? 'animate-visible' : ''}`}>
              <div className="rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto lg:mx-0">
                <img 
                  src={shareWithFriend} 
                  alt="Ask-a-friend feature"
                  className="image-3d-left w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className={`scroll-animate-right ${animateFeature1 ? 'animate-visible' : ''}`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Ask-a-friend feature
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                It is now possible to delegate pick-up of your Surprise Bag to someone else. Thanks to the 'Ask-a-Friend' feature in the Too Good To Go app, someone else can now collect your order for you.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Best By Bites Parcels Delivery Section */}
      <section ref={feature2Ref} className="w-full bg-gray-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className={`scroll-animate-left ${animateFeature2 ? 'animate-visible' : ''}`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Best By Bites Parcels delivery
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                With the Too Good To Go app you can now also order (larger) Parcels of perfectly good surplus food from manufacturers or wholesalers, delivered directly to your home or a preferred pick-up point in your local area
              </p>
            </div>

            <div className={`image-3d-container scroll-animate-right ${animateFeature2 ? 'animate-visible' : ''}`}>
              <div className="rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto lg:mx-0">
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
