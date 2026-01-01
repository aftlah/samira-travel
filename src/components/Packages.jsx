import React from 'react';
import { Check } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      name: 'Umroh Reguler',
      price: '31 Jutaan',
      duration: '9/12/16 Hari',
      image: '/images/umroh_reguler.jpeg',
      features: [
        '9/12/16 Hari di Tanah Suci',
        'Hotel Bintang 5-4-3 Nyaman dan Dekat',
        'Makan 3x Sehari Prasmanan',
        'Pembimbing Profesional dan Ramah',
        'Transportasi Nyaman dan Aman'
      ],
      isPopular: false,
    },
    {
      name: 'Umroh Plus',
      price: '45 Juta',
      duration: '12/16 Hari',
      image: '/images/umrah_plus.jpeg',
      features: [
        '12/16 Hari di Tanah Suci dan Negara Plus',
        'Hotel Bintang 5',
        'Makan 3x Sehari Buffet',
        'Ziarah Ekstensif',
        'Transportasi Eksklusif'
      ],
      isPopular: true,
    },
    {
      name: 'Umroh Ramadhan',
      price: '38 Jutaan',
      duration: 'Akhir Ramadhan',
      image: '/images/umrah_ramadhan.jpeg',
      features: [
        'Program Ibadah Lailatul Qadar',
        'Hotel Bintang 5/4 Dekat Masjid',
        'Buka Puasa & Sahur Bersama',
        'Full Ibadah di Masjidil Haram',
        'Pembimbing Berpengalaman'
      ],
      isPopular: false,
    },
    {
      name: 'Haji Khusus',
      price: 'USD 17.000',
      duration: '25-30 Hari',
      image: '/images/haji_khusus.jpeg',
      features: [
        'Program Haji Plus Sesuai KEMENAG RI',
        'Akomodasi Premium',
        'Beragam Pilihan Itinerary yang Fleksibel',
        'Pembimbing Haji Berpengalaman',
        'Pelayanan Kesehatan'
      ],
      isPopular: false,
    },
    {
      name: 'Haji Furoda',
      price: 'USD 27.576',
      duration: '25 Hari',
      image: '/images/haji_furoda.jpeg',
      features: [
        'Program Haji Tanpa Antri, RESMI VISA HAJI',
        'Fleksibilitas Waktu',
        'Akomodasi Pilihan',
        'Pendampingan Khusus',
        'Pelayanan Eksklusif'
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
            Paket Umroh & Haji
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Pilih paket ibadah yang sesuai dengan kebutuhan dan kenyamanan Anda.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[340px]"
            >
              <div className="p-3 bg-secondary text-center">
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">{pkg.name}</h3>
              </div>
              
              <div className="h-96 overflow-hidden bg-white mt-3">
                <img 
                  src={pkg.image} 
                  alt={pkg.name} 
                  className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4 flex-1">
                <p className="text-gray-500 mb-4 text-sm font-medium text-center">{pkg.duration}</p>
                
                <ul className="space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-xs leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-5 pt-0 mt-auto">
                <a
                  href="#register"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md transition-colors duration-300 bg-white text-primary border-primary hover:bg-gray-50"
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
