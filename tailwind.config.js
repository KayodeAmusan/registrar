/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#0B4F31',
          'green-strong': '#0D1F16',
          'green-mid': '#0E6640',
          'green-light': '#E8F5EE',
          'green-xlight': '#F3FAF5',
          orange: '#F4621A',
          'orange-light': '#FDF0E8',
          cream: '#FAF8F3',
        },
        ink: {
          primary: '#0D1F16',
          muted: '#4A6556',
        },
        surface: '#FFFFFF',
        border: 'rgba(11, 79, 49, 0.12)',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      borderRadius: {
        xl2: '18px',
      },
      fontSize: {
        '2xl': ['1.5rem', { lineHeight: '1.3' }],
      },
      transitionDuration: {
        '220': '220ms',
      },
    },
  },
  plugins: [],
};
