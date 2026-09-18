import { TIERS } from '@/lib/content';

export default function Stack() {
  return (
    <section id="stack" className="chapter chapter-stack">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="label">Stack</span>
            <span className="section-mark mono">TOOLS / 03</span>
          </div>
          <div>
            <h2>Sorted by what I would be confident on in week one.</h2>
            <p className="prose section-dek">A working vocabulary, not a wall of logos. The bold entries are the tools I would reach for first.</p>
          </div>
        </div>
        <div className="sec-body">
          <div className="chapter-rail" aria-hidden="true">
            <span>THE WORKING SET</span>
          </div>
          <div className="rows stack-rows">
            {TIERS.map((tier, index) => (
              <div className="stack-row" key={tier.name}>
                <div>
                  <span className="process-index mono">0{index + 1}</span>
                  <div className="tier-name">{tier.name}</div>
                  <div className="tier-note">{tier.note}</div>
                </div>
                <div className="tier-list">
                  {tier.items.map((item) => (
                    <span className={tier.strong.includes(item) ? 'tier-chip tier-chip-strong' : 'tier-chip'} key={item}>
                      {item}
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
