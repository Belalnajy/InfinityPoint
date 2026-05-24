'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const size = useMotionValue(14);

  const springX = useSpring(cursorX, { damping: 28, stiffness: 350 });
  const springY = useSpring(cursorY, { damping: 28, stiffness: 350 });
  const springSize = useSpring(size, { damping: 22, stiffness: 280 });

  useEffect(() => {
    // Only on desktop
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const enlargeTrigger = target.closest('[data-cursor-lg]');
      if (enlargeTrigger) {
        size.set(80);
      } else {
        size.set(14);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, size]);

  // Don't render on touch devices (SSR safe)
  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-white mix-blend-difference hidden lg:block"
      style={{
        x: springX,
        y: springY,
        width: springSize,
        height: springSize,
        translateX: '-50%',
        translateY: '-50%',
      }}
    />
  );
};

export default CustomCursor;
