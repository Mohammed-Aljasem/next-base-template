module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#002038',
        'secondary': '#5CC2FE',
        'success' : '#27AE60',
        'danger' : '#EB5757',
        'third': '#CE6C47',
        'info': "#2496EC",
        'dark-red': '#960200',
        'dark-blue': '#104384',
        'primary-1': '#334D60',
        'primary-2': '#667988',
        'primary-3': '#99A6AF',
        'primary-4': '#CCD2D7',
        'primary-5': '#E5E9EB',
        'dark-1': '#4E4E4E',
        'dark-2': '#7A7A7A',
        'dark-3': '#A7A7A7',
        'dark-4': '#D3D3D3',
        'dark-5': '#E9E9E9',
      },
      fontSize: {
        '7-5xl': '5.5rem',
        '2-7xl': '1.75rem',
      },
      lineHeight: {
        '11': '4.5rem',
        '12': '5.5rem',
      },
      maxWidth: {
        'maximum': '1440px',
      },
      screens: {
        'sm': '600px',
        'md': '760px',
        'lg': '1020px',
        'xl': '1200px',
        '2xl': '1400px',
      },
      padding: {
        '3-7': '0.875rem',
      },
      dropShadow: {
        '4xl': '0px 8px 24px rgba(0, 32, 56, 0.08)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
