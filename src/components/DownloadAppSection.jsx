import appStoreIcon from '/src/assets/images/appstore.png';
import googlePlayIcon from '/src/assets/images/GOOGLE.png';

export default function DownloadAppSection() {
  return (
    <section className="w-full bg-green-900 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 md:gap-12">
          
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white drop-shadow-lg mb-4">
              Download Best By Bites App
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 drop-shadow-md font-medium max-w-2xl">
              Get access to exclusive surprise bags and food deals
            </p>
          </div>

          {/* Download Buttons with Images Only */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 lg:gap-12 items-center justify-center">
            
            {/* App Store Button */}
            <a
              href="#"
              className="group flex items-center justify-center transition-all duration-300 transform hover:scale-105"
            >
              <img 
                src={appStoreIcon} 
                alt="Download on App Store" 
                className="h-12 md:h-14 lg:h-16 object-contain"
              />
            </a>

            {/* Google Play Button */}
            <a
              href="#"
              className="group flex items-center justify-center transition-all duration-300 transform hover:scale-105"
            >
              <img 
                src={googlePlayIcon} 
                alt="Get it on Google Play" 
                className="h-12 md:h-14 lg:h-16 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}