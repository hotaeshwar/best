import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '/src/assets/images/BESTlogo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navLinks = [
    {
      label: 'The App',
      href: '#',
      submenu: [
        { label: 'How to Collect bestbybites', to: '/bestbybites' },
        { label: 'How does the app work?', to: '/how-the-app-works' },
        { label: 'Best by bites in my area', to: '/bestbybites-in-my-area' },
      ],
    },
    {
      label: 'Business Solutions',
      href: '#',
      submenu: [
        { label: 'Surplus food marketplace', to: '/surplus-food-marketplace' },
        { label: 'Best By Bites Platform', to: '/bestbybites-platform' },
        { label: 'Data Layer Initiative', to: '/data-layer-initiative' },
        { label: 'Surplus food parcels', to: '/how-to-collect-bestbybites' },
      ],
    },
    { label: 'About Us', to: '/aboutus' },
    { label: 'Download the App', to: '/download-app' }, // Updated this line
    { label: 'Business sign-up', href: '#' },
  ];

  const handleNavClick = (link, event) => {
    if (link.to) {
      // If it's a route, let Link handle it
      setIsOpen(false);
    } else if (link.href && link.href.startsWith('#')) {
      event.preventDefault();
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-green-900 w-full sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={logo}
                alt="Best By Bites"
                className="h-12 md:h-16 lg:h-18 w-auto object-contain hover:opacity-100 opacity-70 transition-all duration-300 hover:bg-green-800 rounded-lg p-1"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.submenu ? (
                  <div>
                    <button className="text-white hover:text-yellow-300 px-3 xl:px-4 py-2 text-sm xl:text-base font-medium rounded-md transition-colors duration-300 flex items-center gap-1 group-hover:text-yellow-300">
                      {link.label}
                      <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute left-0 mt-0 w-56 bg-gray-100 rounded-b-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      {link.submenu.map((item, idx) => (
                        item.to ? (
                          <Link
                            key={idx}
                            to={item.to}
                            onClick={(e) => handleNavClick(item, e)}
                            className="block px-4 py-3 text-gray-800 hover:text-yellow-600 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg text-sm font-medium transition-colors duration-300"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <a
                            key={idx}
                            href={item.href}
                            onClick={(e) => handleNavClick(item, e)}
                            className="block px-4 py-3 text-gray-800 hover:text-yellow-600 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg text-sm font-medium transition-colors duration-300"
                          >
                            {item.label}
                          </a>
                        )
                      ))}
                    </div>
                  </div>
                ) : link.to ? (
                  <Link
                    to={link.to}
                    onClick={(e) => handleNavClick(link, e)}
                    className="text-white hover:text-yellow-300 px-3 xl:px-4 py-2 text-sm xl:text-base font-medium rounded-md transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(link, e)}
                    className="text-white hover:text-yellow-300 px-3 xl:px-4 py-2 text-sm xl:text-base font-medium rounded-md transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-yellow-300 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-green-800 pb-4 space-y-1">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="w-full text-left text-white hover:text-yellow-300 hover:bg-green-700 px-4 py-3 rounded-md font-medium text-sm sm:text-base flex items-center justify-between transition-colors duration-300"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        size={16}
                        className={`transform transition-transform ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Mobile Dropdown */}
                    {activeDropdown === index && (
                      <div className="bg-gray-100 pl-4">
                        {link.submenu.map((item, idx) => (
                          item.to ? (
                            <Link
                              key={idx}
                              to={item.to}
                              onClick={(e) => handleNavClick(item, e)}
                              className="block text-gray-800 hover:text-yellow-600 hover:bg-gray-50 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <a
                              key={idx}
                              href={item.href}
                              onClick={(e) => handleNavClick(item, e)}
                              className="block text-gray-800 hover:text-yellow-600 hover:bg-gray-50 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                            >
                              {item.label}
                            </a>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ) : link.to ? (
                  <Link
                    to={link.to}
                    onClick={(e) => handleNavClick(link, e)}
                    className="block text-white hover:text-yellow-300 hover:bg-green-700 px-4 py-3 rounded-md font-medium text-sm sm:text-base transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(link, e)}
                    className="block text-white hover:text-yellow-300 hover:bg-green-700 px-4 py-3 rounded-md font-medium text-sm sm:text-base transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}