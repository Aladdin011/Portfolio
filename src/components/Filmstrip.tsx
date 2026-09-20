'use client';

import { useEffect, useRef, useState } from 'react';
import SmartLink from './SmartLink';
import StatusDot from './StatusDot';
import type { ProjectLink } from '@/lib/content';
import type { SystemState } from '@/lib/status';

type Item = { title: string; body: string; stack: string; links: ProjectLink[]; status: SystemState };

export default function Filmstrip({ items }: { items: Item[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const cards = Array.from(track.children) as HTMLElement[];
      const center = track.scrollLeft + track.clientWidth / 2;
      let closest = 0;
      let closestDist = Infinity;
      cards.forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setActive(closest);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const go = (index: number) => {
    const track = trackRef.current;
    const card = track?.children[index] as HTMLElement | undefined;
    if (track && card) track.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
  };

  return (
    <div className="filmstrip">
      <div className="filmstrip-head">
        <span className="label">Also built</span>
        <span className="filmstrip-counter mono">
          {String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </span>
      </div>
      <div className="filmstrip-track" ref={trackRef}>
        {items.map((item) => (
          <div className="filmstrip-card" key={item.title}>
            <div className="filmstrip-card-head"><StatusDot state={item.status} /></div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <p className="stack" style={{ margin: 0 }}>{item.stack}</p>
            <div className="plinks" style={{ marginTop: 16 }}>
              {item.links.map((link) => <SmartLink key={link.label} href={link.href} className="btn">{link.label}</SmartLink>)}
            </div>
          </div>
        ))}
      </div>
      <div className="filmstrip-dots">
        {items.map((item, index) => (
          <button key={item.title} type="button" className="filmstrip-dot" data-active={index === active} onClick={() => go(index)} aria-label={`Show ${item.title}`} />
        ))}
      </div>
    </div>
  );
}
