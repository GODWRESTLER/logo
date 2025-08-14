import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Building2 } from 'lucide-react';

const testimonials = [
  {
    name: 'Robert Chen',
    role: 'Real Estate Investor',
    company: 'Chen Commercial Group',
    rating: 5,
    text: 'Needed bridge financing for a multifamily property in Brooklyn. Anchor Commercial Capital connected me with three hard money lenders within 48 hours. Closed in 8 days with 65% LTV financing.',
    avatar: '👩‍💼',
    loanAmount: '$2.8M Multifamily'
  },
  {
    name: 'Jennifer Rodriguez',
    role: 'Commercial Investor',
    company: 'Rodriguez Capital',
    rating: 5,
    text: 'Working on multiple commercial acquisitions simultaneously. Their network included specialty lenders I never would have found on my own. The automated matching saved me weeks of research.',
    avatar: '👩‍💼',
    loanAmount: '$8.5M Portfolio'
  },
  {
    name: 'Michael Thompson',
    role: 'Commercial Developer',
    company: 'Thompson Development',
    rating: 5,
    text: 'Developing mixed-use properties across three markets. Anchor Commercial Capital\'s network includes local hard money lenders in each area. Having regional relationships has been a game-changer.',
    avatar: '👨‍💻',
    loanAmount: '$15M Development'
  },
  {
    name: 'Amanda Davis',
    role: 'Commercial Investor',
    company: 'Davis Properties',
    rating: 5,
    text: 'Commercial properties require specialized lenders who understand income-producing assets. Anchor Commercial Capital connected me with lenders who actually compete for our business. Better terms, faster closings.',
    avatar: '👩‍💻',
    loanAmount: '$4.2M Office Building'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success Stories from{' '}
            <span className="text-blue-400">Commercial Investors</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Commercial real estate investors share how our lender network 
            and automated matching helped them secure better hard money financing faster.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-blue-400 fill-current" />
                ))}
              </div>

              <Quote className="text-slate-600 mb-4" size={24} />

              <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="text-white font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-slate-500 text-xs">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-blue-400 font-semibold text-sm">
                    {testimonial.loanAmount}
                  </div>
                  <div className="text-slate-500 text-xs">
                    Loan Amount
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-6 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <Building2 className="text-blue-400" size={20} />
              <span className="text-white font-semibold">$500M+ Facilitated</span>
            </div>
            <div className="w-px h-6 bg-slate-600" />
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-blue-400 fill-current" />
                ))}
              </div>
              <span className="text-white font-semibold">4.9/5 Rating</span>
            </div>
            <div className="w-px h-6 bg-slate-600" />
            <div className="text-slate-400">
              Hard Money Specialists
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;