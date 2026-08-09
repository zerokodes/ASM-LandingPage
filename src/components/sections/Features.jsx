import { FEATURES } from '@/data/features';
import { hexToRgb } from '@/lib/utils';
import Icon from '@/components/ui/Icon';

export default function Features() {
  return (
    <section id="features" style={{ background: 'rgba(28,25,23,.15)' }}>
      <div className="wrap">
        <div className="section-hd">
          <span className="section-label">Features</span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            Everything your business needs<br /><span className="dim">to sell on autopilot.</span>
          </h2>
          <p className="section-sub" style={{ marginInline: 'auto' }}>
            ChatSeller isn't a chatbot with pre-set replies. It's a trained sales agent that knows your business inside out.
          </p>
        </div>
        <div className="row-list">
          {FEATURES.map((f) => {
            const rgb = hexToRgb(f.accent);
            return (
              <div className="row-item" key={f.title}>
                <div className="row-icon" style={{ background: `rgba(${rgb},.14)` }}>
                  <Icon paths={f.icon} color={f.accent} />
                </div>
                <div>
                  <div className="row-title">{f.title}</div>
                  <p className="row-desc">{f.desc}</p>
                </div>
                <span className="row-tag" style={{ background: `rgba(${rgb},.12)`, color: f.accent }}>{f.tag}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
