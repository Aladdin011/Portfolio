import { TIMELINE } from '@/lib/content';

export default function Journey() {
  return (
    <section id="journey" className="chapter chapter-journey">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="label">Journey</span>
            <span className="section-mark mono">LOG / 04</span>
          </div>
          <div>
            <h2>Where the work happened.</h2>
            <p className="prose section-dek">A short record of the systems, teams, and constraints that shaped how I build.</p>
          </div>
        </div>
        <div className="sec-body">
          <div className="chapter-rail" aria-hidden="true">
            <span>ABUJA / WAT</span>
          </div>
          <div className="rows journey-rows">
            {TIMELINE.map((item, index) => (
              <div className="journey-row" key={item.role}>
                <div className="tl-date"><span className="process-index mono">0{index + 1}</span>{item.date}</div>
                <div>
                  <div className="tl-role">{item.role}</div>
                  <div className="tl-org">{item.org}</div>
                  <p className="tl-body">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
