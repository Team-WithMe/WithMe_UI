import React, { ButtonHTMLAttributes, FC, ReactNode, useMemo } from 'react'
import classNames from 'classnames'

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
	px = 8,
	py = 12,
	shadow = false,
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

	const paddingStyled = useMemo(
		() => ({
			padding: `${px}px ${py}px`
		}),
		[]
	)

	return (
		<button className={className} style={paddingStyled} {...props}>
			{children}
			{Icon && <div className={`${base}--icon`}>{Icon}</div>}
		</button>
	)
}

export default Button
