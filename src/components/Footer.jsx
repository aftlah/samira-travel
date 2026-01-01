import React from 'react';
import { Plane, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Plane className="h-8 w-8 text-primary" />
              <span className="ml-2 font-bold text-xl">Samira Travel</span>
            </div>
            <p className="text-gray-400 text-sm">
              Mitra terpercaya perjalanan ibadah Anda. Mengutamakan kenyamanan, keamanan, dan kekhusyukan ibadah.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Kontak Kami</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Jalan Contoh No. 123, Jakarta</li>
              <li>Email: info@samiratravel-tatiek.com</li>
              <li>Telp/WA: 0812-3456-7890</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Samira Travel - Tatiek. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
