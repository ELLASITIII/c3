"use client";
import { Code, Database, Paintbrush, Server } from "lucide-react";

export default function Skills() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gray-100 text-gray-800">
      {/* Judul */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Keahlian Saya</h1>
      <p className="text-gray-600 max-w-2xl leading-relaxed">
        Saya memiliki berbagai keahlian dalam bidang pengembangan web, mulai dari front-end hingga back-end development, serta desain UI/UX.
      </p>

      {/* Section Skills */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Kartu Frontend Development */}
        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <Code className="text-blue-600 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Front-End Development</h3>
          <p className="text-gray-500 mt-2">
            Berpengalaman dalam membangun antarmuka pengguna yang responsif dengan teknologi seperti HTML, CSS, JavaScript, React.js, dan Next.js.
          </p>
        </div>

        {/* Kartu Back-End Development */}
        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <Server className="text-green-600 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Back-End Development</h3>
          <p className="text-gray-500 mt-2">
            Menguasai pengembangan server-side menggunakan Node.js, Express.js, dan database seperti MySQL & MongoDB.
          </p>
        </div>

        {/* Kartu Database Management */}
        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <Database className="text-yellow-600 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Database Management</h3>
          <p className="text-gray-500 mt-2">
            Berpengalaman dalam merancang, mengelola, dan mengoptimalkan database dengan SQL dan NoSQL.
          </p>
        </div>

        {/* Kartu UI/UX Design */}
        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <Paintbrush className="text-purple-600 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">UI/UX Design</h3>
          <p className="text-gray-500 mt-2">
            Memiliki keterampilan dalam mendesain antarmuka yang menarik dan user-friendly menggunakan Figma & Adobe XD.
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