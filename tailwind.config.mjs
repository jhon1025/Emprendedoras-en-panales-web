// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
  extend: {
    fontFamily: {
      // Usaremos 'sans' para la fuente del cuerpo (Bevellier)
      sans: ['Clash Display', 'sans-serif'],
      // Y 'display' para los títulos grandes (Bevellier)
      display: ['Bevellier', 'sans-serif'],
    }
  },
},
  plugins: [],
}

