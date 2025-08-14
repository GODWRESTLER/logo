import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`${sizeClasses[size]} bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden`}
      >
        {/* Simple "A" Letter Logo */}
        <div className="text-white font-bold text-lg leading-none">
          A
        </div>
        
        {/* Subtle accent dot */}
        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-60" />
      </motion.div>
      
      <span className={`font-bold text-white ${textSizeClasses[size]} tracking-tight`}>
        Anchor Commercial Capital
      </span>
    </div>
  );
};

export default Logo;