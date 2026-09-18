import { TIERS } from '@/lib/content';

export default function Stack() {
  return (
    <section id="stack">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="label">Stack</span>
          </div>
          <div>
            <h2>Sorted by what I would be confident on in week one.</h2>
          </div>
        </div>
        <div className="sec-body">
          <div />
          <div className="rows">
            {TIERS.map((tier) => (
              <div key={tier.name}>
                <div>
                  <div className="tier-name">{tier.name}</div>
                  <div className="tier-note">{tier.note}</div>
                </div>
                <div className="tier-list">
                  {tier.items.map((item, i) => (
                    <span key={item}>
                      {tier.strong.includes(item) ? <b>{item}</b> : item}
                      {i < tier.items.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
