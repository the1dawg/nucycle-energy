import React from "react";
import "./index.css";

export default function NuCycleLandingPage() {
  return (
    <div className="bg-neutral-50 text-gray-900 font-sans">
      {/* Navigation */}
      <header className="flex justify-between items-center px-6 py-4 shadow-sm bg-neutral-50">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="NuCycle Logo" className="h-8" />
          <h1 className="text-xl font-bold">NuCycle Energy</h1>
        </div>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-green-700 transition-colors">About</a>
          <a href="#process" className="hover:text-green-700 transition-colors">Process</a>
          <a href="#contact" className="hover:text-green-700 transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-green-900 text-white px-6 py-24 text-left overflow-hidden">
        <img
          src="/hero-industrial.jpg"
          alt="Industrial Facility"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-4xl">
          <h2 className="text-5xl font-bold leading-tight mb-6">Turning Waste Into Watts</h2>
          <a href="#process">
            <button className="bg-lime-400 hover:bg-lime-500 text-green-900 font-semibold px-6 py-3 rounded transition-all">
              See Our Process
            </button>
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-6 py-20 bg-neutral-100" id="about">
        <div>
          <h3 className="text-3xl font-bold mb-4">Fueling the Future. Responsibly</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <img src="/power-lines-1.jpg" alt="Power Lines" className="w-full rounded shadow" />
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-10 px-6 py-16 text-center bg-neutral-50" id="process">
        <div className="flex flex-col items-center">
          <img src="/icon-recycle.svg" alt="Recycling Icon" className="h-12 mb-4" />
          <h4 className="text-lg font-bold mb-2">Industrial Recycling</h4>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/icon-sun.svg" alt="Solar Icon" className="h-12 mb-4" />
          <h4 className="text-lg font-bold mb-2">Renewable Energy</h4>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/icon-leaf.svg" alt="Leaf Icon" className="h-12 mb-4" />
          <h4 className="text-lg font-bold mb-2">Sustainable Solutions</h4>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
      </section>

      {/* Secondary Image Section */}
      <section className="px-6 pb-20">
        <img src="/power-lines-2.jpg" alt="Additional Power Infrastructure" className="w-full rounded shadow" />
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 py-6 border-t bg-neutral-50" id="contact">
        © {new Date().getFullYear()} NuCycle Energy. All rights reserved.
      </footer>
    </div>
  );
}
