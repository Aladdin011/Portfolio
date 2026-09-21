'use client';

import { useEffect, useRef, useState } from 'react';
import { LINKS } from '@/lib/links';
import SmartLink from '../ui/SmartLink';
import { Logo } from './Brand';

const navItems = [
  { label: 'About', href: LINKS.about },
  { label: 'Work', href: LINKS.work },
  { label: 'How I work', href: LINKS.practice },
  { label: 'Stack', href: LINKS.stack },
  { label: 'Journey', href: LINKS.journey },
  { label: 'Status', href: '#status' },
];

/**
 * MACRO MOTION — the only thing on the page that animates continuously.
 * The bar condenses once past the fold and carries a hairline read-out of
 * scroll depth. Both are information, not decoration. Written straight to a
 * CSS custom property inside rAF so React never re-renders on scroll.
 */
export default function Nav() {
  const ref = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      el.style.setProperty('--progress', String(progress));
      el.dataset.scrolled = String(window.scrollY > 40);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav" ref={ref} data-scrolled="false">
      <div className="wrap nav-in">
        <a className="brand" href={LINKS.top} aria-label="AladdinCode home" onClick={closeMenu}>
          <Logo />
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <SmartLink className="btn" href={LINKS.resume}>
            Résumé
          </SmartLink>
        </div>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((open) => !open)}>
          <Logo compact /> <span>{menuOpen ? 'Close' : 'Menu'}</span>
        </button>
      </div>
      <div className="mobile-menu" id="mobile-menu" data-open={menuOpen}>
        <div className="wrap mobile-menu-in">
          {navItems.map((item) => <a key={item.label} href={item.href} onClick={closeMenu}>{item.label}</a>)}
          <SmartLink className="btn btn-fill" href={LINKS.resume}>Download résumé</SmartLink>
        </div>
      </div>
      <span className="nav-progress" aria-hidden="true" />
    </nav>
  );
}
