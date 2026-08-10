import { cn } from '@/lib/utils';
import { PLANS } from '@/data/pricing';
import { useScrollReveal } from '@/lib/useScrollReveal';

function Tick() {
  return (
    <span className="tick">
      <svg width="10" height="10" fill="none" stroke="rgb(96 165 250)" strokeWidth="3" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export default function Pricing() {
  const sectionRef = useScrollReveal({ itemsSelector: '.section-hd, .price-card' });
  return (
    <section id="pricing" ref={sectionRef}>
      <div className="wrap">
        <div className="section-hd">
          <span className="section-label">Pricing</span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            Simple, transparent pricing.<br /><span className="dim">No surprises.</span>
          </h2>
          <p className="section-sub" style={{ marginInline: 'auto', maxWidth: 480 }}>
            Start free for 14 days. No credit card required. Upgrade or cancel anytime.
          </p>
        </div>
        <div className="pricing-grid">
          {PLANS.map((p) => (
            <div className={cn('card-glass', 'price-card', p.featured && 'primary')} key={p.plan}>
              {p.ribbon && <div className="price-ribbon">{p.ribbon}</div>}
              <div className="price-body">
                <div>
                  <div className="price-plan">{p.plan}</div>
                  <div className="price-amt-row">
                    <span className="price-amt">{p.amount}</span>
                    {p.period && <span className="price-period">{p.period}</span>}
                  </div>
                  <p className="price-desc">{p.desc}</p>
                </div>
                <div className="price-divider" />
                <ul className="price-list">
                  {p.features.map((f) => (
                    <li key={f}><Tick />{f}</li>
                  ))}
                </ul>
                <a href="#get-started" className={p.variant === 'primary' ? 'btn-primary' : 'btn-ghost'} style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="pricing-note">All plans include 14-day free trial · Prices shown in NGN for Nigerian market · VAT may apply</p>
      </div>
    </section>
  );
}
