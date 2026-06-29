import { useRef, useEffect } from 'react';

/**
 * Infinite horizontal marquee.
 * - Duplicates children so the loop is seamless.
 * - Pauses on hover.
 * - `speed` is pixels-per-second (default 40).
 * - `reverse` scrolls right-to-left (default) or left-to-right.
 */
export default function MarqueeRow({ children, speed = 40, reverse = false, gap = 20 }) {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const lastTimeRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // We need half the scroll width (one set of children)
    function getHalfWidth() {
      return track.scrollWidth / 2;
    }

    function tick(timestamp) {
      if (lastTimeRef.current === null) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000; // seconds
      lastTimeRef.current = timestamp;

      if (!pausedRef.current) {
        const dir = reverse ? 1 : -1;
        posRef.current += dir * speed * delta;

        const half = getHalfWidth();
        // Reset when we've scrolled one full copy
        if (!reverse && posRef.current <= -half) posRef.current += half;
        if (reverse && posRef.current >= 0) posRef.current -= half;
      }

      track.style.transform = `translateX(${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, reverse]);

  return (
    <div
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
        {/* Original + duplicate for seamless loop */}
        {children}
        {children}
      </div>
    </div>
  );
}
