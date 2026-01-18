import { Link } from 'react-router-dom';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const pricingPlans = [
  {
    name: 'Reguler',
    price: 'Rp 250K',
    unit: '/hari',
    description: 'Untuk kebutuhan harian standar',
    features: [
      'Mobil city car / MPV',
      'AC & Audio',
      'Asuransi dasar',
      'Bebas jarak tempuh',
    ],
    popular: false,
  },
  {
    name: 'VIP',
    price: 'Rp 400K',
    unit: '/jam',
    description: 'Layanan premium dengan driver',
    features: [
      'Mobil premium (Alphard/Fortuner)',
      'Driver profesional',
      'Termasuk BBM',
      'Asuransi Allrisk',
      'Free waiting time 1 jam',
    ],
    popular: true,
  },
  {
    name: 'Economy',
    price: 'Rp 75K',
    unit: '/jam',
    description: 'Untuk pemakaian singkat',
    features: [
      'Mobil city car',
      'AC & Audio',
      'Minimum 4 jam',
      'Bebas jarak tempuh',
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4">
            Pilih <span className="text-primary">Paket Sewa</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Harga transparan tanpa biaya tersembunyi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                'relative bg-card rounded-xl border-2 p-6 lg:p-8 transition-all duration-300',
                plan.popular
                  ? 'border-primary shadow-xl shadow-primary/10 scale-105'
                  : 'border-border card-hover',
                `animate-fade-in stagger-${index + 1}`
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  POPULAR
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-heading font-bold text-xl mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl lg:text-4xl font-heading font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.unit}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={cn(
                  'w-full',
                  plan.popular ? 'btn-primary' : 'btn-outline'
                )}
              >
                <Link to="/price">Selengkapnya</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
