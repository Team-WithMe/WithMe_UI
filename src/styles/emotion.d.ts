import '@emotion/react'

declare module '@emotion/react' {
	export interface Theme {
		fontSizes: {
			small: string
			base: string
			lg: string
			xl: string
			xxl: string
			xxxl: string
			big: string
			subTitleSize: string
			titleSize: string
			bigTitleSize: string
		}
		colors: {
			primary: string
			bgColor: string
			lineColor: string
			gray_77: string
			gray_55: string
			gray_aa: string
		}
		deviceSizes: {
			mobileS: string
			mobileM: string
			mobileL: string
			tablet: string
			tabletL: string
			NoteBook: string
		}
		device: {
			mobileS: string
			mobileM: string
			mobileL: string
			tablet: string
			tabletL: string
			NoteBook: string
		}
	}
}
