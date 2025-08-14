import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowLeft } from 'lucide-react';

const TCPACompliance = () => {
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
              <Phone className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900">TCPA Compliance</h1>
              <p className="text-slate-600">Telephone Consumer Protection Act Notice</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Consent to Contact</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  By providing your contact information and submitting forms on this website, you expressly 
                  consent to receive calls, emails, and text messages from Anchor Commercial Capital regarding 
                  your hard money loan inquiry and related services.
                </p>
                <p>
                  This consent includes contact via automated telephone dialing systems, artificial or 
                  prerecorded voice messages, and text messages to the telephone number you provided.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">SMS/Text Message Consent</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  SMS consent is optional and controlled by the checkbox on our forms. If you opt in to 
                  receive text messages:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You may receive updates about your bridge loan inquiry</li>
                  <li>Message and data rates may apply</li>
                  <li>Message frequency varies based on your inquiry</li>
                  <li>You can opt out at any time by replying STOP</li>
                  <li>Reply HELP for assistance</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Types of Communications</h2>
              <div className="space-y-4 text-slate-700">
                <p>You may receive communications regarding:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your hard money loan application status</li>
                  <li>Lender matching and introductions</li>
                  <li>Market updates and financing opportunities</li>
                  <li>Educational content about hard money loans</li>
                  <li>Service updates and improvements</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Opt-Out Options</h2>
              <div className="space-y-4 text-slate-700">
                <p>You can opt out of communications at any time:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Phone calls:</strong> Request to be placed on our Do Not Call list</li>
                  <li><strong>Emails:</strong> Click unsubscribe links or contact us directly</li>
                  <li><strong>Text messages:</strong> Reply STOP to any text message</li>
                  <li><strong>All communications:</strong> Contact us using the information below</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">No Purchase Required</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  Your consent to receive communications is not required as a condition of purchasing 
                  any goods or services from Anchor Commercial Capital.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Carrier Information</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  Text messages are supported by major carriers including Verizon, AT&T, T-Mobile, 
                  Sprint, and others. Message and data rates may apply depending on your carrier plan.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  For questions about this TCPA notice or to opt out of communications:
                </p>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p><strong>Email:</strong> compliance@anchorcommercialcapital.com</p>
                  <p><strong>Phone:</strong> (555) 123-DEAL</p>
                  <p><strong>Address:</strong> New York, NY</p>
                  <p><strong>Text STOP:</strong> Reply STOP to any text message</p>
                  <p><strong>Text HELP:</strong> Reply HELP for assistance</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Updates to This Notice</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  We may update this TCPA compliance notice from time to time. Any changes will be 
                  posted on this page with an updated effective date.
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TCPACompliance;