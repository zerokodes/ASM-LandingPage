import { useState } from 'react';
import { cn } from '@/lib/utils';
import { PLANS, BILLING_CYCLES, cyclePrice, naira } from '@/data/pricing';
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
  const [cycleKey, setCycleKey] = useState('annual');
  const cycle = BILLING_CYCLES.find((c) => c.key === cycleKey);

  return (
    <section id="pricing" ref={sectionRef}>
      <div className="wrap">
        <div className="section-hd">
          <span className="section-label">Pricing</span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            Two plans. Both complete.<br /><span className="dim">Choose on scale, not features.</span>
          </h2>
          <p className="section-sub" style={{ marginInline: 'auto', maxWidth: 520 }}>
            Every plan includes the full ChatSeller sales, CRM, commerce and analytics stack.
            Max is a capacity, team-size and intelligence upgrade — not a paywall on the basics.
          </p>
        </div>

        {/* Billing-cycle toggle */}
        <div className="billing-toggle" role="tablist" aria-label="Billing cycle">
          {BILLING_CYCLES.map((c) => (
            <button
              key={c.key}
              role="tab"
              aria-selected={c.key === cycleKey}
              className={cn('billing-toggle-btn', c.key === cycleKey && 'active')}
              onClick={() => setCycleKey(c.key)}
            >
              {c.label}
              {c.discount > 0 && <span className="billing-toggle-save">−{c.discount * 100}%</span>}
            </button>
          ))}
        </div>

        <div className="pricing-grid pricing-grid--two">
          {PLANS.map((p) => {
            const total = cyclePrice(p.monthly, cycle.months, cycle.discount);
            const perMonth = Math.round(total / cycle.months);
            const fullMonthly = p.monthly * cycle.months;
            const saved = fullMonthly - total;
            return (
              <div className={cn('card-glass', 'price-card', p.featured && 'primary')} key={p.plan}>
                {p.ribbon && <div className="price-ribbon">{p.ribbon}</div>}
                <div className="price-body">
                  <div>
                    <div className="price-plan">{p.plan}</div>
                    <div className="price-tagline">{p.tagline}</div>
                    <div className="price-amt-row">
                      <span className="price-amt">{naira(perMonth)}</span>
                      <span className="price-period">/ month</span>
                    </div>
                    <p className="price-billed">
                      {cycle.key === 'monthly'
                        ? 'Billed monthly'
                        : `${naira(total)} billed ${cycle.label.toLowerCase()}`}
                      {saved > 0 && <span className="price-saved"> · save {naira(saved)}</span>}
                    </p>
                    <p className="price-desc">{p.desc}</p>
                  </div>
                  <div className="price-divider" />
                  <ul className="price-list">
                    {p.features.map((f) => (
                      <li key={f}><Tick />{f}</li>
                    ))}
                  </ul>
                  <a
                    href="#get-started"
                    className={p.variant === 'primary' ? 'btn-primary' : 'btn-ghost'}
                    style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}
                  >
                    {p.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <p className="pricing-note">
          14-day free trial on every plan · Prices in NGN · VAT may apply · Upgrade or change cycle anytime
        </p>
      </div>
    </section>
  );
}
