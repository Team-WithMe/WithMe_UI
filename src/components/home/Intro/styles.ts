import styled from '@emotion/styled'

import { ReactComponent } from '@assets/svg/start_arrow.svg'
import Button from '@components/common/Button'

export const IntroContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media ${({ theme }) => theme.device.mobileL} {
		flex-direction: column-reverse;
		gap: 20px;
	}
	.intro__left {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 20px;
		@media ${({ theme }) => theme.device.tablet} {
			width: 100%;
		}
		@media ${({ theme }) => theme.device.mobileL} {
			gap: 10px;
		}
		.intro__left_title {
			display: flex;
			flex-direction: column;
			font-weight: 300;
			font-size: ${({ theme }) => theme.fontSizes.titleSize};
			gap: 5px;
			@media ${({ theme }) => theme.device.NoteBook} {
				font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
			}
			@media ${({ theme }) => theme.device.tabletL} {
				font-size: ${({ theme }) => theme.fontSizes.big};
			}
			@media ${({ theme }) => theme.device.tabletL} {
				font-size: ${({ theme }) => theme.fontSizes.xxxl};
			}
			@media ${({ theme }) => theme.device.mobileL} {
				gap: 0;
			}
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
	.intro__right {
		display: flex;
		justify-content: flex-end;
		> img {
			width: 100%;
		}
		@media ${({ theme }) => theme.device.NoteBook} {
			> img {
				width: 80%;
			}
		}
		@media ${({ theme }) => theme.device.tablet} {
			> img {
				width: 90%;
			}
		}
		@media ${({ theme }) => theme.device.mobileL} {
			justify-content: center;
			> img {
				width: 70%;
			}
		}
	}
`

export const StartButton = styled(Button)`
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 16px 20px;
	font-size: ${({ theme }) => theme.fontSizes.xl};
	@media ${({ theme }) => theme.device.NoteBook} {
		padding: 12px 18px;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		padding: 8px 12px;
		font-size: ${({ theme }) => theme.fontSizes.lg};
	}
`

export const ArrowIcon = styled(ReactComponent)`
	width: 15px;
	height: 15px;
	fill: white;
`
