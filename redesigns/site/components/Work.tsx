import ProjectRow from './ProjectRow';
import SmartLink from './SmartLink';
import OperationsSchematic from './schematics/Operations';
import ServicesSchematic from './schematics/Services';
import CommerceSchematic from './schematics/Commerce';
import { COMPACT_PROJECTS } from '@/lib/content';
import { LINKS } from '@/lib/links';

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="label">Work</span>
          </div>
          <div>
            <h2>Three systems, in the order I would defend them.</h2>
            <p className="prose" style={{ marginTop: 14 }}>
              Each one below is something I designed, shipped, and then had to keep running. The diagrams are the actual
              shape of the system, not decoration.
            </p>
          </div>
        </div>

        <ProjectRow
          title="Multi-department operations platform"
          role="Built at JD Marc Limited / production, internal"
          summary="A single workspace replacing nine departments' worth of spreadsheets and email threads. Staff, HR, and admin each see a different application, enforced at the database rather than in the interface."
          notes={[
            {
              heading: 'The hard part:',
              body: 'nine departments wanted nine different data shapes, and building nine schemas would have meant nine migrations every time something changed. I built a generic record layer on a single jsonb table, with department modules declaring their own fields on top — one schema, nine applications. Access is enforced with row-level security policies for the Admin, HR, and Staff tiers, so a bug in the frontend cannot leak another department’s records.',
            },
            {
              heading: 'What it produced:',
              body: 'reporting that used to arrive as an hourly batch now lands in under a second over a realtime channel, and roughly 40% of the repetitive steps in cross-department handoffs are gone.',
            },
          ]}
          stack="React, Vite, Supabase (Postgres, RLS, Realtime), WebRTC signalling, TypeScript"
          links={[
            { label: 'Live walkthrough', href: LINKS.jdmarcLive },
            { label: 'Source', href: LINKS.jdmarcRepo },
          ]}
          schematic={<OperationsSchematic />}
          caption="One schema, nine department applications."
          caseStudyHref="/work/operations-platform"
        />

        <ProjectRow
          title="Office management on service boundaries"
          role="Personal build / microservices and deployment practice"
          summary="The same business problem rebuilt the other way: five-plus independent services behind an API gateway, each owning its own data, talking over HTTP and a message broker."
          notes={[
            {
              heading: 'The hard part:',
              body: 'once services own separate data, a single user action spans several of them. I used a Controller–Service–Repository layout so the transport layer never touches persistence, issued JWTs with roles at the gateway so downstream services trust one authority instead of each re-checking credentials, and pushed anything that could tolerate delay onto RabbitMQ rather than a synchronous call chain.',
            },
            {
              heading: 'What I got from it:',
              body: 'a deployment story I can actually explain — containers per service, Kubernetes manifests, and a GitHub Actions pipeline that builds, tests, and rolls out on merge.',
            },
          ]}
          stack="Node.js, Express, MongoDB, RabbitMQ, Docker, Kubernetes, GitHub Actions"
          links={[
            { label: 'Source', href: LINKS.microRepo },
            { label: 'Architecture notes', href: LINKS.microNotes },
          ]}
          schematic={<ServicesSchematic />}
          caption="Five services, one trust boundary, async where it is allowed."
        />

        <ProjectRow
          title="Aladdin Drive — automotive commerce"
          role="Personal build / payments and authentication"
          summary="A digital showroom that has to take real money: listings, checkout, invoicing, and an admin side for products, users, and orders."
          notes={[
            {
              heading: 'The hard part:',
              body: 'payments are where a tidy demo starts lying to you. Two providers, two webhook shapes, and an order that must not be marked paid twice if a webhook retries. I made order state transitions idempotent and driven by the provider callback rather than the browser redirect, so closing the tab mid-payment does not lose the order.',
            },
          ]}
          stack="Next.js, TypeScript, Tailwind, shadcn/ui, Auth.js (Google OAuth + magic link), Stripe, PayPal, MongoDB"
          links={[
            { label: 'Live site', href: LINKS.driveLive },
            { label: 'Source', href: LINKS.driveRepo },
          ]}
          schematic={<CommerceSchematic />}
          caption="Order truth comes from the webhook, not the redirect."
        />

        <div style={{ marginTop: 'clamp(32px, 5vw, 52px)' }}>
          {COMPACT_PROJECTS.map((p) => (
            <div className="compact" key={p.title}>
              <div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <p className="stack" style={{ margin: 0 }}>
                  {p.stack}
                </p>
              </div>
              <div className="plinks">
                {p.links.map((l) => (
                  <SmartLink key={l.label} href={l.href} className="btn">
                    {l.label}
                  </SmartLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
