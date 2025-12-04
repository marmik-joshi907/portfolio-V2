'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function DownloadResume() {
  const openResume = () => {
    window.open('/final_Resume[1].pdf', '_blank');
  };

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      <Button
        onClick={openResume}
        className="bg-gradient-to-r from-electric-violet to-cyber-cyan hover:opacity-90 text-cloud-gray px-8 py-3 text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <Download className="mr-2 h-4 w-4" />
        Download Resume
      </Button>
    </motion.div>
  );
}