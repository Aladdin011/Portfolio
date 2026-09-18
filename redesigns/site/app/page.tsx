import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Practice from '@/components/Practice';
import Stack from '@/components/Stack';
import Journey from '@/components/Journey';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Practice />
        <Stack />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
