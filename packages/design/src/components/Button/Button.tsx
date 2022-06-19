import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import classNames from 'classnames'

import '@with-me/styles/build/button.css'

type ButtonBgColorType =
	| 'primary'
	| 'secondary'
	| 'danger'
	| 'success'
	| 'white'
	| 'gray'

type ButtonSizeType = 'lg' | 'base' | 'sm'

/* ----- Spacing ----- */
//* 4px | 8px | 12px | 16px | 24px | 32px | 48px | 72px | 96px
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	bgColor?: ButtonBgColorType
	size?: ButtonSizeType
	fullSize?: boolean
	loading?: boolean
	Icon?: any
}

const Button: FC<ButtonProps> = ({
	children,
	bgColor = 'primary',
	size = 'lg',
	fullSize = false,
	loading = false,
	Icon,
	...props
}) => {
	const base = 'wm-button__container'
	const className = classNames(
		base,
		`${base}--size-${size}`,
		`${base}--bg-${bgColor}`,
		{
			[`${base}--fullSize`]: fullSize
		}
	)

	return (
		<button className={className} {...props}>
			{children}
		</button>
	)
}

export default Button
