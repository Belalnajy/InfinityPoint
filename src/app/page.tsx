import Hero from '@/components/Sections/Hero/Hero';
import Services from '@/components/Sections/Services/Services';
import About from '@/components/Sections/About/About';
import Portfolio from '@/components/Sections/Portfolio/Portfolio';
import Technologies from '@/components/Sections/Technologies/Technologies';
import Team from '@/components/Sections/Team/Team';
import Testimonials from '@/components/Sections/Testimonials/Testimonials';
import Blog from '@/components/Sections/Blog/Blog';
import Contact from '@/components/Sections/Contact/Contact';
import Navbar from '@/components/Navbar/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Technologies />
        <Team />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <footer
        style={{
          backgroundColor: 'var(--black)',
          color: 'var(--gray-mid)',
          padding: '2rem 0',
          textAlign: 'center',
          borderTop: '1px solid var(--gray-dark)',
        }}>
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} InfinityPoint LLC. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
