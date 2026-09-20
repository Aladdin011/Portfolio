import type { ReactNode } from 'react';
import Link from 'next/link';
import SmartLink from './SmartLink';
import StatusDot from './StatusDot';
import type { ProjectLink } from '@/lib/content';
import type { SystemState } from '@/lib/status';

export default function ProjectRow({
  title,
  role,
  summary,
  notes,
  stack,
  links,
  schematic,
  caption,
  caseStudyHref,
  index,
  status,
}: {
  title: string;
  role: string;
  summary: string;
  notes: { heading: string; body: string }[];
  stack: string;
  links: ProjectLink[];
  schematic: ReactNode;
  caption: string;
  /** An internal route, not an external URL — always live, so it bypasses SmartLink's null-check entirely. */
  caseStudyHref?: string;
  index: string;
  status: SystemState;
}) {
  return (
    <article className="proj">
      <div>
        <div className="proj-meta">
          <span className="proj-index mono">Case {index}</span>
          <StatusDot state={status} />
        </div>
        <h3>{title}</h3>
        <p className="role">{role}</p>
        <p>{summary}</p>

        {notes.map((n) => (
          <p className="hard" key={n.heading}>
            <span>{n.heading}</span> {n.body}
          </p>
        ))}

        <p className="stack">{stack}</p>

        <div className="plinks">
          {caseStudyHref && (
            <Link className="btn btn-fill" href={caseStudyHref}>
              Case study
            </Link>
          )}
          {links.map((l) => (
            <SmartLink key={l.label} href={l.href} className="btn">
              {l.label}
            </SmartLink>
          ))}
        </div>
      </div>

      <figure className="schem">
        {schematic}
        <figcaption className="schem-cap">{caption}</figcaption>
      </figure>
    </article>
  );
}
