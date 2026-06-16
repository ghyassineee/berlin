'use client';

import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const { language } = useLanguage();

  const handleClick = () => {
    const message = language === 'de' 
      ? 'Hallo Urban Facility Berlin, ich interessiere mich für Ihre Leistungen.' 
      : 'Hello Urban Facility Berlin, I am interested in your services.';
    const url = `https://wa.me/${content.company.contact.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      aria-label={language === 'de' ? 'WhatsApp' : 'WhatsApp'}
      title={language === 'de' ? 'WhatsApp' : 'WhatsApp'}
      className="fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl bg-[#25D366] text-white hover:bg-[#20bc5c] transition-colors"
    >
      {/* Inline WhatsApp SVG (white) */}
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M20.52 3.48A11.88 11.88 0 0 0 12.01.02C6.01.02 1.27 4.77 1.27 10.77c0 1.9.5 3.76 1.45 5.4L.02 23.98l8.09-2.13a11.93 11.93 0 0 0 3.9.64c6 0 10.74-4.74 10.74-10.74 0-2.86-1.12-5.54-3.23-7.27z" fill="#fff"/>
        <path d="M17.33 14.1c-.26-.13-1.53-.76-1.77-.85-.23-.1-.4-.13-.57.13-.17.26-.66.85-.81 1.02-.15.17-.3.19-.56.06-.26-.13-1.07-.39-2.04-1.25-.75-.67-1.25-1.52-1.4-1.78-.15-.26-.02-.4.12-.53.12-.12.26-.31.39-.46.13-.15.17-.26.26-.43.08-.17.04-.32-.02-.45-.06-.13-.57-1.38-.78-1.88-.2-.48-.41-.42-.57-.42-.15 0-.33-.02-.51-.02-.17 0-.45.06-.69.33-.24.27-.92.9-.92 2.2 0 1.3.94 2.56 1.07 2.74.13.17 1.85 2.9 4.48 3.95 2.62 1.05 2.62.7 3.09.66.47-.03 1.53-.62 1.74-1.22.21-.6.21-1.12.15-1.22-.06-.1-.23-.15-.49-.28z" fill="#fff"/>
      </svg>
    </motion.button>
  );
}
