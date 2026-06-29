import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FAQS = [
  { q: 'Do I need a developer to set up ASM?', a: 'No. Setup is fully self-service — you connect your WhatsApp Business API number through our guided onboarding, upload your catalog and knowledge base, and you\'re live. No coding required.' },
  { q: 'How is this different from WhatsApp Business App?', a: 'The standard WhatsApp Business App requires you or your staff to manually respond to every message. ASM uses AI to respond intelligently and automatically, 24/7, based on your actual business knowledge — and only involves staff when you want.' },
  { q: 'Can the AI handle order placement and tracking?', a: 'Yes. ASM can walk customers through selecting products, confirm details, log orders in your system, and send confirmation messages. Order status inquiries are handled automatically too.' },
  { q: 'What happens when a customer asks something the AI can\'t answer?', a: 'ASM sends you a notification on WhatsApp so you or your staff can take over. You can also configure it to escalate specific keywords or question types to a human automatically.' },
  { q: 'Is my customer data safe?', a: 'Yes. All conversation data is encrypted in transit and at rest. We never share your data with third parties. ASM processes messages on your behalf but you remain the data controller.' },
  { q: 'Can I use ASM for multiple businesses or locations?', a: 'Yes. Our Growth and Enterprise plans support multiple WhatsApp numbers. The Enterprise plan includes full multi-tenant management for agencies handling multiple brands.' },
  { q: 'What AI model powers ASM?', a: 'ASM uses a combination of large language models and retrieval-augmented generation (RAG) to ensure answers come from your actual business knowledge, not generic AI hallucinations.' },
  { q: 'Can my staff still reply directly on WhatsApp?', a: 'Absolutely. This is a core feature. When a staff member replies from an authorized WhatsApp number, ASM detects it and steps back automatically. No mode switching needed.' },
];

function FAQItem({ q, a, open, onToggle }) {
  const bodyRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    gsap.to(bodyRef.current, { height: open ? 'auto' : 0, opacity: open ? 1 : 0, duration: 0.28, ease: 'power2.inOut' });
    gsap.to(iconRef.current, { rotation: open ? 180 : 0, duration: 0.25, ease: 'power2.inOut' });
  }, [open]);

  return (
    <div
      style={{
        border: `1px solid ${open ? 'rgb(37 99 235 / 0.25)' : 'rgb(41 37 36)'}`,
        borderRadius: 12,
        overflow: 'hidden',
        transition: 'border-color 0.2s',
        background: open ? 'rgb(37 99 235 / 0.04)' : 'transparent',
      }}
    >
      <button
        aria-expanded={open}
        onClick={onToggle}
        style={{
          width: '100%', background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1rem 1.25rem', gap: 12, textAlign: 'left',
        }}
      >
        <h3 className="faq-question" style={{ color: 'rgb(245 245 243)', fontWeight: 500, fontSize: '0.9375rem', lineHeight: 1.45, margin: 0 }}>{q}</h3>
        <div ref={iconRef} style={{
          width: 44, height: 44, borderRadius: '50%',
          background: open ? 'rgb(37 99 235 / 0.15)' : 'rgb(41 37 36)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <svg width="12" height="12" fill="none" stroke={open ? 'rgb(96 165 250)' : 'rgb(163 158 153)'} strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </button>
      <div ref={bodyRef} style={{ height: 0, opacity: 0, overflow: 'hidden' }}>
        <p style={{ color: 'rgb(163 158 153)', fontSize: '0.875rem', padding: '0 1.25rem 1.25rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const listRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 80%' } }
      );
      gsap.fromTo(listRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.07, ease: 'power2.out',
          scrollTrigger: { trigger: listRef.current, start: 'top 75%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="faq" style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 2rem' }}>
        <div ref={titleRef} style={{ opacity: 0, textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">FAQ</span>
          <h2 style={{ marginTop: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'rgb(245 245 243)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Questions? We&apos;ve got answers.
          </h2>
        </div>

        <div ref={listRef} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {FAQS.map((item, i) => (
            <FAQItem
              key={item.q}
              q={item.q}
              a={item.a}
              open={activeIndex === i}
              onToggle={() => setActiveIndex(activeIndex === i ? null : i)}
            />
          ))}
        </div>

        <p style={{ textAlign: 'center', color: 'rgb(163 158 153)', fontSize: '0.875rem', marginTop: '2.5rem' }}>
          Still have questions?{' '}
          <a href="https://wa.me/2348100000000?text=Hi%2C%20I%20have%20a%20question%20about%20ASM" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(96 165 250)', textDecoration: 'none' }}
            onMouseEnter={e => e.target.style.color = 'rgb(147 197 253)'}
            onMouseLeave={e => e.target.style.color = 'rgb(96 165 250)'}>
            Chat with us on WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
