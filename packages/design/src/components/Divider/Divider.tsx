import React, { FC } from 'react'
import classNames from 'classnames'
import { ColorType } from '../../types/props.types'

type DividerColorType = keyof Omit<ColorType, 'dark' | 'white'> | 'success'

interface DividerProps {
	color?: DividerColorType
}

const Divider: FC<DividerProps> = ({ color = 'greyish' }) => {
	const base = 'wm-divider'
	const className = classNames(base, `${base}--color-${color}`)

	return <hr className={className} />
}

export default Divider
