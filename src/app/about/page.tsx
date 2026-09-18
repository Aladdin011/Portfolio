import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AboutPage from '@/components/AboutPage';

export const metadata: Metadata = {
  title: 'About — Nurudeen Salihu',
  description: 'The person behind the signal: how Nurudeen Salihu thinks, works, and builds reliable digital systems.',
  openGraph: {
    title: 'About — Nurudeen Salihu',
    description: 'How I think, what I build, and where I am going next.',
    type: 'profile',
    images: ['/logo1.png'],
  },
  alternates: { canonical: '/about' },
};

export default function AboutRoute() {
  return <><Nav /><AboutPage /><Footer /></>;
}
