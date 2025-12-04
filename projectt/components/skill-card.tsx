'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

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
      className="group"
    >
      <div className="bg-stone/10 dark:bg-charcoal/50 backdrop-blur-sm border border-stone/30 rounded-lg p-4 hover:bg-stone/20 dark:hover:bg-charcoal/70 transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-charcoal dark:text-cloud-gray">{name}</h3>
          <Badge variant="secondary" className="text-xs bg-electric-violet/10 text-electric-violet border-electric-violet/30">
            {category}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-stone">Proficiency</span>
            <span className="text-electric-violet font-mono">{level}%</span>
          </div>
          <div className="w-full bg-stone/30 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-electric-violet to-cyber-cyan rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}