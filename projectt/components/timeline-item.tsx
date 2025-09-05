import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TimelineItemProps {
  title: string;
  institution?: string;
  company?: string;
  period: string;
  location?: string;
  gpa?: string;
  achievements?: string[];
  responsibilities?: string[];
  type: 'education' | 'experience';
  index: number;
}

export function TimelineItem({
  title,
  institution,
  company,
  period,
  location,
  gpa,
  achievements,
  responsibilities,
  type,
  index
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
    >
      {/* Timeline Line - Hidden on mobile, visible on larger screens */}
      <div className="hidden sm:block absolute left-4 top-8 w-px h-full bg-signal-blue/20" />
      
      {/* Timeline Dot */}
      <div className="flex-shrink-0 w-8 h-8 bg-signal-blue rounded-full flex items-center justify-center relative z-10">
        <div className="w-3 h-3 bg-white rounded-full" />
      </div>
      
      {/* Content Card */}
      <Card className="flex-1 bg-white dark:bg-charcoal/80 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 min-w-0 overflow-hidden">
        <CardContent className="p-4 sm:p-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-3">
            <div className="min-w-0 flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-charcoal dark:text-cloud-gray break-words hyphens-auto">
                {title}
              </h3>
              <p className="text-signal-blue font-medium break-words hyphens-auto">
                {institution || company}
              </p>
            </div>
            <div className="flex-shrink-0">
              <Badge className="bg-signal-blue/10 text-signal-blue border-signal-blue/30 text-xs sm:text-sm whitespace-nowrap">
                {period}
              </Badge>
            </div>
          </div>
          
          {/* Location */}
          {location && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 break-words flex items-center gap-1">
              <span>📍</span>
              <span className="break-words">{location}</span>
            </p>
          )}
          
          {/* GPA */}
          {gpa && (
            <div className="mb-3">
              <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800 text-xs sm:text-sm">
                GPA: {gpa}
              </Badge>
            </div>
          )}
          
          {/* Achievements or Responsibilities */}
          {(achievements || responsibilities) && (
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {(achievements || responsibilities)?.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-signal-blue mt-1 flex-shrink-0 select-none">•</span>
                  <span className="break-words hyphens-auto leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}