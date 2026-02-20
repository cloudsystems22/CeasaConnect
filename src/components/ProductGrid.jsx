// Aplicando as mudanças no arquivo ProductGrid.jsx
import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function ProductGrid() {
  return (
    <section className="py-12 bg-gray-50">
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">Produtos em destaque</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img 
              src="images/frutasum.jpg" 
              alt="frutas" 
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity"></div>
            <span className="absolute bottom-4 left-4 text-white font-bold text-lg drop-shadow-md">Frutas</span>
          </div>
          
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img 
              src="images/undraw_personalization_0q05.svg" 
              alt="legumes" 
              className="w-full h-64 object-cover bg-white transform group-hover:scale-110 transition-transform duration-300" 
            />
             <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition-opacity"></div>
             <span className="absolute bottom-4 left-4 text-gray-800 font-bold text-lg drop-shadow-md">Legumes</span>
          </div>

          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img 
              src="images/verdurasum.jpg" 
              alt="verduras" 
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity"></div>
            <span className="absolute bottom-4 left-4 text-white font-bold text-lg drop-shadow-md">Verduras</span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
