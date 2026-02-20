import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    id: 1,
    content: "O CeasaConnect revolucionou a forma como gerencio meu box. As cotações automáticas me economizam horas todos os dias!",
    author: "Carlos Silva",
    role: "Distribuidor de Frutas",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    content: "A integração com o WhatsApp é fantástica. Meus clientes adoram a agilidade nas respostas e eu vendo muito mais.",
    author: "Ana Souza",
    role: "Gerente Comercial",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    content: "O controle de reposição evitou que eu perdesse vendas importantes. O sistema se pagou no primeiro mês.",
    author: "Roberto Mendes",
    role: "Atacadista de Legumes",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-brand-50 overflow-hidden">
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
          O que nossos parceiros dizem
        </h2>
        
        <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 text-brand-200 opacity-50">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-brand-100">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].author} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 italic mb-6">
              "{testimonials[currentIndex].content}"
            </p>
            
            <div>
              <h4 className="text-lg font-bold text-gray-900">{testimonials[currentIndex].author}</h4>
              <p className="text-brand-600">{testimonials[currentIndex].role}</p>
            </div>
          </div>

          {/* Controls */}
          <button 
            onClick={prev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-100 hover:bg-brand hover:text-white transition-colors focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button 
            onClick={next}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-100 hover:bg-brand hover:text-white transition-colors focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-brand' : 'bg-gray-300 hover:bg-brand-300'
              }`}
            />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
