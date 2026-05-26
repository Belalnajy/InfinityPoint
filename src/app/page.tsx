import Hero from '@/components/Sections/Hero/Hero';
import ClientLogos from '@/components/Sections/ClientLogos/ClientLogos';
import About from '@/components/Sections/About/About';
import Numbers from '@/components/Sections/Numbers/Numbers';
import Services from '@/components/Sections/Services/Services';
import Products from '@/components/Sections/Products/Products';
import Portfolio from '@/components/Sections/Portfolio/Portfolio';
import Technologies from '@/components/Sections/Technologies/Technologies';
import Team from '@/components/Sections/Team/Team';
import Testimonials from '@/components/Sections/Testimonials/Testimonials';
import Partners from '@/components/Sections/Partners/Partners';
import Contact from '@/components/Sections/Contact/Contact';
import Navbar from '@/components/Navbar/Navbar';
import FloatingButtons from '@/components/FloatingButtons/FloatingButtons';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingButtons />
      <main suppressHydrationWarning>
        <Hero />
        <ClientLogos />
        <About />
        <Numbers />
        <Services />
        <Products />
        <Portfolio />
        <Technologies />
        <Team />
        <Testimonials />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
