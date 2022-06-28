import React, { FC, HTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'
import GridContext from './GridContext'

interface RowProps extends HTMLAttributes<HTMLDivElement> {
	align?: 'top' | 'middle' | 'bottom'
	children?: ReactNode
	gutter?: [number, number]
	justify?: 'start' | 'center' | 'end' | 'space-between'
	wrap?: boolean
}

const Row: FC<RowProps> = ({
	align = 'top',
	children,
	gutter = [8, 8],
	justify = 'start',
	wrap = true,
	...props
}) => {
	const base = 'wm-row'
	const className = classNames(base, `${base}--${align}-${justify}`, {
		[`${base}--wrap`]: wrap
	})

	return (
		<GridContext.Provider value={{ gutter, wrap }}>
			<div className={className} {...props}>
				{children}
			</div>
		</GridContext.Provider>
	)
}

export default Row
