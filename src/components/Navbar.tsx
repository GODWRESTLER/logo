import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const scrollToForm = () => {
    const element = document.getElementById('qualify');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="relative z-10 bg-slate-900 px-6 py-4"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Logo />
        
        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('loans')} className="text-slate-300 hover:text-white transition-colors">Hard Money Loans</button>
          <button onClick={() => scrollToSection('process')} className="text-slate-300 hover:text-white transition-colors">Process</button>
          <button onClick={() => scrollToSection('lenders')} className="text-slate-300 hover:text-white transition-colors">Lenders</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-slate-300 hover:text-white transition-colors">Success Stories</button>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.button
            onClick={scrollToForm}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Get Hard Money Quote
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 pt-4 border-t border-white/20"
        >
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('loans')} className="text-slate-300 hover:text-white transition-colors text-left">Hard Money Loans</button>
            <button onClick={() => scrollToSection('process')} className="text-slate-300 hover:text-white transition-colors text-left">Process</button>
            <button onClick={() => scrollToSection('lenders')} className="text-slate-300 hover:text-white transition-colors text-left">Lenders</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-slate-300 hover:text-white transition-colors text-left">Success Stories</button>
            <button onClick={scrollToForm} className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-left">
              Get Hard Money Quote
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;