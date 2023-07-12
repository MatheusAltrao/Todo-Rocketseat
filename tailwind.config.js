/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        primaryBlueDark: '#1E6F9F',
        primaryBlueLight: '#4EA8DE',
        secondaryPurpleDark: '#5E60CE',
        secondaryPurpleLight: '#8284FA',

        error: '#E25858',


      },

    },
  },
  plugins: [],
}

