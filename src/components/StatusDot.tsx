import type { SystemState } from '@/lib/status';

const LABEL: Record<SystemState, string> = {
  operational: 'Operational',
  archived: 'Archived',
};

export default function StatusDot({
  state,
  label,
  showLabel = true,
}: {
  state: SystemState;
  label?: string;
  showLabel?: boolean;
}) {
  return (
    <span className="status-sig" data-state={state}>
      <span className="status-dot" aria-hidden="true" />
      {showLabel && <span className="status-label mono">{label ?? LABEL[state]}</span>}
    </span>
  );
}
