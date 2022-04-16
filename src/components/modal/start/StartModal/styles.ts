import styled from '@emotion/styled'

import { ReactComponent } from '@assets/svg/close.svg'

export const StartModalContainer = styled.div`
	width: auto;
	padding: 50px 138px 100px;
	background-color: white;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	z-index: 11;
	position: relative;
	.modal__logo {
		pointer-events: none;
	}
	.modal__text {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		> h2 {
			font-size: ${({ theme }) => theme.fontSizes.titleSize};
		}
		> span {
			font-size: ${({ theme }) => theme.fontSizes.xl};
			color: ${({ theme }) => theme.colors.gray_77};
		}
	}
	.modal__select {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 30px;
	}
`

export const CloseIcon = styled(ReactComponent)`
	position: absolute;
	top: 50px;
	right: 50px;
	width: 24px;
	height: 24px;
	fill: ${({ theme }) => theme.colors.gray_aa};
	cursor: pointer;
`
