import React from 'react';
import { motion } from 'framer-motion';
import { Building, Users, Shield, TrendingUp } from 'lucide-react';

const lenderTypes = [
  {
    icon: Building,
    title: 'Hard Money Lenders',
    description: 'Direct access to hard money lenders specializing in income-producing properties',
    features: ['Asset-based lending', '7-10 day closings', 'Interest-only payments'],
    color: 'text-blue-500'
  },
  {
    icon: Users,
    title: 'Bridge Lenders',
    description: 'Private investors and funds focused on commercial bridge financing',
    features: ['1-3 year terms', 'No prepayment penalties', 'Up to $100M'],
    color: 'text-green-500'
  },
  {
    icon: Shield,
    title: 'Commercial Specialists',
    description: 'Specialized lenders focused exclusively on income-producing commercial properties',
    features: ['NY market expertise', 'Multifamily focus', 'Mixed-use properties'],
    color: 'text-purple-500'
  },
  {
    icon: TrendingUp,
    title: 'Mezzanine Lenders',
    description: 'Mezzanine finance and joint venture capital for development projects',
    features: ['Development finance', 'Joint ventures', 'Bank workouts'],
    color: 'text-orange-500'
  }
];

const LenderNetwork = () => {
  const scrollToForm = () => {
    const element = document.getElementById('qualify');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="lenders" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Specialized{' '}
            <span className="text-blue-500">Lender Network</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Access to 100+ active lenders specializing in hard money and commercial bridge financing. 
            From bridge loans to mezzanine capital, we connect you with the right funding source.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {lenderTypes.map((lender, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-2xl mb-6 group-hover:bg-slate-200 transition-colors`}
              >
                <lender.icon className={`${lender.color}`} size={32} />
              </motion.div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {lender.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {lender.description}
              </p>

              <ul className="space-y-2">
                {lender.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-3xl p-12 shadow-xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Our Hard Money Network Advantage
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our years of relationship building have created a specialized network 
              that gives you access to more hard money financing options than going direct.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '100+', label: 'Hard Money Lenders' },
              { number: '65%', label: 'Max LTV Available' },
              { number: '48hr', label: 'Avg Response Time' },
              { number: '3yr', label: 'Max Loan Terms' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.button
              onClick={scrollToForm}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
            >
              Connect with Hard Money Lenders
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LenderNetwork;