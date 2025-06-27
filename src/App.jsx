import React from "react";

export default function NuCycleLandingPage() {
  return (
    <div className="bg-neutral-50 text-gray-900 font-sans">
      <header className="flex flex-col md:flex-row justify-between items-center px-6 py-4 shadow-sm gap-2 md:gap-0">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="NuCycle Logo" className="h-8" />
          <h1 className="text-xl font-bold">NuCycle Energy</h1>
        </div>
        <nav className="space-x-4 text-sm font-medium">
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="bg-green-900 text-white px-6 py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Turning Waste Into Watts</h2>
        <a href="#process">
          <button className="bg-lime-400 hover:bg-lime-500 text-green-900 font-semibold px-6 py-3 rounded mt-4">
            See Our Process
          </button>
        </a>
      </section>

      <section className="px-6 py-12 text-center" id="about">
        <h3 className="text-2xl font-semibold mb-2">Fueling the Future. Responsibly</h3>
        <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      <section className="px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center" id="process">
        <div>
          <div className="text-green-700 text-5xl mb-2">♻️</div>
          <h4 className="font-semibold text-lg mb-1">Industrial Recycling</h4>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <div>
          <div className="text-yellow-500 text-5xl mb-2">☀️</div>
          <h4 className="font-semibold text-lg mb-1">Renewable Energy</h4>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <div>
          <div className="text-green-500 text-5xl mb-2">🌱</div>
          <h4 className="font-semibold text-lg mb-1">Sustainable Solutions</h4>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
      </section>

      <footer className="text-center text-xs text-gray-500 py-6 border-t" id="contact">
        © {new Date().getFullYear()} NuCycle Energy. All rights reserved.
      </footer>
    </div>
  );
}