import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TEAM = [
  {
    name: 'Aivo Engineering',
    role: 'Product & Engineering',
    desc: 'A team of engineers building the automation layer that powers ASM — from WhatsApp webhook handling to real-time AI inference.',
    accent: '#60a5fa',
    initials: 'AE',
  },
  {
    name: 'AI Research',
    role: 'Language & Compliance',
    desc: 'Responsible for the guardrail layer that keeps ASM on-topic, factually grounded in your catalog, and free from hallucinated responses.',
    accent: '#818cf8',
    initials: 'AI',
  },
  {
    name: 'Customer Success',
    role: 'Onboarding & Support',
    desc: 'Dedicated to getting every business live within 30 minutes and achieving their first automated sale within the first week.',
    accent: '#34d399',
    initials: 'CS',
  },
];

const VALUES = [
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: 'Trust through transparency',
    desc: 'We never hide that your customers are talking to AI. ASM is configured to be honest about its nature when asked directly.',
    accent: '#60a5fa',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: 'Local focus, global platform',
    desc: 'We launch market-by-market so our pricing, infrastructure, and UX reflect local business realities — starting with Nigeria and expanding globally.',
    accent: '#34d399',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: 'Speed without sacrifice',
    desc: 'We ship fast and stay lean — but never at the cost of reliability. Every feature is live-tested on real customer conversations before release.',
    accent: '#f59e0b',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: 'Human always wins',
    desc: 'The staff override feature is non-negotiable. AI assists; humans decide. Any staff member can reclaim any conversation at any time with a single reply.',
    accent: '#ec4899',
  },
];

const STATS = [
  { num: '500+', label: 'Businesses using ASM today' },
  { num: '2M+',  label: 'AI conversations handled' },
  { num: '$2M+', label: 'In sales facilitated' },
  { num: '98%',  label: 'Customer retention rate' },
];

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ paddingTop: 64, minHeight: '100vh', background: 'rgb(10 10 10)' }}>

      {/* ── Hero ── */}
      <section className="about-hero" style={{ padding: '5rem 2rem 4rem', maxWidth: 1280, margin: '0 auto' }}>
        <Link to="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          color: 'rgb(96 165 250)', fontSize: '0.875rem', textDecoration: 'none',
          marginBottom: '2rem',
        }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          Back to home
        </Link>

        <span style={{
          display: 'inline-block', background: 'rgba(37,99,235,0.1)',
          color: 'rgb(96 165 250)', fontSize: '0.75rem', fontWeight: 700,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          padding: '4px 12px', borderRadius: 20, marginBottom: '1.5rem',
        }}>About ASM</span>

        <h1 style={{
          fontSize: 'clamp(1.9rem, 5vw, 3.5rem)', fontWeight: 900,
          color: 'rgb(245 245 243)', lineHeight: 1.1, letterSpacing: '-0.03em',
          marginBottom: '1.25rem', maxWidth: 720,
        }}>
          We&apos;re building the AI sales layer<br />
          <span style={{ color: 'rgb(96 165 250)' }}>every WhatsApp business deserves.</span>
        </h1>

        <p style={{ color: 'rgb(163 158 153)', fontSize: '1rem', lineHeight: 1.75, maxWidth: 620 }}>
          ASM (Automated Sales Manager) was built on a simple observation:
          WhatsApp is the world&apos;s most used commerce channel, but it scales terribly.
          The moment a business grows past a few hundred customers, WhatsApp
          becomes a liability — staff are overwhelmed, leads go cold, and
          the founder can&apos;t sleep. We&apos;re changing that, starting with Nigeria.
        </p>
      </section>

      {/* Divider */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgb(41 37 36), transparent)', maxWidth: 1280, margin: '0 auto' }}/>

      {/* ── Mission ── */}
      <section className="about-section about-grid" style={{ padding: '4rem 2rem', maxWidth: 1280, margin: '0 auto' }}>
        <div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 800, color: 'rgb(245 245 243)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Our mission
          </h2>
          <p style={{ color: 'rgb(163 158 153)', lineHeight: 1.75, marginBottom: '1rem' }}>
            Make AI-powered sales automation accessible to any business that
            sells on WhatsApp — not just corporations with technical teams.
            A sole trader and a multi-location retail chain should both be able
            to deploy an AI sales agent in under 30 minutes, at a price that
            makes sense for their market.
          </p>
          <p style={{ color: 'rgb(163 158 153)', lineHeight: 1.75 }}>
            We launched in Nigeria because WhatsApp commerce is most concentrated
            here, and we know this market deeply. Global expansion follows the
            same playbook: local pricing, local payment rails, and a product shaped
            around how businesses in each market actually communicate.
          </p>
        </div>

        <div className="about-stats-card" style={{
          borderRadius: 18, padding: '2rem',
          background: 'linear-gradient(145deg, rgb(37 99 235 / 0.08), rgb(28 25 23 / 0.6))',
          border: '1px solid rgb(37 99 235 / 0.15)',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {STATS.map((s, i) => (
              <div key={s.label} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '1rem 0',
                borderBottom: i < STATS.length - 1 ? '1px solid rgb(41 37 36)' : 'none',
                gap: 12,
              }}>
                <span style={{ color: 'rgb(163 158 153)', fontSize: '0.875rem', flex: 1 }}>{s.label}</span>
                <span style={{ fontSize: '1.6rem', fontWeight: 900, color: 'rgb(96 165 250)', letterSpacing: '-0.03em', flexShrink: 0 }}>{s.num}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="about-section" style={{ padding: '4rem 2rem', maxWidth: 1280, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 800, color: 'rgb(245 245 243)', letterSpacing: '-0.02em', marginBottom: '2rem' }}>
          What we believe
        </h2>
        <div className="card-grid-3">
          {VALUES.map(v => {
            const r = parseInt(v.accent.slice(1, 3), 16);
            const g = parseInt(v.accent.slice(3, 5), 16);
            const b = parseInt(v.accent.slice(5, 7), 16);
            return (
              <div key={v.title} style={{
                borderRadius: 14, padding: '1.5rem',
                background: `linear-gradient(145deg, rgba(${r},${g},${b},0.06), rgb(18 16 15))`,
                border: `1px solid rgba(${r},${g},${b},0.18)`,
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: `rgba(${r},${g},${b},0.12)`,
                  border: `1px solid rgba(${r},${g},${b},0.25)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: v.accent, marginBottom: '1rem',
                }}>
                  {v.icon}
                </div>
                <h3 style={{ color: 'rgb(245 245 243)', fontWeight: 700, fontSize: '0.9375rem', marginBottom: 8 }}>{v.title}</h3>
                <p style={{ color: 'rgb(163 158 153)', fontSize: '0.8125rem', lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Team ── */}
      <section className="about-section" style={{ padding: '4rem 2rem', maxWidth: 1280, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 800, color: 'rgb(245 245 243)', letterSpacing: '-0.02em', marginBottom: '2rem' }}>
          The team
        </h2>
        <div className="card-grid-3">
          {TEAM.map(t => {
            const r = parseInt(t.accent.slice(1, 3), 16);
            const g = parseInt(t.accent.slice(3, 5), 16);
            const b = parseInt(t.accent.slice(5, 7), 16);
            return (
              <div key={t.name} style={{
                borderRadius: 14, padding: '1.5rem',
                background: 'rgb(15 13 12)',
                border: '1px solid rgb(41 37 36)',
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: `rgba(${r},${g},${b},0.15)`,
                  border: `1px solid rgba(${r},${g},${b},0.3)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.875rem', fontWeight: 800, color: `rgba(${r},${g},${b},1)`,
                  marginBottom: '1rem',
                }}>
                  {t.initials}
                </div>
                <div style={{ color: 'rgb(245 245 243)', fontWeight: 700, fontSize: '1rem', marginBottom: 2 }}>{t.name}</div>
                <div style={{ color: `rgba(${r},${g},${b},0.8)`, fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>{t.role}</div>
                <p style={{ color: 'rgb(163 158 153)', fontSize: '0.8125rem', lineHeight: 1.65 }}>{t.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-section" style={{ padding: '4rem 2rem 6rem', maxWidth: 1280, margin: '0 auto' }}>
        <div className="about-cta" style={{
          borderRadius: 20, padding: '3rem 2rem', textAlign: 'center',
          background: 'linear-gradient(145deg, rgba(37,99,235,0.1) 0%, rgb(15 13 12) 100%)',
          border: '1px solid rgba(37,99,235,0.2)',
        }}>
          <h2 style={{ fontSize: 'clamp(1.25rem, 4vw, 1.75rem)', fontWeight: 800, color: 'rgb(245 245 243)', marginBottom: '1rem' }}>
            Ready to put your WhatsApp on autopilot?
          </h2>
          <Link to="/" style={{
            display: 'inline-block', padding: '0.75rem 2rem',
            background: 'rgb(37 99 235)', color: 'white', borderRadius: 10,
            fontWeight: 700, textDecoration: 'none', fontSize: '0.9375rem',
          }}>
            Get Started Free →
          </Link>
        </div>
      </section>

    </div>
  );
}
