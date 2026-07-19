'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import AnimatedCounter from './ui/AnimatedCounter';
import { heroStats } from '@/lib/data';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full flex items-end overflow-hidden"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <video
          className="h-full w-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Cinematic background reel representing digital growth and performance marketing"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/20 to-transparent" />
        <div className="absolute inset-0 grain" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 container-shell pb-16 pt-40 md:pb-24 w-full"
      >
        <motion.p
          variants={item}
          className="eyebrow text-xs md:text-sm text-white/70"
        >
          Digital Marketing • SEO • Performance Marketing
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display uppercase mt-6 leading-[0.88] text-[clamp(3.25rem,12vw,9rem)]"
        >
          Digital
          <br />
          Growth
          <br />
          Engineer
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-lg md:text-xl text-white/85 font-medium leading-snug"
        >
          Digital Marketer focused on turning SEO, content, and performance
          marketing into measurable business growth.
        </motion.p>

        <motion.p
          variants={item}
          className="mt-5 max-w-xl text-sm md:text-base text-white/55 leading-relaxed"
        >
          I work at the intersection of SEO, content marketing, and digital
          advertising to help brands improve their online visibility and
          connect with the right audience. Through hands-on client projects,
          I&apos;ve built practical experience in search optimization,
          content creation, website management, and campaign execution while
          continuously expanding my expertise in digital marketing.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 bg-paper text-ink px-7 py-3.5 text-sm uppercase tracking-widest2 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)]"
          >
            View My Work
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-white/30 px-7 py-3.5 text-sm uppercase tracking-widest2 transition-all duration-300 hover:border-white/70 hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid grid-cols-3 gap-6 max-w-xl border-t border-white/15 pt-8"
        >
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl md:text-4xl">
                {stat.display ?? (
                  <>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </>
                )}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest2 text-white/50">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="hidden md:flex absolute bottom-8 right-8 md:right-12 z-10 items-center gap-2 text-white/50 hover:text-white/90 transition-colors"
      >
        <span className="text-xs uppercase tracking-widest2 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
