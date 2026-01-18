import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Budi Kurniawan',
    role: 'Pengusaha',
    rating: 5,
    review: 'Pelayanan sangat memuaskan! Mobilnya bersih, driver ramah, dan tepat waktu. Sudah langganan sejak 2019.',
    initials: 'BK',
  },
  {
    name: 'Sinta Dewi',
    role: 'Karyawan Swasta',
    rating: 5,
    review: 'Booking mudah via WhatsApp, respons cepat. Harga juga transparan tanpa biaya tambahan. Recommended!',
    initials: 'SD',
  },
  {
    name: 'Michael Fernando',
    role: 'Wisatawan',
    rating: 5,
    review: 'Paket tour ke Borobudur sangat menyenangkan. Driver juga jadi guide yang informatif. Terima kasih Gidrotrust!',
    initials: 'MF',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4">
            Apa Kata <span className="text-primary">Pelanggan</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Testimoni dari pelanggan setia kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-card p-6 rounded-xl border border-border card-hover animate-fade-in stagger-${index + 1}`}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              <p className="text-muted-foreground mb-6 italic">"{testimonial.review}"</p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
