import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BackLink } from '@/components/ui/Legal';
import { hexToRgb } from '@/lib/utils';

const STATS = [
  { num: '500+', label: 'Businesses using ChatSeller today' },
  { num: '2M+', label: 'AI conversations handled' },
  { num: '$2M+', label: 'In sales facilitated' },
  { num: '98%', label: 'Customer retention rate' },
];

const VALUES = [
  {
    accent: '#60a5fa',
    title: 'Trust through transparency',
    desc: 'We never hide that your customers are talking to AI. ChatSeller is configured to be honest about its nature when asked directly.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    accent: '#34d399',
    title: 'Local focus, global platform',
    desc: 'We launch market-by-market so our pricing, infrastructure, and UX reflect local business realities, starting with Nigeria and expanding globally.',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    accent: '#f59e0b',
    title: 'Speed without sacrifice',
    desc: 'We ship fast and stay lean, but never at the cost of reliability. Every feature is live-tested on real customer conversations before release.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    accent: '#ec4899',
    title: 'Human always wins',
    desc: 'The staff override feature is non-negotiable. AI assists; humans decide. Any staff member can take over any conversation from the dashboard at any time.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  },
];

const TEAM = [
  { initials: 'CE', accent: '#60a5fa', name: 'ChatSeller Engineering', role: 'Product & Engineering', desc: 'A team of engineers building the automation layer that powers ChatSeller, from real-time chat delivery to real-time AI inference.' },
  { initials: 'AI', accent: '#818cf8', name: 'AI Research', role: 'Language & Compliance', desc: 'Responsible for the guardrail layer that keeps ChatSeller on-topic, factually grounded in your catalog, and free from hallucinated responses.' },
  { initials: 'CS', accent: '#34d399', name: 'Customer Success', role: 'Onboarding & Support', desc: 'Dedicated to getting every business live within 30 minutes and achieving their first automated sale within the first week.' },
];

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="legal-wrap">
      <section>
        <div className="wrap" style={{ paddingTop: '7rem', paddingBottom: '3rem' }}>
          <BackLink />
          <span className="section-label" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>About ChatSeller</span>
          <h1 className="section-title" style={{ textAlign: 'left', maxWidth: 720, marginTop: '1rem' }}>
            We&apos;re building the AI sales layer<br /><span className="grad">every growing business deserves.</span>
          </h1>
          <p className="section-sub" style={{ marginTop: '1.25rem', marginInline: 0 }}>
            ChatSeller, built by Apt-Intel, was built on a simple observation: chat is how customers want to buy, but manual chat
            support scales terribly. The moment a business grows past a few hundred customers, one-on-one replies become a
            liability. Staff get overwhelmed, leads go cold, and the founder can&apos;t sleep. We&apos;re changing that, starting with Nigeria.
          </p>
        </div>
      </section>

      <section style={{ background: 'rgba(28,25,23,.15)' }}>
        <div className="wrap about-grid">
          <div>
            <h2 className="legal-h2">Our mission</h2>
            <p className="legal-p">
              Make AI-powered sales automation accessible to any business that sells through chat, not just corporations with
              technical teams. A sole trader and a multi-location retail chain should both be able to deploy an AI sales agent
              in under 30 minutes, at a price that makes sense for their market.
            </p>
            <p className="legal-p">
              We launched in Nigeria because chat-first commerce is most concentrated here, and we know this market deeply.
              Global expansion follows the same playbook: local pricing, local payment rails, and a product shaped around how
              businesses in each market actually communicate.
            </p>
          </div>
          <div className="about-stats-card">
            {STATS.map((s, i) => (
              <div className="about-stat-row" key={s.label} style={{ borderBottom: i < STATS.length - 1 ? '1px solid rgb(41 37 36)' : 'none' }}>
                <span className="about-stat-lbl">{s.label}</span>
                <span className="about-stat-val">{s.num}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2 className="legal-h2" style={{ marginBottom: '2rem' }}>What we believe</h2>
          <div className="about-card-grid">
            {VALUES.map((v) => {
              const rgb = hexToRgb(v.accent);
              return (
                <div className="about-value-card" key={v.title} style={{ background: `linear-gradient(145deg, rgba(${rgb},.06), rgb(18 16 15))`, border: `1px solid rgba(${rgb},.18)` }}>
                  <div className="about-value-ico" style={{ background: `rgba(${rgb},.12)`, border: `1px solid rgba(${rgb},.25)`, color: v.accent }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d={v.icon} />
                    </svg>
                  </div>
                  <h3 className="about-value-title">{v.title}</h3>
                  <p className="about-value-desc">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ background: 'rgba(28,25,23,.15)' }}>
        <div className="wrap">
          <h2 className="legal-h2" style={{ marginBottom: '2rem' }}>The team</h2>
          <div className="about-card-grid">
            {TEAM.map((t) => {
              const rgb = hexToRgb(t.accent);
              return (
                <div className="about-team-card" key={t.name}>
                  <div className="about-team-ico" style={{ background: `rgba(${rgb},.15)`, border: `1px solid rgba(${rgb},.3)`, color: t.accent }}>{t.initials}</div>
                  <div className="about-team-name">{t.name}</div>
                  <div className="about-team-role" style={{ color: t.accent }}>{t.role}</div>
                  <p className="about-team-desc">{t.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0 6rem' }}>
        <div className="wrap">
          <div className="cta-box">
            <h2 className="cta-h2" style={{ fontSize: 'clamp(1.25rem, 4vw, 1.75rem)' }}>Ready to put your sales chat on autopilot?</h2>
            <Link to="/#get-started" className="btn-primary" style={{ display: 'inline-flex', marginTop: '1.5rem' }}>
              Get Started Free
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
