'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0d0d0d]"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-10 bg-[#c8a96e] flex items-center justify-center text-white font-black text-xl">U</div>
            <div>
              <p className="text-white font-black text-xl tracking-tight">UFB</p>
              <p className="text-gray-500 text-[9px] font-bold uppercase tracking-[0.3em]">Urban Facility Berlin</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            style={{ transformOrigin: 'left' }}
            className="w-48 h-0.5 bg-[#c8a96e]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
