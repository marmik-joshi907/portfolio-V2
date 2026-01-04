'use client';

import { motion } from 'framer-motion';
import { Award, Trophy, GraduationCap, Rocket, Medal, Star, ExternalLink } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { CustomCursor } from '@/components/custom-cursor';
import { BackgroundCode } from '@/components/background-code';
import { FloatingParticles } from '@/components/floating-particles';

// Achievements data
const certifications = [
  {
    title: 'Java Programming Certification',
    issuer: 'Oracle',
    date: '2024',
    icon: Award,
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'Coursera',
    date: '2024',
    icon: GraduationCap,
  },
  {
    title: 'Data Structures & Algorithms',
    issuer: 'GeeksforGeeks',
    date: '2024',
    icon: Medal,
  },
];

const hackathons = [
  {
    title: 'Smart India Hackathon',
    position: 'Participant',
    year: '2024',
    description: 'Developed innovative solution for government sector challenges',
    icon: Rocket,
  },
  {
    title: 'College Tech Fest Hackathon',
    position: 'Finalist',
    year: '2024',
    description: 'Built smart maintenance management system',
    icon: Trophy,
  },
];

const awards = [
  {
    title: 'Academic Excellence Award',
    description: 'Top 1% in Computer Engineering Department with 9.0 SPI',
    icon: Star,
  },
  {
    title: 'ISTE Management Committee Member',
    description: 'Selected for leadership role in technical education society',
    icon: Award,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export function AchievementsClient() {
  return (
    <div className="min-h-screen bg-cloud-gray dark:bg-charcoal text-charcoal dark:text-cloud-gray">
      <CustomCursor />
      <BackgroundCode />
      <FloatingParticles />
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="text-shimmer">Achievements</span>
            </h1>
            <p className="text-stone text-lg max-w-2xl mx-auto">
              Certifications, hackathons, and recognition that mark my journey as a developer.
            </p>
          </motion.div>

          {/* Certifications */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <GraduationCap className="w-8 h-8 text-electric-violet" />
              <h2 className="text-2xl sm:text-3xl font-bold">Certifications</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white dark:bg-charcoal/50 rounded-2xl p-6 border border-stone/20 hover:border-electric-violet/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-electric-violet/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-electric-violet/20 transition-colors">
                    <cert.icon className="w-6 h-6 text-electric-violet" />
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-charcoal dark:text-cloud-gray group-hover:text-electric-violet transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-stone text-sm">{cert.issuer}</p>
                  <p className="text-stone/60 text-sm mt-2">{cert.date}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Hackathons */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <Rocket className="w-8 h-8 text-cyber-cyan" />
              <h2 className="text-2xl sm:text-3xl font-bold">Hackathons</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {hackathons.map((hack, index) => (
                <motion.div
                  key={hack.title}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white dark:bg-charcoal/50 rounded-2xl p-6 border border-stone/20 hover:border-cyber-cyan/50 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-cyber-cyan/10 rounded-xl flex items-center justify-center group-hover:bg-cyber-cyan/20 transition-colors">
                      <hack.icon className="w-6 h-6 text-cyber-cyan" />
                    </div>
                    <span className="px-3 py-1 bg-cyber-cyan/10 text-cyber-cyan rounded-full text-sm font-medium">
                      {hack.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-charcoal dark:text-cloud-gray group-hover:text-cyber-cyan transition-colors">
                    {hack.title}
                  </h3>
                  <p className="text-cyber-cyan font-medium text-sm mb-2">{hack.position}</p>
                  <p className="text-stone text-sm">{hack.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Awards & Recognition */}
          <section>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <Trophy className="w-8 h-8 text-yellow-500" />
              <h2 className="text-2xl sm:text-3xl font-bold">Awards & Recognition</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 transition-colors">
                    <award.icon className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-charcoal dark:text-cloud-gray group-hover:text-yellow-500 transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-stone text-sm">{award.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
