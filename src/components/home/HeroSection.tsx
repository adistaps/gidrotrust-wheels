import { Star, ArrowRight, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WHATSAPP_URL = 'https://wa.me/6281227722211?text=Halo%20Gidrotrust%20Trans,%20saya%20ingin%20memesan%20mobil.%20Mohon%20info%20lebih%20lanjut.';

const HeroSection = () => {
  const scrollToFleet = () => {
    const fleetSection = document.getElementById('fleet-section');
    if (fleetSection) {
      fleetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-secondary via-secondary to-dark-gray overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)] py-12 lg:py-20">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Star className="w-4 h-4 fill-primary" />
              <span>Rental Mobil Terpercaya di Jogja</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 leading-tight animate-fade-in stagger-1">
              Sewa Mobil Jogja 24 Jam - 
              <span className="text-secondary-foreground block mt-2">Mudah, Cepat, Tanpa Repot</span>
            </h1>

            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in stagger-2">
              Booking online mudah, armada terawat, harga transparan. Layanan 24/7 untuk kebutuhan transportasi Anda di Yogyakarta dan sekitarnya.
            </p>

            {/* Rating */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-8 animate-fade-in stagger-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-secondary-foreground font-semibold">4.9/5</span>
              <span className="text-muted-foreground">dari 15K+ pelanggan</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in stagger-4">
              <Button asChild size="lg" className="btn-primary text-base">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Pesan Sekarang
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToFleet}
                className="btn-outline text-base"
              >
                Lihat Armada
              </Button>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in stagger-5">
            <div className="relative animate-float">
              {/* Phone Frame */}
              <div className="w-64 sm:w-72 md:w-80 h-[500px] sm:h-[550px] md:h-[600px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
                  {/* WhatsApp Header */}
                  <div className="bg-green-600 text-white p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      G
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Gidrotrust Trans</p>
                      <p className="text-xs opacity-80">Online</p>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-4 space-y-3 bg-[#e5ddd5]">
                    <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                      <p className="text-sm text-foreground">Halo, saya mau sewa mobil Innova untuk besok.</p>
                      <span className="text-[10px] text-muted-foreground">10:30</span>
                    </div>
                    <div className="bg-[#dcf8c6] rounded-lg p-3 max-w-[80%] ml-auto shadow-sm">
                      <p className="text-sm text-foreground">Halo Kak! Siap, Innova tersedia. Mau pakai berapa jam?</p>
                      <span className="text-[10px] text-muted-foreground">10:31</span>
                    </div>
                    <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                      <p className="text-sm text-foreground">24 jam dengan supir ya.</p>
                      <span className="text-[10px] text-muted-foreground">10:32</span>
                    </div>
                    <div className="bg-[#dcf8c6] rounded-lg p-3 max-w-[80%] ml-auto shadow-sm">
                      <p className="text-sm text-foreground">Baik Kak, totalnya Rp 500.000. Bisa langsung booking sekarang 👍</p>
                      <span className="text-[10px] text-muted-foreground">10:33</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -left-4 top-1/4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg transform -rotate-6">
                <p className="text-sm font-bold">Fast Response!</p>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -right-4 bottom-1/4 bg-background text-foreground px-4 py-2 rounded-lg shadow-lg transform rotate-6">
                <p className="text-sm font-bold">24/7 Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
