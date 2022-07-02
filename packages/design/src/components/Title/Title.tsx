import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { ColorType, WeightType, SizeType } from '../../types/props.types'

type TextColorType = keyof Omit<ColorType, 'dark'>

interface TitleProps {
	color?: TextColorType
	children: ReactNode
	className?: string
	weight?: keyof WeightType
	size?: keyof SizeType
}

const Title: FC<TitleProps> = ({
	color = 'deep-gray',
	className,
	size = 'middle',
	weight = 'regular',
	children
}) => {
	const base = 'wm-title'
	const cx = classNames(
		base,
		`${base}--color-${color}`,
		`${base}--size-${size}`,
		`${base}--weight-${weight}`
	)

	switch (size) {
		case 'large':
			return <h1 className={`${cx} ${className}`}>{children}</h1>
		case 'middle':
			return <h2 className={`${cx} ${className}`}>{children}</h2>
		case 'small':
			return <h3 className={`${cx} ${className}`}>{children}</h3>
		default:
			return null
	}
}

export default Title
