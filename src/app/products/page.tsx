'use client';

import Link from 'next/link';

export default function Products() {
  const products = [
    { name: 'Cement', category: 'Building Materials', price: '₹420/bag' },
    { name: 'Steel Bars', category: 'Metal Materials', price: '₹65/kg' },
    { name: 'Bricks', category: 'Building Materials', price: '₹4/piece' },
    { name: 'Sand', category: 'Aggregates', price: '₹100/unit' },
    { name: 'Gravel', category: 'Aggregates', price: '₹80/unit' },
    { name: 'Tiles', category: 'Finishing Materials', price: '₹150/sqft' },
    { name: 'Paint', category: 'Finishing Materials', price: '₹600/liter' },
    { name: 'Glass', category: 'Finishing Materials', price: '₹250/sqft' },
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

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-12 text-center">Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <h3 className="text-xl font-bold mb-2 text-blue-600">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.category}</p>
                <p className="text-lg font-bold text-orange-500">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Order Now</h3>
          <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-bold inline-block transition">Place Your Order</Link>
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
