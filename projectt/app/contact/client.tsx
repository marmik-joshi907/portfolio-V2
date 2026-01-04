'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, Send, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { CustomCursor } from '@/components/custom-cursor';
import { BackgroundCode } from '@/components/background-code';
import { FloatingParticles } from '@/components/floating-particles';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { personalInfo } from '@/lib/data';
import { useForm } from '@formspree/react';

const socialLinks = [
  { href: personalInfo.social.github, icon: Github, label: 'GitHub', color: 'hover:text-[#333] dark:hover:text-white' },
  { href: personalInfo.social.linkedin, icon: Linkedin, label: 'LinkedIn', color: 'hover:text-[#0077B5]' },
  { href: personalInfo.social.twitter, icon: Twitter, label: 'Twitter', color: 'hover:text-[#1DA1F2]' },
  { href: personalInfo.social.email, icon: Mail, label: 'Email', color: 'hover:text-electric-violet' },
];

export function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [fsState, fsHandleSubmit] = useForm('mdklpplk');

  return (
    <div className="min-h-screen bg-cloud-gray dark:bg-charcoal text-charcoal dark:text-cloud-gray">
      <CustomCursor />
      <BackgroundCode />
      <FloatingParticles />
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Get in <span className="text-shimmer">Touch</span>
            </h1>
            <p className="text-stone text-lg max-w-2xl mx-auto">
              Have a project in mind? Want to collaborate? Or just want to say hello? I&apos;d love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {fsState.succeeded ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white dark:bg-charcoal/50 rounded-2xl p-8 border border-stone/20 text-center h-full flex flex-col items-center justify-center"
                >
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-stone mb-6">
                    Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                  <Button
                    onClick={() => window.location.reload()}
                    variant="outline"
                    className="border-electric-violet text-electric-violet hover:bg-electric-violet hover:text-white"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form
                  onSubmit={fsHandleSubmit}
                  className="bg-white dark:bg-charcoal/50 rounded-2xl p-8 border border-stone/20 space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="bg-stone/5 border-stone/20 focus:border-electric-violet"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className="bg-stone/5 border-stone/20 focus:border-electric-violet"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your message..."
                      rows={5}
                      required
                      className="bg-stone/5 border-stone/20 focus:border-electric-violet resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={fsState.submitting}
                    className="w-full bg-gradient-to-r from-electric-violet to-cyber-cyan text-white hover:opacity-90 py-6"
                  >
                    {fsState.submitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* Info Cards */}
              <div className="bg-white dark:bg-charcoal/50 rounded-2xl p-6 border border-stone/20">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-stone">
                    <Mail className="w-5 h-5 text-electric-violet" />
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-electric-violet transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-stone">
                    <MapPin className="w-5 h-5 text-electric-violet" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone">
                    <Clock className="w-5 h-5 text-electric-violet" />
                    <span>Usually responds within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white dark:bg-charcoal/50 rounded-2xl p-6 border border-stone/20">
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-3 p-4 rounded-xl bg-stone/5 border border-stone/10 text-stone transition-colors ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="font-medium">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-br from-electric-violet/10 to-cyber-cyan/10 rounded-2xl p-6 border border-electric-violet/20">
                <h3 className="text-xl font-bold mb-2">Currently Available</h3>
                <p className="text-stone text-sm">
                  I&apos;m open to new opportunities including internships, freelance projects, and full-time positions.
                  Let&apos;s build something amazing together!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
