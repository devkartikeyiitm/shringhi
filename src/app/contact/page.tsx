'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-12 text-center">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-2">Address</h4>
                <p className="text-gray-600">Mira Bhayandar, Maharashtra, India</p>
              </div>
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-2">Phone</h4>
                <p className="text-gray-600">+91-XXXX-XXXX-XX</p>
              </div>
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-2">Email</h4>
                <p className="text-gray-600">info@shringhi.com</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Business Hours</h4>
                <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Message</label>
                  <textarea rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" placeholder="Your message..."></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition">Send Message</button>
              </form>
            </div>
          </div>
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
