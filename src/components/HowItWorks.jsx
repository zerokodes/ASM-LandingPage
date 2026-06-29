import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    step: '01',
    title: 'Connect your WhatsApp Business number',
    desc: 'Link your official WhatsApp Business API number in minutes. No tech team needed — just your phone number and Meta Business account.',
    icon: <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>,
  },
  {
    step: '02',
    title: 'Upload your catalog and knowledge',
    desc: 'Add your products, prices, images, and business information. Upload PDFs, paste FAQs, or point us to your website. ASM learns from all of it.',
    icon: <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>,
  },
  {
    step: '03',
    title: 'ASM starts selling — you review and refine',
    desc: 'Go live in minutes. Monitor conversations from your dashboard, see what questions come up most, and refine your knowledge base anytime.',
    icon: <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/></svg>,
  },
];

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const stepsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 80%' } }
      );
      Array.from(stepsRef.current.children).forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 82%' } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" style={{ padding: '6rem 0', position: 'relative', background: 'rgb(28 25 23 / 0.3)' }}>
      {/* Subtle top mesh */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(37,99,235,0.04) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(124,58,237,0.04) 0%, transparent 60%)', pointerEvents: 'none' }}/>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
        <div ref={titleRef} style={{ opacity: 0, textAlign: 'center', marginBottom: '5rem' }}>
          <span className="section-label">How It Works</span>
          <h2 style={{ marginTop: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'rgb(245 245 243)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Live in under 30 minutes.
            <br />
            <span style={{ color: 'rgb(120 113 108)' }}>No dev team. No complexity.</span>
          </h2>
        </div>

        <div ref={stepsRef} className="howitworks-steps" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: 720, margin: '0 auto' }}>
          {STEPS.map((s, i) => (
            <div key={s.step} className="step-row" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              {/* Step indicator column */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div className="step-icon-box" style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: 'rgb(28 25 23)', border: '1px solid rgb(41 37 36)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgb(96 165 250)',
                }}>
                  {s.icon}
                </div>
                {i < STEPS.length - 1 && (
                  <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, rgb(37 99 235 / 0.4), transparent)', marginTop: 8 }}/>
                )}
              </div>

              {/* Content card */}
              <div className="card-glass" style={{
                flex: 1, padding: '1.5rem',
                transition: 'border-color 0.25s',
                marginBottom: i < STEPS.length - 1 ? '0.5rem' : 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgb(37 99 235 / 0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgb(41 37 36)'; }}
              >
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgb(96 165 250)', marginBottom: 8, letterSpacing: '0.08em', fontFamily: 'monospace' }}>STEP {s.step}</div>
                <h3 style={{ color: 'rgb(245 245 243)', fontWeight: 700, fontSize: '1.125rem', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: 'rgb(163 158 153)', fontSize: '0.875rem', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a href="#get-started" className="btn-primary" style={{ fontSize: '1rem', padding: '0.875rem 2.25rem' }}>
            Set Up My Business
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          <p style={{ color: 'rgb(87 83 78)', fontSize: '0.8125rem', marginTop: 12 }}>No credit card required · Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}
