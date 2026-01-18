import { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const WHATSAPP_NUMBER = '6281227722211';
const DEFAULT_MESSAGE = 'Halo Gidrotrust Trans, saya butuh bantuan.';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={cn(
          'w-12 h-12 md:w-14 md:h-14 rounded-full bg-secondary text-secondary-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110',
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-primary/30 hover:shadow-xl animate-pulse"
        aria-label="Chat via WhatsApp"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      </a>
    </div>
  );
};

export default FloatingButtons;
