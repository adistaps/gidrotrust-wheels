import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WHATSAPP_URL = 'https://wa.me/6282221568423?text=Halo%20Gidrotrust%20Trans,%20saya%20ingin%20memesan%20mobil.%20Mohon%20info%20lebih%20lanjut.';

const HeroSection = () => {
  const scrollToFleet = () => {
    const fleetSection = document.getElementById('car-types-section');
    if (fleetSection) {
      fleetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-black overflow-hidden min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex items-center min-h-screen py-32 lg:py-40">
          {/* Content */}
          <div className="max-w-4xl">
            <div className="reveal bg-to-top">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight tracking-wide uppercase">
                Rental Mobil <br /><span className="text-white">Wonosobo</span>
              </h1>
            </div>

            <div className="reveal bg-to-top stagger-1">
              <p className="text-white text-base md:text-lg lg:text-xl mb-10 max-w-2xl leading-relaxed">
                Kenyamanan tanpa kompromi. Armada terbaru, layanan 24/7, dan harga paling kompetitif di Wonosobo.
              </p>
            </div>

            {/* Rating */}
            <div className="reveal bg-to-top stagger-2 flex items-center gap-3 mb-10 bg-white/5 backdrop-blur-md w-fit px-5 py-3 rounded-2xl border border-white/10">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="w-5 h-5 text-primary" />
                ))}
              </div>
              <div className="h-6 w-px bg-white/20 mx-2" />
              <span className="text-white font-bold text-lg">4.9/5</span>
              <span className="text-white/60 text-sm">Review Pelanggan</span>
            </div>

            {/* CTA Buttons */}
            <div className="reveal bg-to-top stagger-3 flex flex-col sm:flex-row gap-4">
              <Button asChild size="default" className="btn-primary">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Booking Sekarang
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="default"
                className="btn-outline"
              >
                <Link to="/price">Eksplor Armada</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;