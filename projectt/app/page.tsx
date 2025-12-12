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
import { CustomCursor } from '@/components/custom-cursor';
import { SectionHeading } from '@/components/section-heading';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { BackgroundCode } from '@/components/background-code';
import { personalInfo, skills, education, experience, projects, codeSnippets, cseCoreKnowledge, learning } from '@/lib/data';
import { BinaryPopup } from '@/components/binary-popup';
import { SkillPopup } from '@/components/skill-popup';
import { AnimatePresence } from 'framer-motion';
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
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [showProjectPopup, setShowProjectPopup] = useState(false);
  const [showBinaryPopup, setShowBinaryPopup] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<any>(null);
  const getInTouchRef = useRef<HTMLButtonElement>(null);
  const downloadResumeRef = useRef<HTMLDivElement>(null);

  const startShowcase = () => {
    if (highlightIndex !== -1) return; // Already running
    
    setHighlightIndex(0);
    scrollToSection('projects');
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex >= projects.length) {
        clearInterval(interval);
        setHighlightIndex(-1);
        setTimeout(() => setShowProjectPopup(true), 500);
      } else {
        setHighlightIndex(currentIndex);
      }
    }, 3000);
  };

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
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-electric-violet/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyber-cyan/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-violet/5 rounded-full blur-3xl" />
      </div>

      <BackgroundCode />

      {/* Navigation */}
      <CustomCursor />
      <nav className="fixed top-0 w-full bg-cloud-gray/90 dark:bg-charcoal/90 backdrop-blur-md border-b border-stone/30 z-40">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3 min-w-0 flex-1"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-electric-violet to-cyber-cyan rounded-lg flex items-center justify-center flex-shrink-0">
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
                    className="text-stone hover:text-electric-violet transition-colors duration-300 font-medium whitespace-nowrap"
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
                    className="text-left text-stone hover:text-electric-violet transition-colors duration-300 font-medium py-2"
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
      <section id="hero" className="min-h-screen flex items-center justify-center relative px-3 sm:px-4 pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 inline-block"
              onClick={() => scrollToSection('contact')}
            >
              <a href="#contact" className="inline-block">
                <Badge className="bg-electric-violet/10 text-electric-violet border-electric-violet/20 hover:bg-electric-violet/20 transition-colors px-4 py-2 text-sm">
                  <Sparkles className="w-4 h-4 mr-2 text-cyber-cyan" />
                  <span className="bg-gradient-to-r from-electric-violet to-cyber-cyan bg-clip-text text-transparent font-semibold">
                    Available for opportunities
                  </span>
                </Badge>
              </a>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-charcoal dark:text-cloud-gray mb-6 leading-tight"
            >
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-violet to-cyber-cyan">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl text-stone mb-8 font-medium"
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl leading-relaxed text-stone/80 dark:text-stone max-w-xl mb-10"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10"
            >
              <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} className="w-full sm:w-auto">
                <Button
                  ref={getInTouchRef}
                  onClick={handleGetInTouchClick}
                  className="bg-gradient-to-r from-electric-violet to-cyber-cyan hover:opacity-90 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-electric-violet/25 w-full sm:w-auto transition-all duration-300"
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
              className="flex justify-start space-x-6"
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
                    className="text-stone hover:text-electric-violet transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px]">
              {/* Decorative blobs */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-electric-violet/20 to-cyber-cyan/20 rounded-full blur-3xl animate-pulse" />
              
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl shadow-electric-violet/20 rotate-3 hover:rotate-0 transition-all duration-500">
                <Image
                  src="/hero-image.jpg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
              </div>

              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-charcoal p-4 rounded-xl shadow-xl border border-stone/10"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-electric-violet/10 rounded-lg">
                    <Code2 className="w-6 h-6 text-electric-violet" />
                  </div>
                  <div>
                    <p className="text-xs text-stone">Focus</p>
                    <p className="font-bold text-charcoal dark:text-cloud-gray">DSA</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -right-6 bg-white dark:bg-charcoal p-4 rounded-xl shadow-xl border border-stone/10"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-cyber-cyan/10 rounded-lg">
                    <Sparkles className="w-6 h-6 text-cyber-cyan" />
                  </div>
                  <div>
                    <p className="text-xs text-stone">Experience</p>
                    <p className="font-bold text-charcoal dark:text-cloud-gray">Creative Dev</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="p-2"
          >
            <ChevronDown size={32} className="text-stone/50 hover:text-electric-violet transition-colors" />
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
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-violet to-cyber-cyan">Me</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-electric-violet to-cyber-cyan mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-electric-violet/10 rounded-2xl blur-xl" />
                <Card className="relative bg-stone/10 dark:bg-charcoal/50 backdrop-blur-sm border border-stone/30">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="relative flex-shrink-0">
                        <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-electric-violet to-cyber-cyan rounded-full p-0.5">
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
                        <p className="text-electric-violet break-words">{personalInfo.title}</p>
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
                        <MapPin className="w-4 h-4 text-cyber-cyan flex-shrink-0" />
                        <span className="break-words">{personalInfo.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-cyber-cyan flex-shrink-0" />
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
          <SectionHeading title="Skills &" highlight="Expertise" />

          <div className="space-y-8 sm:space-y-12">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <div key={category}>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="text-xl sm:text-2xl font-bold text-charcoal dark:text-cloud-gray mb-6 flex items-center capitalize"
                >
                  <span className="w-2 h-8 bg-gradient-to-b from-electric-violet to-cyber-cyan mr-3 rounded-full" />
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </motion.h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skillList.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      category={skill.category}
                      index={index}
                      onClick={() => setSelectedSkill(skill)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <SkillPopup skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
        </div>
      </section>

      {/* CSE Core Knowledge Section */}
      <section id="cse-core" className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="CSE Core" highlight="In-Depth" />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {cseCoreKnowledge.map((subject, index) => (
              <motion.div
                key={subject}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-charcoal border border-stone/20 dark:border-stone/10 p-4 rounded-xl text-center shadow-sm hover:shadow-md hover:border-electric-violet/50 transition-all flex items-center justify-center min-h-[100px] group"
              >
                <span className="text-sm font-semibold text-stone group-hover:text-electric-violet transition-colors">
                  {subject}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section id="learning" className="py-12 sm:py-16 lg:py-20 bg-stone/5 dark:bg-charcoal/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading title="Currently" highlight="Learning" />
          
          <div className="mt-8">
            <InfiniteMovingCards
              items={learning}
              direction="right"
              speed="slow"
            />
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
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-violet to-cyber-cyan">Journey</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-electric-violet to-cyber-cyan mx-auto rounded-full" />
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
          <SectionHeading 
            title="Featured" 
            highlight="Projects" 
            onClick={startShowcase}
            className="hover:scale-105 transition-transform duration-300 cursor-pointer"
          />

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
                isHighlighted={index === highlightIndex}
              />
            ))}
          </div>
        </div>

        {/* Project Selection Popup */}
        {showProjectPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-charcoal border border-electric-violet rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl shadow-electric-violet/20 relative"
            >
              <button 
                onClick={() => setShowProjectPopup(false)}
                className="absolute top-4 right-4 text-stone hover:text-charcoal dark:hover:text-white"
              >
                ✕
              </button>
              
              <h3 className="text-2xl font-bold mb-2 text-center">Showcase Complete! 🚀</h3>
              <p className="text-center text-stone mb-6">Which project caught your eye? Check out a demo:</p>
              
              <div className="space-y-3">
                {projects.map((project) => (
                  <div key={project.title} className="flex items-center justify-between p-3 rounded-lg bg-stone/5 border border-stone/10 hover:border-electric-violet/30 transition-colors">
                    <span className="font-medium truncate pr-4">{project.title}</span>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-electric-violet/10 text-electric-violet rounded-md text-sm font-semibold hover:bg-electric-violet hover:text-white transition-all shrink-0"
                    >
                      View Demo
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowProjectPopup(false)}
                  className="text-stone hover:text-electric-violet text-sm underline"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeading 
            title="System" 
            highlight="Override" 
            onClick={() => {
              if (typeof window !== 'undefined') {
                const form = document.getElementById('terminal-form');
                if (form) {
                  form.scrollIntoView({ behavior: 'smooth' });
                  // Trigger flicker
                  const inputs = form.querySelectorAll('input, textarea');
                  inputs.forEach((input: any) => {
                    input.style.animation = 'none';
                    setTimeout(() => {
                      input.style.animation = 'pulse 0.1s infinite';
                    }, 10);
                  });
                  // Stop after 2s if no interaction
                  setTimeout(() => {
                     inputs.forEach((input: any) => {
                      input.style.animation = 'none';
                    });
                  }, 2000);
                }
              }
            }}
            className="hover:scale-105 transition-transform duration-300 cursor-pointer"
          />

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-stone/20 font-mono"
            id="terminal-form"
          >
            {/* Terminal Header */}
            <div className="bg-[#2d2d2d] px-4 py-3 flex items-center space-x-2 border-b border-black/50">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <div className="flex-1 text-center text-xs text-stone/50 font-mono">user@{personalInfo.name.toLowerCase().replace(/\s+/g, '')}: ~/contact-protocol</div>
            </div>

            <div className="grid lg:grid-cols-2">
              {/* Left Side: Info */}
              <div className="p-6 sm:p-8 border-r border-stone/10 bg-[#1e1e1e] text-stone/80">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-electric-violet font-bold mb-2">{'>'} PROJECTS_INFO</h3>
                    <p className="text-sm leading-relaxed mb-4">
                      Initiating handshake protocol... <br/>
                      Warning: Heavy collaboration detected. <br/>
                      Please provide project specifications or coffee coordinates.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-cyber-cyan font-bold mb-2">{'>'} CONTACT_CHANNELS</h3>
                    <div className="space-y-3 text-sm">
                       <div className="flex items-center space-x-3 group cursor-pointer hover:text-white transition-colors">
                        <span className="text-stone/50">$</span>
                        <a href={`mailto:${personalInfo.email}`} className="hover:underline decoration-electric-violet underline-offset-4">
                          email: {personalInfo.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3 group cursor-pointer hover:text-white transition-colors">
                        <span className="text-stone/50">$</span>
                        <a href={personalInfo.social.linkedin} target="_blank" className="hover:underline decoration-electric-violet underline-offset-4">
                          linkedin: user/{personalInfo.name.split(' ')[0].toLowerCase()}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3 group cursor-pointer hover:text-white transition-colors">
                        <span className="text-stone/50">$</span>
                        <a href={personalInfo.social.github} target="_blank" className="hover:underline decoration-electric-violet underline-offset-4">
                          github: git/checkout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="p-6 sm:p-8 bg-[#1e1e1e]">
                {fsState.succeeded && !showBinaryPopup ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center space-y-4"
                    >
                      <div className="text-green-500 text-6xl">✓</div>
                      <h3 className="text-2xl font-bold text-white">Message Transmitted</h3>
                      <p className="text-stone/60 text-sm">Stand by for response...</p>
                    </motion.div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      fsHandleSubmit(e).then(() => {
                         setShowBinaryPopup(true);
                      });
                    }}
                    className="space-y-5"
                  >
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-xs text-stone/50 uppercase tracking-wider pl-1">Name_Input</label>
                      <Input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-[#252525] border-transparent text-white placeholder-stone/30 focus:border-electric-violet/50 focus:ring-1 focus:ring-electric-violet/50 rounded-md h-12 font-mono"
                        placeholder="_ enter name"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="email" className="text-xs text-stone/50 uppercase tracking-wider pl-1">Email_Address</label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-[#252525] border-transparent text-white placeholder-stone/30 focus:border-electric-violet/50 focus:ring-1 focus:ring-electric-violet/50 rounded-md h-12 font-mono"
                        placeholder="_ enter email"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="message" className="text-xs text-stone/50 uppercase tracking-wider pl-1">Message_Body</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-[#252525] border-transparent text-white placeholder-stone/30 focus:border-electric-violet/50 focus:ring-1 focus:ring-electric-violet/50 rounded-md min-h-[150px] font-mono resize-none"
                        placeholder="_ enter message type..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={fsState.submitting}
                      className="w-full bg-electric-violet/10 hover:bg-electric-violet/20 text-electric-violet border border-electric-violet/50 py-6 font-mono uppercase tracking-widest transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                    >
                      {fsState.submitting ? '[ TRANSMITTING... ]' : '[ EXECUTE_SEND ]'}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {showBinaryPopup && (
          <BinaryPopup 
            onComplete={() => setShowBinaryPopup(false)} 
          />
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-3 sm:px-4 border-t border-stone/30 bg-stone/5 dark:bg-charcoal/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gradient-to-br from-electric-violet to-cyber-cyan rounded-md flex items-center justify-center flex-shrink-0">
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