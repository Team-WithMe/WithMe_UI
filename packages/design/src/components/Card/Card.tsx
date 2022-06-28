import React, { FC, HTMLAttributes, ReactNode, useMemo } from 'react'
import classNames from 'classnames'

type BorderType = {
	primary: 'primary'
	'deep-gray': 'deep-gray'
	greyish: 'greyish'
	'light-gray': 'light-gray'
	'no-border': 'no-border'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	border?: BorderType
	borderRadius?: number
	children: ReactNode
	hover?: boolean
	shadow?: boolean
	px?: number
	py?: number
}

const Card: FC<CardProps> = ({
	border = 'greyish',
	borderRadius = 5,
	children,
	hover = false,
	shadow = false,
	px = 8,
	py = 12,
	...props
}) => {
	const base = 'wm-card'
	const className = classNames(
		base,
		`${base}--border-${border}`,
		{ [`${base}--hover`]: hover },
		{ [`${base}--shadow`]: shadow }
	)

	const paddingStyled = useMemo(
		() => ({
			padding: `${px}px ${py}px`,
			borderRadius: `${borderRadius}px`
		}),
		[]
	)

	return (
		<div className={className} style={paddingStyled} {...props}>
			{children}
		</div>
	)
}

export default Card
