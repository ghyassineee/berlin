'use client';

import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function About() {
  const { language } = useLanguage();

  const highlights = language === 'de' ? [
    'Warum Kunden auf uns vertrauen.',
    'Ergebnisorientierter Ansatz.',
    'Risiko und Unsicherheit reduzieren.',
    'Skalierbare Servicestrategien.',
  ] : [
    'Why clients trust us.',
    'Results-driven approach.',
    'Reduce risk & uncertainty.',
    'Scalable service strategies.',
  ];

  return (
    <section id="about" className="py-28 bg-[#f8f7f4] dark:bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT – Image with floating badge */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/founder.png"
                alt="Thomas Decker – Urban Facility Berlin"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary p-8">
              <p className="text-4xl font-black text-white leading-none">5+</p>
              <p className="text-xs font-black text-white/80 uppercase tracking-widest mt-1">
                {language === 'de' ? 'Jahre Erfahrung' : 'Years Experience'}
              </p>
            </div>

            {/* Decorative border accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary opacity-40" />
          </motion.div>

          {/* RIGHT – Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-px bg-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">
                {language === 'de' ? 'Über uns' : 'About us'}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-foreground mb-6">
              {language === 'de'
                ? 'Vertrauensvoller Partner für Gebäude & Sicherheit.'
                : 'Trusted advisors for building & safety.'}
            </h2>

            <p className="text-muted-foreground font-medium leading-relaxed mb-8">
              {content.about.bio[language]}
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={17} className="text-primary flex-shrink-0" />
                  <span className="text-sm font-semibold text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            {/* Founder name tag */}
            <div className="border-t border-border pt-8 flex items-center gap-4">
              <div className="w-12 h-12 bg-primary flex items-center justify-center text-white font-black text-xl flex-shrink-0">
                T
              </div>
              <div>
                <p className="font-black text-foreground">Thomas Decker</p>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                  {language === 'de' ? 'Gründer & Inhaber' : 'Founder & Owner'}
                </p>
              </div>
              <div className="ml-auto">
                <a href="#contact" className="btn-primary">
                  {language === 'de' ? 'Kennenlernen' : 'Get in touch'}
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
