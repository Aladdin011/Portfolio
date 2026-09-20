'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { ABOUT_CURRENTLY, ABOUT_JOURNEY, ABOUT_PRINCIPLES, ABOUT_TECHNICAL_AREAS } from '@/lib/content';
import { LINKS } from '@/lib/links';

export default function AboutPage() {
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const portrait = portraitRef.current;
    if (!portrait || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onMove = (event: PointerEvent) => {
      const rect = portrait.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      portrait.style.setProperty('--tilt-x', `${x * 4}deg`);
      portrait.style.setProperty('--tilt-y', `${y * -4}deg`);
      portrait.style.setProperty('--light-x', `${50 + x * 24}%`);
      portrait.style.setProperty('--light-y', `${38 + y * 20}%`);
    };
    const reset = () => {
      portrait.style.setProperty('--tilt-x', '0deg');
      portrait.style.setProperty('--tilt-y', '0deg');
      portrait.style.setProperty('--light-x', '50%');
      portrait.style.setProperty('--light-y', '38%');
    };
    portrait.addEventListener('pointermove', onMove);
    portrait.addEventListener('pointerleave', reset);
    return () => {
      portrait.removeEventListener('pointermove', onMove);
      portrait.removeEventListener('pointerleave', reset);
    };
  }, []);

  return (
    <main className="about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <div className="wrap about-hero-grid">
          <div className="about-intro">
            <span className="label">01 — ABOUT / THE PERSON BEHIND THE SIGNAL</span>
            <h1 id="about-title">Building systems,<br /><em>not just interfaces.</em></h1>
            <p className="about-dek">I’m Nurudeen Salihu, a software developer focused on reliable digital systems, thoughtful interfaces, and automation that removes unnecessary work.</p>
            <a className="about-scroll link" href="#who-i-am"><span aria-hidden="true">↓</span> Scroll to enter</a>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-card" ref={portraitRef}>
              <div className="portrait-glow" aria-hidden="true" />
              <Image src="/Hero.jpg" alt="Nurudeen Salihu, software developer in Abuja" width={720} height={960} priority />
              <span className="portrait-caption">N / 01<br /><span>Abuja, Nigeria · WAT</span></span>
            </div>
            <span className="portrait-note">A system is a conversation<br />between intent and reality.</span>
          </div>
        </div>
      </section>

      <section id="who-i-am" className="about-section about-who">
        <div className="wrap about-layout">
          <div className="about-kicker"><span className="label">02 — WHO I AM</span></div>
          <div className="about-copy">
            <h2>The work is technical.<br /><span>The reason is human.</span></h2>
            <p>I build software for the moment when a messy process needs to become a dependable system. That has meant full-stack development, data and IT operations, access control, and automation for teams whose work continues after the launch.</p>
            <p>I’m interested in the space between an idea and the system that makes it real: the architecture underneath, the interface people touch, and the quiet details that make both trustworthy.</p>
          </div>
        </div>
      </section>

      <section className="about-section about-thinking" aria-labelledby="thinking-title">
        <div className="wrap">
          <div className="about-section-head"><span className="label">03 — THE WAY I WORK</span><h2 id="thinking-title">How I think.</h2><p className="prose">Principles I return to when the problem is larger than the first brief.</p></div>
          <div className="principles" role="list">
            {ABOUT_PRINCIPLES.map((principle) => <article className="principle" key={principle.number} role="listitem"><span className="principle-number">{principle.number}</span><div><h3>{principle.title}</h3><p>{principle.body}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="about-section beyond" aria-labelledby="beyond-title">
        <div className="wrap beyond-grid"><div><span className="label">04 — BEYOND THE CODE</span><h2 id="beyond-title">Curiosity is<br /><em>part of the stack.</em></h2></div><div className="beyond-fragments"><p>CREATIVE<br /><strong>Making the invisible legible.</strong></p><p>SYSTEMS<br /><strong>Finding the connection between parts.</strong></p><p>LEARNING<br /><strong>Staying a beginner on purpose.</strong></p></div></div>
      </section>

      <section className="about-section about-journey" aria-labelledby="journey-title">
        <div className="wrap"><div className="about-section-head"><span className="label">05 — THE JOURNEY</span><h2 id="journey-title">A direction, not a résumé.</h2></div><div className="journey-steps">{ABOUT_JOURNEY.map((step, index) => <article className="journey-step" key={step.label}><span className="journey-index">0{index + 1}</span><div><span className="journey-label">{step.label}</span><h3>{step.title}</h3><p>{step.body}</p></div></article>)}</div></div>
      </section>

      <section className="about-section technical" aria-labelledby="technical-title">
        <div className="wrap"><div className="about-section-head"><span className="label">06 — TECHNICAL IDENTITY</span><h2 id="technical-title">What I care to build.</h2></div><div className="technical-grid">{ABOUT_TECHNICAL_AREAS.map((area) => <article key={area.label}><span className="technical-label">{area.label}</span><h3>{area.title}</h3><p>{area.items.join(' · ')}</p></article>)}</div></div>
      </section>

      <section className="about-section currently" aria-labelledby="currently-title">
        <div className="wrap currently-grid"><div><span className="label">07 — CURRENTLY</span><h2 id="currently-title">In motion, with intention.</h2></div><div className="current-list">{ABOUT_CURRENTLY.map((item) => <div className="current-item" key={item.label}><span>{item.label}</span><p>{item.value}</p></div>)}</div></div>
      </section>

      <section className="about-closing" aria-labelledby="closing-title"><div className="wrap"><span className="label">08 — A PERSONAL STATEMENT</span><h2 id="closing-title">I’m interested in the space between an idea and the system that makes it real.</h2><div className="about-cta"><p>Have something worth building?</p><a className="btn btn-fill" href={LINKS.emailHref}>Let’s talk <span aria-hidden="true">↗</span></a></div></div></section>
    </main>
  );
}
