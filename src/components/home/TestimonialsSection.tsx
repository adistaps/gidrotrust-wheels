import React from 'react';
import { cn } from '@/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: 'Daripemilik',
    role: 'Local Guide',
    rating: 5,
    review: 'Respon cepat dan pelayanan sangat memuaskan!',
    initials: 'DP',
    time: '3 minggu lalu'
  },
  {
    name: 'Adi Wonosobo',
    role: 'Pelanggan',
    rating: 5,
    review: 'Pelayanan ramah enak diajak ngobrol, mobilnya juga enakk bisa full karaokean. Pokoknya rekomended banget buat yang lagi cari kebutuhan transportasi👍👍',
    initials: 'AW',
    time: '2 tahun lalu'
  },
  {
    name: 'Reyvaldo Arsenio',
    role: 'Pelanggan',
    rating: 5,
    review: 'Pelayanan sangat memuaskan, drivernya sangat ramah. Mobilnya juga bersih dan nyaman 👍👍',
    initials: 'RA',
    time: 'Setahun lalu'
  },
  {
    name: 'Fitrohdin Wahyu Sayekti',
    role: 'Pelanggan',
    rating: 5,
    review: 'Pelayanan bagus, mobil nya masih enak d pake 👍',
    initials: 'FW',
    time: '2 tahun lalu'
  },
];

const TestimonialsSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 6000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section className="section-padding bg-black text-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-10 reveal bg-to-top">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight uppercase">
            APA KATA PELANGGAN
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Review asli dari pelanggan setia kami.
          </p>
        </div>

        <div className="relative px-0">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.name} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
                  <div
                    className={cn(
                      "bg-zinc-900/50 p-6 rounded-2xl border border-white/10 transition-all hover:border-primary/40 h-full",
                      `stagger-${(index % 4) + 1}`,
                    )}
                  >
                    <FontAwesomeIcon icon={faQuoteLeft} className="w-8 h-8 text-primary/20 mb-4" />
                    <p className="text-gray-400 mb-6 italic text-sm leading-relaxed">"{testimonial.review}"</p>

                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className="w-3.5 h-3.5 text-primary" />
                      ))}
                    </div>

                    <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xs">
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-white">{testimonial.name}</p>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">{testimonial.role}</p>
                      </div>
                    </div>

                    <p className="text-[10px] text-gray-600 mt-3">{testimonial.time}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
