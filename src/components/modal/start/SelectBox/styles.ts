import styled from '@emotion/styled'
import Button from '@components/common/Button'

export const SelectBoxContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 20px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors.bgColor};
	border: 2px solid ${({ theme }) => theme.colors.lineColor};
	transition: 0.2s;
	padding: 130px 40px;
	&:hover {
		border: 2px solid ${({ theme }) => theme.colors.primary};
	}
	.select__text {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		h2 {
			font-size: ${({ theme }) => theme.fontSizes.titleSize};
		}
		span {
			font-size: ${({ theme }) => theme.fontSizes.xl};
			color: ${({ theme }) => theme.colors.gray_77};
		}
	}
`

export const SelectButton = styled(Button)`
	background-color: ${({ theme }) => theme.colors.bgColor};
	color: ${({ theme }) => theme.colors.primary};
	border: 2px solid ${({ theme }) => theme.colors.primary};
	border-radius: 10px;
	font-size: ${({ theme }) => theme.fontSizes.xxxl};
	font-weight: 600;
	padding: 12px 30px;
	cursor: pointer;
	transition: 0.2s;
	&:hover {
		background-color: ${({ theme }) => theme.colors.primary};
		color: white;
		filter: brightness(100%);
	}
`
