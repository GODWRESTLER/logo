import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import USPSection from './components/USPSection';
import QualificationForm from './components/QualificationForm';
import ProcessSection from './components/ProcessSection';
import LenderNetwork from './components/LenderNetwork';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <Hero />
      <USPSection />
      <QualificationForm />
      <ProcessSection />
      <LenderNetwork />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;