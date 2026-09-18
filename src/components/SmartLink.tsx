import type { ReactNode } from 'react';

/**
 * A link that refuses to be dead.
 *
 * Given a null href it renders a disabled element with honest replacement
 * copy instead of pointing at "#". This is why there is no broken link on
 * the site: it is structurally impossible rather than carefully maintained.
 */
export default function SmartLink({
  href,
  children,
  className = 'btn',
  fallback = 'Available on request',
}: {
  href: string | null | undefined;
  children: ReactNode;
  className?: string;
  fallback?: string;
}) {
  if (!href) {
    return (
      <span className={className} data-missing aria-disabled="true">
        {fallback}
      </span>
    );
  }

  const external = /^https?:/.test(href);

  return (
    <a
      className={className}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}
