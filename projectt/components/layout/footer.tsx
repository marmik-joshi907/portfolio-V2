'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: personalInfo.social.github, icon: Github, label: 'GitHub' },
  { href: personalInfo.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: personalInfo.social.twitter, icon: Twitter, label: 'Twitter' },
  { href: personalInfo.social.email, icon: Mail, label: 'Email' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-charcoal dark:bg-black text-cloud-gray border-t border-stone/20">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-electric-violet/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <h3 className="text-2xl font-bold">
                Marmik<span className="text-electric-violet">.</span>
              </h3>
            </Link>
            <p className="text-stone text-sm max-w-xs">
              Software Engineer passionate about building innovative solutions and contributing to impactful projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cloud-gray">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone hover:text-electric-violet transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cloud-gray">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-stone/10 rounded-lg flex items-center justify-center text-stone hover:text-electric-violet hover:bg-electric-violet/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="mt-4 text-stone text-sm">
              {personalInfo.email}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-stone text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Marmik Joshi. Built with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-stone hover:text-electric-violet transition-colors text-sm"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
