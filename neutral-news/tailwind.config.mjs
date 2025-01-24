/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily : {
        'Custom-News-Font' : ['Markazi Text', 'snas-serif']
      },
      gridTemplateColumns : {
         'main-header-template': 'minmax(12.5rem, 1fr) minmax(12.5rem, 2fr) minmax(12.5rem, 2fr) minmax(12.5rem, 2fr)'
      },
      backgroundImage : {
        'start-page-image' : "url('https://images.unsplash.com/photo-1501471984908-815b996862f4?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'start-page-image-2' : "url('https://images.unsplash.com/photo-1473163928189-364b2c4e1135?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fCVFQyU5NiVCNCVFQiU5MSU5MCVFQyU5QSVCNCUyMCVFQiVCMCVCMCVFQSVCMiVCRHxlbnwwfHwwfHx8MA%3D%3D')"
      }
    },
  },
  plugins: [],
};
