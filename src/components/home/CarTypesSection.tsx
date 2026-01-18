import { Car, Bus } from 'lucide-react';

const carTypes = [
  { icon: Car, name: 'Avanza' },
  { icon: Car, name: 'Alphard / Innova' },
  { icon: Bus, name: 'Hiace 15 Seat' },
  { icon: Bus, name: 'Elf 19 Seat' },
  { icon: Bus, name: 'Medium Bus' },
  { icon: Bus, name: 'Isuzu Premiga' },
  { icon: Bus, name: 'Elf' },
  { icon: Bus, name: 'ELF 2023' },
];

const CarTypesSection = () => {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4">
            Jenis <span className="text-primary">Mobil</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Berbagai pilihan kendaraan untuk kebutuhan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {carTypes.map((car, index) => (
            <div
              key={car.name}
              className={`flex items-center gap-4 bg-background/5 p-4 rounded-xl border border-background/10 transition-all duration-300 hover:bg-background/10 animate-fade-in stagger-${(index % 4) + 1}`}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <car.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-semibold">{car.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarTypesSection;
