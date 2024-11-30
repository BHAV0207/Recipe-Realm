/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode on class basis (toggle with a class)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This ensures that Tailwind processes all of your HTML and JS files
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#121212', // Dark background color
        darkCard: '#1f1f1f', // Dark card/background color
        darkText: '#f5f5f5', // Light text for dark mode
        darkButton: '#6200ee', // Custom button color
        darkHover: '#3700b3', // Custom hover color for buttons and links
      },
    },
  },
  plugins: [],
}
