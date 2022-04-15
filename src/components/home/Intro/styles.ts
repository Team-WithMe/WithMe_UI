import styled from '@emotion/styled'

import { ReactComponent } from '@assets/svg/start_arrow.svg'

export const IntroContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 200px;
	@media ${({ theme }) => theme.device.tablet} {
		flex-direction: column-reverse;
		gap: 20px;
	}
	.intro__left {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 20px;
		.intro__left_title {
			display: flex;
			flex-direction: column;
			font-size: ${({ theme }) => theme.fontSizes.bigTitleSize};
			gap: 5px;
		}
		.intro__left_text {
			font-size: ${({ theme }) => theme.fontSizes.xl};
		}
		.text_bold {
			font-weight: 600;
		}
		.text_primary {
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`

export const ArrowIcon = styled(ReactComponent)`
	width: 15px;
	height: 15px;
	fill: white;
`
