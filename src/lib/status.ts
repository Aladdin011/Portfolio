export type SystemState = 'operational' | 'archived';

export type SystemEntry = {
  name: string;
  state: SystemState;
  note: string;
  href: string;
};

export const SYSTEMS: SystemEntry[] = [
  {
    name: 'Multi-department operations platform',
    state: 'operational',
    note: '99.9% uptime — production, internal to JD Marc',
    href: '/work/operations-platform',
  },
  {
    name: 'Office management on service boundaries',
    state: 'archived',
    note: 'Source-complete, containerized — not kept running continuously',
    href: '#work',
  },
  {
    name: 'Aladdin Drive — automotive commerce',
    state: 'archived',
    note: 'Build complete — not currently deployed',
    href: '#work',
  },
  {
    name: 'File storage application',
    state: 'archived',
    note: 'Source-complete — not currently deployed',
    href: '#work',
  },
  {
    name: 'Animated portfolio build',
    state: 'archived',
    note: 'Earlier exercise, superseded by this site',
    href: '#work',
  },
];

export function summarizeSystems(systems: SystemEntry[] = SYSTEMS) {
  const operational = systems.filter((s) => s.state === 'operational').length;
  return { total: systems.length, operational, archived: systems.length - operational };
}
