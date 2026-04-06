import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo e Marca */}
          <div className="flex items-center">
            <div 
              className="flex-shrink-0 flex items-center gap-3 cursor-pointer" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img className="h-10 w-auto" src="images/ceasaconnlog.png" alt="CeasaConnect" />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900 leading-none">CeasaConnect</span>
                <span className="text-xs text-gray-500">Automação para Distribuidores</span>
              </div>
            </div>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('como-funciona')} className="text-gray-600 hover:text-brand font-medium transition-colors duration-300">
              Como Funciona
            </button>
            <button onClick={() => scrollToSection('precos')} className="text-gray-600 hover:text-brand font-medium transition-colors duration-300">
              Preços
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-600 hover:text-brand font-medium transition-colors duration-300">
              Contato
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="bg-white text-brand border border-brand hover:bg-brand-50 px-5 py-2 rounded-full font-medium transition-colors duration-300 hover:shadow-md"
            >
              Solicitar Demo
            </button>
          </div>

          {/* Botão Menu Mobile (Hambúrguer) */}
          <div className="-mr-2 flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-brand hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menu principal</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg animate-fade-in-up" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('como-funciona')} className="text-gray-600 hover:text-brand hover:bg-brand-50 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
              Como Funciona
            </button>
            <button onClick={() => scrollToSection('precos')} className="text-gray-600 hover:text-brand hover:bg-brand-50 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
              Preços
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-600 hover:text-brand hover:bg-brand-50 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
              Contato
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-brand font-bold bg-brand-50 block px-3 py-2 rounded-md text-base w-full text-left mt-4">
              Solicitar Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
