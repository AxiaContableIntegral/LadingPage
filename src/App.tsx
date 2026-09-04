import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Clients } from './components/Clients';
import { Services } from './components/Services';
import { BusinessStages } from './components/BusinessStages';
import { WhyUs } from './components/WhyUs';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen w-full bg-white font-sans text-slate-900">
      <Header />
      <main>
        <Hero />
        <Clients />
        <Services />
        <BusinessStages />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>);

}