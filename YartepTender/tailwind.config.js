/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f6',
          100: '#d9e0e8',
          200: '#b3c1d1',
          300: '#8da2ba',
          400: '#5a738f',
          500: '#3a5269',
          600: '#2a3f54',
          700: '#1a2a3a',
          800: '#14202e',
          900: '#0d1620',
        },
        gold: {
          50: '#fef5e7',
          100: '#fde8c3',
          200: '#fbd28a',
          300: '#f9bd52',
          400: '#f7a82a',
          500: '#f39c12',
          600: '#d4860b',
          700: '#a86608',
          800: '#7c4c06',
          900: '#503204',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px rgba(26, 42, 58, 0.08)',
        'card-hover': '0 12px 40px rgba(26, 42, 58, 0.16)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-in-down': 'fade-in-down 0.4s ease-out forwards',
        'slide-up': 'slide-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
