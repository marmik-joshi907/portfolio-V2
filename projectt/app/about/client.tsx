'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Calendar, GraduationCap, Briefcase, Code2, Sparkles, Target, BookOpen } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { CustomCursor } from '@/components/custom-cursor';
import { BackgroundCode } from '@/components/background-code';
import { FloatingParticles } from '@/components/floating-particles';
import { personalInfo, skills, education, cseCoreKnowledge, learning } from '@/lib/data';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function AboutClient() {
  return (
    <div className="min-h-screen bg-cloud-gray dark:bg-charcoal text-charcoal dark:text-cloud-gray">
      <CustomCursor />
      <BackgroundCode />
      <FloatingParticles />
      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              About <span className="text-shimmer">Me</span>
            </h1>
            <p className="text-stone text-lg max-w-2xl mx-auto">
              Software Engineer passionate about building innovative solutions that make a difference.
            </p>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="relative">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-electric-violet/30 to-cyber-cyan/30 rounded-3xl blur-2xl" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white/10">
                  <Image
                    src="/hero-image.jpg"
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">{personalInfo.name}</h2>
                <p className="text-electric-violet font-medium text-lg">{personalInfo.title}</p>
              </div>

              <p className="text-stone leading-relaxed">
                I&apos;m a dedicated Computer Engineering student with an exceptional academic record,
                placing me in the top percentile of my cohort. My journey in tech started with a curiosity
                about how things work, and it has evolved into a passion for creating impactful solutions.
              </p>

              <p className="text-stone leading-relaxed">
                Currently focused on full-stack development, AI technologies, and system design. I believe
                in writing clean, maintainable code and building products that solve real-world problems.
              </p>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-stone">
                  <MapPin className="w-4 h-4 text-cyber-cyan" />
                  {personalInfo.location}
                </div>
                <div className="flex items-center gap-2 text-stone">
                  <Calendar className="w-4 h-4 text-cyber-cyan" />
                  Available for opportunities
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section className="bg-stone/5 dark:bg-black/20 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="mb-12">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-electric-violet" />
                Education
              </h2>
            </motion.div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-charcoal/50 rounded-2xl p-6 sm:p-8 border border-stone/20 shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-charcoal dark:text-cloud-gray">
                      {edu.degree} in {edu.field}
                    </h3>
                    <p className="text-electric-violet font-medium">{edu.institution}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1">
                    <span className="text-stone text-sm">{edu.period}</span>
                    <span className="px-3 py-1 bg-electric-violet/10 text-electric-violet rounded-full text-sm font-medium">
                      {edu.gpa}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-stone">
                      <Sparkles className="w-4 h-4 text-cyber-cyan mt-1 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="mb-12">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Code2 className="w-8 h-8 text-electric-violet" />
                Skills & Expertise
              </h2>
            </motion.div>

            <div className="space-y-12">
              {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-6 capitalize flex items-center gap-2">
                    <span className="w-2 h-8 bg-gradient-to-b from-electric-violet to-cyber-cyan rounded-full" />
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {skillList.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white dark:bg-charcoal/50 rounded-xl p-4 border border-stone/20 hover:border-electric-violet/50 transition-all group"
                      >
                        <p className="font-medium text-charcoal dark:text-cloud-gray group-hover:text-electric-violet transition-colors">
                          {skill.name}
                        </p>
                        <div className="mt-2 h-1.5 bg-stone/20 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-electric-violet to-cyber-cyan rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CSE Core Knowledge */}
        <section className="bg-stone/5 dark:bg-black/20 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="mb-12">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-electric-violet" />
                CSE Core Knowledge
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {cseCoreKnowledge.map((subject, index) => (
                <motion.div
                  key={subject}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white dark:bg-charcoal border border-stone/20 p-4 rounded-xl text-center hover:border-electric-violet/50 transition-all"
                >
                  <span className="text-sm font-medium text-stone">{subject}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Currently Learning */}
        <section className="py-16 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="mb-12">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Target className="w-8 h-8 text-electric-violet" />
                Currently Learning
              </h2>
            </motion.div>

            <InfiniteMovingCards items={learning} direction="right" speed="slow" />
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-electric-violet/10 to-cyber-cyan/10 rounded-3xl p-8 sm:p-12 border border-electric-violet/20"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">My Vision</h2>
              <p className="text-stone text-lg leading-relaxed">
                I aspire to become a versatile software engineer who can bridge the gap between
                cutting-edge technology and real-world applications. My goal is to contribute to
                projects that push boundaries, whether it&apos;s in AI, distributed systems, or
                innovative web applications. I believe in continuous learning and sharing knowledge
                with the developer community.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
