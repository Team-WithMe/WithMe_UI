import React, {
	ButtonHTMLAttributes,
	CSSProperties,
	FC,
	ReactNode,
	useMemo
} from 'react'
import classNames from 'classnames'
import { ColorType } from '../../types/props.types'

type BgColorType =
	| keyof Omit<ColorType, 'deep-gray' | 'light-gray' | 'white'>
	| 'default'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	className?: string
	bgColor?: BgColorType
	fullSize?: boolean
	px?: number
	py?: number
	shadow?: boolean
	Icon?: ReactNode
}

const Button: FC<ButtonProps> = ({
	children,
	className,
	bgColor = 'default',
	fullSize = false,
	px = 8,
	py = 12,
	shadow = false,
	Icon,
	...props
}) => {
	const base = 'wm-btn'
	const cx = classNames(
		base,
		`${base}--color-${bgColor}`,
		{ [`${base}--fullSize`]: fullSize },
		{ [`${base}--shadow`]: shadow }
	)

	const paddingStyled: CSSProperties = useMemo(
		() => ({
			padding: `${px}px ${py}px`
		}),
		[]
	)

	return (
		<button className={`${cx} ${className}`} style={paddingStyled} {...props}>
			{children}
			{Icon && <div className={`${base}--icon`}>{Icon}</div>}
		</button>
	)
}

export default Button
