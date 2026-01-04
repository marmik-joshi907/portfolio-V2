'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Filter, X } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { CustomCursor } from '@/components/custom-cursor';
import { BackgroundCode } from '@/components/background-code';
import { FloatingParticles } from '@/components/floating-particles';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/lib/data';

// Extract all unique technologies from projects
const allTechnologies = Array.from(
  new Set(projects.flatMap((project) => project.technologies))
).sort();

export function ProjectsClient() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const filteredProjects = selectedTech
    ? projects.filter((project) => project.technologies.includes(selectedTech))
    : projects;

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
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              My <span className="text-shimmer">Projects</span>
            </h1>
            <p className="text-stone text-lg max-w-2xl mx-auto">
              A collection of projects I&apos;ve built, ranging from full-stack applications to AI-powered solutions.
            </p>
          </motion.div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-electric-violet" />
              <span className="font-medium">Filter by technology:</span>
              {selectedTech && (
                <button
                  onClick={() => setSelectedTech(null)}
                  className="ml-2 flex items-center gap-1 px-2 py-1 bg-electric-violet/10 text-electric-violet rounded-full text-sm hover:bg-electric-violet/20 transition-colors"
                >
                  Clear <X className="w-3 h-3" />
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selectedTech === tech
                      ? 'bg-electric-violet text-white'
                      : 'bg-stone/10 text-stone hover:bg-stone/20 hover:text-charcoal dark:hover:text-cloud-gray'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group bg-white dark:bg-charcoal/50 rounded-2xl overflow-hidden border border-stone/20 hover:border-electric-violet/50 transition-all shadow-lg hover:shadow-xl hover:shadow-electric-violet/10"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                    
                    {/* Links overlay */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/90 dark:bg-charcoal/90 rounded-full flex items-center justify-center hover:bg-electric-violet hover:text-white transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/90 dark:bg-charcoal/90 rounded-full flex items-center justify-center hover:bg-electric-violet hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-charcoal dark:text-cloud-gray group-hover:text-electric-violet transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-stone text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-electric-violet/10 text-electric-violet border-0 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge
                          variant="secondary"
                          className="bg-stone/10 text-stone border-0 text-xs"
                        >
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-stone text-lg">No projects found with this technology.</p>
              <button
                onClick={() => setSelectedTech(null)}
                className="mt-4 text-electric-violet hover:underline"
              >
                Clear filter
              </button>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
