// Aplicando as mudanças no arquivo Contact.jsx
import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

const FORM_KEY = 'ceasaconnect_contacts_v1';

export default function Contact({ selectedPlan }) {
  const [submissions, setSubmissions] = useState([]);
  const [showSaved, setShowSaved] = useState(false);
  const [formData, setFormData] = useState({
    nome: '', telefone: '', email: '', plano: 'Starter', mensagem: ''
  });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(FORM_KEY);
      if (raw) setSubmissions(JSON.parse(raw));
    } catch (e) { console.error("Erro ao carregar dados", e); }
  }, []);

  useEffect(() => {
    if (selectedPlan) {
      setFormData(prev => ({ ...prev, plano: selectedPlan }));
    }
  }, [selectedPlan]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nome) { alert('Informe seu nome'); return; }
    const newSubmission = { id: Date.now().toString(36), ...formData, data: new Date().toISOString() };
    const updatedSubmissions = [...submissions, newSubmission];
    setSubmissions(updatedSubmissions);
    localStorage.setItem(FORM_KEY, JSON.stringify(updatedSubmissions));
    alert('Contato salvo localmente. Em breve entraremos em contato.');
    handleReset();
  };

  const handleReset = () => {
    setFormData({ nome: '', telefone: '', email: '', plano: 'Starter', mensagem: '' });
  };

  return (
    <section id="contato" className="py-16 bg-gray-50">
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Lado Esquerdo - Informações */}
            <div className="p-10 bg-brand text-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">Solicite uma Demonstração</h2>
              <p className="text-brand-50 text-lg mb-8">
                Preencha o formulário e salvaremos sua mensagem localmente no navegador. Em demonstração, você pode visualizar as solicitações salvas.
              </p>
              
              <div className="mt-auto">
                <button 
                  className="text-sm font-medium text-white underline hover:text-brand-50 transition-colors" 
                  onClick={() => setShowSaved(!showSaved)}
                >
                  {showSaved ? 'Ocultar contatos salvos' : 'Ver contatos salvos'} 
                  <span className="ml-1 opacity-75">({submissions.length})</span>
                </button>
              </div>
            </div>

            {/* Lado Direito - Formulário */}
            <div className="p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
                  <input 
                    type="text" name="nome" id="nome" required 
                    placeholder="Seu nome"
                    value={formData.nome} onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand sm:text-sm p-3 border"
                  />
                </div>
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">Telefone</label>
                    <input 
                      type="text" name="telefone" id="telefone" 
                      placeholder="(00) 00000-0000"
                      value={formData.telefone} onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand sm:text-sm p-3 border"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                    <input 
                      type="email" name="email" id="email" 
                      placeholder="seu@email.com"
                      value={formData.email} onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand sm:text-sm p-3 border"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="plano" className="block text-sm font-medium text-gray-700">Plano de Interesse</label>
                  <select 
                    name="plano" id="plano" 
                    value={formData.plano} onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand sm:text-sm p-3 border"
                  >
                    <option value="Starter">Starter — R$99</option>
                    <option value="Pro">Pro — R$199</option>
                    <option value="Enterprise">Enterprise — R$349</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700">Mensagem</label>
                  <textarea 
                    name="mensagem" id="mensagem" rows="4" 
                    placeholder="Como podemos ajudar?"
                    value={formData.mensagem} onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand sm:text-sm p-3 border"
                  ></textarea>
                </div>

                <div className="flex items-center justify-end space-x-4">
                  <button 
                    type="button" 
                    onClick={handleReset}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
                  >
                    Limpar
                  </button>
                  <button 
                    type="submit" 
                    className="px-6 py-2 text-sm font-medium text-white bg-brand border border-transparent rounded-md shadow-sm hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
                  >
                    Agendar Demo
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Lista de Contatos Salvos (Condicional) */}
          {showSaved && (
            <div className="bg-gray-50 p-6 border-t border-gray-200">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Contatos salvos (local)</h4>
              <div className="space-y-4 max-h-60 overflow-y-auto">
                {submissions.length === 0 ? (
                  <p className="text-gray-500 italic">Nenhum contato salvo localmente.</p>
                ) : (
                  submissions.slice().reverse().map(s => (
                    <div key={s.id} className="bg-white p-4 rounded shadow-sm border border-gray-100">
                      <div className="flex justify-between">
                        <strong className="text-gray-900">{s.nome}</strong>
                        <span className="text-xs font-semibold px-2 py-1 bg-brand-50 text-brand rounded-full">{s.plano}</span>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{s.telefone} • {s.email}</div>
                      {s.mensagem && <div className="text-sm text-gray-700 mt-2 p-2 bg-gray-50 rounded">{s.mensagem}</div>}
                      <div className="text-xs text-gray-400 mt-2 text-right">{new Date(s.data).toLocaleString()}</div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
