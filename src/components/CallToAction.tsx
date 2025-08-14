import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, CheckCircle, Phone } from 'lucide-react';

const CallToAction = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    loanAmount: '',
    smsOptIn: false
  });

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Google Ads Conversion Tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
        'value': 1.0,
        'currency': 'USD'
      });
    }
    
    // Analytics Event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'form_submit', {
        'event_category': 'Lead Generation',
        'event_label': 'CTA Form',
        'value': formData.loanAmount
      });
    }
    
    // Here you would integrate with your CRM/lead management system
    console.log('CTA Form submitted:', formData);
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-12 shadow-xl"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-500" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Property Submitted Successfully!
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Thank you! We'll analyze your financing needs and connect you with qualified lenders within 24-48 hours.
            </p>
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-900 mb-4">What happens next:</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">AI analysis of your financing requirements (immediate)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Lender matching and outreach (within 24 hours)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Personal follow-up call to discuss options (24-48 hours)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Submit Your{' '}
            <span className="text-blue-300">Commercial Property</span>?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Submit your commercial property and get matched with qualified hard money lenders 
            in 24-48 hours through Anchor Commercial Capital's specialized network.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {[
                {
                  icon: Clock,
                  title: 'Fast 7-10 Day Closings',
                  description: 'Skip the slow bank process - our lenders close hard money loans quickly'
                },
                {
                  icon: CheckCircle,
                  title: 'Interest-Only Payments',
                  description: 'No prepayment penalties and flexible interest-only payment options'
                },
                {
                  icon: Phone,
                  title: 'Commercial-Friendly Lenders',
                  description: 'Access lenders who understand income-producing properties and say yes to investors'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="text-blue-300" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-blue-100">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                What Our Investors Say:
              </h3>
              <p className="text-blue-100 italic">
                "Their network included hard money lenders I never would have found on my own. 
                The automated matching saved me weeks of research and got me 65% LTV on my multifamily."
              </p>
              <div className="text-blue-300 text-sm mt-2">
                - Robert Chen, Commercial Investor
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - CTA Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Submit Your Commercial Property
              </h3>
              <p className="text-slate-600">
                Get matched with qualified hard money lenders in 24-48 hours
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">First Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">Loan Amount Needed</label>
                <select 
                  value={formData.loanAmount}
                  onChange={(e) => handleInputChange('loanAmount', e.target.value)}
                  className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select amount</option>
                  <option value="100k-250k">$100K - $250K</option>
                  <option value="250k-500k">$250K - $500K</option>
                  <option value="500k-1m">$500K - $1M</option>
                  <option value="1m-3m">$1M - $3M</option>
                  <option value="3m+">$3M+</option>
                </select>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl">
                <input
                  type="checkbox"
                  id="smsOptInCTA"
                  checked={formData.smsOptIn}
                  onChange={(e) => handleInputChange('smsOptIn', e.target.checked)}
                  className="mt-1 w-5 h-5 text-blue-500 border-2 border-slate-300 rounded focus:ring-blue-500 flex-shrink-0"
                />
                <label htmlFor="smsOptInCTA" className="text-slate-700 text-sm leading-relaxed cursor-pointer">
                  I consent to receive SMS messages and robo calls from Anchor Commercial Capital 
                  regarding my hard money loan inquiry. Message and data rates may apply. Reply STOP to opt out.
                </label>
              </div>

              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-500 text-white py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Submit My Project</span>
                <ArrowRight size={20} />
              </motion.button>

              <div className="text-xs text-slate-500 text-center">
                <p className="mb-2">
                  <strong>TCPA Compliance Notice:</strong> By providing your contact information and clicking "Submit My Project," 
                  you consent to receive calls and emails from Anchor Commercial Capital regarding your hard money loan inquiry. 
                </p>
                <p>
                  You can opt out at any time by unsubscribing from emails. SMS consent is optional and controlled by the checkbox above.
                </p>
              </div>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">7-10 Days</div>
              <div className="text-blue-200 text-sm">Fast Closing</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">65% LTV</div>
              <div className="text-blue-200 text-sm">Income Properties</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">3 Years</div>
              <div className="text-blue-200 text-sm">Max Terms</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;