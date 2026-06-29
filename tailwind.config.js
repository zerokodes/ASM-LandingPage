/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Product colors — matches the actual app (stone surfaces + blue primary + violet AI)
        stone: {
          950: '#0a0a0a',
          900: '#1c1917',
          800: '#292524',
          700: '#44403c',
          600: '#78716c',
          500: '#a8a29e',
          400: '#d6d3d1',
          300: '#e7e5e4',
          200: '#f5f5f4',
          100: '#f5f5f3',
        },
        blue: {
          900: '#1e3a5f',
          800: '#1e40af',
          700: '#1d4ed8',
          600: '#2563eb',
          500: '#3b82f6',
          400: '#60a5fa',
          300: '#93c5fd',
          50:  '#eff6ff',
        },
        violet: {
          700: '#6d28d9',
          600: '#7c3aed',
          500: '#8b5cf6',
          400: '#a78bfa',
        },
        emerald: {
          600: '#059669',
          500: '#10b981',
          400: '#34d399',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
