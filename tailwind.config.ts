import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/context/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--rgb-primary) / <alpha-value>)',
          hover: 'rgb(var(--rgb-primary-hover) / <alpha-value>)',
        },
        background: 'rgb(var(--rgb-background) / <alpha-value>)',
        foreground: 'rgb(var(--rgb-foreground) / <alpha-value>)',
        card: {
          DEFAULT: 'rgb(var(--rgb-card) / <alpha-value>)',
          foreground: 'rgb(var(--rgb-card-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'rgb(var(--rgb-muted) / <alpha-value>)',
          foreground: 'rgb(var(--rgb-muted-foreground) / <alpha-value>)',
        },
        border: 'rgb(var(--rgb-border) / <alpha-value>)',
      },
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
        cairo: ['var(--font-cairo)', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        moveX: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(10px)' },
        },
        spotlight: {
          '0%': { opacity: '0', transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: '1', transform: 'translate(-50%, -40%) scale(1)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        blob: 'blob 7s infinite',
        'move-x': 'moveX 3s ease-in-out infinite alternate',
        spotlight: 'spotlight 2s ease 0.75s 1 forwards',
      },
    },
  },
  plugins: [],
};

export default config;
