import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#142929',
        'primary-light': '#4A7C7E',
        'primary-dark': '#0A1515',
        'brand-sage': '#C8D5B9',
        'brand-mint': '#D4E7C5',
        'brand-cream': '#F5E6D3',
        'brand-terracotta': '#D4A5A5',
        'brand-taupe': '#A89F91',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #142929, #4A7C7E)',
        'gradient-pastel': 'linear-gradient(135deg, #C8D5B9, #D4E7C5)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['var(--font-bebas-neue)', 'Bebas Neue', 'system-ui', 'sans-serif'],
      },
    },
  },
};

export default config; 