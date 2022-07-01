import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { BreakpointType, ColorType, WeightType } from '../../types/props.types'

type TextColorType = keyof Omit<ColorType, 'dark'>

export interface TextProps {
	children: ReactNode
	color?: TextColorType
	weight?: WeightType
	size?: BreakpointType
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
