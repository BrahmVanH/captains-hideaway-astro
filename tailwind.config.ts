/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#5f8fa5',
				secondary: 'rgba(200, 188, 167, 0.6)',
				'layout-bg': 'rgba(116, 159, 177, 0.381)',
				overlay: 'rgba(0, 0, 0, 0.4)',
			},
			borderImageSlice: {
				activeNavLink: 'var(--nav-border-img-slice)',
			},
			borderImageSrc: {
				activeNavLink: 'var(--nav-border-img-src)',
			},
			borderImageOutset: {
				activeNavLink: 'var(--nav-border-img-outset)',
			},
			borderImageRepeat: {
				activeNavLink: 'var(--nav-border-img-repeat)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				sm: 'var(--radius-mobile)',
			},
		},
	},
	plugins: [
		plugin(function ({ addComponents, theme }) {
			addComponents({
				'.active-nav-link': {
					borderImageSlice: theme('borderImageSlice.activeNavLink'),
					borderImageSrc: theme('borderImageSrc.activeNavLink'),
					borderImageOutset: theme('borderImageOutset.activeNavLink'),
					borderImageRepeat: theme('borderImageRepeat.activeNavLink'),
				},
			});
		}),
	],
};
