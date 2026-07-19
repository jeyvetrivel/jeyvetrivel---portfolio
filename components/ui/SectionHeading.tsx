import Reveal from './Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}>
      <Reveal>
        <span className="eyebrow text-xs text-white/50 inline-flex items-center gap-3">
          <span className="h-px w-8 bg-white/30" aria-hidden="true" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display uppercase leading-[0.95] mt-4 text-[clamp(2.25rem,6vw,4.5rem)] text-balance">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-white/60 text-base md:text-lg max-w-xl leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
