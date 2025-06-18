import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: false, // This disables dark mode completely
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Ubuntu Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
