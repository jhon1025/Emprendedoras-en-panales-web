// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
  extend: {
    fontFamily: {
      sans: ['Bevellier', 'sans-serif'],
      display: ['Clash Display', 'sans-serif'],
    },
    colors: {
      brand: {
        orange: '#E75F24',
        purple: '#6A3A9F',
        yellow: '#FAED37',
        green: '#22C55E',
      },
    },
  },
},
  plugins: [],
}

