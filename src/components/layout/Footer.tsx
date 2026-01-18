import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Head Office */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">G</span>
              </div>
              <div>
                <span className="text-primary font-heading font-bold">Gidrotrust</span>
                <span className="font-heading font-bold ml-1">Trans</span>
              </div>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>Jl. Gambir Anom 26, Yogyakarta 55161</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@gidrotrusttransport.com" className="hover:text-primary transition-colors">
                  info@gidrotrusttransport.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-9 h-9 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center text-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center text-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center text-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center text-primary hover:text-primary-foreground transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Call Center */}
          <div>
            <h4 className="font-heading font-bold text-lg text-primary mb-4">Call Center</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>(0274) 4340640</span>
              </div>
              <div>
                <p className="text-muted-foreground/70 mb-1">Yogyakarta</p>
                <a href="https://wa.me/6285292999937" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-[10px] text-white">W</span>
                  +62 852 9299 9937
                </a>
              </div>
              <div>
                <p className="text-muted-foreground/70 mb-1">Solo / Semarang</p>
                <a href="https://wa.me/6282136628077" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-[10px] text-white">W</span>
                  +62 821 3662 8077
                </a>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-heading font-bold text-lg text-primary mb-4">Menu</h4>
            <nav className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Service</Link>
              <Link to="/reservation" className="text-muted-foreground hover:text-primary transition-colors">Payment</Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms</Link>
              <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Payment */}
          <div>
            <h4 className="font-heading font-bold text-lg text-primary mb-4">Payment Partners</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-background/10 rounded-lg px-4 py-2 text-center text-sm font-medium">OVO</div>
              <div className="bg-background/10 rounded-lg px-4 py-2 text-center text-sm font-medium">LinkAja</div>
              <div className="bg-background/10 rounded-lg px-4 py-2 text-center text-sm font-medium">GoPay</div>
              <div className="bg-background/10 rounded-lg px-4 py-2 text-center text-sm font-medium">Mandiri</div>
              <div className="bg-background/10 rounded-lg px-4 py-2 text-center text-sm font-medium">BCA</div>
              <div className="bg-background/10 rounded-lg px-4 py-2 text-center text-sm font-medium">BNI</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-muted/20">
        <div className="container-custom py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
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
