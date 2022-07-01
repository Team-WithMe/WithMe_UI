import React, { FC, ReactNode, TextareaHTMLAttributes } from 'react'
import classNames from 'classnames'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string
	error?: boolean
	row?: number
	suffix?: ReactNode
}

const Textarea: FC<TextareaProps> = ({
	className,
	error,
	row,
	suffix,
	...props
}) => {
	const base = 'wm-textarea'
	const cx = classNames(base)

	return (
		<textarea className={`${cx} ${className}`} rows={row} {...props}>
			Textarea
		</textarea>
	)
}

export default Textarea
