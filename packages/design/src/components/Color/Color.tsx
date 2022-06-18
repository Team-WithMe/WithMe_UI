import React, { FC } from 'react'
import { spacing } from '@with-me/foundation'
import '@with-me/styles/build/utilities.css'

export interface ColorProps {
	hexCode: string
	width?: keyof typeof spacing
	height?: keyof typeof spacing
}

const Color: FC<ColorProps> = ({
	hexCode,
	width = spacing.sm,
	height = spacing.sm
}) => {
	const className = `wm-width-${width} wm-height-${height}`

	return <div className={className} style={{ backgroundColor: hexCode }} />
}

export default Color
