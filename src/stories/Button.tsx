import { css } from '@emotion/css'
import { ButtonHTMLAttributes, FC } from 'react'

type TOption = 'solid' | 'line' | 'ghost'
type TSize = 'extraLarge' | 'large' | 'medium' | 'small'
type TSizeDetail =
	| 'minWidth'
	| 'height'
	| 'fontSize'
	| 'imgWidth'
	| 'imgMargin'
	| 'padding'
	| 'onlyImgWidth'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size: TSize
	onlyImg: boolean
	disabled: boolean
	isLoading: boolean
	option: TOption
}

const sizes: Record<TSize, Record<TSizeDetail, string>> = {
	extraLarge: {
		minWidth: '0px',
		height: '0px',
		fontSize: '0px',
		imgWidth: '0px',
		imgMargin: '0px',
		padding: '0px 0px',
		onlyImgWidth: '0px'
	},
	large: {
		minWidth: '0px',
		height: '0px',
		fontSize: '0px',
		imgWidth: '0px',
		imgMargin: '0px',
		padding: '0px 0px',
		onlyImgWidth: '0px'
	},
	medium: {
		minWidth: '0px',
		height: '0px',
		fontSize: '0px',
		imgWidth: '0px',
		imgMargin: '0px',
		padding: '0px 0px',
		onlyImgWidth: '0px'
	},
	small: {
		minWidth: '0px',
		height: '0px',
		fontSize: '0px',
		imgWidth: '0px',
		imgMargin: '0px',
		padding: '0px 0px',
		onlyImgWidth: '0px'
	}
}

const sizeStyles = css<StyleProps>`
	${props => {
		const size = sizes[props.size]
		return css`
			min-width: ${size.minWidth};
			height: ${size.height};
			font-size: ${size.fontSize};
			> svg {
				width: ${size.imgWidth};
				height: ${size.imgWidth};
				margin: 0 ${size.imgMargin};
			}
		`
	}}

	${props => {
		if (props.onlyImg) {
			const size = sizes[props.size]
			return css`
				min-width: ${size.onlyImgWidth};
				height: ${size.onlyImgWidth};
			`
		}
	}}
`

const Button: FC<ButtonProps> = () => {
	return <div>Button</div>
}

export default Button
