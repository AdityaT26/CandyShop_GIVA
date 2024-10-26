// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#87A2FF',
        secondary: '#C4D7FF',
        accent: '#FFD7C4',
        highlight: '#FFF4B5',
        textPrimary: '#3D3D3D', // Dark gray for text
        textSecondary: '#FFFFFF', // White for text on dark backgrounds
      },
    },
  },
  plugins: [],
};
