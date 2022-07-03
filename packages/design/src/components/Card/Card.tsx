import React, {
	CSSProperties,
	FC,
	HTMLAttributes,
	ReactNode,
	useMemo
} from 'react'
import classNames from 'classnames'
import { ColorType } from '../../typings/props.types'

type BorderType =
	| keyof Pick<ColorType, 'primary' | 'deep-gray' | 'greyish' | 'light-gray'>
	| 'no-border'

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
	border?: BorderType
	borderRadius?: number
	children: ReactNode
	className?: string
	hover?: boolean
	title?: ReactNode
	shadow?: boolean
	px?: number
	py?: number
}

const Card: FC<CardProps> = ({
	border = 'greyish',
	borderRadius = 5,
	children,
	className,
	hover = false,
	title,
	shadow = false,
	px = 8,
	py = 12,
	...props
}) => {
	const base = 'wm-card'
	const cx = classNames(
		base,
		`${base}--border-${border}`,
		{ [`${base}--hover`]: hover },
		{ [`${base}--shadow`]: shadow }
	)

	const paddingStyled: CSSProperties = useMemo(
		() => ({ padding: `${px}px ${py}px` }),
		[]
	)

	const borderRadiusStyled: CSSProperties = useMemo(
		() => ({ borderRadius: `${borderRadius}px` }),
		[]
	)

	return (
		<div className={`${cx} ${className}`} style={borderRadiusStyled} {...props}>
			{title && (
				<div className={`${base}__title`} style={paddingStyled}>
					{title}
				</div>
			)}
			<div className={`${base}__content`} style={paddingStyled}>
				{children}
			</div>
		</div>
	)
}

export default Card
