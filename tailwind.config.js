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
    },     
    extend: {},
  },
  plugins: [
		require('@tailwindcss/forms'),
		require('stwui/plugin')
  ],
}

