import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <Shield className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900">Privacy Policy</h1>
              <p className="text-slate-600">Last updated: January 2024</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  We collect information you provide directly to us, such as when you fill out our bridge loan qualification form, 
                  contact us, or use our services. This may include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal information (name, email address, phone number)</li>
                  <li>Financial information (loan amount, credit score range, property details)</li>
                  <li>Business information (company name, role, property type)</li>
                  <li>Communication preferences and consent for marketing</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
              <div className="space-y-4 text-slate-700">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Match you with qualified hard money lenders in our network</li>
                  <li>Provide hard money loan consultation and support services</li>
                  <li>Communicate with you about your hard money loan inquiry</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Improve our services and website functionality</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Information Sharing</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  We may share your information with qualified bridge lenders in our network to facilitate 
                  your financing request. We do not sell your personal information to third parties.
                </p>
                <p>We may also share information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With service providers who assist in our operations</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transaction</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights and Choices</h2>
              <div className="space-y-4 text-slate-700">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access, update, or delete your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request information about how we use your data</li>
                  <li>File a complaint with relevant authorities</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p><strong>Email:</strong> privacy@anchorcommercialcapital.com</p>
                  <p><strong>Phone:</strong> (555) 123-DEAL</p>
                  <p><strong>Address:</strong> New York, NY</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;