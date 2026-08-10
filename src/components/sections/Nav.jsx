import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { NAV_LINKS, WHATSAPP_URL } from '@/data/nav';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={cn('nav', scrolled && 'scrolled')}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <span className="nav-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="18" height="18">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="white" stroke="none" />
              </svg>
            </span>
            <span className="nav-brand">ChatSeller</span>
            <span className="nav-by">by Apt-Intel</span>
          </Link>
          <div className="nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={`/${l.href}`}>{l.label}</a>
            ))}
          </div>
          <div className="nav-ctas">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">Contact Sales</a>
            <a href="/#get-started" className="btn-primary">Get Started Free</a>
          </div>
          <button
            className="nav-hamburger"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </nav>
      <div className={cn('nav-backdrop', menuOpen && 'open')} onClick={() => setMenuOpen(false)} />
      <div className={cn('nav-mobile-panel', menuOpen && 'open')}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={`/${l.href}`} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <div className="nav-mobile-ctas">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost" onClick={() => setMenuOpen(false)}>Contact Sales</a>
          <a href="/#get-started" className="btn-primary" onClick={() => setMenuOpen(false)}>Get Started Free</a>
        </div>
      </div>
    </>
  );
}
