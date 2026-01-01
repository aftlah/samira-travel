import React from 'react';
import { User, CheckCircle } from 'lucide-react';

const Profile = () => {
  return (
    <section id="profile" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Tentang Kami</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Melayani Sepenuh Hati
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] max-w-sm mx-auto">
              {/* Placeholder image for Tatiek */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <User className="h-32 w-32 text-gray-400" />
              </div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Ibu Tatiek" 
                className="relative w-full h-full object-cover z-10 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold text-secondary">Tatiek</h3>
            <p className="text-lg text-gray-600">
              Sebagai konsultan resmi Samira Travel, saya berdedikasi untuk membantu Anda mewujudkan impian beribadah ke Tanah Suci dengan nyaman dan aman.
            </p>
            <p className="text-lg text-gray-600">
              Kami memahami bahwa setiap jamaah memiliki kebutuhan yang berbeda, oleh karena itu kami hadir untuk memberikan solusi terbaik dan pendampingan personal mulai dari pendaftaran hingga kembali ke tanah air.
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                'Resmi dan Terpercaya',
                'Pembimbing Berpengalaman',
                'Fasilitas Nyaman',
                'Kepastian Berangkat'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-primary mr-3" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
