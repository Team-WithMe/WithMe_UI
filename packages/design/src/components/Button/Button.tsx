import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import '@wm/styles/build/button.css'

export interface Props {
	disable?: boolean // 버튼 비활성화
	children: ReactNode
}

type ButtonProps = Props & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({ children, ...props }) => {
	// let className = ``

	return (
		<button className="wm-button__container" {...props}>
			{children}
		</button>
	)
}

export default Button
