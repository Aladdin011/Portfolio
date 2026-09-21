import { PRACTICE } from '@/data/content';

export default function Practice() {
  return (
    <section id="practice">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="label">How I work</span>
          </div>
          <div>
            <h2>What you would actually get if you hired me.</h2>
          </div>
        </div>
        <div className="sec-body">
          <div />
          <div className="rows">
            {PRACTICE.map((p) => (
              <div key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
