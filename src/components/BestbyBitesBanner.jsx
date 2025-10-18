import React from 'react';
import { Download, Store } from 'lucide-react';

export default function BestbyBitesBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Container with responsive height */}
      <div className="relative w-full h-screen sm:h-auto md:h-screen lg:h-screen min-h-96 flex items-center justify-center">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://bestbybites.com/wp-content/uploads/2025/10/BEST-BY-BITE-BANNER-2.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-green-900 opacity-50 z-5"></div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto w-full py-12 sm:py-16 md:py-20 lg:py-24">
            
            {/* Main Heading */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight drop-shadow-lg">
              Eat Well. Pay Less.
              <span className="block mt-1 sm:mt-2">Waste Less.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-light drop-shadow-md">
              Join Bestby Bites today.
            </p>

            {/* Buttons Container */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-center items-center w-full">
              
              {/* Download App Button */}
              <button className="w-full xs:w-auto px-5 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-green-500 hover:bg-green-600 active:bg-green-700 transition-all duration-300 text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap">
                <Download size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                <span>Download the App</span>
              </button>

              {/* Sign Up Business Button */}
              <button className="w-full xs:w-auto px-5 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-green-500 hover:bg-green-600 active:bg-green-700 transition-all duration-300 text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap">
                <Store size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                <span>Sign up your business</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
