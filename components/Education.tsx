import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { education, certifications } from '@/lib/data';

export default function Education() {
  return (
    <section id="education" className="relative py-28 md:py-36 border-t hairline">
      <div className="container-shell grid lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading eyebrow="Academics" title="Education" />
          <div className="mt-12 space-y-10">
            {education.map((item) => (
              <Reveal key={item.degree}>
                <div className="border-l-2 border-white/20 pl-6">
                  <p className="text-xs uppercase tracking-widest2 text-white/45">
                    {item.period}
                  </p>
                  <h3 className="font-display uppercase text-xl md:text-2xl mt-2">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-white/60 text-sm md:text-base">
                    {item.institution}
                  </p>
                  <p className="mt-2 text-sm text-white/45">{item.score}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="Credentials" title="Certifications" />
          <div className="mt-12 space-y-6">
            {certifications.map((cert) => (
              <Reveal key={cert.title}>
                <div className="border hairline p-7 hover:border-white/35 transition-colors duration-300">
                  <p className="text-xs uppercase tracking-widest2 text-white/45">
                    {cert.period}
                  </p>
                  <h3 className="font-display uppercase text-xl md:text-2xl mt-2">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-white/60 text-sm md:text-base">{cert.issuer}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
