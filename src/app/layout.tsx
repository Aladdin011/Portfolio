import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Mono, Instrument_Sans } from 'next/font/google';
import './globals.css';
import { LINKS } from '@/lib/links';

// next/font self-hosts both families at build time: no render-blocking
// request to Google, no layout shift, and the fallback metrics are matched.
const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

const sans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

const description =
  'Full-stack developer in Abuja. I build service boundaries, access control, and the automation that removes work nobody should be doing by hand — a realtime sync layer that replaced hourly batch updates, role-based access across nine departments, 40% of manual steps gone.';

export const metadata: Metadata = {
  metadataBase: new URL(LINKS.site),
  title: 'Nurudeen Salihu — Full-stack developer, Abuja',
  description,
  openGraph: {
    title: 'Nurudeen Salihu — Full-stack developer, Abuja',
    description,
    type: 'website',
    images: ['/logo1.png'],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0C2422' },
    { media: '(prefers-color-scheme: light)', color: '#EAE6DA' },
  ],
};

// Runs before first paint so a stored theme never flashes the wrong palette.
const themeScript = `
(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
