import styled from '@emotion/styled'
import Button from '@components/common/Button'

export const StartSelectBoxContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 15px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors.bgColor};
	border: 2px solid ${({ theme }) => theme.colors.lineColor};
	transition: 0.2s;
	padding: 100px 40px;
	@media ${({ theme }) => theme.device.NoteBook} {
		padding: 80px 30px;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		width: 100%;
		padding: 30px 0;
		gap: 8px;
	}
	&:hover {
		border: 2px solid ${({ theme }) => theme.colors.primary};
	}
	.select__text {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		@media ${({ theme }) => theme.device.NoteBook} {
			gap: 5px;
		}
		h2 {
			font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
			@media ${({ theme }) => theme.device.NoteBook} {
				font-size: ${({ theme }) => theme.fontSizes.big};
			}
		}
		span {
			font-size: ${({ theme }) => theme.fontSizes.lg};
			color: ${({ theme }) => theme.colors.gray_77};
			@media ${({ theme }) => theme.device.NoteBook} {
				font-size: ${({ theme }) => theme.fontSizes.base};
			}
		}
	}
`

export const StartSelectButton = styled(Button)`
	background-color: ${({ theme }) => theme.colors.bgColor};
	color: ${({ theme }) => theme.colors.primary};
	border: 2px solid ${({ theme }) => theme.colors.primary};
	border-radius: 10px;
	font-size: ${({ theme }) => theme.fontSizes.xxl};
	font-weight: 600;
	padding: 12px 30px;
	cursor: pointer;
	transition: 0.2s;
	&:hover {
		background-color: ${({ theme }) => theme.colors.primary};
		color: white;
		filter: brightness(100%);
	}
	@media ${({ theme }) => theme.device.NoteBook} {
		border-radius: 5px;
	}
`
