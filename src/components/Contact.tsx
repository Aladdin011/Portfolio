'use client';

import { useEffect, useRef, useState } from 'react';
import { LINKS } from '@/lib/links';
import SmartLink from './SmartLink';

/**
 * MICRO MOTION — the copy button. The only motion on the page that confirms
 * an action rather than describing content: the label swaps upward, holds,
 * and returns on its own. No toast, no library.
 */
function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(LINKS.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = LINKS.emailHref;
    }
  };

  return (
    <button type="button" className="copy cv" onClick={copy} data-copied={copied} aria-live="polite">
      <span className="swap">
        <span className="out">{LINKS.email}</span>
        <span className="in">Copied to clipboard</span>
      </span>
    </button>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div>
            <h2>Tell me what is breaking.</h2>
            <p className="prose">
              I am looking for a full-time engineering role where I would own a real part of a system. If you have read
              this far, the fastest thing is an email — I answer within a day, and I am happy to walk through any diagram
              above on a call.
            </p>
          </div>
          <div>
            <div className="cline">
              <span className="ck">Email</span>
              <CopyEmail />
            </div>
            <div className="cline">
              <span className="ck">Phone</span>
              <a className="cv link" href={LINKS.phoneHref}>
                +234 706 502 0706
              </a>
            </div>
            <div className="cline">
              <span className="ck">GitHub</span>
              <SmartLink href={LINKS.github} className="cv link" fallback="Available on request">
                View profile
              </SmartLink>
            </div>
            <div className="cline">
              <span className="ck">LinkedIn</span>
              <SmartLink href={LINKS.linkedin} className="cv link" fallback="Available on request">
                View profile
              </SmartLink>
            </div>
            <div className="cline">
              <span className="ck">Résumé</span>
              <SmartLink className="cv link" href={LINKS.resume}>
                PDF, one page
              </SmartLink>
            </div>
            <div className="cline">
              <span className="ck">Based in</span>
              <span className="cv">Abuja, Nigeria (WAT)</span>
            </div>
            <div className="cline">
              <span className="ck">References</span>
              <span className="cv">On request</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
