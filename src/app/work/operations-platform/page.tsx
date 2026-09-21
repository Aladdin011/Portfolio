import type { Metadata } from 'next';
import Link from 'next/link';
import StatusBar from '@/components/layout/StatusBar';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import OperationsSchematic from '@/components/schematics/Operations';
import SmartLink from '@/components/ui/SmartLink';
import { LINKS } from '@/lib/links';

const description =
  'How a nine-department operations platform ended up running on one generic Postgres table — the schema decision, the row-level security model, the move from hourly batch updates to realtime, and three production bugs that taught more than the launch did.';

export const metadata: Metadata = {
  title: 'Nine departments, one schema — case study',
  description,
  openGraph: { title: 'Nine departments, one schema', description, type: 'article' },
};

export default function OperationsPlatformCaseStudy() {
  return (
    <>
      <StatusBar />
      <Nav />
      <main>
        <section className="case-hero" style={{ borderTop: 0, paddingBottom: 0 }}>
          <div className="wrap">
            <Link className="backlink link" href="/#work">
              <span className="arrow" aria-hidden="true">←</span> Back to the work
            </Link>

            <span className="label case-kicker">Case study — multi-department operations platform</span>
            <h1>Nine departments, one schema.</h1>
            <p className="case-dek">
              The database decision made in the first week is the reason the other months were possible. A walkthrough
              of the platform running JD Marc&rsquo;s internal operations — the schema, the access model, and three
              production bugs that taught me more than the launch did.
            </p>

            <div className="case-meta">
              <div>
                <span className="ck">Role</span>
                <span className="cv">Sole developer</span>
              </div>
              <div>
                <span className="ck">Timeframe</span>
                <span className="cv">Jul 2025 — Mar 2026</span>
              </div>
              <div>
                <span className="ck">Stack</span>
                <span className="cv">React, Vite, Supabase (Postgres, RLS, Realtime), WebRTC, TypeScript</span>
              </div>
              <div>
                <span className="ck">Status</span>
                <span className="cv">In production, internal</span>
              </div>
            </div>
          </div>
        </section>

        <section style={{ borderTop: 0, paddingTop: 0 }}>
          <div className="wrap">
            <div className="case-stats readout" aria-label="Outcomes">
              <div className="cell">
                <span className="v">hourly → &lt;1s</span>
                <span className="k">Reporting latency, replacing batch updates</span>
              </div>
              <div className="cell">
                <span className="v">−40%</span>
                <span className="k">Repetitive workflow steps removed</span>
              </div>
              <div className="cell">
                <span className="v">9</span>
                <span className="k">Departments on one access model</span>
              </div>
              <div className="cell">
                <span className="v">99.9%</span>
                <span className="k">Uptime, staging and production</span>
              </div>
            </div>

            <article className="article">
              <h2>The shape of the problem</h2>
              <p>
                JD Marc runs nine departments — Procurement, Projects, HR, Finance, Logistics, Legal, IT, Client
                Relations, and Executive — and each one kept its own version of the truth. Spreadsheets that didn&rsquo;t
                talk to each other, a shared inbox for anything that crossed department lines, and a reporting cycle
                that ran once an hour, if someone remembered to trigger it. Finance couldn&rsquo;t see a procurement
                request until it was exported. HR couldn&rsquo;t tell if an onboarding was stuck in IT without emailing
                to ask.
              </p>
              <p>
                The brief was &ldquo;one dashboard.&rdquo; The actual problem underneath it was nine different data
                shapes that needed to live somewhere without nine migrations every time one of them changed —
                Procurement&rsquo;s records look nothing like HR&rsquo;s, and a rigid schema built for launch day would
                have needed surgery within a month.
              </p>

              <h2>The decision that shaped everything else</h2>
              <p>
                I built a single generic record layer instead of nine schemas: one <code>module_records</code> table,
                keyed by department and module, with the department-specific fields living in a <code>jsonb</code>{' '}
                column. Each department module declares its own field shape as configuration, not as a migration, and
                that config validates the record before it&rsquo;s written.
              </p>

              <div className="code-block">
<span className="c">-- simplified shape</span>{'\n'}
module_records{'\n'}
  id            <span className="k">uuid</span>{'\n'}
  department    <span className="k">text</span>       <span className="c">-- &apos;procurement&apos;, &apos;hr&apos;, ...</span>{'\n'}
  module        <span className="k">text</span>       <span className="c">-- &apos;purchase_order&apos;, &apos;onboarding&apos;, ...</span>{'\n'}
  record_type   <span className="k">text</span>{'\n'}
  data          <span className="k">jsonb</span>      <span className="c">-- module-declared shape, validated on write</span>{'\n'}
  created_by    <span className="k">uuid</span>{'\n'}
  created_at    <span className="k">timestamptz</span>{'\n'}
  updated_at    <span className="k">timestamptz</span>
              </div>

              <p>
                The honest trade-off: I gave up some of Postgres&rsquo;s native column-level type safety. What I got
                back was a tenth department costing zero migrations — just a new module definition. For a build with
                nine unknowns on day one, that traded correctly.
              </p>

              <h2>Access control at the row, not the screen</h2>
              <p>
                Permissions are enforced with row-level security policies in Postgres, not with conditionals in the
                interface. A <code>department_memberships</code> table maps each user to a department and a tier —{' '}
                <strong>Staff, HR, or Admin</strong>. A Staff row only ever sees records from its own department. HR
                sees across every department, but only for modules tagged HR-visible — onboarding status, not
                procurement pricing. Admin sees everything.
              </p>
              <p>
                Because that boundary sits in the database, a bug in a React component can&rsquo;t leak another
                department&rsquo;s records. The frontend doesn&rsquo;t enforce the rule; it just can&rsquo;t see past
                it.
              </p>

              <div className="case-schem">
                <figure className="schem">
                  <OperationsSchematic />
                  <figcaption className="schem-cap">The same diagram from the homepage — this is the system it&rsquo;s describing.</figcaption>
                </figure>
              </div>

              <h2>From hourly to sub-second</h2>
              <p>
                The original handoff between departments was the batch export — a job that ran once an hour and
                pushed a snapshot into a shared sheet. I replaced it with Supabase Realtime subscriptions on{' '}
                <code>module_records</code>, filtered by the same row-level policies that already govern reads, so a
                live update never has to be re-checked for permission — it was scoped before it left the database.
                Chat and WebRTC signalling for department-to-department handoffs sit on the same realtime
                infrastructure, rather than a second system bolted on beside it.
              </p>

              <h2>Three bugs that taught more than the launch did</h2>
              <p>
                The parts of this project worth talking about in an interview aren&rsquo;t the features — they&rsquo;re
                the three times production behaved in a way the code didn&rsquo;t predict.
              </p>

              <div className="callout">
                <span className="callout-label">Incident — the schema cache</span>
                <p>
                  Writes that had worked minutes earlier started failing with &ldquo;column not found&rdquo; errors,
                  intermittently, with no code change behind them. The cause wasn&rsquo;t application logic — it was
                  PostgREST&rsquo;s schema cache going stale after a migration, serving a description of the table
                  that no longer matched it. The fix was a <code>NOTIFY pgrst, &apos;reload schema&apos;</code> call,
                  and the real fix was folding that call into the deploy script so it stopped being a step a person
                  could forget.
                </p>
              </div>

              <div className="callout">
                <span className="callout-label">Incident — wrong query shape</span>
                <p>
                  Early on, each widget on a department dashboard fired its own filtered query against{' '}
                  <code>module_records</code>. A nine-widget page meant nine round trips, each one re-filtering data
                  the previous query had already fetched most of. I moved to one indexed query per page load, with
                  the UI slicing the result client-side — which also simplified the realtime layer to one
                  subscription per page instead of nine.
                </p>
              </div>

              <div className="callout">
                <span className="callout-label">Incident — sessions dropping mid-shift</span>
                <p>
                  Users kept getting silently signed out on refresh during long sessions — worse on a shaky
                  connection, and worse still for the people who keep Procurement and Finance open in adjacent tabs,
                  which this app actively encourages. Each tab had been managing its own token refresh independently;
                  under a dropped connection they&rsquo;d disagree with each other about whether the session was
                  still valid. Centralising refresh logic so tabs share one source of truth for the session fixed it.
                </p>
              </div>

              <h2>What it added up to</h2>
              <p>
                <strong>Sub-second reporting</strong> meant a Finance approval shows up the moment it&rsquo;s
                submitted, not on the next hourly cycle. <strong>Row-level access</strong> meant onboarding a new
                department stopped being a security review every time. <strong>Automation on top of the shared
                schema</strong> removed about 40% of the manual handoff steps between departments — mostly re-entering
                data that already existed somewhere else in the system. None of that was the point of the project on
                day one; all of it came from the schema decision underneath it.
              </p>

              <h2>What I&rsquo;d change next</h2>
              <p>
                A few modules — Finance approvals especially — have grown busy enough that they&rsquo;re outgrowing
                &ldquo;generic.&rdquo; The next piece of work is promoting the highest-traffic modules out of the
                shared <code>jsonb</code> table into first-class typed tables with real foreign keys, now that their
                shape has actually stabilised. That&rsquo;s not a regret about the original decision — the generic
                layer did exactly what a first version with nine unknowns needed it to do. It just isn&rsquo;t the
                right shape forever, and knowing when to graduate out of it is part of the job.
              </p>
            </article>

            <div className="case-cta">
              <p>Happy to walk through the actual RLS policies and the deploy pipeline on a call.</p>
              <SmartLink className="btn btn-fill" href={LINKS.contact}>
                Get in touch
              </SmartLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
