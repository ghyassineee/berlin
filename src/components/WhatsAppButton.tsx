'use client';

import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white px-5 py-4 shadow-2xl flex items-center gap-3 font-bold text-sm hover:bg-[#20bc5c] transition-colors"
    >
      <MessageCircle size={24} />
      <span className="hidden md:inline">WhatsApp</span>
    </motion.button>
  );
}
