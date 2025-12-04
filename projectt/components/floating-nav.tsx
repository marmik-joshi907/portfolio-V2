'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code2, GraduationCap, FolderOpen, Mail } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'experience', label: 'Experience', icon: GraduationCap },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-stone/20 dark:bg-charcoal/80 backdrop-blur-md border border-stone/30 rounded-full px-6 py-3 shadow-2xl">
            <div className="flex items-center space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative p-2 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'text-electric-violet bg-electric-violet/20' 
                        : 'text-stone hover:text-electric-violet hover:bg-stone/10'
                    }`}
                    title={item.label}
                  >
                    <Icon size={18} />
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-electric-violet/20 rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}