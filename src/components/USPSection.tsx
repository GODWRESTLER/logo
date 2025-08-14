import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Shield, Clock } from 'lucide-react';

const uspFeatures = [
  {
    icon: Zap,
    title: 'Fast Hard Money Funding',
    description: 'Specialized in time-sensitive deals that must close within 7-20 days. Quick decisions for income-producing properties.',
    color: 'text-blue-500'
  },
  {
    icon: Users,
    title: 'Commercial Bridge Specialists',
    description: 'Expertise in bridge loans, joint ventures, mezzanine finance, and bank workouts for commercial income properties.',
    color: 'text-green-500'
  },
  {
    icon: Shield,
    title: 'NY Commercial Expertise',
    description: 'Special focus on New York commercial income-producing properties with nationwide lending capabilities.',
    color: 'text-purple-500'
  },
  {
    icon: Clock,
    title: '7-10 Day Closings',
    description: 'Bridge financing designed for speed. Interest-only loans with no prepayment penalties up to $100M.',
    color: 'text-orange-500'
  }
];

const USPSection = () => {
  return (
    <section id="loans" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why Choose Our{' '}
            <span className="text-blue-500">Hard Money Loans</span>?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Commercial bridge financing for income-producing properties. Fast approvals, interest-only payments, 
            and competitive rates from 8-12% for your commercial real estate needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {uspFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 mb-6 group-hover:bg-slate-200 transition-colors`}
              >
                <feature.icon className={`${feature.color}`} size={32} />
              </motion.div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="bg-red-100 border border-red-300 rounded-lg p-4 mb-6">
              <p className="text-red-700 font-semibold text-center">
                ⚠️ URGENT: Interest rates are rising - Submit your commercial property deal before costs increase further
              </p>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Why Choose Us Over Traditional Commercial Lenders?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                  Traditional Commercial Lenders
                </h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Slow approval process (60-120+ days)</li>
                  <li>• Complex underwriting and documentation</li>
                  <li>• Rigid lending criteria and prepayment penalties</li>
                  <li>• Limited understanding of time-sensitive deals</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                  Our Hard Money Loan Approach
                </h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Fast 7-10 day closing timeline</li>
                  <li>• Streamlined underwriting process</li>
                  <li>• Interest-only with no prepayment penalties</li>
                  <li>• Specialized in income-producing properties</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default USPSection;