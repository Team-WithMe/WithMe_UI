import styled from '@emotion/styled'

import { ReactComponent } from '@assets/svg/close.svg'

export const StartModalContainer = styled.div`
	width: auto;
	padding: 50px 80px;
	background-color: white;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	z-index: 11;
	position: relative;
	@media ${({ theme }) => theme.device.NoteBook} {
		padding: 30px 50px;
		gap: 15px;
	}
	@media ${({ theme }) => theme.device.tabletL} {
		width: 100%;
		height: 100%;
		border-radius: 0;
		justify-content: flex-start;
		padding: 50px;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		padding: 35px 50px;
		gap: 10px;
	}
	.modal__logo {
		pointer-events: none;
	}
	.modal__text {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		@media ${({ theme }) => theme.device.NoteBook} {
			gap: 5px;
		}
		> h2 {
			font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
			@media ${({ theme }) => theme.device.NoteBook} {
				font-size: ${({ theme }) => theme.fontSizes.big};
			}
		}
		> span {
			font-size: ${({ theme }) => theme.fontSizes.lg};
			color: ${({ theme }) => theme.colors.gray_77};
			@media ${({ theme }) => theme.device.NoteBook} {
				font-size: ${({ theme }) => theme.fontSizes.base};
			}
		}
	}
	.modal__select {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 30px;
		width: 100%;
		@media ${({ theme }) => theme.device.mobileL} {
			flex-direction: column;
			gap: 20px;
		}
	}
`

export const CloseIcon = styled(ReactComponent)`
	position: absolute;
	top: 50px;
	right: 50px;
	width: 24px;
	height: 24px;
	fill: ${({ theme }) => theme.colors.gray_aa};
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	@media ${({ theme }) => theme.device.mobileL} {
		width: 15px;
		height: 15px;
		top: 35px;
		right: 35px;
	}
`
