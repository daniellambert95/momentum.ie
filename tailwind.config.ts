import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#047857',
        'primary-light': '#10b981',
        'primary-dark': '#065f46',
        'brand-green': '#357a67',
        'brand-green-light': '#dcfce7',
        'brand-green-dark': '#16a34a',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #047857, #0e7490)',
      },
    },
  },
};

export default config; 