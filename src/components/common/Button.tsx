import { ButtonHTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	bgColor: 'primary' | 'bgColor' | 'lineColor'
}

const Wrapper = styled.button<Pick<ButtonProps, 'bgColor'>>`
	padding: 10px 18px;
	border: 0;
	border-radius: 5px;
	background-color: ${({ bgColor, theme }) => theme.colors[bgColor]};
	color: white;
	font-size: ${({ theme }) => theme.fontSizes.base};
	outline: none;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		filter: brightness(80%);
	}
`

const Button: FC<ButtonProps> = ({ bgColor, children, ...props }) => (
	<Wrapper bgColor={bgColor} {...props}>
		{children}
	</Wrapper>
)

export default Button
