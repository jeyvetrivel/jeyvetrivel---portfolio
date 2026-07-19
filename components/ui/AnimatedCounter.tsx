'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

export default function AnimatedCounter({
  value,
  suffix = '',
  duration = 1.4,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <motion.span ref={ref} aria-hidden="true">
      {display}
      {suffix}
    </motion.span>
  );
}
