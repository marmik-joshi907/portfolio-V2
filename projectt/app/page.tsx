'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, Github, Linkedin, Twitter, ChevronDown,
  Terminal, Code2, Sparkles, MapPin, Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/theme-toggle';
import { FloatingNav } from '@/components/floating-nav';
import { CurrentTime } from '@/components/current-time';
import { DownloadResume } from '@/components/download-resume';
import { CodeBlock } from '@/components/code-block';
import { SkillCard } from '@/components/skill-card';
import { ProjectCard } from '@/components/project-card';
import { TimelineItem } from '@/components/timeline-item';
import { personalInfo, skills, education, experience, projects, codeSnippets } from '@/lib/data';
import Image from 'next/image';

// 🔌 Formspree
// Make sure you've run: npm install @formspree/react
import { useForm, ValidationError } from '@formspree/react';

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Formspree hook (form id mdklpplk)
  const [fsState, fsHandleSubmit] = useForm('mdklpplk');

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const getInTouchRef = useRef<HTMLButtonElement>(null);
  const downloadResumeRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetInTouchClick = () => {
    if (getInTouchRef.current) {
      getInTouchRef.current.style.transform = 'scale(0.95)';
      setTimeout(() => {
        if (getInTouchRef.current) {
          getInTouchRef.current.style.transform = 'scale(1)';
        }
      }, 150);
    }
    scrollToSection('contact');
  };

  const handleDownloadResumeClick = () => {
    if (downloadResumeRef.current) {
      downloadResumeRef.current.style.transform = 'scale(0.95)';
      setTimeout(() => {
        if (downloadResumeRef.current) {
          downloadResumeRef.current.style.transform = 'scale(1)';
        }
      }, 150);
    }
  };

  return (
    <div className="min-h-screen bg-cloud-gray dark:bg-charcoal text-charcoal dark:text-cloud-gray relative overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-signal-blue/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-signal-blue/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-signal-blue/5 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-cloud-gray/90 dark:bg-charcoal/90 backdrop-blur-md border-b border-stone/30 z-40">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3 min-w-0 flex-1"
            >
              <div className="w-8 h-8 bg-signal-blue rounded-lg flex items-center justify-center flex-shrink-0">
                <Terminal className="w-4 h-4 text-cloud-gray" />
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-charcoal dark:text-cloud-gray truncate">{personalInfo.name}</h1>
            </motion.div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden sm:block">
                <CurrentTime />
              </div>
              <ThemeToggle />

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-stone/20 hover:bg-stone/30 transition-colors"
              >
                <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                  <div className={`w-full h-0.5 bg-charcoal dark:bg-cloud-gray transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                  <div className={`w-full h-0.5 bg-charcoal dark:bg-cloud-gray transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                  <div className={`w-full h-0.5 bg-charcoal dark:bg-cloud-gray transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                </div>
              </button>

              <div className="hidden md:flex space-x-6">
                {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-stone hover:text-signal-blue transition-colors duration-300 font-medium whitespace-nowrap"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t border-stone/30"
            >
              <div className="flex flex-col space-y-3">
                {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      scrollToSection(item.toLowerCase());
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-stone hover:text-signal-blue transition-colors duration-300 font-medium py-2"
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="sm:hidden mt-4 pt-3 border-t border-stone/20">
                <CurrentTime />
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      <FloatingNav />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative px-3 sm:px-4 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
              onClick={() => scrollToSection('contact')}
              aria-label="Jump to Lets Connect"
            >
              <a href="#contact" className="inline-block">
              <Badge className="bg-signal-blue/20 text-signal-blue border-signal-blue/30 mb-4">
                <Sparkles className="w-3 h-3 mr-1" />
                <span className="break-words">Available for opportunities</span>
              </Badge>
              </a>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal dark:text-cloud-gray mb-4 break-words"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-signal-blue mb-6 font-semibold break-words"
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 text-stone dark:text-stone break-words"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
            >
              <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
                <Button
                  ref={getInTouchRef}
                  onClick={handleGetInTouchClick}
                  className="bg-signal-blue hover:bg-signal-blue/90 text-cloud-gray px-6 sm:px-8 py-3 text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  Get In Touch
                </Button>
              </motion.div>

              <div ref={downloadResumeRef} onClick={handleDownloadResumeClick} className="w-full sm:w-auto">
                <DownloadResume />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex justify-center space-x-4 sm:space-x-6"
            >
              {Object.entries(personalInfo.social).map(([platform, url]) => {
                const icons = {
                  github: Github,
                  linkedin: Linkedin,
                  twitter: Twitter,
                  email: Mail
                };
                const Icon = icons[platform as keyof typeof icons];

                return (
                  <a
                    key={platform}
                    href={url}
                    target={platform !== 'email' ? '_blank' : undefined}
                    rel={platform !== 'email' ? 'noopener noreferrer' : undefined}
                    className="text-stone hover:text-signal-blue transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon size={20} className="sm:w-6 sm:h-6" />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="p-2 rounded-full bg-signal-blue/10 backdrop-blur-sm border border-signal-blue/30 hover:bg-signal-blue/20 transition-colors"
          >
            <ChevronDown size={24} className="sm:w-7 sm:h-7 text-signal-blue" />
          </motion.div>
        </motion.button>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal dark:text-cloud-gray mb-4 break-words">
              About <span className="text-signal-blue">Me</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-signal-blue mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-signal-blue/10 rounded-2xl blur-xl" />
                <Card className="relative bg-stone/10 dark:bg-charcoal/50 backdrop-blur-sm border border-stone/30">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="relative flex-shrink-0">
                        <div className="w-12 sm:w-16 h-12 sm:h-16 bg-signal-blue rounded-full p-0.5">
                          <Image
                            src={personalInfo.avatar}
                            alt={personalInfo.name}
                            width={64}
                            height={64}
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 sm:w-5 h-4 sm:h-5 bg-green-500 rounded-full border-2 border-cloud-gray dark:border-charcoal" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-charcoal dark:text-cloud-gray break-words">{personalInfo.name}</h3>
                        <p className="text-signal-blue break-words">{personalInfo.title}</p>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-charcoal dark:text-stone leading-relaxed mb-6 break-words">
                      I&apos;m a dedicated Computer Engineering student with an exceptional academic record,
                      placing me in the top percentile of my cohort. My academic excellence is complemented
                      by a strong, practical command of programming languages like Java, focusing on
                      object-oriented and multithreading capabilities.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-signal-blue flex-shrink-0" />
                        <span className="break-words">{personalInfo.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-signal-blue flex-shrink-0" />
                        <span className="break-words">Available Now</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="overflow-hidden"
            >
              <CodeBlock code={codeSnippets.about} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 bg-stone/5 dark:bg-charcoal/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal dark:text-cloud-gray mb-4 break-words">
              Skills & <span className="text-signal-blue">Expertise</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-signal-blue mx-auto rounded-full" />
          </motion.div>

          <div className="space-y-8 sm:space-y-12">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <div key={category}>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="text-xl sm:text-2xl font-bold text-charcoal dark:text-cloud-gray mb-4 sm:mb-6 capitalize flex items-center break-words"
                >
                  <Code2 className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-signal-blue flex-shrink-0" />
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </motion.h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {skillList.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      category={skill.category}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Timeline Section */}
      <section id="experience" className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4" data-resume-content>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal dark:text-cloud-gray mb-4 break-words">
              My <span className="text-signal-blue">Journey</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-signal-blue mx-auto rounded-full" />
          </motion.div>

          <div id="resume-content" className="relative space-y-8 sm:space-y-12 overflow-hidden">
            {/* Education Timeline */}
            <div className="space-y-6 sm:space-y-8">
              {education.map((edu, index) => (
                <TimelineItem
                  key={index}
                  title={edu.degree}
                  institution={edu.institution}
                  period={edu.period}
                  location={edu.location}
                  gpa={edu.gpa}
                  achievements={edu.achievements}
                  type="education"
                  index={index}
                />
              ))}
            </div>

            {/* Experience Timeline */}
            <div className="space-y-6 sm:space-y-8">
              {experience.map((exp, index) => (
                <TimelineItem
                  key={index}
                  title={exp.title}
                  company={exp.company}
                  period={exp.period}
                  location={exp.location}
                  responsibilities={exp.responsibilities}
                  type="experience"
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 bg-stone/5 dark:bg-charcoal/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal dark:text-cloud-gray mb-4 break-words">
              Featured <span className="text-signal-blue">Projects</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-signal-blue mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                github={project.github}
                demo={project.demo}
                featured={project.featured}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal dark:text-cloud-gray mb-4 break-words">
              Let&apos;s <span className="text-signal-blue">Connect</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-signal-blue mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal dark:text-cloud-gray mb-4 sm:mb-6 break-words">Let&apos;s Work Together</h3>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed break-words">
                I&apos;m always interested in new opportunities and collaborations.
                Whether you have a project in mind or just want to connect, I&apos;d love to hear from you.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-stone/10 dark:bg-charcoal/30 backdrop-blur-sm border border-stone/30"
                >
                  <Mail size={18} className="sm:w-5 sm:h-5 text-signal-blue flex-shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-signal-blue transition-colors break-all text-sm sm:text-base">
                    {personalInfo.email}
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-stone/10 dark:bg-charcoal/30 backdrop-blur-sm border border-stone/30"
                >
                  <Linkedin size={18} className="sm:w-5 sm:h-5 text-signal-blue flex-shrink-0" />
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-signal-blue transition-colors break-words text-sm sm:text-base"
                  >
                    LinkedIn Profile
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-stone/10 dark:bg-charcoal/30 backdrop-blur-sm border border-stone/30"
                >
                  <Github size={18} className="sm:w-5 sm:h-5 text-signal-blue flex-shrink-0" />
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-signal-blue transition-colors break-words text-sm sm:text-base"
                  >
                    GitHub Profile
                  </a>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-stone/10 dark:bg-charcoal/50 backdrop-blur-sm border border-stone/30 hover:border-signal-blue/50 transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  {/* Success state */}
                  {fsState.succeeded ? (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3 text-center"
                    >
                      <h3 className="text-xl sm:text-2xl font-bold break-words">🎉 Message sent!</h3>
                      <p className="text-sm sm:text-base text-stone break-words">
                        Thanks for reaching out — I&apos;ll get back to you ASAP. Meanwhile, feel free to stalk my{' '}
                        <a
                          href={personalInfo.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-signal-blue break-all"
                        >
                          GitHub
                        </a>{' '}
                        or{' '}
                        <a
                          href={personalInfo.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-signal-blue break-all"
                        >
                          LinkedIn
                        </a>
                        . You rock 🤘
                      </p>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        // Let Formspree do its thing™
                        fsHandleSubmit(e);
                      }}
                      className="space-y-4 sm:space-y-6"
                    >
                      {/* Optional subject line for your inbox */}
                      <input type="hidden" name="_subject" value="New contact form submission 🚀" />
                      {/* Optional honeypot */}
                      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-charcoal dark:text-cloud-gray mb-2"
                        >
                          Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-cloud-gray dark:bg-charcoal border-stone text-charcoal dark:text-cloud-gray placeholder-stone focus:border-signal-blue focus:ring-signal-blue/20"
                          placeholder="Your name"
                          required
                          aria-required="true"
                        />
                        <ValidationError prefix="Name" field="name" errors={fsState.errors} />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-charcoal dark:text-cloud-gray mb-2"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-cloud-gray dark:bg-charcoal border-stone text-charcoal dark:text-cloud-gray placeholder-stone focus:border-signal-blue focus:ring-signal-blue/20"
                          placeholder="your.email@example.com"
                          required
                          aria-required="true"
                        />
                        <ValidationError prefix="Email" field="email" errors={fsState.errors} />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-charcoal dark:text-cloud-gray mb-2"
                        >
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="bg-cloud-gray dark:bg-charcoal border-stone text-charcoal dark:text-cloud-gray placeholder-stone focus:border-signal-blue focus:ring-signal-blue/20 min-h-[100px] sm:min-h-[120px]"
                          placeholder="Your message..."
                          required
                          aria-required="true"
                        />
                        <ValidationError prefix="Message" field="message" errors={fsState.errors} />
                      </div>

                      <Button
                        type="submit"
                        disabled={fsState.submitting}
                        className="w-full bg-signal-blue hover:bg-signal-blue/90 text-cloud-gray py-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-70"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        {fsState.submitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-3 sm:px-4 border-t border-stone/30 bg-stone/5 dark:bg-charcoal/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-signal-blue rounded-md flex items-center justify-center flex-shrink-0">
                <Terminal className="w-3 h-3 text-cloud-gray" />
              </div>
              <p className="text-sm sm:text-base text-stone break-words text-center md:text-left">
                © 2025 {personalInfo.name}. Crafted with ❤️ and lots of ☕
              </p>
            </div>
            <div className="md:hidden sm:block">
              <CurrentTime />
            </div>
            <div className="hidden md:block">
              <CurrentTime />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}