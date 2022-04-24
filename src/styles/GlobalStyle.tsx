import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'

const style = css`
	${emotionReset}
	html {
		font-size: 100%;
	}
	body {
		background-color: #f8f9fd;
		line-height: 1.4;
		font-family: 'Noto Sans KR', sans-serif;
		font-size: 1em;
		color: #333;
		box-sizing: border-box;
		overflow-x: hidden;
		-ms-overflow-style: none;
		&::-webkit-scrollbar {
			display: none !important;
		}
		a {
			color: #333;
			text-decoration: none;
		}
		* {
			box-sizing: border-box;
		}
	}
	@media (min-width: 300px) {
		html {
			font-size: 60%;
		}
	}
	@media (min-width: 500px) {
		html {
			font-size: 75%;
		}
	}
	@media (min-width: 700px) {
		html {
			font-size: 90%;
		}
	}
	@media (min-width: 1200px) {
		html {
			font-size: 100%;
		}
	}
`

const GlobalStyle = () => <Global styles={style} />

export default GlobalStyle
