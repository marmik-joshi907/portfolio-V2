'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  highlight: string;
  onClick?: () => void;
  className?: string;
}

export const SectionHeading = ({ title, highlight, onClick, className }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`text-center mb-12 sm:mb-16 ${className || ''}`}
    >
      <h2 
        onClick={onClick}
        className={`text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal dark:text-cloud-gray mb-4 break-words ${onClick ? 'cursor-pointer hover:scale-105 transition-transform duration-300' : ''}`}
      >
        {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-violet to-cyber-cyan">{highlight}</span>
      </h2>
      <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-electric-violet to-cyber-cyan mx-auto rounded-full" />
    </motion.div>
  );
};
