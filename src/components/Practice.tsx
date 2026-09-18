import { PRACTICE } from '@/lib/content';

export default function Practice() {
  return (
    <section id="practice" className="chapter chapter-practice">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="label">How I work</span>
            <span className="section-mark mono">01 — 03</span>
          </div>
          <div>
            <h2>What you would actually get if you hired me.</h2>
            <p className="prose section-dek">A practical sequence: protect the system, remove the repetition, then stay close enough to know when it changes.</p>
          </div>
        </div>
        <div className="sec-body">
          <div className="chapter-rail" aria-hidden="true">
            <span>PROCESS / FIELD NOTES</span>
          </div>
          <div className="rows process-rows">
            {PRACTICE.map((item, index) => (
              <div className="process-row" key={item.title}>
                <span className="process-index mono">0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
