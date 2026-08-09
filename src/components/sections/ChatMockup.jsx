import { useEffect, useRef, useState } from 'react';
import { CHAT_SCRIPT } from '@/data/chatScript';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function Bubble({ msg }) {
  const mine = msg.from === 'customer';
  return (
    <div className={`bubble-row${mine ? ' mine' : ''}`}>
      <div className="bubble">
        {!mine && <div className="bubble-label">ChatSeller · AI Agent</div>}
        {msg.text}
      </div>
    </div>
  );
}

function TypingBubble() {
  return (
    <div className="bubble-row">
      <div className="bubble" style={{ display: 'flex', gap: 5, alignItems: 'center', padding: '10px 16px' }}>
        <div className="animate-bounce2" style={{ width: 6, height: 6, borderRadius: '50%', background: '#60a5fa' }} />
        <div className="animate-bounce2" style={{ width: 6, height: 6, borderRadius: '50%', background: '#60a5fa', animationDelay: '.15s' }} />
        <div className="animate-bounce2" style={{ width: 6, height: 6, borderRadius: '50%', background: '#60a5fa', animationDelay: '.3s' }} />
      </div>
    </div>
  );
}

export default function ChatMockup() {
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [visible, setVisible] = useState(reduceMotion ? CHAT_SCRIPT : []);
  const [typing, setTyping] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (reduceMotion) return;
    const active = { current: true };

    async function run() {
      while (active.current) {
        setVisible([]);
        await sleep(1200);
        for (const msg of CHAT_SCRIPT) {
          if (!active.current) return;
          if (msg.from === 'ai') {
            setTyping(true);
            await sleep(900);
            if (!active.current) return;
            setTyping(false);
          }
          if (!active.current) return;
          setVisible((v) => [...v, msg]);
          await sleep(msg.text.length * 20 + 500);
        }
        await sleep(3000);
      }
    }
    run();
    return () => { active.current = false; };
  }, [reduceMotion]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [visible, typing]);

  return (
    <div className="chat-mockup">
      <div className="chat-glow" />
      <div className="chat-panel">
        <div className="chat-head">
          <div className="chat-avatar">A</div>
          <div>
            <div className="chat-head-name">ChatSeller Assistant</div>
            <div className="chat-head-status">Online · AI Powered</div>
          </div>
          <div className="chat-head-icons">
            <svg width="18" height="18" fill="white" opacity=".7" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
            <svg width="18" height="18" fill="white" opacity=".7" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
          </div>
        </div>
        <div className="chat-body" ref={bodyRef}>
          {visible.map((msg, i) => <Bubble key={i} msg={msg} />)}
          {typing && <TypingBubble />}
        </div>
        <div className="chat-input-bar">
          <div className="chat-input-fake">Type a message…</div>
          <div className="chat-send">
            <svg width="15" height="15" fill="white" viewBox="0 0 24 24" style={{ transform: 'rotate(45deg)' }}><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
          </div>
        </div>
      </div>
      <div className="chat-badge top">
        <div className="chat-badge-dot" />
        <span style={{ fontSize: '.75rem', fontWeight: 600, color: 'rgb(214 211 208)' }}>AI Active</span>
      </div>
      <div className="chat-badge bottom">
        <span style={{ fontSize: '1.1rem' }}>🛒</span>
        <div>
          <div style={{ fontWeight: 700, color: '#fff', fontSize: '.8125rem' }}>+12 orders</div>
          <div style={{ color: 'rgb(120 113 108)', fontSize: '.7rem' }}>Today</div>
        </div>
      </div>
    </div>
  );
}
