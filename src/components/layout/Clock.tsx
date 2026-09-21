'use client';

import { useEffect, useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Africa/Lagos',
      hour: '2-digit',
      minute: '2-digit',
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;
  return <span className="clock mono" aria-label="Current time in Abuja, Nigeria">{time} WAT</span>;
}
