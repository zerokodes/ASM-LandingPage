/**
 * Feature card — tall vertical with a diagonal corner slash accent.
 * The top-left cut is achieved via clip-path polygon giving the card
 * an asymmetric chamfered corner feel (distinct from a plain rectangle).
 */
export default function PremiumCard({
  index,
  icon,
  tag,
  title,
  desc,
  accentColor = '#2563eb',
  width = 300,
}) {
  const r = parseInt(accentColor.slice(1, 3), 16);
  const g = parseInt(accentColor.slice(3, 5), 16);
  const b = parseInt(accentColor.slice(5, 7), 16);

  const clipSize = 36; // px of the diagonal cut

  return (
    <div
      style={{
        width,
        flexShrink: 0,
        position: 'relative',
        // Gradient border trick: outer div is 1px "padding" with gradient bg
        padding: 1,
        background: `linear-gradient(145deg, rgba(${r},${g},${b},0.55) 0%, rgba(${r},${g},${b},0.08) 45%, rgba(41,37,36,0.5) 100%)`,
        // Chamfered top-left corner polygon
        clipPath: `polygon(${clipSize}px 0%, 100% 0%, 100% 100%, 0% 100%, 0% ${clipSize}px)`,
        cursor: 'default',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
        e.currentTarget.style.boxShadow = `0 20px 60px rgba(${r},${g},${b},0.22), 0 8px 24px rgba(0,0,0,0.4)`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Inner surface — same clip so the 1px border shows evenly */}
      <div style={{
        clipPath: `polygon(${clipSize - 1}px 0%, 100% 0%, 100% 100%, 0% 100%, 0% ${clipSize - 1}px)`,
        background: 'linear-gradient(150deg, rgb(20 18 17) 0%, rgb(13 11 10) 100%)',
        padding: '1.75rem',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
      }}>

        {/* Spotlight glow — top-right */}
        <div style={{
          position: 'absolute', top: -40, right: -40,
          width: 180, height: 180,
          background: `radial-gradient(circle, rgba(${r},${g},${b},0.11) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}/>

        {/* Diagonal accent line along the cut edge */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: clipSize + 2, height: clipSize + 2,
          background: `linear-gradient(135deg, rgba(${r},${g},${b},0.8) 0%, transparent 55%)`,
          clipPath: `polygon(0 0, ${clipSize + 2}px 0, 0 ${clipSize + 2}px)`,
          pointerEvents: 'none',
        }}/>

        {/* Index watermark */}
        <div style={{
          position: 'absolute', bottom: -8, right: 10,
          fontSize: '4.5rem', fontWeight: 900, lineHeight: 1,
          color: `rgba(${r},${g},${b},0.05)`,
          fontFamily: 'monospace', userSelect: 'none', pointerEvents: 'none',
          letterSpacing: '-0.04em',
        }}>
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Icon pill */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          padding: '5px 11px', borderRadius: 8,
          background: `rgba(${r},${g},${b},0.1)`,
          border: `1px solid rgba(${r},${g},${b},0.28)`,
          marginBottom: '1.25rem',
          boxShadow: `0 0 14px rgba(${r},${g},${b},0.14)`,
        }}>
          <span style={{ color: accentColor, display: 'flex' }}>{icon}</span>
          <span style={{ color: accentColor, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
            {tag}
          </span>
        </div>

        <h3 style={{
          color: 'rgb(245 245 243)', fontWeight: 700,
          fontSize: '0.9375rem', lineHeight: 1.4,
          marginBottom: '0.75rem', letterSpacing: '-0.01em',
        }}>
          {title}
        </h3>

        <p style={{ color: 'rgb(120 113 108)', fontSize: '0.8125rem', lineHeight: 1.65 }}>
          {desc}
        </p>
      </div>
    </div>
  );
}
