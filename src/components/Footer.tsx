// Aplicando as mudanças no arquivo Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-white">CeasaConnect</div>
            <div className="text-gray-400 mt-2">Campinas, SP • Conectando distribuidores ao mercado</div>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-brand transition-colors">
              <i className="fa-brands fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-brand transition-colors">
              <i className="fa-brands fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-brand transition-colors">
              <i className="fa-brands fa-youtube text-2xl"></i>
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} CeasaConnect. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
