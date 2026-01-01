import React from 'react';
import { Check } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      name: 'Paket Reguler',
      price: '28.500.000',
      duration: '9 Hari',
      features: [
        'Tiket Pesawat PP Ekonomi',
        'Hotel Bintang 3 (Makkah & Madinah)',
        'Makan 3x Sehari (Menu Indonesia)',
        'Visa Umroh & Asuransi',
        'Pembimbing Ibadah (Muthawif)',
        'Air Zamzam 5 Liter',
        'Perlengkapan Umroh Lengkap'
      ],
      isPopular: false,
    },
    {
      name: 'Paket VIP',
      price: '35.000.000',
      duration: '12 Hari',
      features: [
        'Tiket Pesawat PP Ekonomi/Bisnis',
        'Hotel Bintang 5 (Depan Masjid)',
        'Makan 3x Sehari (Buffet)',
        'Visa Umroh & Asuransi',
        'Pembimbing Ibadah Senior',
        'City Tour Thaif/Jeddah',
        'Air Zamzam 5 Liter',
        'Perlengkapan Umroh Premium'
      ],
      isPopular: true,
    },
    {
      name: 'Paket Ramadhan',
      price: '38.000.000',
      duration: 'Akhir Ramadhan',
      features: [
        'Ibadah Lailatul Qadar',
        'Hotel Bintang 4/5',
        'Full Ibadah di Masjidil Haram',
        'Buka Puasa & Sahur Bersama',
        'Visa Umroh & Asuransi',
        'Muthawif Berpengalaman',
        'Air Zamzam 5 Liter',
        'Bingkisan Lebaran'
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Pilihan Paket</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Paket Umroh Terbaik
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan budget Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300 ${
                pkg.isPopular ? 'ring-2 ring-primary scale-105 md:scale-110 z-10' : ''
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                  Terlaris
                </div>
              )}
              
              <div className="p-8 flex-1">
                <h3 className="text-xl font-bold text-secondary mb-2">{pkg.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-sm font-semibold text-gray-500 mr-1">Rp</span>
                  <span className="text-4xl font-extrabold text-primary">{pkg.price}</span>
                </div>
                <p className="text-gray-500 mb-6 font-medium">{pkg.duration}</p>
                
                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-8 bg-gray-50 mt-auto">
                <a
                  href="#register"
                  className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md transition-colors duration-300 ${
                    pkg.isPopular 
                      ? 'bg-primary text-white hover:bg-yellow-600' 
                      : 'bg-white text-primary border-primary hover:bg-gray-50'
                  }`}
                >
                  Pilih Paket
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
