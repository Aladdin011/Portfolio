import StatusBar from '@/components/StatusBar';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Practice from '@/components/Practice';
import Stack from '@/components/Stack';
import Journey from '@/components/Journey';
import SystemStatus from '@/components/SystemStatus';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
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
