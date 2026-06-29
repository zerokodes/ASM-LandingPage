import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const METRICS = [
  { value: '3×', label: 'More conversions' },
  { value: '24/7', label: 'Always-on selling' },
  { value: '< 2s', label: 'Response time' },
  { value: '90%', label: 'Less staff load' },
];

/* Messages to animate in sequence — keep WhatsApp green for the chat bubble colors */
const CHAT_SCRIPT = [
  { from: 'customer', text: 'Hi! Do you have the Air Max 270 in size 42?' },
  { from: 'asm',      text: '✅ Yes! We have it in black and white. $85. Which colour would you like?' },
  { from: 'customer', text: 'Black please! Can I pay on delivery?' },
  { from: 'asm',      text: '🛍️ Done! Order placed. Delivery in 24-48hrs. Tracking: #ORD-7421' },
];

/** Typewriter hook — types one character at a time, returns displayed text */
function useTypewriter(text, speed = 28, startDelay = 0) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    let i = 0;
    const start = setTimeout(() => {
      const timer = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) { clearInterval(timer); setDone(true); }
      }, speed);
      return () => clearInterval(timer);
    }, startDelay);
    return () => clearTimeout(start);
  }, [text, speed, startDelay]);

  return { displayed, done };
}

/* Single animated chat bubble — only renders when `active`, types text, stays when done */
function AnimatedBubble({ msg, onDone }) {
  const { displayed, done } = useTypewriter(msg.text, 25, 200);

  useEffect(() => { if (done) onDone?.(); }, [done]);

  const isCustomer = msg.from === 'customer';

  return (
    <div style={{
      display: 'flex',
      justifyContent: isCustomer ? 'flex-end' : 'flex-start',
      animation: 'fadeSlideUp 0.25s ease forwards',
    }}>
      <div style={{
        maxWidth: '82%',
        padding: '10px 14px',
        borderRadius: isCustomer ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
        background: isCustomer ? '#005C4B' : '#1f2937',
        border: isCustomer ? 'none' : '1px solid rgba(55,65,81,0.7)',
        color: 'white',
        fontSize: '0.8125rem',
        lineHeight: '1.5',
        position: 'relative',
      }}>
        {!isCustomer && (
          <div style={{ color: '#60a5fa', fontSize: '0.7rem', fontWeight: 600, marginBottom: 4 }}>
            ASM · AI Agent
          </div>
        )}
        {displayed}
        {!done && (
          <span style={{
            display: 'inline-block', width: 2, height: '0.8em',
            background: isCustomer ? '#4ade80' : '#60a5fa',
            marginLeft: 2, verticalAlign: 'middle',
            animation: 'blink 0.7s step-end infinite',
          }}/>
        )}
      </div>
    </div>
  );
}

function ChatMockup({ mobile = false }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    async function runSequence() {
      while (!cancelled) {
        setVisibleCount(0);
        setTyping(false);
        await delay(1200);
        for (let i = 0; i < CHAT_SCRIPT.length; i++) {
          if (cancelled) return;
          if (CHAT_SCRIPT[i].from === 'asm') {
            setTyping(true);
            await delay(900);
            if (cancelled) return;
            setTyping(false);
          }
          setVisibleCount(i + 1);
          await delay(CHAT_SCRIPT[i].text.length * 28 + 600);
        }
        await delay(3000);
      }
    }
    runSequence();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [visibleCount, typing]);

  const chatBodyHeight = mobile ? 220 : 360;
  const chatBodyMin   = mobile ? 0   : 300;

  return (
    <div style={{ position: 'relative', maxWidth: mobile ? '100%' : 360, margin: '0 auto' }}>
      {/* Glow */}
      {!mobile && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 70%)',
          borderRadius: 24, filter: 'blur(20px)', transform: 'scale(1.1)', zIndex: 0,
        }}/>
      )}

      <div style={{
        position: 'relative', zIndex: 1,
        background: 'rgb(28 25 23)',
        border: '1px solid rgb(68 64 60)',
        borderRadius: mobile ? 16 : 20,
        overflow: 'hidden',
        boxShadow: mobile ? '0 12px 40px rgba(0,0,0,0.5)' : '0 24px 60px rgba(0,0,0,0.6)',
      }}>
        {/* WA header */}
        <div style={{ background: '#075E54', padding: mobile ? '10px 14px' : '12px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: '50%',
            background: 'rgb(37 99 235)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 700, color: 'white', fontSize: '0.85rem', flexShrink: 0,
          }}>A</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ color: 'white', fontWeight: 600, fontSize: '0.8125rem' }}>ASM Assistant</div>
            <div style={{ color: '#a7f3d0', fontSize: '0.65rem' }}>Online · AI Powered</div>
          </div>
          {/* Inline badge strip — only on mobile, replaces floating badges */}
          {mobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(0,0,0,0.25)', borderRadius: 20, padding: '4px 10px', flexShrink: 0 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 6px #10b981', flexShrink: 0 }}/>
              <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#a7f3d0', whiteSpace: 'nowrap' }}>AI Active</span>
            </div>
          )}
          {!mobile && (
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 12 }}>
              <svg width="18" height="18" fill="white" opacity="0.7" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <svg width="18" height="18" fill="white" opacity="0.7" viewBox="0 0 24 24">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </div>
          )}
        </div>

        {/* Chat body */}
        <div ref={scrollRef} style={{
          background: 'linear-gradient(180deg, #0d1117 0%, #111827 100%)',
          padding: '14px 12px',
          minHeight: chatBodyMin,
          maxHeight: chatBodyHeight,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          overflowY: 'auto',
        }}>
          {CHAT_SCRIPT.slice(0, visibleCount).map((msg, i) => (
            <AnimatedBubble key={i} msg={msg} />
          ))}
          {typing && (
            <div style={{ display: 'flex', justifyContent: 'flex-start', animation: 'fadeSlideUp 0.2s ease forwards' }}>
              <div style={{
                padding: '10px 16px', borderRadius: '16px 16px 16px 4px',
                background: '#1f2937', border: '1px solid rgba(55,65,81,0.7)',
                display: 'flex', gap: 5, alignItems: 'center',
              }}>
                {[0, 1, 2].map(j => (
                  <div key={j} style={{
                    width: 6, height: 6, borderRadius: '50%', background: '#60a5fa',
                    animation: `bounce 1s ease-in-out ${j * 0.15}s infinite`,
                  }}/>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input bar */}
        <div style={{ background: 'rgb(28 25 23)', borderTop: '1px solid rgb(41 37 36)', padding: '8px 12px', display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ flex: 1, background: 'rgb(41 37 36)', borderRadius: 20, padding: '7px 14px', color: 'rgb(120 113 108)', fontSize: '0.8rem' }}>
            Type a message…
          </div>
          <div style={{
            width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
            background: 'rgb(37 99 235)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 12px rgba(37,99,235,0.4)',
          }}>
            <svg width="15" height="15" fill="white" viewBox="0 0 24 24" style={{ transform: 'rotate(45deg)' }}>
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </div>
        </div>

        {/* Mobile bottom stat bar — replaces floating "+12 orders" badge */}
        {mobile && (
          <div style={{
            background: 'rgb(20 18 17)', borderTop: '1px solid rgb(41 37 36)',
            padding: '8px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: '1rem' }}>🛒</span>
              <span style={{ fontWeight: 700, color: 'white', fontSize: '0.8rem' }}>+12 orders today</span>
            </div>
            <span style={{ fontSize: '0.7rem', color: 'rgb(87 83 78)' }}>Powered by ASM AI</span>
          </div>
        )}
      </div>

      {/* Desktop-only floating badges */}
      {!mobile && (
        <>
          <div style={{
            position: 'absolute', top: -16, right: -16,
            background: 'rgb(28 25 23)', border: '1px solid rgb(41 37 36)',
            borderRadius: 10, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8,
            boxShadow: '0 8px 24px rgba(0,0,0,0.5)', zIndex: 10,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgb(214 211 208)' }}>AI Active</span>
          </div>
          <div style={{
            position: 'absolute', bottom: -16, left: -16,
            background: 'rgb(28 25 23)', border: '1px solid rgb(41 37 36)',
            borderRadius: 10, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 10,
            boxShadow: '0 8px 24px rgba(0,0,0,0.5)', zIndex: 10,
          }}>
            <span style={{ fontSize: '1.1rem' }}>🛒</span>
            <div>
              <div style={{ fontWeight: 700, color: 'white', fontSize: '0.8125rem' }}>+12 orders</div>
              <div style={{ color: 'rgb(120 113 108)', fontSize: '0.7rem' }}>Today</div>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        @keyframes fadeSlideUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }
      `}</style>
    </div>
  );
}

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

function useIsMobile(breakpoint = 767) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= breakpoint);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [breakpoint]);
  return isMobile;
}

export default function Hero() {
  const badgeRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const metricsRef = useRef(null);
  const chatRef = useRef(null);
  const mobileChatRef = useRef(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.4 });
    tl.fromTo(badgeRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' })
      .fromTo(headlineRef.current, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }, '-=0.2')
      .fromTo(subRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, '-=0.2')
      .fromTo(ctaRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.1')
      .fromTo(metricsRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.15');
    if (chatRef.current) {
      tl.fromTo(chatRef.current, { opacity: 0, x: 40, scale: 0.94 }, { opacity: 1, x: 0, scale: 1, duration: 0.65, ease: 'power3.out' }, '-=0.5');
    }
    if (mobileChatRef.current) {
      tl.fromTo(mobileChatRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }, '-=0.3');
    }
  }, []);

  return (
    <section className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 64, position: 'relative', overflow: 'hidden' }}>
      {/* Subtle grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.4,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '40px 40px', pointerEvents: 'none',
      }}/>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 700, height: 400, background: 'radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 70%)', pointerEvents: 'none' }}/>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '5rem 1.25rem', width: '100%', boxSizing: 'border-box' }}>
        <div className="hero-grid">
          {/* Left — text content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div ref={badgeRef} style={{ opacity: 0 }}>
              <span className="section-label">
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#60a5fa', display: 'inline-block', animation: 'pulse 2s infinite' }}/>
                WhatsApp AI Sales Assistant
              </span>
            </div>

            <h1 ref={headlineRef} style={{ opacity: 0, margin: 0, fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              <span style={{ color: 'rgb(245 245 243)' }}>Your Business,</span>
              <br />
              <span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Selling 24/7
              </span>
              <br />
              <span style={{ color: 'rgb(245 245 243)' }}>on WhatsApp.</span>
            </h1>

            <p ref={subRef} style={{ opacity: 0, margin: 0, fontSize: '1rem', color: 'rgb(120 113 108)', lineHeight: 1.7 }}>
              ASM turns your WhatsApp into a fully automated sales engine — answering questions,
              showcasing products, taking orders, and following up, all without lifting a finger.
            </p>

            <div ref={ctaRef} style={{ opacity: 0, display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }} className="hero-cta-row">
              <a href="#get-started" className="btn-primary" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
                Start Free Trial
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
              <a href="#demo" className="btn-ghost" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Watch Demo
              </a>
            </div>

            {/* Mobile chat — always in DOM so ref is attached at mount; CSS hides it on desktop */}
            <div ref={mobileChatRef} style={{ opacity: 0, display: isMobile ? 'block' : 'none' }}>
              <ChatMockup mobile />
            </div>

            {/* Metrics */}
            <div ref={metricsRef} style={{ opacity: 0, paddingTop: 20, borderTop: '1px solid rgb(41 37 36)' }}>
              <div className="hero-metrics-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
                {METRICS.map((m) => (
                  <div key={m.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'white' }}>{m.value}</div>
                    <div style={{ fontSize: '0.7rem', color: 'rgb(120 113 108)', marginTop: 2 }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — always in DOM so GSAP ref is attached at mount; CSS hides on mobile */}
          <div ref={chatRef} style={{ opacity: 0, display: isMobile ? 'none' : 'block' }}>
            <ChatMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
