import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div style={{
      width: 28, height: 28, borderRadius: 7,
      background: 'rgb(37 99 235)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 2px 10px rgba(37,99,235,0.35)', flexShrink: 0,
    }}>
      <svg viewBox="0 0 24 24" fill="white" width="16" height="16">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgb(41 37 36)', padding: '4rem 0 2rem', background: 'rgb(10 10 10)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
        <div className="footer-grid" style={{ marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
              <Logo />
              <span style={{ fontWeight: 700, color: 'rgb(245 245 243)', fontSize: '1rem', letterSpacing: '-0.02em' }}>ASM</span>
            </div>
            <p style={{ color: 'rgb(87 83 78)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: 300 }}>
              Automated Sales Manager — turning WhatsApp into your most productive salesperson, 24/7.
            </p>
            <p style={{ color: 'rgb(68 64 60)', fontSize: '0.75rem', marginTop: '1.5rem' }}>
              © 2026 Autopilot Sales Manager. All rights reserved.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 style={{ color: 'rgb(245 245 243)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem' }}>Product</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Features', href: '/#features' },
                { label: 'Pricing', href: '/#pricing' },
                { label: 'How It Works', href: '/#how-it-works' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} style={{ color: 'rgb(87 83 78)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={e => e.target.style.color = 'rgb(214 211 208)'}
                    onMouseLeave={e => e.target.style.color = 'rgb(87 83 78)'}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: 'rgb(245 245 243)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'About', to: '/about' },
                { label: 'Privacy Policy', to: '/privacy-policy' },
                { label: 'Terms of Service', to: '/terms-of-service' },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} style={{ color: 'rgb(87 83 78)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={e => e.target.style.color = 'rgb(214 211 208)'}
                    onMouseLeave={e => e.target.style.color = 'rgb(87 83 78)'}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom-strip" style={{ borderTop: '1px solid rgb(28 25 23)', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'rgb(68 64 60)', fontSize: '0.75rem' }}>
            Built for WhatsApp businesses, worldwide. Powered by AI.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgb(16 185 129)', boxShadow: '0 0 6px rgb(16 185 129 / 0.6)' }}/>
            <span style={{ color: 'rgb(68 64 60)', fontSize: '0.75rem' }}>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
