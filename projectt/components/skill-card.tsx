'use client';

import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  level: number;
  category: string;
  index: number;
}

export function SkillCard({ name, level, category, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-electric-violet to-cyber-cyan rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10" />
      
      <div className="bg-white/80 dark:bg-charcoal/90 backdrop-blur-md border border-stone/20 dark:border-stone/10 rounded-xl p-5 h-full flex flex-col justify-between transition-transform duration-300 group-hover:-translate-y-1">
        <div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-lg text-charcoal dark:text-cloud-gray group-hover:text-electric-violet transition-colors">
              {name}
            </h3>
            <span className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold rounded bg-stone/10 dark:bg-white/5 text-stone">
              {category}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono text-stone group-hover:text-cyber-cyan transition-colors">
            <span>Proficiency</span>
            <span>{level}%</span>
          </div>
          <div className="h-1.5 w-full bg-stone/20 dark:bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-electric-violet to-cyber-cyan"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}