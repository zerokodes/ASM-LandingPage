import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PLANS = [
  {
    name: 'Starter',
    price: '₦29,900',
    period: '/month',
    desc: 'Perfect for small businesses just getting started with WhatsApp automation.',
    cta: 'Start Free Trial',
    primary: false,
    features: [
      '1 WhatsApp Business number',
      'Up to 500 AI conversations/mo',
      'Product catalog (up to 50 items)',
      'FAQ & knowledge base',
      'Basic analytics',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    price: '₦79,900',
    period: '/month',
    desc: 'For growing businesses who need more conversations and deeper automation.',
    cta: 'Start Free Trial',
    primary: true,
    features: [
      '3 WhatsApp Business numbers',
      'Up to 3,000 AI conversations/mo',
      'Unlimited catalog items',
      'PDF & URL knowledge ingestion',
      'Human override & staff routing',
      'Advanced analytics & reports',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For high-volume businesses and agencies managing multiple brands.',
    cta: 'Contact Sales',
    primary: false,
    features: [
      'Unlimited WhatsApp numbers',
      'Unlimited conversations',
      'Multi-tenant management',
      'Custom AI training',
      'API access',
      'SLA & dedicated support',
      'White-label option',
    ],
  },
];

function Check() {
  return (
    <svg width="14" height="14" fill="none" stroke="rgb(96 165 250)" strokeWidth="2.5" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: 2 }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
    </svg>
  );
}

export default function Pricing() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 80%' } }
      );
      gsap.fromTo(cardsRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 75%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="pricing" style={{ padding: '6rem 0', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
        <div ref={titleRef} style={{ opacity: 0, textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">Pricing</span>
          <h2 style={{ marginTop: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'rgb(245 245 243)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Simple, transparent pricing.
            <br />
            <span style={{ color: 'rgb(120 113 108)' }}>No surprises.</span>
          </h2>
          <p style={{ marginTop: '1rem', color: 'rgb(163 158 153)', fontSize: '1.05rem', maxWidth: 480, margin: '1rem auto 0' }}>
            Start free for 14 days. No credit card required. Upgrade or cancel anytime.
          </p>
        </div>

        <div ref={cardsRef} className="pricing-grid">
          {PLANS.map((plan) => (
            <div key={plan.name}
              className="card-glass"
              style={{
                borderRadius: 18,
                display: 'flex', flexDirection: 'column',
                position: 'relative', overflow: 'hidden',
                transition: 'all 0.25s',
                ...(plan.primary ? {
                  borderColor: 'rgb(37 99 235 / 0.4)',
                  background: 'linear-gradient(160deg, rgb(37 99 235 / 0.07) 0%, rgb(28 25 23 / 0.8) 60%)',
                  boxShadow: '0 16px 48px rgba(37,99,235,0.12)',
                } : {}),
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}
            >
              {plan.primary && (
                <div style={{
                  background: 'rgb(37 99 235)', textAlign: 'center',
                  padding: '6px 0', fontSize: '0.7rem', fontWeight: 700,
                  color: 'white', letterSpacing: '0.05em', textTransform: 'uppercase',
                }}>
                  Most Popular
                </div>
              )}

              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}>
                <div>
                  <div style={{ color: 'rgb(120 113 108)', fontWeight: 500, fontSize: '0.875rem', marginBottom: 4 }}>{plan.name}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                    <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'rgb(245 245 243)', letterSpacing: '-0.02em' }}>{plan.price}</span>
                    <span style={{ color: 'rgb(120 113 108)', fontSize: '0.875rem' }}>{plan.period}</span>
                  </div>
                  <p style={{ color: 'rgb(163 158 153)', fontSize: '0.8125rem', marginTop: 8, lineHeight: 1.6 }}>{plan.desc}</p>
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1, listStyle: 'none', padding: 0, margin: 0 }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.875rem', color: 'rgb(214 211 208)' }}>
                      <Check />
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#get-started"
                  className={plan.primary ? 'btn-primary' : 'btn-ghost'}
                  style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', color: 'rgb(87 83 78)', fontSize: '0.8rem', marginTop: '2rem' }}>
          All plans include 14-day free trial · Prices shown in NGN for Nigerian market · VAT may apply
        </p>
      </div>
    </section>
  );
}
