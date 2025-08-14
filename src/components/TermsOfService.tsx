import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
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
              <FileText className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900">Terms of Service</h1>
              <p className="text-slate-600">Last updated: January 2024</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Agreement to Terms</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  By accessing and using Anchor Commercial Capital's services, you agree to be bound by these 
                  Terms of Service and all applicable laws and regulations.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Services</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  Anchor Commercial Capital is a commercial real estate financing broker that connects 
                  borrowers with qualified lenders in our network. We do not provide loans directly.
                </p>
                <p>Our services include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Hard money loan lender matching and introductions</li>
                  <li>Commercial real estate financing consultation</li>
                  <li>Deal structuring and negotiation support</li>
                  <li>Market analysis and financing options review</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Broker Compensation</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  As a commercial financing broker, we earn origination fees from lenders upon successful 
                  loan closing. These fees typically range from 1-2% of the loan amount and are paid by 
                  the lender, not the borrower.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">User Responsibilities</h2>
              <div className="space-y-4 text-slate-700">
                <p>You agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Respond promptly to lender requests</li>
                  <li>Work in good faith throughout the financing process</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not use our services for any unlawful purpose</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">No Guarantee of Financing</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  While we work diligently to match you with qualified lenders, we cannot guarantee 
                  loan approval or specific terms. Final lending decisions are made by individual lenders 
                  based on their underwriting criteria.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  Anchor Commercial Capital's liability is limited to the extent permitted by law. 
                  We are not responsible for lender decisions, loan terms, or any damages arising 
                  from the use of our services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Termination</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  Either party may terminate this agreement at any time. Upon termination, your 
                  access to our services will cease, but these terms will continue to apply to 
                  any ongoing transactions.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  For questions about these Terms of Service, contact us at:
                </p>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p><strong>Email:</strong> legal@anchorcommercialcapital.com</p>
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

export default TermsOfService;