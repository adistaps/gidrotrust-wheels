const carTypes = [
  { name: 'All New Avanza', category: 'MPV' },
  { name: 'Grand Innova', category: 'MPV' },
  { name: 'Innova Reborn', category: 'MPV' },
  { name: 'Innova Zenix', category: 'Luxury MPV' },
  { name: 'Alphard Transformer', category: 'Luxury' },
  { name: 'Toyota Fortuner VRZ', category: 'SUV' },
  { name: 'Mitsubishi Pajero', category: 'SUV' },
  { name: 'Toyota Hiace Commuter', category: 'Minibus' },
  { name: 'Toyota Hiace Premio', category: 'Minibus' },
  { name: 'Isuzu Elf Long', category: 'Minibus' },
  { name: 'Medium Bus', category: 'Bus' },
  { name: 'Big Bus SHD', category: 'Bus' },
];

const CarTypesSection = () => {
  return (
    <section className="section-padding bg-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4 uppercase">
            ARMADA KAMI
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Pilihan unit kendaraan terlengkap dengan kondisi prima untuk kenyamanan perjalanan Anda.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {carTypes.map((car, index) => (
            <div
              key={car.name}
              className={`group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-primary/50 hover:bg-white/10 text-center animate-fade-in stagger-${(index % 4) + 1}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <p className="text-xs font-medium text-primary mb-2 tracking-wider uppercase">{car.category}</p>
                <h3 className="font-heading font-bold text-lg text-white group-hover:text-primary transition-colors">{car.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarTypesSection;
