'use client';

import { useEffect, useRef } from 'react';
import { LINKS } from '@/lib/links';

/**
 * MACRO MOTION — the only thing on the page that animates continuously.
 * The bar condenses once past the fold and carries a hairline read-out of
 * scroll depth. Both are information, not decoration. Written straight to a
 * CSS custom property inside rAF so React never re-renders on scroll.
 */
export default function Nav() {
  const ref = useRef<HTMLElement>(null);

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

  return (
    <nav className="nav" ref={ref} data-scrolled="false">
      <div className="wrap nav-in">
        <a className="brand" href="#top">
          Nurudeen Salihu
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#practice">How I work</a>
          <a href="#stack">Stack</a>
          <a href="#journey">Journey</a>
          <a className="btn" href={LINKS.resume}>
            Résumé
          </a>
        </div>
      </div>
      <span className="nav-progress" aria-hidden="true" />
    </nav>
  );
}
