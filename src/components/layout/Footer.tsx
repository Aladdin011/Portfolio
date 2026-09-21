'use client';

import { Logo } from './Brand';

/**
 * Theme switching through the View Transitions API where it exists, so the
 * palette cross-dissolves instead of snapping. Everywhere else it is an
 * instant, correct swap — the effect is the bonus, never the mechanism.
 */
export default function Footer() {
  const toggle = () => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const current = root.getAttribute('data-theme') ?? (prefersDark ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';

    const apply = () => {
      root.setAttribute('data-theme', next);
      try {
        localStorage.setItem('theme', next);
      } catch {
        /* private mode — the toggle still works for this session */
      }
    };

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const doc = document as Document & { startViewTransition?: (cb: () => void) => void };

    if (doc.startViewTransition && !reduce) doc.startViewTransition(apply);
    else apply();
  };

  return (
    <footer>
      <div className="wrap footer-in">
        <span className="footer-brand"><Logo compact /> © {new Date().getFullYear()} Nurudeen Salihu</span>
        <button className="ghost" type="button" onClick={toggle}>
          Switch theme
        </button>
      </div>
    </footer>
  );
}
