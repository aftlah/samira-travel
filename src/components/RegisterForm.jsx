import React, { useState } from 'react';
import { Send } from 'lucide-react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    package: 'Paket Reguler',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (e.g., send to WhatsApp)
    const message = `Halo Ibu Tatiek, saya ingin mendaftar umroh.\n\nNama: ${formData.name}\nNo. HP: ${formData.phone}\nPaket: ${formData.package}\nCatatan: ${formData.notes}`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="register" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-primary py-6 px-8">
            <h2 className="text-2xl font-bold text-white text-center">Formulir Pendaftaran</h2>
            <p className="text-yellow-100 text-center mt-2">Isi data diri Anda untuk konsultasi atau pendaftaran.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="py-8 px-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Nomor WhatsApp</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="package" className="block text-sm font-medium text-gray-700">Pilihan Paket</label>
              <select
                id="package"
                name="package"
                className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                value={formData.package}
                onChange={handleChange}
              >
                <option>Paket Reguler</option>
                <option>Paket VIP</option>
                <option>Paket Ramadhan</option>
                <option>Hanya Tanya-tanya Dulu</option>
              </select>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Catatan Tambahan (Opsional)</label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                value={formData.notes}
                onChange={handleChange}
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300"
              >
                <Send className="h-4 w-4 mr-2" />
                Kirim Pendaftaran via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
