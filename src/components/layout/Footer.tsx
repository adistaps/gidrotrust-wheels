import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Head Office */}
          <div>
            <div className="flex items-center mb-6">
              <img src="/logopjg.png" alt="Gidrotrust Logo" className="h-12 w-auto object-contain" />
            </div>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>Ngariboyo, Sindupaten, Kertek, Wonosobo 56371</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@gidrotrusttransport.com" className="hover:text-primary transition-colors">
                  info@gidrotrusttransport.com
                </a>
              </div>
            </div>
          </div>

          {/* Call Center */}
          <div>
            <h4 className="font-heading font-bold text-lg text-primary mb-4">Call Center</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4 text-primary" />
                <span>082221568423</span>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-heading font-bold text-lg text-primary mb-4">Menu</h4>
            <nav className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link>
              <Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Service</Link>
              <Link to="/price" className="text-gray-400 hover:text-primary transition-colors">Price</Link>
              <Link to="/reservation" className="text-gray-400 hover:text-primary transition-colors">Reservation</Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary transition-colors">Terms</Link>
              <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Payment */}
          <div>
            <h4 className="font-heading font-bold text-lg text-primary mb-4">Payment Partners</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/10 rounded-lg px-4 py-2 text-center text-sm font-medium">OVO</div>
              <div className="bg-white/10 rounded-lg px-4 py-2 text-center text-sm font-medium">LinkAja</div>
              <div className="bg-white/10 rounded-lg px-4 py-2 text-center text-sm font-medium">GoPay</div>
              <div className="bg-white/10 rounded-lg px-4 py-2 text-center text-sm font-medium">Mandiri</div>
              <div className="bg-white/10 rounded-lg px-4 py-2 text-center text-sm font-medium">BCA</div>
              <div className="bg-white/10 rounded-lg px-4 py-2 text-center text-sm font-medium">BNI</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>2007-2025 © Gidrotrust Transport - All Rights Reserved</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
