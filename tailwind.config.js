/** @type {import('tailwindcss').Config} */
module.exports = {
  experimental: {
    optimizeUniversalDefaults: true
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'quicksand': 'Quicksand, system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif'
    },
    extend: {
      keyframes: {
        cursor: {
          '0%, 100%': { opacity: 1 },
          '40%': { opacity: 0 }
        }
      },
      animation: {
        cursor: 'cursor 1s infinite',
      },
      boxShadow: {
        'header': '0 5px 10px rgba(0, 0, 0, .05)',
        'header-dark': '0 5px 10px rgba(0, 0, 0, .3)'
      }
    },
    screens: {
      'sm': '640px',
      'md': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    }
  },
  darkMode: 'class',
  plugins: [],
}
