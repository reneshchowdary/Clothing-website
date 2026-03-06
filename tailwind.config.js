/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B1538', // Libas pink color
          light: '#F5E6E8',
          dark: '#6D0F2A',
        },
        secondary: {
          DEFAULT: '#F5F5F5',
          dark: '#E0E0E0',
        },
        accent: {
          DEFAULT: '#FF6B6B',
          dark: '#E55A5A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

// Made with Bob
