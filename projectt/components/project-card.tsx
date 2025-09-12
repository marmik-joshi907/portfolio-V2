'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  index: number;
}

export function ProjectCard({ 
  title, 
  description, 
  image, 
  technologies, 
  github, 
  demo, 
  featured = false,
  index 
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="bg-stone/10 dark:bg-charcoal/50 backdrop-blur-sm border border-stone/30 hover:border-signal-blue/50 transition-all duration-500 overflow-hidden group-hover:shadow-2xl group-hover:shadow-signal-blue/10">
        <div className="relative overflow-hidden">
          <div className="aspect-[4/3] relative h-48">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
          </div>
          
          <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="secondary" className="bg-stone/20 backdrop-blur-sm border-stone/30">
                <Github className="h-4 w-4" />
              </Button>
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="secondary" className="bg-stone/20 backdrop-blur-sm border-stone/30">
                <ExternalLink className="h-4 w-4" />
              </Button>
              </a>
            )}
          </div>
        </div>

        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-bold text-charcoal dark:text-cloud-gray group-hover:text-signal-blue transition-colors">
              {title}
            </h3>
            {featured && (
              <Badge className="bg-signal-blue text-cloud-gray border-0">
                Featured
              </Badge>
            )}
          </div>
          
          <p className="text-stone dark:text-stone mb-4 leading-relaxed text-sm">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="outline" 
                className="border-signal-blue/30 text-signal-blue bg-signal-blue/10 hover:bg-signal-blue/20 transition-colors text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex space-x-3">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="border-stone hover:border-signal-blue hover:text-signal-blue">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Button>
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="border-stone hover:border-signal-blue hover:text-signal-blue">
                <Eye className="mr-2 h-4 w-4" />
                Demo
              </Button>
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}