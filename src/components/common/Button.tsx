import { ButtonHTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	bgColor: 'primary' | 'bgColor' | 'lineColor'
	fontSize: 'base' | 'lg' | 'xl' | 'xxl' | 'xxxl'
}

const Wrapper = styled.button<Pick<ButtonProps, 'bgColor' | 'fontSize'>>`
	padding: 10px 20px;
	border: 0;
	border-radius: 5px;
	background-color: ${({ bgColor, theme }) => theme.colors[bgColor]};
	color: white;
	font-size: ${({ fontSize, theme }) => theme.fontSizes[fontSize]};
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
