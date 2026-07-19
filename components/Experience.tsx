import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { experience } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36 border-t hairline">
      <div className="container-shell">
        <SectionHeading eyebrow="Journey" title="Experience" />

        <div className="mt-16 relative">
          <div
            aria-hidden="true"
            className="absolute left-[7px] top-2 bottom-2 w-px bg-white/15 hidden sm:block"
          />
          <ol className="space-y-14">
            {experience.map((role) => (
              <li key={role.role} className="relative sm:pl-12">
                <span
                  aria-hidden="true"
                  className="hidden sm:block absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-white/70 bg-ink"
                />
                <Reveal>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                    <h3 className="font-display uppercase text-2xl md:text-3xl">
                      {role.role}
                    </h3>
                    <span className="text-xs uppercase tracking-widest2 text-white/45">
                      {role.period}
                    </span>
                  </div>
                  <p className="mt-1 text-white/60 text-sm md:text-base">{role.org}</p>

                  <ul className="mt-6 space-y-3 max-w-2xl">
                    {role.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm md:text-base text-white/65 leading-relaxed"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1 w-1 rounded-full bg-white/40 shrink-0"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
