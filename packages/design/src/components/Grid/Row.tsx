import React, { FC, HTMLAttributes } from 'react'
import GridContext from './GridContext'

interface RowProps extends HTMLAttributes<HTMLDivElement> {
	gutter?: number | [number, number]
	justify?: 'start' | 'center' | 'end' | 'space-between'
	align?: 'top' | 'mid' | 'bottom'
	wrap?: boolean
}

const Row: FC<RowProps> = ({ align, gutter, justify, wrap, ...props }) => {
	return (
		<GridContext.Provider value={{}}>
			<div {...props}></div>
		</GridContext.Provider>
	)
}

export default Row
