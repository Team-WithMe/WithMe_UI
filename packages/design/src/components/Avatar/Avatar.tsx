import React, { CSSProperties, FC, HTMLAttributes, useMemo } from 'react'
import classNames from 'classnames'
import { SizeType } from '../../types/props.types'

type AvatarSizeType = keyof Omit<SizeType, 'middle'> | number

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
	alt?: string
	cursor?: boolean
	children: string
	src?: string | null
	shape?: 'circle' | 'square'
	size?: AvatarSizeType
}

const Avatar: FC<AvatarProps> = ({
	alt = '',
	cursor = false,
	children,
	src = null,
	shape = 'circle',
	size = 'large',
	...props
}) => {
	const base = 'wm-avatar'
	const className = classNames(
		`${base}--shape-${shape}`,
		{ [`${base}--cursor-point`]: cursor },
		{ [`${base}--size-${size}`]: typeof size !== 'number' }
	)

	const sizeStyled: CSSProperties = useMemo(() => {
		const styled = { width: `${size}px`, height: `${size}px` }
		return typeof size === 'number' ? styled : {}
	}, [])

	return (
		<div className={base} {...props}>
			{src ? (
				<img src={src} alt={alt} className={className} style={sizeStyled} />
			) : (
				<div className={`${className} ${base}--default`} style={sizeStyled}>
					{children[0]}
				</div>
			)}
		</div>
	)
}

export default Avatar
