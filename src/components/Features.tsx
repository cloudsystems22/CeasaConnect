import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function Features() {
  return (
    <section id="como-funciona" className="py-16 bg-white">
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-brand font-semibold tracking-wide uppercase">Recursos</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold text-gray-900 sm:text-4xl">
            Potencialize seu Box
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Não perca tempo digitando pedidos. Nossa IA conecta você aos seus parceiros e clientes instantaneamente.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div>
              <div className="flow-root bg-gray-50 rounded-lg px-6 py-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-default">
                <div>
                  <div className="mb-4 w-14 h-14 flex items-center justify-center rounded-xl bg-brand-50 text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 tracking-tight">Cotação Automática</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Envie e receba preços do dia para centenas de contatos com um clique.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div>
              <div className="flow-root bg-gray-50 rounded-lg px-6 py-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-default">
                <div>
                  <div className="mb-4 w-14 h-14 flex items-center justify-center rounded-xl bg-brand-50 text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 tracking-tight">Venda 24/7</h3>
                  <p className="mt-5 text-base text-gray-500">
                    O sistema capta pedidos no WhatsApp e organiza tudo para você despachar. Gerencie grupos de clientes e impulsione vendas com promoções enviadas pelos vendedores.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div>
              <div className="flow-root bg-gray-50 rounded-lg px-6 py-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-default">
                <div>
                  <div className="mb-4 w-14 h-14 flex items-center justify-center rounded-xl bg-brand-50 text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 tracking-tight">Gerencie sua Reposição</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Gerencie as relações de cotações que geram pedidos de compra para sua reposição.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <img 
            src="images/undraw_projections_fhch.svg" 
            alt="Fluxo de Vendas Simplificado" 
            className="mx-auto max-h-64 w-auto"
          />
        </div>
      </ScrollReveal>
    </section>
  );
}
