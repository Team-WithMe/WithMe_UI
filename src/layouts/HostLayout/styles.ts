import styled from '@emotion/styled'

import Button from '@components/common/Button'
import { HostButtonType } from '@typings/hostpage'

export const HostLayoutContainer = styled.div`
	width: 80%;
	max-width: 812px;
	margin: auto;
	padding-top: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 25px;
	> h2 {
		font-size: ${({ theme }) => theme.fontSizes.big};
		font-weight: 500;
	}
	.button_group {
		width: 100%;
		display: flex;
		gap: 15px;
	}
`

export const HostWrapper = styled.div`
	background-color: white;
	width: 100%;
	border-radius: 5px;
	border: ${({ theme }) => theme.colors.lineColor};
`

export const HostMoveButton = styled(Button)<{ btnType: HostButtonType }>`
	width: 100%;
	background-color: ${({ btnType, theme }) =>
		btnType === 'prev' ? theme.colors.gray_ee : theme.colors.primary};
	color: ${({ btnType }) => (btnType === 'prev' ? '#333' : 'white')};
	font-size: ${({ theme }) => theme.fontSizes.xl};
	font-weight: 500;
`
