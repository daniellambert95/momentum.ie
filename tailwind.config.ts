import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        'primary-dark': 'var(--primary-dark)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
      },
    },
  },
};

export default config; 