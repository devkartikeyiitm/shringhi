'use client';

import Link from 'next/link';

export default function About() {
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

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8 text-center">About SHRINGHI</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">SHRINGHI is a leading real estate and construction material company with over 20 years of experience in the industry. We are committed to providing quality services and materials to our clients.</p>
              <p className="text-lg text-gray-700 mb-6">Our team consists of experienced professionals dedicated to delivering exceptional results. We specialize in both residential and commercial real estate projects, as well as supplying premium construction materials.</p>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg mb-6">To provide world-class real estate solutions and construction materials that exceed customer expectations and create value for our communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-4xl font-bold mb-2">20+</h4>
              <p className="text-xl">Years in Business</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold mb-2">500+</h4>
              <p className="text-xl">Projects Completed</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold mb-2">1000+</h4>
              <p className="text-xl">Happy Clients</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold mb-2">100%</h4>
              <p className="text-xl">Client Satisfaction</p>
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
