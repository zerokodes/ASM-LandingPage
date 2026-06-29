import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MarqueeRow from './MarqueeRow';
import PremiumCard from './PremiumCard';

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    tag: 'AI Brain',
    accentColor: '#818cf8',
    title: 'Intelligent conversation that understands context',
    desc: 'ASM uses your product catalog, FAQs, and business knowledge to give accurate, personalized answers — not canned templates. Remembers history, handles follow-ups naturally.',
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>,
  },
  {
    tag: 'Catalog',
    accentColor: '#60a5fa',
    title: 'Your full catalog, always up to date',
    desc: 'Sync products, services, prices and availability from your dashboard. ASM can show images, compare options, and guide customers to the right purchase in real time.',
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>,
  },
  {
    tag: 'Human Override',
    accentColor: '#34d399',
    title: 'Staff can take over any conversation instantly',
    desc: 'Reply from your staff WhatsApp number and ASM immediately steps back. No mode switching, no dashboard — just respond and ASM knows to stay quiet until needed again.',
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>,
  },
  {
    tag: 'Knowledge Base',
    accentColor: '#f59e0b',
    title: 'Train on your docs, PDFs, and website',
    desc: 'Upload product sheets, policies, FAQs, or point ASM at your website. It ingests everything and answers from your actual content, not made-up guesses.',
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>,
  },
  {
    tag: 'Notifications',
    accentColor: '#fb923c',
    title: 'Instant alerts for hot leads and orders',
    desc: 'Get notified on WhatsApp when a customer places an order, asks something the AI can\'t answer, or when a conversation needs human attention.',
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>,
  },
  {
    tag: 'Analytics',
    accentColor: '#2563eb',
    title: 'Sales insights from every conversation',
    desc: 'See which products get asked about most, conversion rates by product, response times, and customer satisfaction — all from your dashboard in real time.',
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>,
  },
  {
    tag: 'Multi-Staff',
    accentColor: '#e879f9',
    title: 'One inbox, unlimited team members',
    desc: 'Add staff with different roles. They see assigned conversations, get escalation alerts, and can jump in without customers knowing a switch happened.',
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
  },
  {
    tag: 'Orders',
    accentColor: '#34d399',
    title: 'Capture and track orders end-to-end',
    desc: 'ASM collects order details, confirms with customers, logs everything in your dashboard, and sends updates. No third-party e-commerce platform needed.',
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>,
  },
];

export default function Features() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const rowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 80%' } }
      );
      gsap.fromTo(rowRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: rowRef.current, start: 'top 85%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const cards = FEATURES.map((f, i) => (
    <PremiumCard key={f.tag} index={i} {...f} width={330} />
  ));

  return (
    <section ref={sectionRef} id="features" style={{ padding: '6rem 0', position: 'relative', background: 'rgb(28 25 23 / 0.15)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', marginBottom: '3.5rem' }}>
        <div ref={titleRef} style={{ opacity: 0, textAlign: 'center' }}>
          <span className="section-label">Features</span>
          <h2 style={{ marginTop: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'rgb(245 245 243)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Everything your business needs<br />
            <span style={{ color: 'rgb(120 113 108)' }}>to sell on autopilot.</span>
          </h2>
          <p style={{ marginTop: '1rem', color: 'rgb(120 113 108)', fontSize: '1.05rem', maxWidth: 520, margin: '1rem auto 0' }}>
            ASM isn&apos;t a chatbot with pre-set replies. It&apos;s a trained sales agent that knows
            your business inside out.
          </p>
        </div>
      </div>

      <div ref={rowRef} className="marquee-container" style={{ opacity: 0, maxWidth: 1280, margin: '0 auto', padding: '0 2rem', overflow: 'hidden' }}>
        <MarqueeRow speed={50} gap={20}>
          {cards}
        </MarqueeRow>
      </div>

      {/* Scroll hint */}
      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <span style={{ color: 'rgb(87 83 78)', fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18"/></svg>
          Hover to pause · Scroll for more
          <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </span>
      </div>
    </section>
  );
}
