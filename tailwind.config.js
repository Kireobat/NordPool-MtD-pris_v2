/** @type {import('tailwindcss').Config} */
export default {
  content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/stwui/**/*.{svelte,js,ts,html}'
  ],
  theme: {
    colors: {
      'text-col': 'var(--text-col)',
      'background-col': 'var(--background-col)',
      'primary-col': 'var(--primary-col)',
      'secondary-col': 'var(--secondary-col)',
      'accent-col': 'var(--accent-col)',
      'shadow-col': 'var(--shadow-col)',
    },
    fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },
    fontFamily: {
      heading: 'Urbanist',
      body: 'Noto Sans Display',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },     
    extend: {},
  },
  plugins: [
		require('@tailwindcss/forms'),
		require('stwui/plugin')
  ],
}

