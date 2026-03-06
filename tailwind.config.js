/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: '#FDFBF7',
        ocean: '#0EA5A4',
        coral: '#FF7A59',
        ink: '#1E293B',
        dune: '#EFE6D8',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.08)',
        card: '0 18px 48px rgba(15, 23, 42, 0.10)',
        float: '0 24px 80px rgba(14, 165, 164, 0.18)',
      },
      backgroundImage: {
        grain: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.8), rgba(255,255,255,0) 35%), radial-gradient(circle at 80% 0%, rgba(14,165,164,0.12), rgba(14,165,164,0) 30%), radial-gradient(circle at 100% 100%, rgba(255,122,89,0.12), rgba(255,122,89,0) 25%)',
      }
    },
  },
  plugins: [],
}
