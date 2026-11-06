/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#0A5C38',
          'green-strong': '#071D14',
          'green-mid': '#0C7546',
          'green-light': '#E7F4EC',
          'green-xlight': '#F3F8F5',
          orange: '#F15A24',
          'orange-light': '#FFF0E9',
          cream: '#F7F5EF',
        },
        ink: {
          primary: '#10231A',
          muted: '#53665C',
        },
        surface: '#FFFFFF',
        border: 'rgba(7, 29, 20, 0.12)',
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
