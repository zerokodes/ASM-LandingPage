import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 40, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: contentRef.current, start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="get-started" style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 700, height: 350,
        background: 'radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}/>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
        <div ref={contentRef} style={{
          opacity: 0,
          background: 'rgb(28 25 23)',
          border: '1px solid rgb(37 99 235 / 0.2)',
          borderRadius: 24,
          padding: 'clamp(2.5rem, 6vw, 4.5rem)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
        }}>
          {/* Top highlight line */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgb(37 99 235 / 0.6), transparent)' }}/>

          <span className="section-label" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgb(96 165 250)', animation: 'pulse 2s infinite' }}/>
            14-Day Free Trial
          </span>

          <h2 style={{ margin: '1.5rem 0', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'rgb(245 245 243)', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
            Turn every WhatsApp message into
            <br />
            <span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              a closed sale.
            </span>
          </h2>

          <p style={{ color: 'rgb(163 158 153)', fontSize: '1.1rem', maxWidth: 540, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Start ASM today. In 30 minutes you&apos;ll have an AI agent trained on your business,
            answering customers and converting leads — day and night.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            <a href="#get-started" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
              Start Free Trial — No Card Needed
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            <a href="https://wa.me/2348100000000?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20ASM" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat with Sales on WhatsApp
            </a>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center', marginTop: '2rem' }}>
            {['No credit card', 'Cancel anytime', 'Live in 30 minutes', 'Dedicated support'].map((t) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgb(87 83 78)', fontSize: '0.8125rem' }}>
                <svg width="14" height="14" fill="none" stroke="rgb(37 99 235)" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
