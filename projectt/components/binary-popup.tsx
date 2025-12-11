'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BinaryPopupProps {
  onComplete: () => void;
}

export const BinaryPopup = ({ onComplete }: BinaryPopupProps) => {
  const text = "Thanks  —  your idea just entered the pipeline and it has reached my inbox let me grab some coffee and see your info Till then decode this 😁 01110100 01101000 01100001 01101110 01101011 00100000 01111001 01101111 01110101";
  const hint = "HInt : - It is in ASCII Binary🤫";
  
  const [displayedText, setDisplayedText] = useState('');
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    
    // Typewriter effect for main text
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setShowHint(true);
        
        // Wait 3 seconds after text completes before forcing close
        setTimeout(() => {
          onComplete();
        }, 3000);
      }
    }, 50); // Speed of typing

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-green-500 font-mono p-8 overflow-hidden"
    >
      <div className="max-w-3xl w-full relative z-10">
        <p className="text-xl md:text-2xl leading-relaxed break-words whitespace-pre-wrap">
          <span className="mr-2">{'>'}</span>
          {displayedText}
          <span className="animate-pulse">_</span>
        </p>
        
        {showHint && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-stone/50 text-sm md:text-base italic"
          >
            {hint}
          </motion.p>
        )}
      </div>
      
      {/* Background Matrix-like effect (optional subtle noise) */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-50"></div>
    </motion.div>
  );
};
