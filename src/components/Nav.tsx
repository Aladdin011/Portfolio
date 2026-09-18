'use client';

import { useEffect, useRef, useState } from 'react';
import { LINKS } from '@/lib/links';
import SmartLink from './SmartLink';

const navItems = [
  { label: 'Work', href: LINKS.work },
  { label: 'How I work', href: LINKS.practice },
  { label: 'Stack', href: LINKS.stack },
  { label: 'Journey', href: LINKS.journey },
];

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

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('keydown', onKeyDown);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav" ref={ref} data-scrolled="false">
      <div className="wrap nav-in">
        <a className="brand" href={LINKS.top} onClick={closeMenu}>
          NS<span aria-hidden="true">/</span><span className="brand-full">Nurudeen Salihu</span>
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
          <span className="nav-toggle-icon" aria-hidden="true"><i /><i /></span>
        </button>
        <div className="nav-links" id="primary-navigation" data-open={menuOpen}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <SmartLink className="btn nav-resume" href={LINKS.resume}>
            Résumé
          </SmartLink>
        </div>
      </div>
      <span className="nav-progress" aria-hidden="true" />
    </nav>
  );
}
