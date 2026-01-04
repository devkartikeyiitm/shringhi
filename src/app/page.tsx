'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">SHRINGHI</h1>
          <ul className="flex gap-6">
            <li><Link href="/" className="hover:text-orange-500 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-orange-500 transition">About</Link></li>
            <li><Link href="/services" className="hover:text-orange-500 transition">Services</Link></li>
            <li><Link href="/products" className="hover:text-orange-500 transition">Products</Link></li>
            <li><Link href="/contact" className="hover:text-orange-500 transition">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">Welcome to SHRINGHI</h2>
          <p className="text-xl mb-8">Your Trusted Partner in Real Estate & Construction Materials</p>
          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-bold transition">Get Started</button>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <h4 className="text-2xl font-bold mb-4 text-blue-600">Real Estate</h4>
              <p className="text-gray-600">Professional real estate services for residential and commercial properties.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <h4 className="text-2xl font-bold mb-4 text-blue-600">Construction Materials</h4>
              <p className="text-gray-600">High-quality construction materials and supplies for all projects.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <h4 className="text-2xl font-bold mb-4 text-blue-600">Consultation</h4>
              <p className="text-gray-600">Expert consultation for your construction and real estate needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Ready to Build Your Dream?</h3>
          <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-bold inline-block transition">Contact Us Today</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 SHRINGHI - Real Estate & Construction Materials. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
