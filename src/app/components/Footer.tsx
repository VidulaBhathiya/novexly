import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logoIcon from '../../imports/image.png';
import logoText from '../../imports/image-1.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (page: string) => {
    onNavigate(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoIcon} alt="Novexly" className="h-10 w-10" />
              <img src={logoText} alt="Novexly" className="h-6" />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Professional web development agency in Colombo, Sri Lanka. Building digital excellence with cutting-edge technology.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={18} className="text-gray-300" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={18} className="text-gray-300" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin size={18} className="text-gray-300" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={18} className="text-gray-300" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'services', 'blog', 'about', 'contact'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => handleNavClick(page)}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm capitalize"
                  >
                    {page === 'about' ? 'About Us' : page === 'contact' ? 'Contact Us' : page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">UI/UX Design</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Web Development</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Web Hosting</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">SEO Services</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Website Maintenance</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>0768655751</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>info@novexly.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Novexly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
