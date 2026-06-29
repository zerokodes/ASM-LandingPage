import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MarqueeRow from './MarqueeRow';

gsap.registerPlugin(ScrollTrigger);

const PAINS = [
  {
    emoji: '😩',
    stat: '3hrs',
    statLabel: 'wasted daily',
    title: 'Staff drowning in WhatsApp messages',
    desc: 'Your team spends hours manually replying to the same questions — pricing, availability, delivery — instead of doing high-value work.',
    accent: '#ef4444',
  },
  {
    emoji: '💸',
    stat: '60%',
    statLabel: 'of leads lost',
    title: 'Lost sales from slow responses',
    desc: 'Customers who don\'t get a reply within minutes go elsewhere. Every delayed response is a confirmed lost sale.',
    accent: '#f59e0b',
  },
  {
    emoji: '🌙',
    stat: '0',
    statLabel: 'after-hours coverage',
    title: 'Zero coverage after 6pm',
    desc: 'Your business stops at 6pm. Customer inquiries pile up overnight and some never come back by morning.',
    accent: '#8b5cf6',
  },
  {
    emoji: '📉',
    stat: '∅',
    statLabel: 'sales data captured',
    title: 'No insight into what customers want',
    desc: 'WhatsApp conversations vanish into chat history. You have zero data on what products are asked about most.',
    accent: '#ec4899',
  },
  {
    emoji: '🔁',
    stat: '80%',
    statLabel: 'same questions daily',
    title: 'Repetitive questions eat your time',
    desc: '"Do you deliver here?" "What\'s the price?" "Is it in stock?" The same 10 questions, a hundred times a day.',
    accent: '#f97316',
  },
  {
    emoji: '🤯',
    stat: '5×',
    statLabel: 'overhead to scale',
    title: 'Every growth milestone means new hires',
    desc: 'Every 20% growth in customers means hiring another WhatsApp responder. There\'s no leverage — until now.',
    accent: '#06b6d4',
  },
];

/**
 * Horizontal split-panel: solid left block = stat, right block = content.
 * The card is wide and short — a pill-panel, not a rectangle.
 * A notch is cut from the right edge of the left panel for a connector feel.
 */
function PainCard({ item }) {
  const r = parseInt(item.accent.slice(1, 3), 16);
  const g = parseInt(item.accent.slice(3, 5), 16);
  const b = parseInt(item.accent.slice(5, 7), 16);

  return (
    <div
      className="pain-card-inner"
      style={{
        width: 420,
        flexShrink: 0,
        borderRadius: 14,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        border: `1px solid rgba(${r},${g},${b},0.22)`,
        background: 'rgb(13 11 10)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-5px) scale(1.015)';
        e.currentTarget.style.boxShadow = `0 18px 48px rgba(${r},${g},${b},0.22)`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* LEFT — stat panel */}
      <div style={{
        width: 110,
        flexShrink: 0,
        background: `linear-gradient(160deg, rgba(${r},${g},${b},0.18) 0%, rgba(${r},${g},${b},0.06) 100%)`,
        borderRight: `1px solid rgba(${r},${g},${b},0.2)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem 0.75rem',
        position: 'relative',
      }}>
        {/* Vertical accent bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, bottom: 0, width: 3,
          background: `linear-gradient(180deg, rgba(${r},${g},${b},0.9), rgba(${r},${g},${b},0.1))`,
        }}/>

        <div style={{ fontSize: '1.6rem', marginBottom: 8 }}>{item.emoji}</div>
        <div style={{
          fontSize: '1.8rem', fontWeight: 900, color: `rgba(${r},${g},${b},1)`,
          letterSpacing: '-0.04em', lineHeight: 1, textAlign: 'center',
        }}>
          {item.stat}
        </div>
        <div style={{
          fontSize: '0.6rem', color: `rgba(${r},${g},${b},0.65)`,
          fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em',
          marginTop: 4, textAlign: 'center', lineHeight: 1.3,
        }}>
          {item.statLabel}
        </div>
      </div>

      {/* RIGHT — content panel */}
      <div style={{
        flex: 1,
        padding: '1.25rem 1.1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle glow */}
        <div style={{
          position: 'absolute', top: -20, right: -20, width: 80, height: 80,
          background: `radial-gradient(circle, rgba(${r},${g},${b},0.07) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}/>
        <h3 style={{
          color: 'rgb(240 237 233)', fontWeight: 700,
          fontSize: '0.875rem', lineHeight: 1.4, marginBottom: 6,
        }}>
          {item.title}
        </h3>
        <p style={{ color: 'rgb(163 158 153)', fontSize: '0.8rem', lineHeight: 1.6 }}>
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function Problem() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const rowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 80%' } }
      );
      gsap.fromTo(rowRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: rowRef.current, start: 'top 85%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const cards = PAINS.map(item => <PainCard key={item.title} item={item} />);

  return (
    <section ref={sectionRef} className="section-pad-lg" style={{ padding: '6rem 0', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', marginBottom: '3.5rem' }}>
        <div ref={titleRef} style={{ opacity: 0, textAlign: 'center' }}>
          <span className="section-label">The Problem</span>
          <h2 style={{ marginTop: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'rgb(245 245 243)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Running a business on WhatsApp<br />
            <span style={{ color: 'rgb(120 113 108)' }}>is exhausting.</span>
          </h2>
          <p style={{ marginTop: '1rem', color: 'rgb(163 158 153)', fontSize: '1.05rem', maxWidth: 520, margin: '1rem auto 0' }}>
            Every growing business hits this wall. Your best salespeople become
            message-answering robots. Here&apos;s the real cost.
          </p>
        </div>
      </div>

      {/* Constrained marquee — aligns with rest of page */}
      <div ref={rowRef} className="marquee-container" style={{ opacity: 0, maxWidth: 1280, margin: '0 auto', padding: '0 2rem', overflow: 'hidden' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <MarqueeRow speed={48} gap={16} reverse={false}>
            {cards.slice(0, 3)}
            {cards.slice(0, 3)}
          </MarqueeRow>
          <MarqueeRow speed={45} gap={16} reverse={true}>
            {cards.slice(3)}
            {cards.slice(3)}
          </MarqueeRow>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <p style={{ color: 'rgb(87 83 78)', fontSize: '0.875rem' }}>Sound familiar?</p>
        <p style={{ color: 'rgb(245 245 243)', fontWeight: 700, fontSize: '1.25rem', marginTop: 8 }}>
          There&apos;s a better way. ↓
        </p>
      </div>
    </section>
  );
}
