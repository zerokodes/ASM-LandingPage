import { useState } from 'react';
import { cn } from '@/lib/utils';
import { FAQS } from '@/data/faqs';
import { WHATSAPP_QUESTION_URL } from '@/data/nav';
import { useScrollReveal } from '@/lib/useScrollReveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useScrollReveal({ itemsSelector: '.section-hd, .faq-item' });

  return (
    <section id="faq" ref={sectionRef}>
      <div className="wrap" style={{ maxWidth: 720 }}>
        <div className="section-hd">
          <span className="section-label">FAQ</span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>Questions? We've got answers.</h2>
        </div>
        <div className="faq-list">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div className={cn('faq-item', open && 'open')} key={item.q}>
                <button
                  className="faq-q"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <h3 className="faq-q-text">{item.q}</h3>
                  <div className="faq-ico">
                    <svg width="12" height="12" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className="faq-body">
                  <div className="faq-body-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="faq-more">
          Still have questions?{' '}
          <a href={WHATSAPP_QUESTION_URL} target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp</a>
        </p>
      </div>
    </section>
  );
}
