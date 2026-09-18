import { TIMELINE } from '@/lib/content';

export default function Journey() {
  return (
    <section id="journey">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="label">Journey</span>
          </div>
          <div>
            <h2>Where the work happened.</h2>
          </div>
        </div>
        <div className="sec-body">
          <div />
          <div className="rows">
            {TIMELINE.map((t) => (
              <div key={t.role}>
                <div className="tl-date">{t.date}</div>
                <div>
                  <div className="tl-role">{t.role}</div>
                  <div className="tl-org">{t.org}</div>
                  <p className="tl-body">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
