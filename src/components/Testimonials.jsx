import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'H. Ahmad',
      role: 'Jamaah Umroh 2023',
      text: 'Alhamdulillah, perjalanan umroh bersama Samira Travel sangat memuaskan. Pelayanan Ibu Tatiek sangat ramah dan membantu. Hotel dekat dengan masjid, makanan enak.',
      rating: 5,
    },
    {
      name: 'Hj. Siti',
      role: 'Jamaah Umroh 2024',
      text: 'Sangat merekomendasikan Samira Travel. Pembimbingnya sabar dan berilmu. Semua fasilitas sesuai dengan yang dijanjikan. Terima kasih Ibu Tatiek.',
      rating: 5,
    },
    {
      name: 'Budi Santoso',
      role: 'Jamaah Umroh Plus Turkey',
      text: 'Pengalaman yang tak terlupakan. Travel amanah dan profesional. Proses administrasi dibantu sampai tuntas. InsyaAllah akan berangkat lagi bersama keluarga.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Testimoni</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Kata Mereka
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{item.text}"</p>
              <div>
                <h4 className="font-bold text-secondary">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
