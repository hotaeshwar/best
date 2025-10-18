import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import BestLogo from '../assets/images/BESTlogo.png';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-green-950 via-green-900 to-green-950 text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-green-800 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-green-900 rounded-full filter blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Compact Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 pb-8 border-b border-white/10">
          
          {/* Logo and Brand */}
          <div className="flex items-center gap-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-green-700 rounded-full filter blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-xl">
                <img 
                  src={BestLogo} 
                  alt="Best By Bites Logo" 
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-green-300 via-green-200 to-green-300 bg-clip-text text-transparent tracking-tight">
                Best By Bites
              </h2>
              <p className="text-xs text-green-200 tracking-widest uppercase">Food Marketplace</p>
            </div>
          </div>

          {/* Social Media - Inline */}
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <a 
                key={index}
                href="#" 
                className="relative group/social"
              >
                <div className="absolute inset-0 bg-green-700 rounded-xl opacity-0 group-hover/social:opacity-20 blur-lg transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-green-800 to-green-700 p-3 rounded-xl transition-all duration-300 transform group-hover/social:scale-110 group-hover/social:rotate-6 shadow-lg">
                  <Icon size={18} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          
          {/* Company Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-gradient-to-b from-green-300 to-green-400 rounded-full"></div>
              <h3 className="text-base font-bold text-white">Company</h3>
            </div>
            <ul className="space-y-2">
              {['About us', 'Privacy Policy', 'Terms & Conditions', 'Careers'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-green-100 hover:text-green-300 transition-all duration-300 flex items-center gap-1 group/item">
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-green-300" />
                    <span className="group-hover/item:translate-x-1 transition-transform duration-300">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Customers Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-gradient-to-b from-green-300 to-green-400 rounded-full"></div>
              <h3 className="text-base font-bold text-white">For Customers</h3>
            </div>
            <ul className="space-y-2">
              {['Get a Quote', 'Contact us', 'FAQs', 'Support'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-green-100 hover:text-green-300 transition-all duration-300 flex items-center gap-1 group/item">
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-green-300" />
                    <span className="group-hover/item:translate-x-1 transition-transform duration-300">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Where We Operate Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-gradient-to-b from-green-300 to-green-400 rounded-full"></div>
              <h3 className="text-base font-bold text-white">We Operate</h3>
            </div>
            <ul className="space-y-2">
              {[
                { flag: '🇺🇸', name: 'USA' },
                { flag: '🇨🇦', name: 'Canada' },
                { flag: '🇮🇳', name: 'India' },
                { flag: '🇬🇧', name: 'UK' }
              ].map((country, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-green-100 hover:text-green-300 transition-all duration-300 flex items-center gap-2 group/item">
                    <span className="text-lg transform group-hover/item:scale-110 transition-transform duration-300">{country.flag}</span>
                    <span className="group-hover/item:translate-x-1 transition-transform duration-300">{country.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-gradient-to-b from-green-300 to-green-400 rounded-full"></div>
              <h3 className="text-base font-bold text-white">Contact</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-green-100 hover:text-green-300 transition-all duration-300 group/item cursor-pointer">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-green-300 group-hover/item:scale-110 transition-transform duration-300" />
                <span className="text-xs leading-tight">123 Food Street, Green City</span>
              </li>
              <li className="flex items-center gap-2 text-green-100 hover:text-green-300 transition-all duration-300 group/item cursor-pointer">
                <Phone size={16} className="flex-shrink-0 text-green-300 group-hover/item:scale-110 transition-transform duration-300" />
                <span className="text-xs">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-green-100 hover:text-green-300 transition-all duration-300 group/item cursor-pointer">
                <Mail size={16} className="flex-shrink-0 text-green-300 group-hover/item:scale-110 transition-transform duration-300" />
                <span className="text-xs">info@bestbybites.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Compact Bottom */}
        <div className="pt-6 border-t border-white/10 text-center space-y-2">
          <p className="text-green-200 text-xs">
            © {new Date().getFullYear()} Best By Bites. All rights reserved. | Reducing food waste, one bite at a time. 🌱
          </p>
          <p className="text-green-300 text-xs flex items-center justify-center gap-1">
            Made with <span className="text-red-300">♥</span> by <span className="text-green-200 font-semibold">BuildingIndiaDigital</span>
          </p>
        </div>
      </div>
    </footer>
  );
}