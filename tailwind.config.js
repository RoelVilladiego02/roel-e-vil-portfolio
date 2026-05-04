/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Syne', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        black: '#0a0a0a',
        white: '#f5f5f5',
        'off-white': '#fafafa',
        'warm-gray': '#e8e8e8',
        'dark-gray': '#1a1a1a',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out',
        slideIn: 'slideIn 0.6s ease-out',
        marquee: 'marquee 20s linear infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1.5s infinite',
      },
      spacing: {
        'hero-pad': 'clamp(3rem, 8vw, 6rem)',
        'section-pad': 'clamp(4rem, 10vw, 8rem)',
      },
      fontSize: {
        'hero': 'clamp(4rem, 10vw, 9rem)',
        'section': 'clamp(2rem, 5vw, 4rem)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
