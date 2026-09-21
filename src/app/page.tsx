import StatusBar from '@/components/layout/StatusBar';
import Nav from '@/components/layout/Nav';
import Hero from '@/components/sections/Hero';
import Work from '@/components/sections/Work';
import Practice from '@/components/sections/Practice';
import Stack from '@/components/sections/Stack';
import Journey from '@/components/sections/Journey';
import SystemStatus from '@/components/sections/SystemStatus';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import { BrandLoader } from '@/components/layout/Brand';

export default function Page() {
  return (
    <>
      <BrandLoader />
      <StatusBar />
      <Nav />
      <main>
        <Hero />
        <Work />
        <Practice />
        <Stack />
        <Journey />
        <SystemStatus />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
