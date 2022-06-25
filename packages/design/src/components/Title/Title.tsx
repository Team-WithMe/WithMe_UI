import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { fontColor, fontWeight, size as titleSize } from '../../foundation'

interface TitleProps {
	children: ReactNode
	color?: keyof typeof fontColor
	size?: keyof typeof titleSize
	weight?: keyof typeof fontWeight
}

const Title: FC<TitleProps> = ({
	color = 'deep-gray',
	size = titleSize.middle,
	weight = fontWeight.regular,
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
