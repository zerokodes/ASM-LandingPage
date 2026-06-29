import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

/* Product logo — lightning bolt, matches the sidebar "Powered by" icon */
function Logo() {
  return (
    <div style={{
      width: 32, height: 32, borderRadius: 8,
      background: 'rgb(37 99 235)',  /* blue-600 */
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 4px 14px rgba(37,99,235,0.35)',
    }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="18" height="18">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="white" stroke="none"/>
      </svg>
    </div>
  );
}

export default function Navbar() {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const close = () => setMenuOpen(false);

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.1 }
    );
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll while menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
    <nav
      ref={navRef}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all 0.3s',
        ...(scrolled ? {
          background: 'rgb(10 10 10 / 0.92)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgb(41 37 36 / 0.8)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        } : {}),
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <Logo />
          <span style={{ fontWeight: 700, color: 'rgb(245 245 243)', fontSize: '1.05rem', letterSpacing: '-0.02em', fontFamily: "'Space Grotesk', sans-serif" }}>ASM</span>
          <span style={{ color: 'rgb(96 165 250)', fontSize: '0.75rem', fontWeight: 500 }}>Automated Sales Manager</span>
        </Link>

        {/* Desktop nav — only show anchor links on home page */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 2 }}>
          {isHome && NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} style={{
              padding: '0.5rem 1rem', borderRadius: 8, color: 'rgb(168 162 158)',
              fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', transition: 'all 0.15s',
            }}
            onMouseEnter={e => { e.target.style.color = 'white'; e.target.style.background = 'rgb(41 37 36 / 0.6)'; }}
            onMouseLeave={e => { e.target.style.color = 'rgb(168 162 158)'; e.target.style.background = 'transparent'; }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 12 }}>
          <a href="https://wa.me/2348100000000?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20ASM" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8125rem' }}>Contact Sales</a>
          <a href="#get-started" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8125rem' }}>Get Started Free</a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          style={{ padding: 8, borderRadius: 8, background: 'transparent', border: 'none', color: 'rgb(168 162 158)', cursor: 'pointer', position: 'relative', zIndex: 110 }}
          onClick={() => setMenuOpen(o => !o)}
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            }
          </svg>
        </button>
      </div>
    </nav>

    {/* Full-screen mobile overlay */}
    {menuOpen && (
      <div
        style={{
          position: 'fixed', inset: 0, zIndex: 99,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          background: 'rgba(10,10,10,0.75)',
        }}
        onClick={close}
        aria-hidden="true"
      />
    )}

    {/* Slide-down nav panel — sits above the backdrop */}
    <div
      className="md:hidden"
      style={{
        position: 'fixed', top: 64, left: 0, right: 0, zIndex: 105,
        background: 'rgb(15 13 12)',
        borderBottom: '1px solid rgb(41 37 36)',
        boxShadow: '0 16px 48px rgba(0,0,0,0.6)',
        padding: '0.5rem 1.5rem 1.5rem',
        display: 'flex', flexDirection: 'column',
        transform: menuOpen ? 'translateY(0)' : 'translateY(-110%)',
        transition: 'transform 0.28s cubic-bezier(0.4,0,0.2,1)',
        pointerEvents: menuOpen ? 'auto' : 'none',
      }}
    >
      {NAV_LINKS.map((l) => (
        <a key={l.label} href={l.href} onClick={close}
          style={{ padding: '0.9rem 0', color: 'rgb(214 211 208)', fontWeight: 500, fontSize: '1rem', textDecoration: 'none', borderBottom: '1px solid rgb(41 37 36 / 0.4)', display: 'block' }}>
          {l.label}
        </a>
      ))}
      <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <a href="https://wa.me/2348100000000?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20ASM" target="_blank" rel="noopener noreferrer" className="btn-ghost" onClick={close} style={{ textAlign: 'center', justifyContent: 'center', width: '100%', boxSizing: 'border-box' }}>Contact Sales</a>
        <a href="#get-started" className="btn-primary" onClick={close} style={{ textAlign: 'center', justifyContent: 'center', width: '100%', boxSizing: 'border-box' }}>Get Started Free</a>
      </div>
    </div>
    </>
  );
}
