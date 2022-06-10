import React, { FC } from 'react'
import spacing from '../../foundation/spacing'
import '@wm/styles/build/utilities.css'

interface ColorProps {
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
