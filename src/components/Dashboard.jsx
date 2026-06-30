import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HIGHLIGHTS = [
  { icon: '💬', label: 'Conversations', desc: 'All, AI Active, Human, Closed tabs' },
  { icon: '📦', label: 'Catalog', desc: 'Products & services with prices' },
  { icon: '📚', label: 'Knowledge Base', desc: 'FAQs, PDFs, URLs all indexed' },
  { icon: '⚡', label: 'AI Settings', desc: 'Tone, guardrails, response style' },
];

export default function Dashboard() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imgRef = useRef(null);
  const secondImgRef = useRef(null);
  const tagsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 80%' } }
      );
      gsap.fromTo(imgRef.current,
        { opacity: 0, y: 50, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: imgRef.current, start: 'top 80%' } }
      );
      gsap.fromTo(secondImgRef.current,
        { opacity: 0, y: 50, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: secondImgRef.current, start: 'top 80%' } }
      );
      gsap.fromTo(tagsRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: tagsRef.current, start: 'top 85%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pad-lg" style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Blue glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 800, height: 400,
        background: 'radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}/>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
        <div ref={titleRef} style={{ opacity: 0, textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">Dashboard</span>
          <h2 style={{ marginTop: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'rgb(245 245 243)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Total visibility into your
            <br />
            <span style={{ color: 'rgb(120 113 108)' }}>WhatsApp sales machine.</span>
          </h2>
          <p style={{ marginTop: '1rem', color: 'rgb(163 158 153)', fontSize: '1.05rem', maxWidth: 560, margin: '1rem auto 0' }}>
            Monitor conversations, manage your catalog, train the AI with your knowledge,
            and track every sale — all from one clean dashboard.
          </p>
        </div>

        {/* Two screenshots side by side */}
        <div className="dashboard-grid" style={{ marginBottom: '2rem' }}>
          {/* Main screenshot — Knowledge Base */}
          <div ref={imgRef} style={{ opacity: 0, position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.1) 0%, transparent 70%)',
              borderRadius: 16, filter: 'blur(20px)', transform: 'scale(1.05)',
            }}/>
            <div style={{
              position: 'relative',
              borderRadius: 14,
              overflow: 'hidden',
              border: '1px solid rgb(41 37 36)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
            }}>
              {/* Browser chrome bar */}
              <div style={{ background: 'rgb(20 18 17)', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgb(41 37 36)' }}>
                <div style={{ display: 'flex', gap: 5 }}>
                  {['#ff5f57','#febc2e','#28c840'].map(c => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }}/>
                  ))}
                </div>
                <div style={{ flex: 1, background: 'rgb(28 25 23)', borderRadius: 6, padding: '4px 10px', color: 'rgb(87 83 78)', fontSize: '0.7rem', maxWidth: 220, margin: '0 auto' }}>
                  dashboard.asm.io/knowledge
                </div>
              </div>
              <img
                src="/knowledge-preview.png"
                alt="ChatSeller Knowledge Base Dashboard"
                loading="lazy"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
            {/* Label */}
            <div style={{ position: 'absolute', bottom: -12, left: 16, background: 'rgb(28 25 23)', border: '1px solid rgb(41 37 36)', borderRadius: 8, padding: '5px 12px' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'rgb(96 165 250)' }}>Knowledge Base</span>
            </div>
          </div>

          {/* Second screenshot — Catalog */}
          <div ref={secondImgRef} style={{ opacity: 0, position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.08) 0%, transparent 70%)',
              borderRadius: 16, filter: 'blur(20px)', transform: 'scale(1.05)',
            }}/>
            <div style={{
              position: 'relative',
              borderRadius: 14,
              overflow: 'hidden',
              border: '1px solid rgb(41 37 36)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
            }}>
              <div style={{ background: 'rgb(20 18 17)', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgb(41 37 36)' }}>
                <div style={{ display: 'flex', gap: 5 }}>
                  {['#ff5f57','#febc2e','#28c840'].map(c => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }}/>
                  ))}
                </div>
                <div style={{ flex: 1, background: 'rgb(28 25 23)', borderRadius: 6, padding: '4px 10px', color: 'rgb(87 83 78)', fontSize: '0.7rem', maxWidth: 200, margin: '0 auto' }}>
                  dashboard.asm.io/catalog
                </div>
              </div>
              <img
                src="/catalog-preview.png"
                alt="ChatSeller Catalog Dashboard"
                loading="lazy"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
            <div style={{ position: 'absolute', bottom: -12, left: 16, background: 'rgb(28 25 23)', border: '1px solid rgb(41 37 36)', borderRadius: 8, padding: '5px 12px' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'rgb(167 139 250)' }}>Product Catalog</span>
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div ref={tagsRef} className="dashboard-highlights" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '3rem' }}>
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className="card-glass" style={{
              padding: '1.25rem 1.5rem',
              display: 'flex', alignItems: 'flex-start', gap: 12,
            }}>
              <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{h.icon}</span>
              <div>
                <div style={{ color: 'rgb(245 245 243)', fontWeight: 600, fontSize: '0.875rem' }}>{h.label}</div>
                <div style={{ color: 'rgb(120 113 108)', fontSize: '0.8rem', marginTop: 3 }}>{h.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#get-started" className="btn-primary" style={{ fontSize: '1rem', padding: '0.875rem 2.25rem' }}>
            Start Free Trial
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          <p style={{ color: 'rgb(120 113 108)', fontSize: '0.8125rem', marginTop: 10 }}>No credit card required · 14-day free trial</p>
        </div>
      </div>
    </section>
  );
}
