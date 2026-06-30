import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MarqueeRow from './MarqueeRow';

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
  {
    name: 'Adaeze Okonkwo',
    role: 'Owner, FreshMart Lagos',
    avatar: 'AO',
    quote: 'Before ChatSeller I was answering WhatsApp from 6am to midnight. Now my AI handles 90% of inquiries automatically and I actually sleep.',
    metric: '90%',
    metricLabel: 'fewer manual replies',
    accent: '#34d399',
  },
  {
    name: 'Emeka Nwosu',
    role: 'CEO, QuickDeliver NG',
    avatar: 'EN',
    quote: "Our order volume grew 3x after the first month. ChatSeller handles customers while we focus on fulfilment. It's like hiring a top salesperson who never sleeps.",
    metric: '3×',
    metricLabel: 'order growth in 30 days',
    accent: '#60a5fa',
  },
  {
    name: 'Fatima Abdullahi',
    role: 'Founder, Glam by Fatima',
    avatar: 'FA',
    quote: "I was skeptical at first — I thought customers would hate talking to a bot. They don't even know it's AI. My reviews got better because response time improved.",
    metric: '4.9★',
    metricLabel: 'Google review score',
    accent: '#f59e0b',
  },
  {
    name: 'Olumide Adeyemi',
    role: 'Director, TechGear Store',
    avatar: 'OA',
    quote: 'The knowledge base feature is incredible. I uploaded our full product catalog and ChatSeller started giving accurate technical answers immediately. No training needed.',
    metric: '0hrs',
    metricLabel: 'training time required',
    accent: '#818cf8',
  },
  {
    name: 'Chioma Ezeh',
    role: "MD, Mama's Kitchen Catering",
    avatar: 'CE',
    quote: 'We handle 200+ orders per week entirely through WhatsApp now. ChatSeller logs everything, sends confirmations, and alerts us only for edge cases. It runs itself.',
    metric: '200+',
    metricLabel: 'orders weekly, automated',
    accent: '#fb923c',
  },
  {
    name: 'Babatunde Lawal',
    role: 'GM, Lawal Agro Supplies',
    avatar: 'BL',
    quote: 'We operate across 4 states and staff overhead for WhatsApp was killing us. ChatSeller standardized everything — same quality response whether Abuja or Port Harcourt.',
    metric: '4',
    metricLabel: 'states, one AI agent',
    accent: '#ec4899',
  },
];

/**
 * Testimonial card — "stage spotlight" shape.
 * Top edge is flat, but the bottom is cut at an angle via clip-path,
 * making cards look like tilted stage panels. The large quote glyph
 * is the primary structural element — fills the top third.
 */
function TestiCard({ review }) {
  const r = parseInt(review.accent.slice(1, 3), 16);
  const g = parseInt(review.accent.slice(3, 5), 16);
  const b = parseInt(review.accent.slice(5, 7), 16);

  const slant = 22; // px of bottom-right rise

  return (
    <div
      className="testi-card-inner"
      style={{
        width: 310,
        flexShrink: 0,
        // Outer gradient border shell
        padding: 1,
        borderRadius: 14,
        background: `linear-gradient(160deg, rgba(${r},${g},${b},0.4) 0%, rgba(${r},${g},${b},0.05) 50%, rgba(41,37,36,0.4) 100%)`,
        // Angled bottom edge — bottom-left corner is lower than bottom-right
        clipPath: `polygon(0% 0%, 100% 0%, 100% calc(100% - ${slant}px), 0% 100%)`,
        cursor: 'default',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
        e.currentTarget.style.boxShadow = `0 20px 50px rgba(${r},${g},${b},0.2)`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{
        borderRadius: 13,
        clipPath: `polygon(0% 0%, 100% 0%, 100% calc(100% - ${slant - 1}px), 0% 100%)`,
        background: 'linear-gradient(155deg, rgb(19 17 16) 0%, rgb(12 10 9) 100%)',
        padding: '1.5rem 1.4rem 2.2rem',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.9rem',
      }}>
        {/* Accent left border */}
        <div style={{
          position: 'absolute', top: 0, left: 0, bottom: 0, width: 3,
          background: `linear-gradient(180deg, rgba(${r},${g},${b},0.9) 0%, rgba(${r},${g},${b},0.1) 100%)`,
        }}/>

        {/* Large decorative quote glyph */}
        <div style={{
          fontSize: '5rem', lineHeight: 0.8,
          fontFamily: 'Georgia, "Times New Roman", serif',
          color: `rgba(${r},${g},${b},0.22)`,
          userSelect: 'none', pointerEvents: 'none',
          letterSpacing: '-0.05em',
          marginLeft: 6,
        }}>"</div>

        {/* Quote */}
        <p style={{
          color: 'rgb(214 211 208)',
          fontSize: '0.8375rem',
          lineHeight: 1.7,
          flex: 1,
        }}>
          {review.quote}
        </p>

        {/* Metric badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'baseline', gap: 6,
          padding: '5px 10px', borderRadius: 6,
          background: `rgba(${r},${g},${b},0.09)`,
          border: `1px solid rgba(${r},${g},${b},0.2)`,
          alignSelf: 'flex-start',
        }}>
          <span style={{ fontWeight: 900, fontSize: '1.1rem', color: `rgba(${r},${g},${b},1)`, letterSpacing: '-0.03em' }}>
            {review.metric}
          </span>
          <span style={{ fontSize: '0.63rem', color: `rgba(${r},${g},${b},0.65)`, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {review.metricLabel}
          </span>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: `rgba(${r},${g},${b},0.1)` }}/>

        {/* Author row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8, flexShrink: 0,
            background: `rgba(${r},${g},${b},0.15)`,
            border: `1px solid rgba(${r},${g},${b},0.3)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.7rem', fontWeight: 800, color: `rgba(${r},${g},${b},1)`,
          }}>
            {review.avatar}
          </div>
          <div>
            <div style={{ color: 'rgb(240 237 233)', fontWeight: 700, fontSize: '0.8125rem' }}>{review.name}</div>
            <div style={{ color: 'rgb(87 83 78)', fontSize: '0.7rem', marginTop: 1 }}>{review.role}</div>
          </div>
          {/* Stars */}
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 2 }}>
            {Array(5).fill(null).map((_, i) => (
              <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill={`rgba(${r},${g},${b},0.85)`}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
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

  const allCards = REVIEWS.map(r => <TestiCard key={r.name} review={r} />);

  return (
    <section ref={sectionRef} className="section-pad-lg" style={{ padding: '6rem 0', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', marginBottom: '3.5rem' }}>
        <div ref={titleRef} style={{ opacity: 0, textAlign: 'center' }}>
          <span className="section-label">Testimonials</span>
          <h2 style={{ marginTop: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'rgb(245 245 243)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Businesses already<br />
            <span style={{ color: 'rgb(120 113 108)' }}>running on autopilot.</span>
          </h2>
          <p style={{ marginTop: '1rem', color: 'rgb(163 158 153)', fontSize: '1.05rem', maxWidth: 520, margin: '1rem auto 0' }}>
            Real results from our early customers — the numbers businesses
            report after the first 30 days on ChatSeller.
          </p>
        </div>
      </div>

      {/* Single-row marquee */}
      <div ref={rowRef} className="marquee-container" style={{ opacity: 0, maxWidth: 1280, margin: '0 auto', padding: '0 2rem', overflow: 'hidden' }}>
        <MarqueeRow speed={47} gap={20} reverse={false}>
          {allCards}
          {allCards}
        </MarqueeRow>
      </div>

      {/* Trust strip */}
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <div className="trust-strip" style={{
          display: 'inline-flex', alignItems: 'center', gap: 32,
          padding: '12px 28px', borderRadius: 12,
          background: 'rgba(37,99,235,0.05)', border: '1px solid rgba(37,99,235,0.12)',
          flexWrap: 'wrap', justifyContent: 'center',
        }}>
          {[
            { val: '500+', lbl: 'businesses onboarded' },
            { val: '98%', lbl: 'retention rate' },
            { val: '4.9/5', lbl: 'average rating' },
          ].map(b => (
            <div key={b.lbl} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'rgb(96 165 250)', letterSpacing: '-0.03em' }}>{b.val}</div>
              <div style={{ fontSize: '0.7rem', color: 'rgb(87 83 78)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 2 }}>{b.lbl}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '0.7rem', color: 'rgb(87 83 78)', marginTop: 10 }}>ChatSeller customer survey, Q1 2026</p>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <a href="#get-started" className="btn-primary" style={{ fontSize: '1rem', padding: '0.875rem 2.25rem' }}>
          Join Them — Start Free
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
        <p style={{ color: 'rgb(120 113 108)', fontSize: '0.8125rem', marginTop: 10 }}>14-day free trial · No credit card required</p>
      </div>
    </section>
  );
}
