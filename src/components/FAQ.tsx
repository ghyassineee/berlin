'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = language === 'de' ? [
    {
      q: 'Welche Arten von Objekten betreut UFB?',
      a: 'Wir betreuen Tiefgaragen, Parkhäuser, Bürokomplexe, Wohnanlagen und gewerbliche Objekte in ganz Berlin. Unser Fokus liegt auf anspruchsvollen Immobilien mit hohen Sauberkeitsstandards.',
    },
    {
      q: 'Wie funktioniert der 24/7 Notdienst?',
      a: 'Unsere Rufbereitschaft ist 365 Tage im Jahr aktiv. Bei technischen Störungen oder dringendem Reinigungsbedarf stehen wir Ihnen jederzeit zur Verfügung und reagieren schnell vor Ort.',
    },
    {
      q: 'Wie schnell erhalte ich ein Angebot?',
      a: 'Nach Ihrer Anfrage erstellen wir innerhalb von 24 Stunden ein maßgeschneidertes Angebot für Ihr Objekt. Für dringende Anfragen stehen wir auch telefonisch zur Verfügung.',
    },
    {
      q: 'Was unterscheidet UFB von anderen Anbietern?',
      a: 'Unser Gründer Thomas Decker ist ausgebildeter Elektriker mit jahrelanger Praxiserfahrung in Großobjekten. Wir bieten Reinigung UND technische Betreuung aus einer Hand – ohne Subunternehmer.',
    },
    {
      q: 'Welche Leistungen sind im Winterdienst enthalten?',
      a: 'Unser Winterdienst umfasst 24h Bereitschaft bei Schneefall, Schneeräumung von Gehwegen und Einfahrten, Streudienst gegen Glätte sowie die Aufnahme von Streugut nach der Saison.',
    },
  ] : [
    {
      q: 'What types of properties does UFB manage?',
      a: 'We manage underground car parks, parking garages, office complexes, residential buildings, and commercial properties across Berlin, focusing on demanding properties with high cleanliness standards.',
    },
    {
      q: 'How does the 24/7 emergency service work?',
      a: 'Our on-call service is active 365 days a year. For technical faults or urgent cleaning needs, we are available at any time and respond quickly on-site.',
    },
    {
      q: 'How quickly will I receive a quote?',
      a: 'After your enquiry, we create a tailored quote for your property within 24 hours. For urgent requests, we are also available by phone.',
    },
    {
      q: 'What sets UFB apart from other providers?',
      a: 'Our founder Thomas Decker is a qualified electrician with years of hands-on experience in large properties. We offer cleaning AND technical management from a single source – without subcontractors.',
    },
    {
      q: 'What is included in the winter service?',
      a: 'Our winter service includes 24h standby during snowfall, snow removal from pavements and driveways, gritting against ice, and removal of grit after the season.',
    },
  ];

  return (
    <section className="py-28 muted-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left Label */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-px bg-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-foreground mb-6">
              {language === 'de' ? 'Häufig gestellte Fragen.' : 'Frequently asked questions.'}
            </h2>
            <p className="text-muted-foreground font-medium leading-relaxed">
              {language === 'de'
                ? 'Haben Sie weitere Fragen? Kontaktieren Sie uns direkt.'
                : 'Have more questions? Contact us directly.'}
            </p>
            <a href="#contact" className="btn-primary mt-8 inline-flex">
              {language === 'de' ? 'Jetzt anfragen' : 'Get in touch'}
            </a>
          </div>

          {/* Right Accordion */}
          <div className="lg:col-span-3 divide-y divide-border border-t border-border">
            {faqs.map((faq, i) => (
              <div key={i} className="py-1">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className={`font-bold text-base pr-4 leading-snug transition-colors ${openIndex === i ? 'text-primary' : 'text-foreground'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-muted-foreground transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-primary' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground font-medium leading-relaxed pb-5 text-sm">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
