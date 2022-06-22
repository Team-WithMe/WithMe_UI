import React, { ButtonHTMLAttributes, FC, ReactNode, useMemo } from 'react'
import classNames from 'classnames'

import '@with-me/styles/build/button.css'

type ButtonBgColorType =
	| 'primary'
	| 'secondary'
	| 'danger'
	| 'default'
	| 'greyish'
	| 'dark'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	bgColor?: ButtonBgColorType
	fullSize?: boolean
	px?: number
	py?: number
	shadow?: boolean
	Icon?: ReactNode
}

const Button: FC<ButtonProps> = ({
	children,
	bgColor = 'primary',
	fullSize = false,
	px,
	py,
	shadow,
	Icon,
	...props
}) => {
	const base = 'wm-btn'
	const className = classNames(
		base,
		`${base}--color-${bgColor}`,
		{ [`${base}--fullSize`]: fullSize },
		{ [`${base}--shadow`]: shadow }
	)

	const paddingStyled = useMemo(() => {
		const style = { padding: '8px 12px' }

		if (px && !py) style.padding = `8px ${px}px`
		else if (!px && py) style.padding = `${py}px 12px`
		else if (px && py) style.padding = `${py}px ${px}px`

		return style
	}, [])

	return (
		<button className={className} style={paddingStyled} {...props}>
			{children}
			{Icon && <div className={`${base}--icon`}>{Icon}</div>}
		</button>
	)
}

export default Button
