import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Fades/slides a section's heading and content items up into view as the
 * section scrolls into the viewport. Pass the same ref to the <section>
 * (sectionRef) and, optionally, to the direct-children wrapper you want
 * staggered (itemsRef) — e.g. the row-list, card grid, or steps column.
 */
export function useScrollReveal({ itemsSelector = '.section-hd, .row-item, .step-row' } = {}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = sectionRef.current.querySelectorAll(itemsSelector);
      targets.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            delay: Math.min(i * 0.06, 0.3),
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [itemsSelector]);

  return sectionRef;
}
