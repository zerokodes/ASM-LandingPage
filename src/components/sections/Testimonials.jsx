import { REVIEWS } from '@/data/testimonials';
import { hexToRgb } from '@/lib/utils';

function Stars({ rgb }) {
  return (
    <div className="testi-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill={`rgba(${rgb},.85)`}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestiCard({ r }) {
  const rgb = hexToRgb(r.accent);
  return (
    <div className="testi-card" style={{ background: `linear-gradient(160deg,rgba(${rgb},.4) 0%,rgba(${rgb},.05) 50%,rgba(41,37,36,.4) 100%)` }}>
      <div className="testi-inner">
        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 3, background: `linear-gradient(180deg,rgba(${rgb},.9) 0%,rgba(${rgb},.1) 100%)` }} />
        <div className="testi-glyph" style={{ color: `rgba(${rgb},.22)` }}>&ldquo;</div>
        <p className="testi-quote">{r.quote}</p>
        <div className="testi-metric" style={{ background: `rgba(${rgb},.09)`, border: `1px solid rgba(${rgb},.2)` }}>
          <span className="testi-metric-val" style={{ color: r.accent }}>{r.metric}</span>
          <span className="testi-metric-lbl" style={{ color: `rgba(${rgb},.65)` }}>{r.metricLabel}</span>
        </div>
        <div className="testi-divider" style={{ background: `rgba(${rgb},.1)` }} />
        <div className="testi-author-row">
          <div className="testi-avatar" style={{ background: `rgba(${rgb},.15)`, border: `1px solid rgba(${rgb},.3)`, color: r.accent }}>{r.avatar}</div>
          <div>
            <div className="testi-name">{r.name}</div>
            <div className="testi-role">{r.role}</div>
          </div>
          <Stars rgb={rgb} />
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <section>
      <div className="wrap" style={{ marginBottom: '3.5rem' }}>
        <div className="section-hd">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            Businesses already<br /><span className="dim">running on autopilot.</span>
          </h2>
          <p className="section-sub" style={{ marginInline: 'auto' }}>
            Real results from our early customers — the numbers businesses report after the first 30 days on ChatSeller.
          </p>
        </div>
      </div>
      <div className="marquee-container wrap">
        <div className="marquee-track">
          {doubled.map((r, i) => <TestiCard r={r} key={`${r.name}-${i}`} />)}
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <div className="trust-strip">
          <div style={{ textAlign: 'center' }}><div className="trust-item-val">500+</div><div className="trust-item-lbl">businesses onboarded</div></div>
          <div style={{ textAlign: 'center' }}><div className="trust-item-val">98%</div><div className="trust-item-lbl">retention rate</div></div>
          <div style={{ textAlign: 'center' }}><div className="trust-item-val">4.9/5</div><div className="trust-item-lbl">average rating</div></div>
        </div>
        <p style={{ fontSize: '.7rem', color: 'rgb(87 83 78)', marginTop: 10 }}>ChatSeller customer survey, Q1 2026</p>
      </div>
      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <a href="#get-started" className="btn-primary" style={{ fontSize: '1rem', padding: '.875rem 2.25rem' }}>
          Join Them — Start Free
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
        <p style={{ color: 'rgb(120 113 108)', fontSize: '.8125rem', marginTop: 10 }}>14-day free trial · No credit card required</p>
      </div>
    </section>
  );
}
