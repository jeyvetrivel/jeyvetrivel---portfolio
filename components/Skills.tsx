import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { skillCategories } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36 border-t hairline">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills"
          description="A practical toolkit built through hands-on client work — spanning search, content, paid media, and the tools that turn strategy into results."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={(i % 3) * 0.08}>
              <div className="h-full border hairline p-7 md:p-8 hover:border-white/35 hover:bg-white/[0.03] transition-all duration-300">
                <h3 className="font-display uppercase text-xl md:text-2xl leading-tight">
                  {category.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {category.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-xs md:text-sm text-white/65 border border-white/15 rounded-full px-3.5 py-1.5 hover:text-white hover:border-white/40 transition-colors duration-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
