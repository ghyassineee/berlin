'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-[#0d0d0d]">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Urban Facility Berlin"
          fill
          priority
          className="object-cover"
        />
        {/* Light mode: subtle warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/20 dark:from-[#0d0d0d]/98 dark:via-[#0d0d0d]/85 dark:to-[#0d0d0d]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full pt-36 pb-24">
        <div className="max-w-2xl">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="block w-10 h-px bg-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">
              {language === 'de' ? 'Berlin · Professionell · Zuverlässig' : 'Berlin · Professional · Reliable'}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-foreground mb-6"
          >
            {language === 'de' ? (
              <>Facility Management für <span className="text-gradient">anspruchsvolle</span> Immobilien.</>
            ) : (
              <>Facility Management for <span className="text-gradient">demanding</span> Properties.</>
            )}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg text-muted-foreground font-medium leading-relaxed mb-8 max-w-xl"
          >
            {language === 'de'
              ? 'UFB verbindet professionelle Reinigung, Haustechnik und schnelle Vor-Ort-Reaktion für Berliner Immobilien.'
              : 'UFB combines professional cleaning, building technology, and rapid on-site response for Berlin properties.'}
          </motion.p>

          {/* Feature bullets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col gap-2.5 mb-10"
          >
            {(language === 'de'
              ? ['Tiefgaragen & Parkhäuser', 'Haustechnik & Elektrik', 'Winterdienst & Sicherheit']
              : ['Underground Car Parks', 'Building Tech & Electrical', 'Winter Service & Safety']
            ).map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-semibold text-foreground/80">
                <CheckCircle size={16} className="text-primary flex-shrink-0" />
                {item}
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a href="#contact" className="btn-primary">
              {language === 'de' ? 'Angebot anfordern' : 'Request a Quote'}
              <ArrowRight size={16} />
            </a>
            <a href="#services" className="btn-outline">
              {language === 'de' ? 'Leistungen entdecken' : 'Explore Services'}
            </a>
          </motion.div>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-4 pt-8 border-t border-border"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-primary fill-primary" />
              ))}
            </div>
            <div>
              <p className="font-black text-sm text-foreground">4.9 / 5.0</p>
              <p className="text-xs text-muted-foreground">{language === 'de' ? 'Basierend auf Kundenbewertungen' : 'Based on client reviews'}</p>
            </div>
            <div className="w-px h-10 bg-border mx-2" />
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                {language === 'de' ? 'Aktiv in Berlin' : 'Active in Berlin'}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative right column – subtle stats card floating */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute right-8 bottom-16 hidden xl:flex flex-col gap-3 z-10"
      >
        {[
          { value: '5+', label: language === 'de' ? 'Jahre Erfahrung' : 'Years Experience' },
          { value: '24/7', label: language === 'de' ? 'Bereitschaft' : 'Availability' },
          { value: '100%', label: language === 'de' ? 'Kundenzufriedenheit' : 'Client Satisfaction' },
        ].map((stat) => (
          <div key={stat.value} className="bg-white/90 dark:bg-[#161616]/90 backdrop-blur-md border border-border px-6 py-4 flex items-center gap-4">
            <span className="text-2xl font-black text-primary">{stat.value}</span>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
