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
	large: 'large'
	middle: 'middle'
	small: 'small'
}

interface TitleProps {
	children: ReactNode
	color?: ColorType
	weight?: WeightType
	size?: SizeType
}

const Title: FC<TitleProps> = ({
	color = 'deep-gray',
	size = 'middle',
	weight = 'regular',
	children
}) => {
	const base = 'wm-title'
	const className = classNames(
		base,
		`${base}--color-${color}`,
		`${base}--size-${size}`,
		`${base}--weight-${weight}`
	)

	if (size === 'large') return <h1 className={className}>{children}</h1>
	else if (size === 'middle') return <h2 className={className}>{children}</h2>
	else return <h3 className={className}>{children}</h3>
}

export default Title
