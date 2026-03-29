/** @type {import('tailwindcss').Config} */
export default {
  // AQUÍ ESTÁ LA MAGIA: Le decimos que lea todos los archivos dentro de la carpeta "src"
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [],
}