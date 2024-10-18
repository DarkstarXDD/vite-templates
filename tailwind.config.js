/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Scans your main HTML file for classes.
    "./src/**/*.{js,ts,jsx,tsx}", // Recursively scans all JavaScript, TypeScript, and JSX/TSX files inside the 'src' directory for classes.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: { preflight: true }, // Make false to remove the tailwind reset
}
