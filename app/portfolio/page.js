"use client";

import { FolderOpen, Code, Globe } from "lucide-react";

export default function Portfolio() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gray-100 text-gray-800">
      {/* Judul */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Portofolio Saya</h1>
      <p className="text-gray-600 max-w-2xl leading-relaxed">
        Berikut adalah beberapa proyek yang telah saya kerjakan dalam bidang pengembangan web dan desain UI/UX.
      </p>

      {/* Section Portfolio */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Proyek 1 */}
        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <Globe className="text-blue-600 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Website Bisnis</h3>
          <p className="text-gray-500 mt-2">
            Pengembangan website bisnis profesional dengan teknologi modern seperti Next.js dan Tailwind CSS.
          </p>
        </div>

        {/* Proyek 2 */}
        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <Code className="text-green-600 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Aplikasi Web Interaktif</h3>
          <p className="text-gray-500 mt-2">
            Membangun aplikasi web interaktif dengan fitur canggih menggunakan React.js dan API modern.
          </p>
        </div>

        {/* Proyek 3 */}
        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <FolderOpen className="text-purple-600 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Desain UI/UX</h3>
          <p className="text-gray-500 mt-2">
            Merancang antarmuka yang menarik dan user-friendly dengan Figma dan Adobe XD untuk pengalaman pengguna yang lebih baik.
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