'use client';

import { useEffect, useState } from 'react';
import StatusDot from './StatusDot';
import Clock from './Clock';
import { BUILD_INFO } from '@/lib/build-info';

function relativeTime(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.round(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.round(hours / 24)}d ago`;
}

export default function StatusBar() {
  const [deployed, setDeployed] = useState(BUILD_INFO.builtAt);

  useEffect(() => {
    const id = setInterval(() => setDeployed(BUILD_INFO.builtAt), 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="status-bar">
      <div className="wrap status-bar-in">
        <a href="#status" className="status-sig-link">
          <StatusDot state="operational" label="Portfolio — operational" />
        </a>
        <div className="status-bar-right">
          <span className="mono status-deploy">
            Deployed {relativeTime(deployed)}
            {BUILD_INFO.commit && ` · ${BUILD_INFO.commit}`}
          </span>
          <Clock />
        </div>
      </div>
    </div>
  );
}
