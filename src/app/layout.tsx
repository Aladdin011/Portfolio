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
  'Explore AladdinCode — the portfolio of a software developer focused on full-stack development, AI automation, modern interfaces, and innovative digital products.';

export const metadata: Metadata = {
  metadataBase: new URL(LINKS.site),
  title: 'AladdinCode — Software Developer & AI Engineer',
  description,
  openGraph: {
    title: 'AladdinCode — Software Developer & AI Engineer',
    description,
    type: 'website',
    siteName: 'AladdinCode',
    images: ['/logo1.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AladdinCode — Software Developer & AI Engineer',
    description: 'Full-stack development, AI automation, and refined digital experiences.',
    images: ['/logo1.png'],
  },
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg', apple: '/logo1.png' },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0b0f14' },
    { media: '(prefers-color-scheme: light)', color: '#f4f6f8' },
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
