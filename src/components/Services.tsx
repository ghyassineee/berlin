'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';

export default function Services() {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = content.services[activeIndex];

  return (
    <section id="services" className="py-28 section-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-px bg-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">
                {language === 'de' ? 'Leistungsbereiche' : 'Service Areas'}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-foreground">
              {language === 'de' ? 'Unsere Fachleistungen für Ihr Objekt.' : 'Our specialist services for your property.'}
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-muted-foreground font-medium leading-relaxed">
              {language === 'de'
                ? 'Professionelle Gebäudedienstleistungen aus einer Hand – zuverlässig, effizient und mit höchstem Qualitätsanspruch für Berliner Immobilien.'
                : 'Professional building services from a single source – reliable, efficient, and with the highest quality standards for Berlin properties.'}
            </p>
          </div>
        </div>

        {/* Two-panel layout: left tabs, right detail */}
        <div className="grid lg:grid-cols-5 gap-0 lg:border lg:border-border">

          {/* LEFT – Service Tab List */}
          <div className="lg:col-span-2 muted-bg lg:border-r lg:border-border">
            {content.services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left px-6 sm:px-8 py-6 sm:py-7 border-b border-border transition-all duration-300 group flex items-center justify-between ${
                  activeIndex === index
                    ? 'muted-bg border-l-2 border-l-primary'
                    : 'hover:muted-bg/95'
                }`}
              >
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-1 block">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={`text-base font-black tracking-tight ${activeIndex === index ? 'text-foreground' : 'text-foreground/60 group-hover:text-foreground'}`}>
                    {service.title[language]}
                  </span>
                </div>
                <ChevronRight
                  size={16}
                  className={`transition-transform flex-shrink-0 ${activeIndex === index ? 'text-primary translate-x-1' : 'text-muted-foreground/30'}`}
                />
              </button>
            ))}
          </div>

          {/* RIGHT – Service Detail */}
          <div className="lg:col-span-3 p-6 md:p-14 card-bg">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-3 block">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(content.services.length).padStart(2, '0')}
                </span>
                <h3 className="text-3xl md:text-4xl font-black tracking-tight text-foreground mb-4 leading-tight">
                  {activeService.title[language]}
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed mb-8">
                  {activeService.shortDesc[language]}
                </p>

                {/* Feature List */}
                <div className="space-y-3 mb-10">
                  {activeService.details[language].map((detail, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={17} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-foreground/80 leading-snug">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Reference Projects */}
                {activeService.projects && activeService.projects.length > 0 && (
                  <div className="border-t border-border pt-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-4">
                      {language === 'de' ? 'Referenzprojekte' : 'Reference Projects'}
                    </p>
                    <div className="flex gap-4 md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory touch-pan-x pb-4 md:pb-0 items-stretch">
                      {activeService.projects.map((project, i) => (
                        <div key={i} className="card-bg border border-border p-4 min-w-[85%] sm:min-w-[70%] md:min-w-0 snap-center flex-shrink-0">
                          <div className="grid grid-cols-3 gap-2 mb-3">
                            {(project.images || []).slice(0,3).map((img: string, idx: number) => (
                              // using simple img tag to avoid extra next/image layout complexity here
                              <img key={idx} src={img} alt={`${project.name} ${idx+1}`} className="w-full h-20 object-cover" />
                            ))}
                          </div>
                          <p className="font-black text-foreground mb-1">{project.name}</p>
                          <p className="text-sm text-muted-foreground">{project.desc[language]}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-10">
                  <a href="#contact" className="btn-primary">
                    {language === 'de' ? 'Angebot anfragen' : 'Request Quote'}
                    <ArrowRight size={15} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA row */}
        <div className="mt-10 flex justify-center">
          <a href="#contact" className="btn-outline">
            {language === 'de' ? 'Alle Leistungen anfragen' : 'Inquire about all services'}
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
