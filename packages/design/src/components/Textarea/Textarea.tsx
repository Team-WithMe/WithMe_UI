import React, { FC, ReactNode, TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	error?: boolean
	row?: number
	suffix?: ReactNode
}

const Textarea: FC<TextareaProps> = ({ row, suffix, ...props }) => {
	return (
		<textarea rows={row} {...props}>
			Textarea
		</textarea>
	)
}

export default Textarea
