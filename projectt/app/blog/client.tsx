'use client';

import { motion } from 'framer-motion';
import { BookOpen, Clock, ArrowRight, Bell, Mail } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { CustomCursor } from '@/components/custom-cursor';
import { BackgroundCode } from '@/components/background-code';
import { FloatingParticles } from '@/components/floating-particles';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Placeholder blog posts
const blogPosts = [
  {
    title: 'Building Scalable APIs with Flask and Python',
    excerpt: 'Learn how to design and implement RESTful APIs that can handle thousands of requests per second.',
    date: 'Coming Soon',
    readTime: '8 min read',
    category: 'Backend',
    comingSoon: true,
  },
  {
    title: 'My Journey into Full-Stack Development',
    excerpt: 'A personal reflection on transitioning from backend to full-stack development and lessons learned.',
    date: 'Coming Soon',
    readTime: '5 min read',
    category: 'Career',
    comingSoon: true,
  },
  {
    title: 'Understanding System Design Fundamentals',
    excerpt: 'An introduction to system design concepts every developer should know before technical interviews.',
    date: 'Coming Soon',
    readTime: '10 min read',
    category: 'System Design',
    comingSoon: true,
  },
];

export function BlogClient() {
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
              <span className="text-shimmer">Blog</span>
            </h1>
            <p className="text-stone text-lg max-w-2xl mx-auto">
              Thoughts, tutorials, and insights on software development and technology.
            </p>
          </motion.div>

          {/* Coming Soon Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-electric-violet/10 to-cyber-cyan/10 rounded-2xl p-8 mb-12 border border-electric-violet/20 text-center"
          >
            <div className="w-16 h-16 bg-electric-violet/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-electric-violet" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Blog Coming Soon!</h2>
            <p className="text-stone max-w-lg mx-auto mb-6">
              I&apos;m working on some exciting content about software development, system design, and my learning journey. Stay tuned!
            </p>
            
            {/* Newsletter signup */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white dark:bg-charcoal border-stone/30"
              />
              <Button className="bg-gradient-to-r from-electric-violet to-cyber-cyan text-white hover:opacity-90 whitespace-nowrap">
                <Bell className="w-4 h-4 mr-2" />
                Notify Me
              </Button>
            </div>
          </motion.div>

          {/* Placeholder Posts */}
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-charcoal/50 rounded-2xl p-6 border border-stone/20 hover:border-electric-violet/30 transition-all group relative overflow-hidden"
              >
                {/* Coming soon overlay */}
                {post.comingSoon && (
                  <div className="absolute inset-0 bg-cloud-gray/50 dark:bg-charcoal/50 backdrop-blur-[2px] flex items-center justify-center z-10">
                    <span className="px-4 py-2 bg-electric-violet/20 text-electric-violet rounded-full font-medium text-sm">
                      Coming Soon
                    </span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
                  <span className="inline-block px-3 py-1 bg-electric-violet/10 text-electric-violet rounded-full text-sm font-medium w-fit">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-stone">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 text-charcoal dark:text-cloud-gray group-hover:text-electric-violet transition-colors">
                  {post.title}
                </h3>
                <p className="text-stone mb-4">{post.excerpt}</p>

                <button className="flex items-center gap-2 text-electric-violet font-medium text-sm group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
