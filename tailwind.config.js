/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F3EA',
        paper: '#FFFDF8',
        ink: '#15171F',
        cobalt: {
          DEFAULT: '#2447C9',
          deep: '#172F8A',
        },
        sky: {
          stripe: '#C9DAF5',
          soft: '#E4EDFB',
        },
        denim: '#4A6590',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        hand: ['Caveat', 'cursive'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        spin_slow: {
          to: { transform: 'rotate(360deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        marquee: 'marquee 110s linear infinite',
        'spin-slow': 'spin_slow 18s linear infinite',
        wiggle: 'wiggle 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
