import styled from '@emotion/styled'
import { FC, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	isValid: boolean
	errorMessage?: string
}

const Container = styled.div`
	width: 100%;
	.input-wrapper {
		> input {
			width: 100%;
			border: 1px solid ${({ theme }) => theme.colors.gray_aa};
			border-radius: 10px;
			padding: 12px;
			font-size: ${({ theme }) => theme.fontSizes.base};
		}
		&__span--error {
			color: ${({ theme }) => theme.colors.danger};
		}
	}
`

const Input: FC<Props> = ({ isValid, errorMessage, ...props }) => {
	return (
		<Container>
			<div className="input-wrapper">
				<input {...props} />
				{!isValid && errorMessage && (
					<span className="input-wrapper__span--error">{errorMessage}</span>
				)}
			</div>
		</Container>
	)
}

export default Input
