'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNavigate = () => setOpen(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled ? 'bg-ink/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <nav
          aria-label="Primary"
          className="container-shell flex items-center justify-between h-20"
        >
          <a
            href="#top"
            className="font-display uppercase text-lg md:text-xl tracking-tight z-[60]"
          >
            Jeyvetrivel R
          </a>

          <ul className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm uppercase tracking-widest2 text-white/70 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center border border-white/25 hover:border-white/70 px-6 py-2.5 text-sm uppercase tracking-widest2 transition-all duration-300 hover:-translate-y-0.5"
          >
            Let&apos;s Talk
          </a>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="lg:hidden z-[60] p-2 -mr-2 text-white"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-ink lg:hidden flex flex-col justify-center px-8"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={handleNavigate}
                    className="font-display uppercase text-4xl sm:text-5xl py-3 block border-b border-white/10"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ delay: 0.08 * navLinks.length, duration: 0.5 }}
                className="mt-8"
              >
                <a
                  href="#contact"
                  onClick={handleNavigate}
                  className="inline-flex items-center border border-white/30 px-7 py-3 text-sm uppercase tracking-widest2"
                >
                  Let&apos;s Talk
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
