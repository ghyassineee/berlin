'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Moon, Sun, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: { de: 'Home', en: 'Home' }, href: '#home' },
    { name: { de: 'Leistungen', en: 'Services' }, href: '#services' },
    { name: { de: 'Über uns', en: 'About' }, href: '#about' },
    { name: { de: 'Bewertungen', en: 'Reviews' }, href: '#testimonials' },
    { name: { de: 'Kontakt', en: 'Contact' }, href: '#contact' },
  ];

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar – Aventis style */}
      <div className="hidden md:block bg-[#111] dark:bg-[#080808] text-gray-400 text-xs">
        <div className="max-w-7xl mx-auto px-8 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span>Kolonnenstraße 8, 10827 Berlin</span>
            <span className="text-gray-600">|</span>
            <a href="tel:01735750202" className="hover:text-primary transition-colors">+49 173 575 0202</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:kontakt@ufb26.de" className="hover:text-primary transition-colors">kontakt@ufb26.de</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#111]/95 backdrop-blur-2xl border-b border-gray-200 dark:border-[#2a2a2a] shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-primary flex items-center justify-center text-white font-black text-lg">
              U
            </div>
            <div>
              <p className="text-sm font-black tracking-tight leading-none text-foreground">UFB</p>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Urban Facility Berlin</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className={`nav-link py-2 text-sm font-semibold transition-colors duration-200 ${
                  scrolled ? 'text-foreground/80 hover:text-foreground' : 'text-foreground/90 hover:text-foreground'
                }`}>
                {link.name[language]}
              </a>
            ))}
          </div>

          {/* Right Controls */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 flex items-center justify-center border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-200"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Lang Toggle */}
            <button
              onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
              className="flex items-center gap-1.5 px-3 py-2 border border-border hover:border-primary text-sm font-bold text-muted-foreground hover:text-primary transition-all duration-200"
            >
              <Globe size={14} />
              <span className="uppercase text-xs">{language}</span>
            </button>

            {/* CTA */}
            <a href="#contact" className="btn-primary text-xs py-3 px-6">
              {language === 'de' ? 'Angebot anfragen' : 'Get a Quote'}
            </a>
          </div>

          {/* Mobile Burger */}
          <button className="lg:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white dark:bg-[#111] border-t border-border overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}
                    className="text-lg font-bold text-foreground hover:text-primary py-2 border-b border-border transition-colors">
                    {link.name[language]}
                  </a>
                ))}
                <div className="flex gap-3 mt-4">
                  <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="flex-1 py-3 border border-border text-center text-sm font-bold hover:border-primary transition-colors">
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                  </button>
                  <button onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
                    className="flex-1 py-3 border border-border text-center text-sm font-bold hover:border-primary transition-colors uppercase">
                    {language === 'de' ? 'EN' : 'DE'}
                  </button>
                </div>
                <a href="#contact" className="btn-primary justify-center mt-2" onClick={() => setIsOpen(false)}>
                  {language === 'de' ? 'Angebot anfragen' : 'Get a Quote'}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
