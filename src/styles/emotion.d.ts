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
		}
		colors: {
			primary: string
			bgColor: string
			lineColor: string
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
