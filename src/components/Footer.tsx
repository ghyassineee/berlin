'use client';

import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-[#0d0d0d] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-primary flex items-center justify-center text-white font-black text-lg">U</div>
              <div>
                <p className="text-sm font-black text-white tracking-tight">UFB</p>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-gray-500">Urban Facility Berlin</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-xs mb-8">
              {language === 'de'
                ? 'Ihr zuverlässiger Partner für professionelles Facility Management in Berlin. Reinigung, Technik und Sicherheit aus einer Hand.'
                : 'Your reliable partner for professional facility management in Berlin. Cleaning, technology, and safety from a single source.'}
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                {language === 'de' ? '24/7 Verfügbar in Berlin' : '24/7 Available in Berlin'}
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-6">
              {language === 'de' ? 'Seiten' : 'Pages'}
            </h4>
            <ul className="space-y-3">
              {[
                { href: '#home', de: 'Home', en: 'Home' },
                { href: '#services', de: 'Leistungen', en: 'Services' },
                { href: '#about', de: 'Über uns', en: 'About' },
                { href: '#testimonials', de: 'Bewertungen', en: 'Reviews' },
                { href: '#contact', de: 'Kontakt', en: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-primary font-semibold transition-colors">
                    {language === 'de' ? link.de : link.en}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-6">
              {language === 'de' ? 'Kontakt' : 'Contact'}
            </h4>
            <ul className="space-y-4 text-sm text-gray-400 font-semibold">
              <li>{content.company.contact.address}</li>
              <li>
                <a href={`tel:${content.company.contact.phone}`} className="hover:text-primary transition-colors">
                  {content.company.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${content.company.contact.email}`} className="hover:text-primary transition-colors">
                  {content.company.contact.email}
                </a>
              </li>
              <li className="text-gray-600 text-xs">
                Mo–Sa: 08:00–18:00 Uhr
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-widest">
            © {new Date().getFullYear()} {content.company.name}. {language === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-semibold text-gray-600 hover:text-primary uppercase tracking-widest transition-colors">
              {language === 'de' ? 'Datenschutz' : 'Privacy Policy'}
            </a>
            <a href="#" className="text-[10px] font-semibold text-gray-600 hover:text-primary uppercase tracking-widest transition-colors">
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
