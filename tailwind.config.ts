/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,css}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--primary))',
				secondary: 'rgba(var(--secondary))',
				background: 'rgba(var(--background))',
				overlay: 'rgba(var(--overlay))',
				'card-border': 'rgba(var(--card-border))',
				'card-bg': 'rgba(var(--card-bg))',
			},
			borderImageSlice: {
				activeNavLink: 'var(--nav-border-img-slice)',
				heading: 'var(--heading-border-img-slice)',
			},
			borderImageSrc: {
				activeNavLink: 'var(--nav-border-img-src)',
			},
			borderImageOutset: {
				activeNavLink: 'var(--nav-border-img-outset)',
				heading: 'var(--heading-border-img-outset)',
			},
			borderImageRepeat: {
				activeNavLink: 'var(--nav-border-img-repeat)',
				heading: 'var(--heading-border-img-repeat)',
			},
			borderImageSource: {
				headingX: 'var(--heading-border-img-src-horizontal)',
				headingY: 'var(--heading-border-img-src-vertical)',
			},
			borderWidth: {
				headingLeft: 'var(--heading-border-width-left)',
				headingBottom: 'var(--heading-border-width-bottom)',
				card: 'vard(--card-border-width)',
			},
			borderStyle: {
				heading: 'var(--heading-border-style)',
				card: 'var(--card-border-style)',
			},
			borderColor: {
				heading: 'transparent',
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
					borderImageSource: theme('borderImageSrc.activeNavLink'),
					borderImageOutset: theme('borderImageOutset.activeNavLink'),
					borderImageRepeat: theme('borderImageRepeat.activeNavLink'),
				},
				'.heading-border-left': {
					borderWidth: theme('borderWidth.headingLeft'),
					borderImageSource: theme('borderImageSource.headingY'),
					borderColor: theme('borderColor.heading'),
					borderStyle: theme('borderStyle.heading'),
					borderImageSlice: theme('borderImageSlice.heading'),
					borderImageOutset: theme('borderImageOutset.heading'),
					borderImageRepeat: theme('borderImageRepeat.heading'),
				},
				'.heading-border-bottom': {
					borderWidth: theme('borderWidth.headingBottom'),
					borderImageSource: theme('borderImageSource.headingX'),
					borderColor: theme('borderColor.heading'),
					borderStyle: theme('borderStyle.heading'),
					borderImageSlice: theme('borderImageSlice.heading'),
					borderImageOutset: theme('borderImageOutset.heading'),
					borderImageRepeat: theme('borderImageRepeat.heading'),
				},
				'.card': {
					borderWidth: theme('borderWidth.card'),
					borderStyle: theme('borderStyle.card'),
					borderColor: theme('colors.card-border'),
					innerBorderRadius: 'calc(var(--radius) - var(--card-border-width))',
				},
			});
		}),
	],
};
