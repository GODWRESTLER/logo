import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';

const Hero = () => {
  const scrollToForm = () => {
    const element = document.getElementById('qualify');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProcess = () => {
    const element = document.getElementById('process');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-400/30">
              Hard Money Loan Specialist
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Hard Money Loans{' '}
            <span className="text-blue-400">7-10 Day Closings</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 mb-8 leading-relaxed max-w-4xl mx-auto"
          >
            Commercial bridge financing for income-producing properties. Specializing in New York commercial real estate 
            with nationwide coverage. Interest-only loans up to $100M with no prepayment penalties.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-12"
          >
            {[
              'Interest-Only Bridge Loans',
              'No Prepayment Penalties', 
              'Fast 7-10 Day Closings'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-slate-300">
                <CheckCircle className="text-blue-400" size={18} />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.button
              onClick={scrollToForm}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center space-x-2 text-lg shadow-xl"
            >
              <span>Get Hard Money Loan Quote</span>
              <ArrowRight size={20} />
            </motion.button>
            
            <motion.button
              onClick={scrollToProcess}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors shadow-xl bg-white/5"
            >
              Loan Process
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">7-10 Days</div>
                <div className="text-blue-200">Fast Closing</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">65% LTV</div>
                <div className="text-blue-200">Income Properties</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">3 Years</div>
                <div className="text-blue-200">Max Term</div>
              </div>
            </div>
            <div className="text-center mt-6 text-slate-300">
              Trusted by commercial real estate investors nationwide
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;