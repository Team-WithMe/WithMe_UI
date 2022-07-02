import React, { FC } from 'react'
import classNames from 'classnames'
import { ColorType } from '../../typings/props.types'

type DividerColorType = keyof Omit<ColorType, 'dark' | 'white'> | 'success'

interface DividerProps {
	color?: DividerColorType
	className?: string
}

const Divider: FC<DividerProps> = ({ color = 'greyish', className }) => {
	const base = 'wm-divider'
	const cx = classNames(base, `${base}--color-${color}`)

	return <hr className={`${cx} ${className}`} />
}

export default Divider
