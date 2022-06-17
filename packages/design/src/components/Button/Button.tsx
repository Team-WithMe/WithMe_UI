import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import '@wm/styles/build/button.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	disable?: boolean // 버튼 비활성화

	children: ReactNode
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
	// let className = ``

	return (
		<button className="wm-button__container" {...props}>
			{children}
		</button>
	)
}

export default Button
