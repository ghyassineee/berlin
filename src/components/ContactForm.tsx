'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactForm() {
  const { language } = useLanguage();
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-28 section-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-px bg-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">
              {language === 'de' ? 'Kontakt' : 'Contact'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-foreground">
            {language === 'de' ? 'Haben Sie Fragen? Schreiben Sie uns.' : 'Have a question? Let\'s talk.'}
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-0 border border-border">
          {/* LEFT – Contact info */}
          <div className="lg:col-span-2 muted-bg p-10 md:p-14 text-foreground">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-6 h-px bg-primary" />
              <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">
                {language === 'de' ? 'Direktkontakt' : 'Direct contact'}
              </span>
            </div>
            <h3 className="text-3xl font-black tracking-tight leading-tight mb-10 text-foreground">
              {language === 'de' ? 'Starten wir Ihr Projekt.' : "Let's start your project."}
            </h3>

            <div className="space-y-8">
              {[
                {
                  icon: <Phone size={18} />,
                  label: language === 'de' ? 'Rufen Sie uns an' : 'Call us',
                  value: content.company.contact.phone,
                  sub: language === 'de' ? 'Mo–Sa | 08:00–18:00 Uhr' : 'Mon–Sat | 08:00–18:00',
                },
                {
                  icon: <Mail size={18} />,
                  label: 'Email',
                  value: content.company.contact.email,
                  sub: language === 'de' ? 'Antwort innerhalb von 24 Stunden' : 'Response within 24 hours',
                },
                {
                  icon: <MapPin size={18} />,
                  label: language === 'de' ? 'Büro Berlin' : 'Berlin Office',
                  value: content.company.contact.address,
                  sub: 'Berlin, Deutschland',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                    <div className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all duration-300 flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-500 mb-0.5">{item.label}</p>
                    <p className="font-bold text-foreground text-sm">{item.value}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 pt-8 border-t border-white/10">
              <p className="text-sm italic text-gray-400 leading-relaxed">
                {language === 'de'
                  ? '"UFB steht für Präzision und Verlässlichkeit. Wir freuen uns darauf, auch Ihr Objekt zum Strahlen zu bringen."'
                  : '"UFB stands for precision and reliability. We look forward to making your property shine."'}
              </p>
              <p className="mt-3 text-xs font-black text-primary uppercase tracking-widest">— Thomas Decker</p>
            </div>
          </div>

          {/* RIGHT – Form */}
          <div className="lg:col-span-3 p-10 md:p-14 card-bg">
            {isSuccess ? (
              <div className="h-full flex items-center justify-center text-center py-20">
                <div>
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Send size={28} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-black text-foreground mb-2">
                    {language === 'de' ? 'Nachricht gesendet!' : 'Message sent!'}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'de' ? 'Wir melden uns innerhalb von 24 Stunden.' : 'We\'ll get back to you within 24 hours.'}
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-2">
                      {language === 'de' ? 'Ihr Name' : 'Full Name'} *
                    </label>
                    <input
                      type="text" required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder={language === 'de' ? 'Max Mustermann' : 'John Smith'}
                      className="w-full border border-border input-bg px-4 py-3.5 text-sm font-medium text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email" required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="email@beispiel.de"
                      className="w-full border border-border input-bg px-4 py-3.5 text-sm font-medium text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-2">
                    {language === 'de' ? 'Telefonnummer' : 'Phone Number'}
                  </label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder={language === 'de' ? '+49 30 000 0000' : '+49 30 000 0000'}
                    className="w-full border border-border input-bg px-4 py-3.5 text-sm font-medium text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-2">
                    {language === 'de' ? 'Ihre Nachricht' : 'Your Message'} *
                  </label>
                  <textarea
                    rows={5} required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder={language === 'de' ? 'Beschreiben Sie Ihr Objekt und Ihre Anforderungen…' : 'Describe your property and requirements…'}
                    className="w-full border border-border input-bg px-4 py-3.5 text-sm font-medium text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center py-4 text-sm disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      {language === 'de' ? 'Anfrage senden' : 'Send Request'}
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
