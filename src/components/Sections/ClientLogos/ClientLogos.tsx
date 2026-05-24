'use client';

import { InfiniteSlider } from '@/components/ui/infinite-slider';

const clientLogos = [
  { src: '/projects/logos/indstrz-logo.png', alt: 'Indstrz' },
  { src: '/projects/logos/manqla-logo.png', alt: 'Manqla' },
  { src: '/projects/logos/rabzan-logo.svg', alt: 'Rabzan' },
  { src: '/projects/logos/toyo228-logo.png', alt: 'Toyo228' },
  { src: '/projects/logos/injaz-logo.png', alt: 'Injaaz' },
];

const ClientLogos = () => {
  return (
    <section className="relative bg-black py-10 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6 mb-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-white/30 font-semibold">
          Trusted by innovative companies
        </p>
      </div>

      <div className="[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <InfiniteSlider gap={80} duration={25}>
          {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${logo.alt}-${i}`}
              src={logo.src}
              alt={logo.alt}
              className="h-7 md:h-9 w-auto object-contain select-none pointer-events-none brightness-0 invert opacity-50 hover:opacity-90 transition-opacity duration-300"
              loading="lazy"
              draggable={false}
            />
          ))}
        </InfiniteSlider>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
};

export default ClientLogos;
