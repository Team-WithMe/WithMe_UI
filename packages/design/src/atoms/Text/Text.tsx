import React, { FC, ReactNode } from 'react'
import { fontSize } from '@wm/foundation'
import '@wm/styles/build/text.css'

interface TextProps {
	children: ReactNode
	size?: keyof typeof fontSize
}

const Text: FC<TextProps> = ({ size = fontSize.base, children }) => {
	const className = `wm-text wm-text-${size}`

	return <p className={className}>{children}</p>
}

export default Text
