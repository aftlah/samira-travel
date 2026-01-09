import React from 'react';
import { ArrowRight, Star, Users, Award, MessageCircle } from 'lucide-react';

const Hero = () => {
  const phoneNumber = "6281216165047";
  const whatsappMessage = "Assalamualaikum, saya ingin bertanya tentang paket umroh Samira Travel.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const stats = [
    { icon: Users, value: '1000+', label: 'Jamaah Terlayani' },
    { icon: Star, value: '4.9/5', label: 'Rating Kepuasan' },
    { icon: Award, value: '15+', label: 'Tahun Pengalaman' },
  ];

  return (
    <div id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-secondary pt-16 overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1565552629477-ff58e8e4dc8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Kaaba Mecca"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-gray-900/80 to-secondary/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"></div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto py-20 px-4 sm:py-28 sm:px-6 lg:px-8 flex flex-col items-center text-center min-h-[90vh] justify-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
          <Star className="w-4 h-4 text-primary mr-2" fill="currentColor" />
          <span className="text-primary font-semibold text-sm">Travel Umroh & Haji Terpercaya</span>
        </div>

        {/* Main Heading with Animation */}
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6 leading-tight">
          Wujudkan Rindu Baitullah
          <br />
          Bersama{' '}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Samira Travel
            </span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/30 to-accent/30 blur-sm"></span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Melayani perjalanan ibadah Umroh dan Haji Anda dengan pelayanan terbaik,
          <span className="text-primary font-semibold"> amanah</span>, dan
          <span className="text-primary font-semibold"> profesional</span> bersama Ibu Tatiek.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="#packages"
            className="group relative inline-flex items-center px-8 py-4 overflow-hidden text-base font-bold rounded-xl transition-all duration-300 bg-gradient-to-r from-primary to-accent text-white shadow-xl hover:shadow-2xl hover:shadow-primary/50 transform hover:scale-105"
          >
            <span className="relative z-10">Lihat Paket Umroh</span>
            <ArrowRight className="relative z-10 ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-8 py-4 border-2 border-white/30 text-base font-bold rounded-xl text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-secondary transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            <span>Konsultasi Gratis</span>
          </a>
        </div>

        {/* Stats Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-gray-300 font-medium">{stat.label}</p>
              </div>
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent rounded-tr-2xl"></div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 fill-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
