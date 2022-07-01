import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { BreakpointType, ColorType, WeightType } from '../../types/props.types'

type TextColorType = keyof Omit<ColorType, 'dark'>

interface TitleProps {
	children: ReactNode
	color?: TextColorType
	weight?: WeightType
	size?: BreakpointType
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
