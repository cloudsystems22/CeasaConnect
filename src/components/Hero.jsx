import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gradient-to-r from-brand-50 to-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          {/* Elemento decorativo SVG para corte diagonal em telas grandes */}
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <ScrollReveal className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Fusão do WhatsApp com</span>{' '}
                <span className="block text-brand xl:inline">App de Vendas</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                O CeasaConnect une a agilidade do WhatsApp com a potência de um aplicativo de vendas. Gerencie pedidos, clientes e entregas na palma da sua mão.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 md:py-4 md:text-lg md:px-8 gap-3 transition-all"
                  >
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-37.5 37.5 37.5 37.5 58.9-34.1c13.7-7.5 13.7-20.5 0-28zm-80.1 84.5L104.6 499l220.7-220.7 66.8 31.6z"/>
                    </svg>
                    <div className="flex flex-col items-start leading-none">
                      <span className="text-[10px] uppercase tracking-wide">Disponível no</span>
                      <span className="text-lg font-bold">Google Play</span>
                    </div>
                  </a>
                </div>
                <div className="mt-3 sm:mt-0">
                  <a
                    href="#como-funciona"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand bg-brand-50 hover:bg-brand-100 md:py-4 md:text-lg md:px-10 h-full"
                  >
                    Saiba Mais
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 h-56 sm:h-72 md:h-96 lg:h-full relative">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
          alt="Vegetais frescos no mercado"
        />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <img src="images/hero-light.png" alt="hero image" className="mx-auto max-w-full max-h-full object-contain drop-shadow-2xl" />
        </div>
      </div>
    </div>
  );
}
