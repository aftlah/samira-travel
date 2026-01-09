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
    price: '32 Jutaan',
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

const PackageCard = ({ pkg }) => {
  const phoneNumber = "6289601701998";
  const whatsappMessage = `Assalamualaikum, saya tertarik dengan paket *${pkg.name}* (${pkg.price}) dan ingin mendapatkan informasi lebih lanjut. Terima kasih.`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="group relative bg-gradient-to-br from-white to-amber-50/30 rounded-2xl shadow-xl overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[340px] border border-amber-100/50">

      {/* {pkg.isPopular && (
        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-primary via-accent to-amber-400 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg animate-pulse">
          ⭐ POPULER
        </div>
      )} */}

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

      {/* WhatsApp Button */}
      <div className="p-5 pt-0 mt-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn relative w-full flex items-center justify-center px-6 py-3.5 overflow-hidden text-sm font-bold rounded-xl transition-all duration-300 bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl hover:from-accent hover:to-primary transform hover:scale-[1.02]"
        >
          <svg className="relative z-10 w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span className="relative z-10">Pesan via WhatsApp</span>
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

const Packages = () => {
  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />

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
