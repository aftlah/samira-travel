import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="relative bg-gray-900 pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1565552629477-ff58e8e4dc8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Kaaba Mecca"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 flex flex-col items-center text-center h-[90vh] justify-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
          Wujudkan Rindu Baitullah Bersama <span className="text-primary">Samira Travel</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
          Melayani perjalanan ibadah Umroh dan Haji Anda dengan pelayanan terbaik, amanah, dan profesional bersama Ibu Tatiek.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="#packages"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-accent transition-colors duration-300"
          >
            Lihat Paket
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#register"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 transition-colors duration-300"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
