'use client';

import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const { language } = useLanguage();

  const reviews = [
    {
      quote: content.testimonials[0].quote,
      author: 'Referenz KWP Berlin',
      role: language === 'de' ? 'Premier Auftraggeber' : 'Premier Client',
      stars: 5,
    },
    {
      quote: {
        de: 'Thomas Decker und sein Team sind außergewöhnlich zuverlässig. 24/7 Erreichbarkeit und professionelle Ausführung – genau das brauchen wir.',
        en: 'Thomas Decker and his team are exceptionally reliable. 24/7 availability and professional execution – exactly what we need.',
      },
      author: 'Hauptstraße 141 Berlin',
      role: language === 'de' ? 'Wohnanlage Auftraggeber' : 'Residential Complex Client',
      stars: 5,
    },
    {
      quote: {
        de: 'UFB übernimmt alle technischen und reinigungsbezogenen Aufgaben für unsere Tiefgarage – kompetent, pünktlich und stets sauber.',
        en: 'UFB handles all technical and cleaning tasks for our underground garage – competent, punctual, and always clean.',
      },
      author: 'Bürokomplex Schöneberg',
      role: language === 'de' ? 'Gewerblicher Auftraggeber' : 'Commercial Client',
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-28 bg-white dark:bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-px bg-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">
                {language === 'de' ? 'Kundenstimmen' : 'Client Reviews'}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-foreground">
              {language === 'de' ? 'Was unsere Kunden sagen.' : 'What our clients say.'}
            </h2>
          </div>
          <div className="flex items-end">
            {/* Star rating summary */}
            <div className="flex items-center gap-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-primary fill-primary" />
                ))}
              </div>
              <div>
                <p className="text-2xl font-black text-foreground">4.9</p>
                <p className="text-xs text-muted-foreground">
                  {language === 'de' ? 'Basierend auf Kundenbewertungen' : 'Based on client reviews'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-[#0d0d0d] p-8 md:p-10 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, j) => (
                  <Star key={j} size={14} className="text-primary fill-primary" />
                ))}
              </div>

              {/* Quote mark */}
              <Quote size={30} className="text-primary/20 mb-4 flex-shrink-0" />

              {/* Quote text */}
              <p className="text-foreground/80 font-medium leading-relaxed flex-grow mb-8 italic">
                "{review.quote[language]}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-6 flex items-center gap-4">
                <div className="w-10 h-10 bg-primary flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                  {review.author[0]}
                </div>
                <div>
                  <p className="font-black text-sm text-foreground">{review.author}</p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
