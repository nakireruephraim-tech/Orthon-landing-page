import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3a64a8',
          50: '#f0f4fb',
          100: '#e1e9f7',
          200: '#c3d3ef',
          300: '#a5bde7',
          400: '#6f91cf',
          500: '#3a64a8',
          600: '#345a97',
          700: '#2b4a7d',
          800: '#223b64',
          900: '#1c3052',
        },
        secondary: {
          DEFAULT: '#5c6972',
          50: '#f5f6f7',
          100: '#ebedef',
          200: '#ced2d7',
          300: '#b0b7bf',
          400: '#74818f',
          500: '#5c6972',
          600: '#535f67',
          700: '#454f56',
          800: '#374045',
          900: '#2d3438',
        },
        accent: {
          DEFAULT: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

