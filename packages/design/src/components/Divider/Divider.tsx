import React, { FC } from 'react'
import classNames from 'classnames'

type DividerColorType =
	| 'primary'
	| 'secondary'
	| 'danger'
	| 'success'
	| 'deep-gray'
	| 'greyish'
	| 'light-gray'

interface DividerProps {
	color?: DividerColorType
}

const Divider: FC<DividerProps> = ({ color = 'greyish' }) => {
	const base = 'wm-divider'
	const className = classNames(base, `${base}--color-${color}`)

	return <hr className={className} />
}

export default Divider
