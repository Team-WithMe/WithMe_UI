import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'

type ColorType = {
	primary: 'primary'
	secondary: 'secondary'
	danger: 'danger'
	success: 'success'
	'deep-gray': 'deep-gray'
	greyish: 'greyish'
	'light-gray': 'light-gray'
	white: 'white'
}

type WeightType = {
	thin: 'thin'
	light: 'light'
	regular: 'regular'
	medium: 'medium'
	bold: 'bold'
}

type SizeType = {
	sm: 'sm'
	base: 'base'
	lg: 'lg'
	xl: 'xl'
	xxl: 'xxl'
	xxxl: 'xxxl'
}

export interface TextProps {
	children: ReactNode
	color?: ColorType
	weight?: WeightType
	size?: SizeType
}

const Text: FC<TextProps> = ({
	color = 'deep-gray',
	size = 'base',
	weight = 'regular',
	children
}) => {
	const base = 'wm-text'
	const className = classNames(
		base,
		`${base}--color-${color}`,
		`${base}--size-${size}`,
		`${base}--weight-${weight}`
	)

	return <span className={className}>{children}</span>
}

export default Text
