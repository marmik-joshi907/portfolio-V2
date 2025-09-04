'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TimelineItemProps {
  title: string;
  company?: string;
  institution?: string;
  period: string;
  location: string;
  description?: string;
  achievements?: string[];
  responsibilities?: string[];
  gpa?: string;
  type: 'education' | 'experience';
  index: number;
}

export function TimelineItem({
  title,
  company,
  institution,
  period,
  location,
  description,
  achievements,
  responsibilities,
  gpa,
  type,
  index
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: type === 'education' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-signal-blue" />
      
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-signal-blue rounded-full border-4 border-cloud-gray dark:border-charcoal z-10" />
      
      <div className={`flex ${type === 'education' ? 'justify-start' : 'justify-end'}`}>
        <div className={`w-5/12 ${type === 'education' ? 'pr-8' : 'pl-8'}`}>
          <Card className="bg-stone/10 dark:bg-charcoal/50 backdrop-blur-sm border border-stone/30 hover:border-signal-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-signal-blue/10">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-3">
                <Badge className="bg-signal-blue/20 text-signal-blue border-signal-blue/30">
                  {type === 'education' ? 'Education' : 'Experience'}
                </Badge>
                <span className="text-xs text-stone font-mono">{period}</span>
              </div>
              
              <h3 className="text-lg font-bold text-charcoal dark:text-cloud-gray mb-1">{title}</h3>
              
              {company && (
                <h4 className="text-signal-blue font-semibold mb-2">{company}</h4>
              )}
              
              {institution && (
                <h4 className="text-signal-blue font-semibold mb-2">{institution}</h4>
              )}
              
              <p className="text-sm text-stone mb-3">{location}</p>
              
              {gpa && (
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-charcoal dark:text-cloud-gray">Academic Performance</span>
                    <span className="text-lg font-bold text-signal-blue">{gpa}</span>
                  </div>
                  <div className="w-full bg-stone/30 rounded-full h-2">
                    <div className="bg-signal-blue h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              )}
              
              {description && (
                <p className="text-sm text-charcoal dark:text-stone mb-3 leading-relaxed">{description}</p>
              )}
              
              {achievements && (
                <ul className="space-y-1 text-sm text-charcoal dark:text-stone">
                  {achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-signal-blue rounded-full mt-2 mr-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {responsibilities && (
                <ul className="space-y-1 text-sm text-charcoal dark:text-stone">
                  {responsibilities.map((responsibility, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-signal-blue rounded-full mt-2 mr-2 flex-shrink-0" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}