/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf9ec',
          100: '#faf0cc',
          200: '#f4dd95',
          300: '#edc85e',
          400: '#e6b736',
          500: '#d4a017',
          600: '#b3830f',
          700: '#8f6410',
          800: '#775214',
          900: '#664616',
        },
        royal: {
          50: '#f6f4fb',
          100: '#ece5f6',
          200: '#dbcded',
          300: '#c0a8de',
          400: '#a37aca',
          500: '#8752b3',
          600: '#6f3c97',
          700: '#5c317b',
          800: '#4c2966',
          900: '#3d2153',
          950: '#251134',
        },
        blush: {
          50: '#fdf3f7',
          100: '#fbe6ef',
          200: '#f7cede',
          300: '#f1a7c1',
          400: '#e8749d',
        },
        ivory: '#fffdf7',
        charcoal: '#181220',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Poppins"', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f4dd95 0%, #d4a017 50%, #8f6410 100%)',
        'royal-gradient': 'linear-gradient(135deg, #a37aca 0%, #6f3c97 50%, #3d2153 100%)',
        'luxury-radial': 'radial-gradient(circle at top right, rgba(212,160,23,0.15), transparent 60%), radial-gradient(circle at bottom left, rgba(111,60,151,0.2), transparent 60%)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(61, 33, 83, 0.15)',
        'glass-lg': '0 20px 60px -10px rgba(61, 33, 83, 0.35)',
        gold: '0 0 24px rgba(212, 160, 23, 0.35)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(3deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
