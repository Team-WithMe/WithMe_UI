import styled from '@emotion/styled'
import { GoalSelectBoxProps } from '.'

type Props = Pick<GoalSelectBoxProps, 'active'>

export const GoalSelectBoxContainer = styled.div<Props>`
	width: 100%;
	padding: 20px 0;
	border-radius: 10px;
	border: ${({ active, theme }) =>
		active
			? `3px solid ${theme.colors.primary}`
			: `3px solid ${theme.colors.lineColor}`};
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: 0.2s;
	.select-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		> img {
			width: 100px;
		}
		&__content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			> span {
				font-size: ${({ theme }) => theme.fontSizes.base};
				color: ${({ theme }) => theme.colors.gray_aa};
			}
			> h2 {
				font-size: ${({ theme }) => theme.fontSizes.xxl};
			}
		}
	}
`
