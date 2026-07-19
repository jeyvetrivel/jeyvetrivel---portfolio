import Image from 'next/image';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { industries } from '@/lib/data';

const highlights = [
  { label: 'Internship experience', value: 'Multi-industry client work' },
  { label: 'Core focus', value: 'Technical SEO & Performance Marketing' },
  { label: 'Currently building', value: 'Google Ads & Analytics expertise' },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 border-t hairline">
      <div className="container-shell grid lg:grid-cols-[0.85fr_1.15fr] gap-16 lg:gap-24 items-start">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 border hairline overflow-hidden">
            <Image
              src="/profile-placeholder.svg"
              alt="Placeholder portrait of Jeyvetrivel R — professional photo to be added"
              fill
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover"
              priority={false}
            />
          </div>
          <div className="absolute -bottom-6 -right-2 lg:right-8 bg-ink border hairline px-6 py-4 max-w-[220px]">
            <p className="text-xs uppercase tracking-widest2 text-white/50">Based in</p>
            <p className="font-display uppercase text-lg mt-1">Tamil Nadu, India</p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="About Me"
            title="About Me"
          />

          <Reveal delay={0.12}>
            <p className="mt-8 text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
              I&apos;m a digital marketer who enjoys solving online growth
              challenges through a combination of SEO, content strategy, and
              creative marketing. During my internship, I&apos;ve worked with
              businesses across tourism, healthcare, aviation, interior
              design, media, e-commerce, and service industries, helping
              improve their digital presence through optimization, content
              creation, and marketing campaigns. I&apos;m currently focused
              on strengthening my expertise in technical SEO, Google Ads,
              analytics, and performance marketing while building practical,
              results-oriented digital marketing solutions for businesses.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-12 grid sm:grid-cols-3 gap-6 border-t hairline pt-8">
              {highlights.map((h) => (
                <div key={h.label}>
                  <dt className="text-xs uppercase tracking-widest2 text-white/45">
                    {h.label}
                  </dt>
                  <dd className="mt-2 font-display text-lg leading-tight uppercase">
                    {h.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-10">
              <p className="text-xs uppercase tracking-widest2 text-white/45 mb-4">
                Industries served
              </p>
              <ul className="flex flex-wrap gap-3">
                {industries.map((industry) => (
                  <li
                    key={industry}
                    className="text-sm border hairline px-4 py-2 text-white/70 hover:text-white hover:border-white/40 transition-colors duration-300"
                  >
                    {industry}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
