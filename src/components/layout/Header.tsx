import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Price', href: '/price' },
    { label: 'Reservation', href: '/reservation' },
    { label: 'Terms', href: '/terms' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logopjg.png" alt="Gidrotrust Logo" className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-bold uppercase tracking-widest transition-colors px-4 py-2 rounded-lg ${location.pathname === item.href
                  ? 'bg-white/10 text-primary'
                  : 'text-white hover:text-primary hover:bg-white/5'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-white/10 animate-fade-in shadow-2xl">
            <div className="flex flex-col gap-4 px-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-lg font-bold uppercase tracking-[0.2em] py-2 px-4 rounded-lg ${location.pathname === item.href ? 'bg-white/10 text-primary' : 'text-white'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;