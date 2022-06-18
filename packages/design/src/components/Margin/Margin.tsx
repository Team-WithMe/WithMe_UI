import React, { FC, ReactNode } from 'react'
import { spacing } from '@with-me/foundation'
import '@with-me/styles/build/margin.css'

export interface MarginProps {
	children: ReactNode
	space?: keyof typeof spacing
	top?: boolean
	right?: boolean
	bottom?: boolean
	left?: boolean
}

const Margin: FC<MarginProps> = ({
	children,
	space = 'xxxs',
	top,
	right,
	bottom,
	left
}) => {
	let className = ``

	if (!left && !right && !top && !bottom) className = `wm-margin-${space}`
	if (left) className = `wm-margin-left-${space}${className && className}`
	if (right) className = `wm-margin-right-${space}${className && className}`
	if (top) className = `wm-margin-top-${space}${className && className}`
	if (bottom) className = `wm-margin-bottom-${space}${className && className}`

	return <div className={className}>{children}</div>
}

export default Margin
