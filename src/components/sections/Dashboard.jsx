import { DASHBOARD_HIGHLIGHTS } from '@/data/steps';
import { useScrollReveal } from '@/lib/useScrollReveal';

const SHOTS = [
  { glow: 'radial-gradient(ellipse at center,rgba(37,99,235,.1) 0%,transparent 70%)', url: 'dashboard.asm.io/knowledge', img: '/knowledge-preview.png', alt: 'ChatSeller Knowledge Base Dashboard', label: 'Knowledge Base', labelColor: 'rgb(96 165 250)' },
  { glow: 'radial-gradient(ellipse at center,rgba(124,58,237,.08) 0%,transparent 70%)', url: 'dashboard.asm.io/catalog', img: '/catalog-preview.png', alt: 'ChatSeller Catalog Dashboard', label: 'Product Catalog', labelColor: 'rgb(167 139 250)' },
];

export default function Dashboard() {
  const sectionRef = useScrollReveal({ itemsSelector: '.section-hd, .dash-shot, .dash-highlight' });
  return (
    <section ref={sectionRef} style={{ overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 400, background: 'radial-gradient(ellipse,rgba(37,99,235,.07) 0%,transparent 70%)', pointerEvents: 'none' }} />
      <div className="wrap">
        <div className="section-hd">
          <span className="section-label">Dashboard</span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            Total visibility into your<br /><span className="dim">chat sales machine.</span>
          </h2>
          <p className="section-sub" style={{ marginInline: 'auto', maxWidth: 560 }}>
            Monitor conversations, manage your catalog, train the AI with your knowledge, and track every sale — all from one clean dashboard.
          </p>
        </div>
        <div className="dashboard-grid">
          {SHOTS.map((s) => (
            <div className="dash-shot" key={s.url}>
              <div className="dash-shot-glow" style={{ background: s.glow }} />
              <div className="dash-shot-frame">
                <div className="dash-chrome">
                  <div className="dash-dots">
                    <div className="dash-dot" style={{ background: '#ff5f57' }} />
                    <div className="dash-dot" style={{ background: '#febc2e' }} />
                    <div className="dash-dot" style={{ background: '#28c840' }} />
                  </div>
                  <div className="dash-url">{s.url}</div>
                </div>
                <img src={s.img} alt={s.alt} loading="lazy" />
              </div>
              <div className="dash-label"><span style={{ color: s.labelColor }}>{s.label}</span></div>
            </div>
          ))}
        </div>
        <div className="dashboard-highlights">
          {DASHBOARD_HIGHLIGHTS.map((h) => (
            <div className="card-glass dash-highlight" key={h.label}>
              <span className="dash-highlight-ico">{h.icon}</span>
              <div>
                <div className="dash-highlight-lbl">{h.label}</div>
                <div className="dash-highlight-desc">{h.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#get-started" className="btn-primary" style={{ fontSize: '1rem', padding: '.875rem 2.25rem' }}>
            Start Free Trial
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <p style={{ color: 'rgb(120 113 108)', fontSize: '.8125rem', marginTop: 10 }}>No credit card required · 14-day free trial</p>
        </div>
      </div>
    </section>
  );
}
