import { STEPS } from '@/data/steps';
import { useScrollReveal } from '@/lib/useScrollReveal';

export default function HowItWorks() {
  const sectionRef = useScrollReveal();
  return (
    <section id="how-it-works" ref={sectionRef} style={{ background: 'rgba(28,25,23,.3)' }}>
      <div className="wrap">
        <div className="section-hd">
          <span className="section-label">How It Works</span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            Live in under 30 minutes.<br /><span className="dim">No dev team. No complexity.</span>
          </h2>
        </div>
        <div className="steps">
          {STEPS.map((s, i) => (
            <div className="step-row" key={s.num}>
              <div className="step-indicator">
                <div className="step-icon-box">
                  {s.isBolt ? (
                    <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  ) : (
                    <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={s.icon} />
                    </svg>
                  )}
                </div>
                {i < STEPS.length - 1 && <div className="step-line" />}
              </div>
              <div className="card-glass step-card">
                <div className="step-num">{s.num}</div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a href="#get-started" className="btn-primary" style={{ fontSize: '1rem', padding: '.875rem 2.25rem' }}>
            Set Up My Business
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <p style={{ color: 'rgb(87 83 78)', fontSize: '.8125rem', marginTop: 12 }}>No credit card required · Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}
