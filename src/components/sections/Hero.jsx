import { useState } from 'react';
import ChatMockup from './ChatMockup';
import DemoModal from './DemoModal';

const METRICS = [
  { val: '3×', lbl: 'More conversions' },
  { val: '24/7', lbl: 'Always-on selling' },
  { val: '< 2s', lbl: 'Response time' },
  { val: '90%', lbl: 'Less staff load' },
];

export default function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="hero-section">
      <div className="hero-bg-grid" />
      <div className="hero-bg-glow" />
      <div className="hero-inner">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="fade-up" style={{ animationDelay: '.1s' }}>
              <span className="section-label">
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#60a5fa', display: 'inline-block' }} className="animate-pulse" />
                AI Sales Chat Widget
              </span>
            </div>
            <h1 className="hero-h1 fade-up" style={{ animationDelay: '.2s' }}>
              Replace your reply<br />team with<br /><span className="grad">AI that sells.</span>
            </h1>
            <p className="hero-sub fade-up" style={{ animationDelay: '.3s' }}>
              ChatSeller gives your store a shareable chat link that turns visitors into sales — answering questions, showcasing products, taking orders, and following up, all without lifting a finger.
            </p>
            <div className="hero-cta-row fade-up" style={{ animationDelay: '.35s' }}>
              <a href="#get-started" className="btn-primary" style={{ fontSize: '1rem', padding: '.875rem 2rem' }}>
                Start Free Trial
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="#" className="btn-ghost" style={{ fontSize: '1rem', padding: '.875rem 2rem' }} onClick={(e) => { e.preventDefault(); setDemoOpen(true); }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Watch Demo
              </a>
            </div>
            <div className="hero-metrics fade-up" style={{ animationDelay: '.4s' }}>
              <div className="hero-metrics-grid">
                {METRICS.map((m) => (
                  <div key={m.lbl} style={{ textAlign: 'center' }}>
                    <div className="hero-metric-val">{m.val}</div>
                    <div className="hero-metric-lbl">{m.lbl}</div>
                  </div>
                ))}
              </div>
              <p className="hero-metrics-note">avg. across customers</p>
            </div>
          </div>

          <div className="fade-up" style={{ animationDelay: '.3s' }}>
            <ChatMockup />
          </div>
        </div>
      </div>
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}
