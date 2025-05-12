import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Welcome to Shreenghi Construction</h1>
          <p className="text-xl mb-8">Your trusted partner in construction materials and services.</p>
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
            Get a Quote
          </button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Construction Materials</h3>
              <p className="text-gray-600">High-quality materials for all your construction needs.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Consulting Services</h3>
              <p className="text-gray-600">Expert advice on material selection and usage.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Delivery Solutions</h3>
              <p className="text-gray-600">Timely delivery to your construction site.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}