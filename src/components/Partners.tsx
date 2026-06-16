'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function Partners() {
  const { language } = useLanguage();
  const partners = ['VICUS AG Leipzig', 'Kaiser-Wilhelm-Passage', 'Contipark', 'VICUS AG Leipzig', 'Kaiser-Wilhelm-Passage', 'Contipark'];

  return (
    <section className="py-14 muted-bg border-y border-border">
      <div className="max-w-7xl mx-auto px-8 mb-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground"
        >
          {language === 'de' ? 'Vertrauen unserer Partner & Auftraggeber' : 'Trusted by our partners & clients'}
        </motion.p>
      </div>
      <div className="overflow-hidden">
        <div className="animate-marquee flex items-center gap-24 px-8">
          {[...partners, ...partners, ...partners].map((p, i) => (
            <span
              key={i}
              className="text-xl font-black text-foreground/10 dark:text-foreground/5 hover:text-primary transition-colors duration-500 whitespace-nowrap cursor-default select-none uppercase tracking-widest"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
