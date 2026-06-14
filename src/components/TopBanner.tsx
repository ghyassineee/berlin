'use client';

import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { motion } from 'framer-motion';

export default function TopBanner() {
  const { language } = useLanguage();

  return (
    <div className="bg-primary text-white py-2.5 overflow-hidden relative z-[60]">
      <div className="animate-marquee flex items-center gap-16">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-4 whitespace-nowrap">
            <span className="w-1 h-1 bg-white/60 rounded-full flex-shrink-0" />
            {content.topBanner[language]}
          </span>
        ))}
      </div>
    </div>
  );
}
