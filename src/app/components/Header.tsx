'use client';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            <span className="text-yellow-500">Shringhi</span> Construction
          </h1>
        </div>
        
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#services" className="text-gray-700 hover:text-yellow-500 transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-700 hover:text-yellow-500 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-yellow-500 transition-colors">
              Contact
            </a>
          </li>
        </ul>

        <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
          Get Quote
        </button>
      </nav>
    </header>
  );
}
