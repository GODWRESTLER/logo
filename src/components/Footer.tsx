import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const footerLinks = {
    'Hard Money Loans': [
      'Bridge Loans - Cashouts',
      'Joint Venture - Rehab',
      'Hard Money Loans',
      'Mezzanine Finance',
      'Bank Workouts'
    ],
    'Resources': [
      'Loan Calculator',
      'Market Reports',
      'Blog',
      'FAQ',
      'Case Studies'
    ],
    'Company': [
      'About Us',
      'Our Process',
      'Lender Network',
      'Success Stories',
      'Contact'
    ]
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo className="mb-6" />
            <p className="text-slate-400 mb-6 leading-relaxed">
              Submit your commercial property and get matched with qualified hard money lenders 
              from our specialized network. We connect commercial real estate investors 
              with the right bridge financing in 24-48 hours.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-slate-400">
                <Phone size={16} />
                <span>(555) 123-LOAN</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Mail size={16} />
                <span>loans@anchorcreloans.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <MapPin size={16} />
                <span>New York, NY</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {[
                { 
                  icon: () => (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ), 
                  label: 'LinkedIn',
                  href: 'https://linkedin.com/company/anchor-commercial-capital'
                },
                { 
                  icon: () => (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  ), 
                  label: 'X (Twitter)',
                  href: 'https://x.com/anchorcommercial'
                }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Anchor Commercial Capital. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-slate-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                TCPA Compliance
              </a>
            </div>
          </div>

          <div className="mt-6 text-xs text-slate-500 text-center">
            <p className="mb-2">
              <strong>Important:</strong> Anchor Commercial Capital is a real estate investment financing broker. 
              We connect borrowers with qualified hard money lenders and earn origination fees (typically 3% of loan value) upon successful closing.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;