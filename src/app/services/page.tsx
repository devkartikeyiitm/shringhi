'use client';

import Link from 'next/link';

export default function Services() {
  const services = [
    { title: 'Residential Properties', description: 'Find your dream home with our extensive residential property listings and expert guidance.' },
    { title: 'Commercial Real Estate', description: 'Invest in premium commercial properties with high returns and excellent locations.' },
    { title: 'Construction Materials', description: 'Quality construction materials sourced from trusted manufacturers at competitive prices.' },
    { title: 'Property Consultation', description: 'Expert consultation services to guide your real estate investment decisions.' },
    { title: 'Legal Support', description: 'Complete legal support for property transactions and documentation.' },
    { title: 'Interior Design', description: 'Professional interior design services to make your space beautiful and functional.' },
  ];

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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-12 text-center">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Need Our Services?</h3>
          <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-bold inline-block transition">Get in Touch</Link>
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
