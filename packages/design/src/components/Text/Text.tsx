import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import {
	BreakpointType,
	ColorType,
	WeightType
} from '../../typings/props.types'

type TextColorType = keyof Omit<ColorType, 'dark'>

export interface TextProps {
	children: ReactNode
	className?: string
	color?: TextColorType
	weight?: keyof WeightType
	size?: keyof BreakpointType
}

const Text: FC<TextProps> = ({
	color = 'deep-gray',
	className,
	size = 'base',
	weight = 'regular',
	children
}) => {
	const base = 'wm-text'
	const cx = classNames(
		base,
		`${base}--color-${color}`,
		`${base}--size-${size}`,
		`${base}--weight-${weight}`
	)

	return <span className={`${cx} ${className}`}>{children}</span>
}

export default Text
