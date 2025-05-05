"use client"; 

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">My Website</h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          <Link href="/about" className="text-white hover:text-gray-300">About</Link>
          <Link href="/skills" className="text-white hover:text-gray-300">Skills</Link>
          <Link href="/services" className="text-white hover:text-gray-300">Services</Link>
          <Link href="/portfolio" className="text-white hover:text-gray-300">Portfolio</Link>
          <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-blue-700 p-4 flex flex-col space-y-4">
          <Link href="/" className="text-white" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="text-white" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/skills" className="text-white" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link href="/services" className="text-white" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/portfolio" className="text-white" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link href="/contact" className="text-white" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
