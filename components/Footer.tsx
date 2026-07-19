'use client';

import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { contactInfo } from '@/lib/data';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t hairline py-14">
      <div className="container-shell">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div>
            <a href="#top" className="font-display uppercase text-xl">
              Jeyvetrivel R
            </a>
            <p className="mt-2 text-sm text-white/45">
              © 2026 Jeyvetrivel R. All rights reserved.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/55 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="h-10 w-10 flex items-center justify-center border hairline hover:border-white/50 hover:text-white text-white/60 transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (placeholder — to be updated)"
              className="h-10 w-10 flex items-center justify-center border hairline hover:border-white/50 hover:text-white text-white/60 transition-colors"
              title="Placeholder link — GitHub profile to be added"
            >
              <Github size={16} />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="h-10 w-10 flex items-center justify-center border hairline hover:border-white/50 hover:text-white text-white/60 transition-colors"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
