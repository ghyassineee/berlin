'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const stats = [
  { value: '5+', de: 'Jahre Erfahrung in Berlin', en: 'Years of Experience in Berlin' },
  { value: '24/7', de: 'Notdienst & Rufbereitschaft', en: 'Emergency & On-Call Service' },
  { value: '98%', de: 'Kundenzufriedenheit', en: 'Client Satisfaction Rate' },
  { value: '10K+', de: 'Betreute Quadratmeter', en: 'Managed Square Meters' },
];

export default function Stats() {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-[#111] dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#2a2a2a]">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-8 py-12 text-center lg:text-left"
            >
              <p className="text-4xl lg:text-5xl font-black text-primary mb-2">{stat.value}</p>
              <p className="text-sm font-semibold text-gray-400 leading-snug">{language === 'de' ? stat.de : stat.en}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
