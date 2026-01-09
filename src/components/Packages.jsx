import React from 'react';
import { Check } from 'lucide-react';

const PACKAGE_DATA = [
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

// Package Card Component
const PackageCard = ({ pkg }) => {
  return (
    <div className="group relative bg-gradient-to-br from-white to-amber-50/30 rounded-2xl shadow-xl overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[340px] border border-amber-100/50">
      {/* Popular Badge */}
      {pkg.isPopular && (
        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-primary via-accent to-amber-400 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg animate-pulse">
          ⭐ POPULER
        </div>
      )}

      {/* Package Header with Gradient */}
      <div className="relative p-4 bg-gradient-to-r from-secondary via-gray-800 to-secondary text-center overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-20"></div>
        <h3 className="relative text-xl font-bold text-white uppercase tracking-wider drop-shadow-lg">
          {pkg.name}
        </h3>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-0 right-0 w-20 h-20 bg-primary rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-accent rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Package Image with Overlay */}
      <div className="relative h-96 overflow-hidden bg-gradient-to-br from-gray-100 to-amber-50">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Price Tag */}
      <div className="relative -mt-6 mx-4 z-10">
        <div className="bg-gradient-to-r from-primary to-accent rounded-xl shadow-lg p-3 text-center transform group-hover:scale-105 transition-transform duration-300">
          <p className="text-white text-xs font-semibold uppercase tracking-wide mb-1">Mulai Dari</p>
          <p className="text-white text-2xl font-bold drop-shadow-md">{pkg.price}</p>
        </div>
      </div>

      {/* Package Details */}
      <div className="p-5 flex-1">
        <div className="flex items-center justify-center mb-4 text-gray-700">
          <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm font-semibold">{pkg.duration}</span>
        </div>

        {/* Features List with Enhanced Styling */}
        <ul className="space-y-2.5">
          {pkg.features.map((feature, idx) => (
            <li key={idx} className="flex items-start group/item">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mr-2.5 mt-0.5 shadow-sm">
                <Check className="h-3 w-3 text-white" strokeWidth={3} />
              </div>
              <span className="text-gray-700 text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors duration-200">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button with Gradient */}
      <div className="p-5 pt-0 mt-auto">
        <a
          href="#register"
          className="group/btn relative w-full flex items-center justify-center px-6 py-3.5 overflow-hidden text-sm font-bold rounded-xl transition-all duration-300 bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl hover:from-accent hover:to-primary transform hover:scale-[1.02]"
        >
          <span className="relative z-10">Pilih Paket Ini</span>
          <svg className="relative z-10 w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
        </a>
      </div>

      {/* Decorative Corner Accent */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-amber-100 to-transparent opacity-50 rounded-tl-full pointer-events-none"></div>
    </div>
  );
};

// Section Header Component
const SectionHeader = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
        Pilihan Paket
      </h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Paket Umroh & Haji
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
        Pilih paket ibadah yang sesuai dengan kebutuhan dan kenyamanan Anda.
      </p>
    </div>
  );
};

// Main Packages Component
const Packages = () => {
  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />

        {/* Package Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {PACKAGE_DATA.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
