// Aplicando as mudanças no arquivo Pricing.jsx
import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function Pricing({ onPlanSelect }) {
  return (
    <section id="precos" className="py-20 bg-white">
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Invista no Crescimento do seu Negócio
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Escolha o plano ideal para escalar suas vendas no CEASA.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          {/* Starter Plan */}
          <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">Starter</h3>
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">R$ 99</span>
                <span className="ml-1 text-xl font-semibold text-gray-500">/mês</span>
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex"><i className="fa-solid fa-check text-brand mt-1 mr-3"></i> Envio de cotação diária</li>
                <li className="flex"><i className="fa-solid fa-check text-brand mt-1 mr-3"></i> Registro de pedidos (planilha)</li>
                <li className="flex"><i className="fa-solid fa-check text-brand mt-1 mr-3"></i> Suporte por e-mail</li>
              </ul>
            </div>
            <button 
              onClick={() => onPlanSelect('Starter')}
              className="mt-8 block w-full bg-brand-50 border border-brand rounded-md py-3 text-sm font-semibold text-brand text-center hover:bg-brand hover:text-white transition-colors"
            >
              Começar Grátis
            </button>
          </div>

          {/* Pro Plan (Featured) */}
          <div className="relative p-8 bg-white border-2 border-brand rounded-2xl shadow-lg flex flex-col transform scale-105 z-10">
            <div className="absolute top-0 right-0 -mt-4 mr-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand text-white">
                Recomendado
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">Pro</h3>
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">R$ 199</span>
                <span className="ml-1 text-xl font-semibold text-gray-500">/mês</span>
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex"><i className="fa-solid fa-check text-brand mt-1 mr-3"></i> Tudo do Starter</li>
                <li className="flex"><i className="fa-solid fa-check text-brand mt-1 mr-3"></i> Acionamento automático de carregadores</li>
                <li className="flex"><i className="fa-solid fa-check text-brand mt-1 mr-3"></i> Relatórios diários via WhatsApp</li>
                <li className="flex"><i className="fa-solid fa-check text-brand mt-1 mr-3"></i> Suporte via WhatsApp</li>
              </ul>
            </div>
            <button 
              onClick={() => onPlanSelect('Pro')}
              className="mt-8 block w-full bg-brand border border-transparent rounded-md py-3 text-sm font-semibold text-white text-center hover:bg-brand-hover transition-colors"
            >
              Quero Vender Mais
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">Enterprise</h3>
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">R$ 349</span>
                <span className="ml-1 text-xl font-semibold text-gray-500">/mês</span>
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex"><i className="fa-solid fa-check text-brand mt-1 mr-3"></i> Integração com ERP (Omie, Bling)</li>
                <li className="flex"><i className="fa-solid fa-check text-brand mt-1 mr-3"></i> Dashboard web com KPIs</li>
                <li className="flex"><i className="fa-solid fa-check text-brand mt-1 mr-3"></i> Onboarding dedicado</li>
              </ul>
            </div>
            <button 
              onClick={() => onPlanSelect('Enterprise')}
              className="mt-8 block w-full bg-brand-50 border border-brand rounded-md py-3 text-sm font-semibold text-brand text-center hover:bg-brand hover:text-white transition-colors"
            >
              Falar com Consultor
            </button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
