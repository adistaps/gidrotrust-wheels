import Layout from '@/components/layout/Layout';
import PageBreadcrumb from '@/components/shared/PageBreadcrumb';

const jogjaMahasiswa = ['2 KTP (Asli)', '2 KTM (Asli)', '2 SIM C (Asli)', 'Motor + STNK (>2013, pajak aktif) ATAU Deposit Rp 2.000.000 (Cash) ATAU Laptop min Core i3', 'Bersedia mengunjungi SIM A', 'Bersedia difoto'];
const jogjaPekerja = ['2 KTP (Asli) ATAU 2 SIM C (Asli)', '2 NPWP (Asli)', '2 ID CARD tempat bekerja (Asli)', 'Motor + STNK (>2013) ATAU Deposit Rp 2.000.000 ATAU Laptop Core i3', 'Bersedia SIM A', 'Bersedia difoto'];
const jogjaKeluarga = ['KTP/SIM C Suami & Istri (Asli)', 'Buku Nikah (Asli)', '2 ID CARD tempat bekerja (Asli)', 'Motor + STNK (>2013) ATAU Deposit Rp 2.000.000 ATAU Laptop Core i3', 'Bersedia SIM A', 'Bersedia difoto'];
const luarMahasiswa = ['2 KTP (Asli)', '2 SIM C (Asli) ATAU Paspor (Asli)', '2 KTM (Asli)', 'Deposit Rp 2.000.000 (Cash) ATAU Laptop Core i3', 'Bersedia SIM A', 'Bersedia difoto'];
const luarPekerja = ['2 KTP (Asli)', '2 SIM C (Asli) ATAU Paspor (Asli)', '2 NPWP (Asli)', '2 ID CARD tempat bekerja (Asli)', 'Deposit Rp 2.000.000 (Cash) ATAU Laptop Core i3', 'Bersedia SIM A', 'Bersedia difoto'];
const luarKeluarga = ['KTP/SIM C Suami & Istri (Asli)', 'Buku Nikah (Asli)', '2 NPWP (Asli)', 'Buku Nikah (Asli)/Akte/Paspor Suami&Istri (Asli)', 'Deposit Rp 2.000.000 (Cash) ATAU Laptop Core i3', 'Bersedia SIM A', 'Bersedia difoto'];
const foreigner = ['2 National ID card', '2 Passport', 'Copy of Driving License', '2 KITAP atau KITAS Document', 'Deposit Rp 2.000.000 (Cash) ATAU Laptop Core i3', 'Guarantee Deposit Rp 4.000.000'];

const RequirementCard = ({ title, items }: { title: string; items: string[] }) => (
  <div className="bg-card rounded-xl border border-border p-6"><h4 className="font-heading font-bold text-lg mb-4 text-primary">{title}</h4><ul className="space-y-2">{items.map((item, i) => <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground"><span className="text-primary">•</span>{item}</li>)}</ul></div>
);

const TermsPage = () => (
  <Layout>
    <section className="bg-gradient-to-r from-secondary to-dark-gray py-20 md:py-32">
      <div className="container-custom"><PageBreadcrumb items={[{ label: 'Syarat Peminjaman' }]} /><h1 className="text-3xl md:text-5xl font-heading font-bold text-primary text-center">Syarat Peminjaman</h1><p className="text-center text-muted-foreground mt-4">Menyesuaikan dengan domisili dan kategori penyewa</p></div>
    </section>
    <section className="section-padding bg-background">
      <div className="container-custom">
        <h2 className="text-2xl font-heading font-bold mb-6">Domisili Jogja</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12"><RequirementCard title="Mahasiswa" items={jogjaMahasiswa} /><RequirementCard title="Pekerja" items={jogjaPekerja} /><RequirementCard title="Keluarga" items={jogjaKeluarga} /></div>
        <h2 className="text-2xl font-heading font-bold mb-6">Domisili Luar Jogja</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12"><RequirementCard title="Mahasiswa" items={luarMahasiswa} /><RequirementCard title="Pekerja" items={luarPekerja} /><RequirementCard title="Keluarga" items={luarKeluarga} /></div>
        <h2 className="text-2xl font-heading font-bold mb-6">Foreigner (Orang Asing)</h2>
        <div className="max-w-md"><RequirementCard title="Persyaratan" items={foreigner} /></div>
        <div className="mt-12 space-y-6">
          <div className="bg-muted rounded-xl p-6"><h3 className="font-heading font-bold mb-4">Ketentuan Paket Sewa</h3><ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground"><li>Paket Mobil + Supir + BBM dimulai biaya proyeksiwan mobil, tarif supir, dan bahan bakar. Dan paket lepas kunci hanya meliputi tarif mobil.</li><li>Paket All In tidak termasuk biaya tiket masuk.</li><li>All In meliputi biaya mobil, supir, BBM, supir, dan parkir.</li></ol></div>
          <div className="bg-muted rounded-xl p-6"><h3 className="font-heading font-bold mb-4">Ketentuan Layanan</h3><ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground"><li>Biaya makan untuk supir adalah Rp 35.000/12 jam dan Rp 50.000/24 jam, diserahkan langsung kepada supir.</li><li>Apabila pemakaian di luar kota Yogyakarta, maka biaya pengembalian supir ditanggung oleh penyewa.</li><li>Daftar harga yang tertulis adalah tarif regular untuk hari biasa (Senin-Kamis). Tahun Baru dan Long Weekend tarif menjadi non-regular.</li></ol></div>
        </div>
      </div>
    </section>
  </Layout>
);

export default TermsPage;
