// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: '#dcc4ad',      // Light Beige
        secondary: '#d1a984',    // Warm Tan
        accent: '#512202',       // Dark Brown
      },
      backgroundImage: {
        'home-bg': "url('/')", // Replace with your actual image path
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
        serif: ['"Merriweather"', 'serif'],
      },
    },
  },
  plugins: [],
}
