'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '5+', de: 'Jahre Erfahrung in Berlin', en: 'Years of Experience in Berlin' },
  { value: '24/7', de: 'Notdienst & Rufbereitschaft', en: 'Emergency & On-Call Service' },
  { value: '98%', de: 'Kundenzufriedenheit', en: 'Client Satisfaction Rate' },
  { value: '10K+', de: 'Betreute Quadratmeter', en: 'Managed Square Meters' },
];

function useInView(ref: React.RefObject<HTMLElement>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => setInView(e.isIntersecting));
    }, { threshold: 0.5 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref as React.RefObject<HTMLElement>);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1000;
    let raf = 0;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(progress * end);
      setValue(current);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end]);
  return <span ref={ref as any}>{value}{suffix}</span>;
}

export default function Stats() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef as React.RefObject<HTMLElement>);

  return (
    <section ref={sectionRef} className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-8 py-12 text-center lg:text-left"
            >
              <p className="text-4xl lg:text-5xl font-black text-primary mb-2">
                {/* try to animate numeric portion where possible */}
                {typeof stat.value === 'string' && /\d+/.test(stat.value)
                  ? (() => {
                      const digits = parseInt(stat.value.replace(/[^0-9]/g, ''), 10);
                      const suffix = stat.value.replace(/[0-9]/g, '');
                      return <CountUp end={isNaN(digits) ? 0 : digits} suffix={suffix} />;
                    })()
                  : stat.value}
              </p>
              <p className="text-sm font-semibold text-muted-foreground leading-snug">{language === 'de' ? stat.de : stat.en}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
