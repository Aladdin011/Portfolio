import StatusDot from '../ui/StatusDot';
import { SYSTEMS, summarizeSystems } from '@/lib/status';

export default function SystemStatus() {
  const { total, operational, archived } = summarizeSystems();

  return (
    <section id="status">
      <div className="wrap">
        <div className="sec-head">
          <div><span className="label">Status</span></div>
          <div>
            <h2>What&rsquo;s actually running right now.</h2>
            <p className="prose" style={{ marginTop: 14 }}>
              {operational} in production, {archived} archived, {total} total. Updated by hand, not a
              monitor — I&rsquo;d rather tell you the truth once than fake a green dot.
            </p>
          </div>
        </div>
        <div className="status-list">
          {SYSTEMS.map((system) => (
            <a className="status-row" href={system.href} key={system.name}>
              <StatusDot state={system.state} showLabel={false} />
              <span className="status-name">{system.name}</span>
              <span className="status-note">{system.note}</span>
              <span className="status-state mono" data-state={system.state}>
                {system.state === 'operational' ? 'Operational' : 'Archived'}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
