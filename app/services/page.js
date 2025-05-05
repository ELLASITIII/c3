"use client";

import { Globe, Code, Brush, Smartphone } from "lucide-react";

export default function Services() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gray-100 text-gray-800">
      {/* Judul */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Layanan Saya</h1>
      <p className="text-gray-600 max-w-2xl leading-relaxed">
        Saya menyediakan berbagai layanan profesional di bidang pengembangan web, desain UI/UX, serta optimasi website untuk kebutuhan bisnis dan personal.
      </p>

      {/* Section Services */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Web Development */}
        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <Globe className="text-blue-600 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Web Development</h3>
          <p className="text-gray-500 mt-2">
            Membangun website modern, responsif, dan cepat menggunakan teknologi terbaru seperti Next.js dan Tailwind CSS.
          </p>
        </div>

        {/* Custom Coding */}
        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <Code className="text-green-600 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Custom Coding</h3>
          <p className="text-gray-500 mt-2">
            Mengembangkan fitur khusus dan solusi pemrograman sesuai dengan kebutuhan klien menggunakan JavaScript dan berbagai framework.
          </p>
        </div>

        {/* UI/UX Design */}
        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <Brush className="text-purple-600 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">UI/UX Design</h3>
          <p className="text-gray-500 mt-2">
            Merancang antarmuka yang menarik dan user-friendly dengan Figma dan Adobe XD untuk meningkatkan pengalaman pengguna.
          </p>
        </div>

        {/* Mobile Optimization */}
        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <Smartphone className="text-yellow-600 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Mobile Optimization</h3>
          <p className="text-gray-500 mt-2">
            Mengoptimalkan website agar tampil dan berfungsi dengan baik di semua perangkat, termasuk smartphone dan tablet.
          </p>
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
