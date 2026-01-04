'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { CustomCursor } from '@/components/custom-cursor';
import { BackgroundCode } from '@/components/background-code';
import { FloatingParticles } from '@/components/floating-particles';
import { Badge } from '@/components/ui/badge';
import { experience } from '@/lib/data';

export function ExperienceClient() {
  return (
    <div className="min-h-screen bg-cloud-gray dark:bg-charcoal text-charcoal dark:text-cloud-gray">
      <CustomCursor />
      <BackgroundCode />
      <FloatingParticles />
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Work <span className="text-shimmer">Experience</span>
            </h1>
            <p className="text-stone text-lg max-w-2xl mx-auto">
              My professional journey and the roles that have shaped my career as a software engineer.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-electric-violet via-cyber-cyan to-electric-violet" />

            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-electric-violet rounded-full border-4 border-cloud-gray dark:border-charcoal shadow-lg shadow-electric-violet/30" />

                {/* Card */}
                <div
                  className={`ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="bg-white dark:bg-charcoal/50 rounded-2xl p-6 sm:p-8 border border-stone/20 shadow-lg hover:border-electric-violet/50 transition-all group">
                    {/* Header */}
                    <div className={`${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <Badge className="bg-electric-violet/10 text-electric-violet border-0 mb-3">
                        {exp.type}
                      </Badge>
                      <h3 className="text-xl sm:text-2xl font-bold text-charcoal dark:text-cloud-gray group-hover:text-electric-violet transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 text-electric-violet font-medium flex-wrap justify-start md:justify-end">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    {/* Meta */}
                    <div
                      className={`flex flex-wrap gap-4 mt-4 text-sm text-stone ${
                        index % 2 === 0 ? 'md:justify-end' : 'justify-start'
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className={`mt-6 space-y-3 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                      {exp.responsibilities.map((resp, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-start gap-3 text-stone"
                        >
                          <CheckCircle2 className="w-5 h-5 text-cyber-cyan flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-stone mb-6">Interested in working together?</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-electric-violet to-cyber-cyan text-white rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg shadow-electric-violet/25"
            >
              <Briefcase className="w-5 h-5" />
              Get in Touch
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
