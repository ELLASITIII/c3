"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gray-100 text-gray-800">
      {/* Judul */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontak Saya</h1>
      <p className="text-gray-600 max-w-2xl leading-relaxed">
        Jika Anda tertarik untuk bekerja sama atau memiliki pertanyaan, jangan ragu untuk menghubungi saya melalui informasi di bawah ini.
      </p>

      {/* Section Kontak */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {/* Email */}
        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <Mail className="text-blue-600 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Email</h3>
          <p className="text-gray-500 mt-2">estasyah5028@gmail.com</p>
        </div>

        {/* Telepon */}
        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <Phone className="text-green-600 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Telepon</h3>
          <p className="text-gray-500 mt-2">08210012947</p>
        </div>

        {/* Lokasi */}
        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <MapPin className="text-red-600 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Lokasi</h3>
          <p className="text-gray-500 mt-2">Bandung, Indonesia</p>
        </div>
      </div>

      {/* Tombol Kembali ke Beranda */}
      <div className="mt-8">
        <a
          href="/"
          className="px-6 py-2 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full transition duration-300"
        >
          Kembali ke Beranda
        </a>
      </div>
    </section>
  );
}
