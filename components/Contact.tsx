'use client';

import { FormEvent, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { contactInfo } from '@/lib/data';

const quickCards = [
  {
    icon: Mail,
    label: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: contactInfo.phone,
    href: undefined,
    placeholder: true,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: contactInfo.location,
    href: undefined,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 border-t hairline">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Talk"
          description="Have a project, a campaign, or just a question about SEO strategy? I'd love to hear from you."
        />

        <div className="mt-16 grid lg:grid-cols-[1fr_1.3fr] gap-14 lg:gap-20">
          <div className="space-y-5">
            {quickCards.map((card) => {
              const Icon = card.icon;
              const content = (
                <div className="flex items-start gap-4 border hairline p-6 hover:border-white/35 transition-colors duration-300 h-full">
                  <Icon size={20} className="mt-0.5 text-white/60" aria-hidden="true" />
                  <div>
                    <p className="text-xs uppercase tracking-widest2 text-white/45">
                      {card.label}
                      {card.placeholder && (
                        <span className="ml-2 normal-case tracking-normal text-white/30">
                          (placeholder)
                        </span>
                      )}
                    </p>
                    <p className="mt-1.5 text-base md:text-lg break-words">{card.value}</p>
                  </div>
                </div>
              );
              return (
                <Reveal key={card.label}>
                  {card.href ? (
                    <a href={card.href} className="block">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-xs uppercase tracking-widest2 text-white/45">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange('name')}
                    className="mt-2 w-full bg-transparent border-b hairline focus:border-white/70 py-3 text-base outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs uppercase tracking-widest2 text-white/45">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange('email')}
                    className="mt-2 w-full bg-transparent border-b hairline focus:border-white/70 py-3 text-base outline-none transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="text-xs uppercase tracking-widest2 text-white/45">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange('subject')}
                  className="mt-2 w-full bg-transparent border-b hairline focus:border-white/70 py-3 text-base outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-xs uppercase tracking-widest2 text-white/45">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange('message')}
                  className="mt-2 w-full bg-transparent border-b hairline focus:border-white/70 py-3 text-base outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-3 bg-paper text-ink px-7 py-3.5 text-sm uppercase tracking-widest2 font-semibold transition-all duration-300 hover:-translate-y-0.5"
              >
                Send Message
                <Send
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
              <p className="text-xs text-white/35">
                Submitting opens your email client with this message pre-filled to{' '}
                {contactInfo.email}.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
