import { FC } from 'react'
import styled from '@emotion/styled'

interface ProgressBarProps {
	percent: number
}

const Container = styled.div<ProgressBarProps>`
	width: 100%;
	height: 15px;
	background-color: white;
	border: 1px solid ${({ theme }) => theme.colors.lineColor};
	border-radius: 10px;
	transition: 0.3s;
	> div {
		width: ${({ percent }) => percent}%;
		height: 100%;
		background: linear-gradient(
			-45deg,
			${({ theme }) => theme.colors.primary},
			${({ theme }) => theme.colors.secondary},
			#3498db,
			#2980b9
		);
		background-size: 200% 200%;
		animation: gradientAnimation 10s ease infinite;
		border-radius: inherit;
		transition: 0.3s;
	}
	@media ${({ theme }) => theme.device.tabletL} {
		border-radius: 5px;
	}
	@keyframes gradientAnimation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`

const ProgressBar: FC<ProgressBarProps> = ({ percent }) => (
	<Container percent={percent}>
		<div />
	</Container>
)

export default ProgressBar
