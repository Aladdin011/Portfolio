'use client';

import { useEffect, useState } from 'react';

export function LogoMark({ className = '', title = 'AladdinCode' }: { className?: string; title?: string }) {
  return (
    <svg className={`logo-mark ${className}`} viewBox="0 0 48 48" role="img" aria-label={title} focusable="false">
      <path d="M8 38 23.5 8 39 38" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="miter" />
      <path d="M14 27h19M28 16.5a10.5 10.5 0 1 1 0 15" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`logo ${compact ? 'logo-compact' : ''}`}>
      <LogoMark />
      {!compact && <span className="logo-wordmark">Aladdin<span>Code</span></span>}
    </span>
  );
}

export function BrandLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;
  return (
    <div className="brand-loader" aria-hidden="true">
      <LogoMark />
      <span className="loader-line" />
    </div>
  );
}
