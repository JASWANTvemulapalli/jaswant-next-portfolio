import type { Config } from 'tailwindcss'
export default {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'cinema-bg': '#0A0A0A',
        'cinema-panel': 'rgba(255,255,255,0.06)',
        'accent-gold': '#E3B341',
        'accent-crimson': '#E34234',
        'accent-teal': '#14B8A6'
      },
      boxShadow: {
        'poster': '0 10px 30px rgba(0,0,0,0.35)'
      }
    }
  },
  plugins: [],
} satisfies Config
