import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-black">
        <h1 className="text-9xl font-heading font-bold text-primary mb-4">404</h1>
        <p className="text-2xl text-white mb-8 font-heading">Halaman Tidak Ditemukan</p>
        <p className="text-gray-400 max-w-md mb-12">
          Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan ke alamat lain.
        </p>
        <Button asChild className="btn-primary px-8 py-6 rounded-xl group transition-all">
          <Link to="/" className="flex items-center gap-3">
            <FontAwesomeIcon icon={faHome} className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold tracking-widest uppercase text-xs">Kembali ke Beranda</span>
          </Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
