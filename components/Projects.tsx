'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36 border-t hairline">
      <div className="container-shell">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects"
            description="Client engagements spanning SEO, content, and social — each one focused on measurable visibility and growth."
          />
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.06}>
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="group block h-full border hairline hover:border-white/40 transition-colors duration-300 relative overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b hairline">
                  <Image
                    src={`/project-${i + 1}.svg`}
                    alt={`Placeholder preview thumbnail for ${project.title} — live screenshot coming soon`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-ink/40 via-transparent to-transparent"
                  />
                </div>

                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display uppercase text-xl md:text-2xl leading-tight">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 mt-1 text-white/40 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>

                  <p className="mt-3 text-sm text-white/60 leading-relaxed">
                    {project.valueProposition}
                  </p>

                  {project.highlights.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.highlights.slice(0, 3).map((h) => (
                        <li
                          key={h}
                          className="text-[11px] uppercase tracking-wide text-white/45 border border-white/12 px-2.5 py-1"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-5 pt-5 border-t hairline flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[11px] text-white/40">
                          {t}
                          {t !== project.tech[project.tech.length - 1] && ' · '}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs uppercase tracking-widest2 text-white/70 group-hover:text-white transition-colors">
                      Live Website
                    </span>
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
