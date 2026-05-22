import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoIcon from '../../imports/image.png';
import logoText from '../../imports/image-1.png';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', page: 'home' },
    { name: 'Services', page: 'services' },
    { name: 'Blog', page: 'blog' },
    { name: 'About Us', page: 'about' },
    { name: 'Contact Us', page: 'contact' },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <img src={logoIcon} alt="Novexly" className="h-10 w-10" />
            <img src={logoText} alt="Novexly" className="h-6" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`relative text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                {currentPage === item.page && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400" />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNavClick('contact')}
            className="hidden md:block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
          >
            Get Free Quote
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-lg border-t border-slate-800">
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === item.page
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-slate-800'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
