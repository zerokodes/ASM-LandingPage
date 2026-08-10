import { PAIN_POINTS } from '@/data/features';
import { hexToRgb } from '@/lib/utils';
import Icon from '@/components/ui/Icon';
import { useScrollReveal } from '@/lib/useScrollReveal';

export default function Problem() {
  const sectionRef = useScrollReveal();
  return (
    <section ref={sectionRef}>
      <div className="wrap">
        <div className="section-hd">
          <span className="section-label">The Problem</span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            Running sales chat by hand<br /><span className="dim">is exhausting.</span>
          </h2>
          <p className="section-sub" style={{ marginInline: 'auto' }}>
            Every growing business hits this wall. Your best salespeople become message-answering robots. Here's the real cost.
          </p>
        </div>
        <div className="row-list">
          {PAIN_POINTS.map((p) => {
            const rgb = hexToRgb(p.accent);
            return (
              <div className="row-item" key={p.title}>
                <div className="row-icon" style={{ background: `rgba(${rgb},.14)` }}>
                  <Icon paths={p.paths} color={p.accent} strokeWidth={1.8} />
                </div>
                <div>
                  <div className="row-title">{p.title}</div>
                  <p className="row-desc">{p.desc}</p>
                </div>
                <div className="row-stat">
                  <div className="row-stat-val" style={{ color: p.accent }}>{p.stat}</div>
                  <div className="row-stat-lbl">{p.statLabel}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ color: 'rgb(87 83 78)', fontSize: '.875rem' }}>Sound familiar?</p>
          <p style={{ color: 'rgb(245 245 243)', fontWeight: 700, fontSize: '1.25rem', marginTop: 8 }}>There's a better way. ↓</p>
        </div>
      </div>
    </section>
  );
}
