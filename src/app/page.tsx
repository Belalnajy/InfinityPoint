import Hero from '@/components/Sections/Hero/Hero';
import ClientLogos from '@/components/Sections/ClientLogos/ClientLogos';
import About from '@/components/Sections/About/About';
import Numbers from '@/components/Sections/Numbers/Numbers';
import WhatWeOffer from '@/components/Sections/WhatWeOffer/WhatWeOffer';
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
        <WhatWeOffer />
        <Services />
        <Products />
        <Portfolio />
        <Technologies />
        <Team />
        <Testimonials />
        <Partners />
        <Contact />
      </main>
      <footer className="relative bg-black pt-1 overflow-hidden">
        {/* Gradient accent line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="InfinityPoint Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-neutral-500">
              &copy; {new Date().getFullYear()} InfinityPoint LLC. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
