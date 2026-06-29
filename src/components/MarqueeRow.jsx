import { useRef, useEffect } from 'react';

/**
 * Infinite horizontal marquee.
 * - Duplicates children so the loop is seamless.
 * - Pauses on hover.
 * - Pauses via IntersectionObserver when scrolled off-screen (saves CPU/GPU).
 * - `speed` is pixels-per-second (default 40).
 * - `reverse` scrolls right-to-left (default) or left-to-right.
 */
export default function MarqueeRow({ children, speed = 40, reverse = false, gap = 20 }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const offScreenRef = useRef(false);
  const lastTimeRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    function getHalfWidth() {
      return track.scrollWidth / 2;
    }

    function tick(timestamp) {
      if (lastTimeRef.current === null) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      if (!pausedRef.current && !offScreenRef.current) {
        const dir = reverse ? 1 : -1;
        posRef.current += dir * speed * delta;

        const half = getHalfWidth();
        if (!reverse && posRef.current <= -half) posRef.current += half;
        if (reverse && posRef.current >= 0) posRef.current -= half;
      }

      track.style.transform = `translateX(${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    rafRef.current = requestAnimationFrame(tick);

    const observer = new IntersectionObserver(
      ([entry]) => {
        offScreenRef.current = !entry.isIntersecting;
        if (entry.isIntersecting) lastTimeRef.current = null;
      },
      { threshold: 0 }
    );
    observer.observe(container);

    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, [speed, reverse]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{ overflow: 'hidden', width: '100%', position: 'relative' }}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; lastTimeRef.current = null; }}
    >
      {/* Fade edges */}
      <div style={{
        position: 'absolute', top: 0, left: 0, bottom: 0, width: 80, zIndex: 2,
        background: 'linear-gradient(90deg, rgb(10 10 10) 0%, transparent 100%)',
        pointerEvents: 'none',
      }}/>
      <div style={{
        position: 'absolute', top: 0, right: 0, bottom: 0, width: 80, zIndex: 2,
        background: 'linear-gradient(270deg, rgb(10 10 10) 0%, transparent 100%)',
        pointerEvents: 'none',
      }}/>

      <div
        ref={trackRef}
        style={{
          display: 'flex',
          gap: gap,
          width: 'max-content',
          willChange: 'transform',
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
