'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';
import { METRICS } from '@/lib/content';
import { LINKS } from '@/lib/links';
import SmartLink from './SmartLink';

const NAME = 'Nurudeen Salihu';
const HERO_IMAGE = 'https://cdn.builder.io/api/v1/image/assets%2F223935478b834832a87f1a118659a06b%2Fa56eb5e4b09a4c3d9ebdb4071033a457?format=webp&width=800&height=1200';

export default function Hero() {
  const [ready, setReady] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setReady(true)));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let scrollFrame = 0;
    const updateScrollState = () => {
      scrollFrame = 0;
      const progress = Math.min(1, Math.max(0, window.scrollY / Math.max(hero.offsetHeight * 0.55, 1)));
      const phase = (start: number, end: number) => {
        const value = Math.min(1, Math.max(0, (progress - start) / (end - start)));
        return value * value * (3 - 2 * value);
      };
      const identityExit = phase(0.04, 0.48);
      const promiseExit = phase(0.12, 0.62);
      const detailExit = phase(0.22, 0.76);
      const portraitArrival = phase(0, 0.66);
      const evidenceArrival = phase(0.34, 0.88);
      const metricsArrival = phase(0.56, 1);

      hero.style.setProperty('--scroll-y', `${Math.round((1 - portraitArrival) * 34)}px`);
      hero.style.setProperty('--scroll-scale', (0.97 + portraitArrival * 0.03).toFixed(3));
      hero.style.setProperty('--scroll-opacity', (0.82 + portraitArrival * 0.18).toFixed(3));
      hero.style.setProperty('--copy-y', `${Math.round(promiseExit * -14)}px`);
      hero.style.setProperty('--copy-opacity', (1 - detailExit * 0.24).toFixed(3));
      hero.style.setProperty('--story-name-y', `${Math.round(identityExit * -18)}px`);
      hero.style.setProperty('--story-name-opacity', (1 - identityExit * 0.2).toFixed(3));
      hero.style.setProperty('--story-claim-y', `${Math.round(promiseExit * -34)}px`);
      hero.style.setProperty('--story-claim-opacity', (1 - promiseExit * 0.72).toFixed(3));
      hero.style.setProperty('--story-detail-y', `${Math.round(detailExit * -24)}px`);
      hero.style.setProperty('--story-detail-opacity', (1 - detailExit * 0.76).toFixed(3));
      hero.style.setProperty('--portrait-y', `${Math.round((1 - portraitArrival) * 24)}px`);
      hero.style.setProperty('--evidence-y', `${Math.round((1 - evidenceArrival) * 28)}px`);
      hero.style.setProperty('--evidence-opacity', (0.32 + evidenceArrival * 0.68).toFixed(3));
      hero.style.setProperty('--metrics-y', `${Math.round((1 - metricsArrival) * 24)}px`);
      hero.style.setProperty('--metrics-opacity', (0.28 + metricsArrival * 0.72).toFixed(3));
      hero.style.setProperty('--scroll-prompt-opacity', (1 - phase(0.18, 0.58)).toFixed(3));
    };
    const requestScrollUpdate = () => {
      if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    window.addEventListener('resize', requestScrollUpdate, { passive: true });
    return () => {
      window.removeEventListener('scroll', requestScrollUpdate);
      window.removeEventListener('resize', requestScrollUpdate);
      if (scrollFrame) cancelAnimationFrame(scrollFrame);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const setPointerPosition = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch') return;
    const element = visualRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      element.style.setProperty('--pointer-x', x.toFixed(3));
      element.style.setProperty('--pointer-y', y.toFixed(3));
      frameRef.current = 0;
    });
  };

  const resetPointerPosition = () => {
    const element = visualRef.current;
    if (!element) return;
    element.style.setProperty('--pointer-x', '0');
    element.style.setProperty('--pointer-y', '0');
  };

  return (
    <header className="hero" id="top" ref={heroRef} data-ready={ready}>
      <div className="hero-orbit hero-orbit-a" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-b" aria-hidden="true" />
      <div className="wrap hero-wrap">
        <div className="hero-copy">
          <span className="status settle" style={{ ['--d' as string]: '180ms' }}>
            <span className="dot" aria-hidden="true" />
            Open to full-time engineering roles
          </span>

          <h1 aria-label={`${NAME}. I make complex operations feel obvious.`}>
            <span className="name-mark hero-story-name" aria-hidden="true">
              {Array.from(NAME).map((letter, index) =>
                letter === ' ' ? (
                  <span className="name-space" key={`space-${index}`} />
                ) : (
                  <span className="name-letter" key={`${letter}-${index}`} style={{ ['--i' as string]: index }}>
                    {letter}
                  </span>
                ),
              )}
            </span>
            <span className="hero-claim hero-story-claim mask">
              <span style={{ ['--d' as string]: '100ms' }}>I make complex operations feel obvious.</span>
            </span>
            <span className="hero-story-sub mask">
              <span className="sub" style={{ ['--d' as string]: '180ms' }}>
                Full-stack developer, Abuja
              </span>
            </span>
          </h1>

          <p className="hero-lede hero-story-detail settle" style={{ ['--d' as string]: '200ms' }}>
            I work on the unglamorous parts:{' '}
            <b>service boundaries, access control, and the automation that removes work nobody should be doing by hand.</b>{' '}
            Three years of it, mostly on internal systems other people depend on to do their jobs.
          </p>

          <div className="actions hero-story-detail settle" style={{ ['--d' as string]: '260ms' }}>
            <a className="btn btn-fill" href={LINKS.work}>
              See the work <span aria-hidden="true">↗</span>
            </a>
            <SmartLink className="btn" href={LINKS.resume}>
              Download résumé
            </SmartLink>
            <a className="btn btn-quiet" href={LINKS.emailHref}>
              Email me
            </a>
          </div>

          <div className="hero-note hero-story-detail settle" style={{ ['--d' as string]: '320ms' }}>
            <span className="hero-note-line" aria-hidden="true" />
            <span>Systems that stay understandable after launch.</span>
          </div>
        </div>

        <div
          className="hero-visual"
          ref={visualRef}
          onPointerEnter={setPointerPosition}
          onPointerMove={setPointerPosition}
          onPointerLeave={resetPointerPosition}
        >
          <div className="visual-grid" aria-hidden="true" />
          <div className="visual-bloom" aria-hidden="true" />
          <div className="visual-frame portrait-frame hero-story-portrait">
            <Image
              src={HERO_IMAGE}
              alt="Portrait of Nurudeen Salihu"
              fill
              priority
              sizes="(max-width: 760px) 88vw, 46vw"
              className="hero-portrait"
            />
            <div className="visual-scrim" aria-hidden="true" />
            <div className="visual-caption mono">
              <span>PORTRAIT / 01</span>
              <span>BUILD / MAINTAIN / REFINE</span>
            </div>
          </div>

          <span className="visual-label visual-label-top hero-story-evidence mono" aria-hidden="true">SYSTEMS / HUMAN-FIRST</span>
          <span className="visual-label visual-label-bottom hero-story-evidence mono" aria-hidden="true">09° 04′ N / 07° 29′ E</span>
          <div className="visual-proof visual-proof-primary hero-story-evidence" aria-hidden="true">
            <strong>40%</strong>
            <span>less repetitive work</span>
          </div>
          <div className="portrait-meta hero-story-evidence" tabIndex={0}>
            <span className="label">NURUDEEN SALIHU</span>
            <strong>Full-stack developer</strong>
            <span>Abuja / Nigeria</span>
          </div>
        </div>

        <div className="readout hero-readout hero-story-metrics" aria-label="Measured outcomes from shipped work">
          {METRICS.map((metric, index) => (
            <div className="cell" key={metric.label}>
              <span className="mask">
                <span className="v" style={{ ['--d' as string]: `${420 + index * 90}ms` }}>
                  {metric.value}
                </span>
              </span>
              <span className="k">{metric.label}</span>
              <span className="src">{metric.source}</span>
            </div>
          ))}
        </div>
      </div>
      <a className="hero-scroll mono" href="#work">
        <span className="hero-scroll-line" aria-hidden="true" />
        Scroll to explore
      </a>
    </header>
  );
}
