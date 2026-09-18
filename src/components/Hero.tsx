'use client';

import { useEffect, useState } from 'react';
import { METRICS } from '@/lib/content';
import { LINKS } from '@/lib/links';
import SmartLink from './SmartLink';

/**
 * MACRO MOTION — the page's single orchestrated entrance, ~1.1s end to end:
 *
 *   0ms    name wipes up from behind a mask
 *   120ms  role line follows it
 *   180ms  lede and buttons settle
 *   260ms  a brass rule draws left-to-right across the readout
 *   420ms+ each measurement rises out of its own mask, 90ms apart
 *
 * Nothing else on the site animates on entry. No scroll-triggered section
 * reveals: content that is on screen is readable the moment it is on screen.
 */
export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Two frames: let fonts and layout settle so the mask has a real height
    // to translate against, otherwise the first frame reveals nothing.
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setReady(true)));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <header className="hero" id="top" data-ready={ready}>
      <div className="wrap">
        <span className="status settle" style={{ ['--d' as string]: '300ms' }}>
          <span className="dot" aria-hidden="true" />
          Open to full-time engineering roles
        </span>

        <h1>
          <span className="mask">
            <span>Nurudeen&nbsp;Salihu</span>
          </span>
          <span className="mask">
            <span className="sub" style={{ ['--d' as string]: '120ms' }}>
              Full-stack developer, Abuja
            </span>
          </span>
        </h1>

        <p className="hero-lede settle" style={{ ['--d' as string]: '200ms' }}>
          I work on the unglamorous parts:{' '}
          <b>service boundaries, access control, and the automation that removes work nobody should be doing by hand.</b>{' '}
          Three years of it, mostly on internal systems other people depend on to do their jobs.
        </p>

        <div className="actions settle" style={{ ['--d' as string]: '260ms' }}>
          <a className="btn btn-fill" href={LINKS.work}>
            See the work
          </a>
          <SmartLink className="btn" href={LINKS.resume}>
            Download résumé
          </SmartLink>
          <a className="btn" href={LINKS.emailHref}>
            Email me
          </a>
        </div>

        <div className="readout" aria-label="Measured outcomes from shipped work">
          {METRICS.map((m, i) => (
            <div className="cell" key={m.label}>
              <span className="mask">
                <span className="v" style={{ ['--d' as string]: `${420 + i * 90}ms` }}>
                  {m.value}
                </span>
              </span>
              <span className="k">{m.label}</span>
              <span className="src">{m.source}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
