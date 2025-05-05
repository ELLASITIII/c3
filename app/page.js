"use client";
import Link from "next/link";
import Image from "next/image";

// Data portfolio yang akan ditampilkan di timeline
const portfolioItems = [
  {
    title: "Website A",
    description:
      "Web app development using React and Node.js. A fully responsive web application with modern UI/UX design.",
    image: "/portfolioA.jpg", // Ganti dengan URL gambar yang sesuai
    detailUrl: "/portfolio/a",
  },
  {
    title: "Portfolio Website",
    description:
      "Design and development of a personal portfolio website to showcase projects, skills, and experience.",
    image: "/portfolioB.jpg", // Ganti dengan URL gambar yang sesuai
    detailUrl: "/portfolio/b",
  },
  {
    title: "Mobile App C",
    description:
      "Mobile application developed using React Native for both iOS and Android platforms, integrating real-time data.",
    image: "/portfolioC.jpg", // Ganti dengan URL gambar yang sesuai
    detailUrl: "/portfolio/c",
  },
];

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4 sm:px-6 lg:px-8">
      {/* Profile Section with Animation */}
      <div className="flex flex-col items-center justify-center mb-16">
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-8 border-white shadow-xl mb-6 transform transition duration-500 hover:scale-110 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-1s">
          <Image
            src="/oya.jpeg" // Ganti dengan URL atau path gambar kamu
            alt="Profile Picture"
            width={192}
            height={192}
            className="object-cover"
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mt-6 animate__animated animate__fadeIn animate__delay-2s">
          ELLA SITI AISYAH
        </h1>
        <p className="text-lg md:text-xl opacity-90 mt-2 animate__animated animate__fadeIn animate__delay-3s">
          Web Developer & UI/UX Designer
        </p>
        <p className="max-w-md opacity-90 mt-4 text-center animate__animated animate__fadeIn animate__delay-4s">
          Hello, welcome to my world of creative development and design! Feel free to explore my work and reach out.
        </p>
        <div className="mt-6 animate__animated animate__fadeIn animate__delay-5s">
          <Link
            href="/contact"
            className="px-6 py-3 text-lg font-semibold bg-white text-blue-900 hover:bg-blue-900 hover:text-white rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Hubungi Saya
          </Link>
        </div>
      </div>

      {/* Portfolio Timeline Section */}
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-8 animate__animated animate__fadeIn animate__delay-1s">
          My Portfolio
        </h2>
        <div className="relative w-full max-w-3xl">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center mb-12 animate__animated animate__fadeIn animate__delay-2s"
            >
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 bg-gradient-to-b from-blue-900 to-blue-700 h-full"></div>
              <div className="flex items-center space-x-4 z-10">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-700 transform transition duration-300 hover:scale-110">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-gray-900 rounded-lg shadow-2xl max-w-md hover:bg-gray-800 transition duration-300 transform hover:scale-105">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-gray-300 mt-2">{item.description}</p>
                  <Link
                    href={item.detailUrl}
                    className="mt-4 inline-block px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition duration-300"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="text-center mt-16 text-gray-300">
        <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
        <p>
          Email saya: <a href="mailto:estasyah5028@gmail.com" className="text-blue-500 hover:text-blue-700">estasyah5028@gmail.com</a>
        </p>
      </div>
    </section>
  );
}
