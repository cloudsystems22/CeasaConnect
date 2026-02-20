import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [selectedPlan, setSelectedPlan] = useState('');

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App font-sans text-gray-900 bg-gray-50 min-h-screen">
      <Navbar />
      {/* Adicionado pt-20 para compensar a navbar fixa */}
      <div className="pt-20">
        <Hero />
        <div className="space-y-0">
          <Features />
          <Testimonials />
          <Pricing onPlanSelect={handlePlanSelect} />
          <Contact selectedPlan={selectedPlan} />
          <Footer />
        </div>
        <BackToTop />
      </div>
    </div>
  );
}

export default App
