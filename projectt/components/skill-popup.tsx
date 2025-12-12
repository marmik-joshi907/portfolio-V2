'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, Code2 } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface SkillPopupProps {
  skill: {
    name: string;
    level: number;
    category: string;
    description?: string;
  } | null;
  onClose: () => void;
}

export function SkillPopup({ skill, onClose }: SkillPopupProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (skill) {
        // Focus the close button when popup opens
        setTimeout(() => buttonRef.current?.focus(), 100);

        // Add Escape key listener
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [skill, onClose]);

  if (!skill) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, borderRadius: "50%" }}
          animate={{ opacity: 1, scale: 1, borderRadius: "24px" }}
          exit={{ opacity: 0, scale: 0.8, borderRadius: "50%" }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="relative bg-white dark:bg-charcoal w-full max-w-md p-6 shadow-2xl shadow-electric-violet/20 border border-electric-violet/30 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-electric-violet/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyber-cyan/10 rounded-full blur-3xl pointer-events-none" />

            <button
              ref={buttonRef}
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-stone/10 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-electric-violet"
            >
              <X className="w-5 h-5 text-stone hover:text-charcoal dark:hover:text-white" />
            </button>

            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-electric-violet to-cyber-cyan p-0.5 shadow-lg shadow-electric-violet/20">
                <div className="w-full h-full bg-white dark:bg-charcoal rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold bg-gradient-to-br from-electric-violet to-cyber-cyan bg-clip-text text-transparent">
                    {skill.name.charAt(0)}
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-charcoal dark:text-cloud-gray mb-1">
                {skill.name}
              </h3>
              <span className="px-3 py-1 text-xs uppercase tracking-wider font-semibold rounded-full bg-stone/10 dark:bg-white/5 text-stone">
                {skill.category}
              </span>
            </div>

            <div className="space-y-6">
              <div className="bg-stone/5 dark:bg-white/5 p-4 rounded-xl border border-stone/10">
                <p className="text-sm leading-relaxed text-stone/90 dark:text-stone/80 text-center">
                  {skill.description || "Detailed proficiency and experience information not available."}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-stone">
                  <span className="flex items-center gap-1">
                    <Code2 className="w-3 h-3" /> Proficiency
                  </span>
                  <span className="text-electric-violet">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-stone/10 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-electric-violet to-cyber-cyan"
                  />
                </div>
              </div>
            </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
