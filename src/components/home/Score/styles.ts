import styled from '@emotion/styled'

export const ScoreContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 100px;
	@media ${({ theme }) => theme.device.tablet} {
		gap: 50px;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		gap: 30px;
	}
	.score__text {
		display: flex;
		flex-direction: column;
		color: ${({ theme }) => theme.colors.gray_55};
		.text_bold {
			font-weight: 600;
		}
		.text_primary {
			color: ${({ theme }) => theme.colors.primary};
		}
		.text_size_20 {
			font-size: ${({ theme }) => theme.fontSizes.xl};
			color: ${({ theme }) => theme.colors.gray_77};
		}
		.text_size_30 {
			font-size: ${({ theme }) => theme.fontSizes.big};
			@media ${({ theme }) => theme.device.tabletL} {
				font-size: ${({ theme }) => theme.fontSizes.xxxl};
			}
		}
		.text_size_45 {
			font-size: ${({ theme }) => theme.fontSizes.titleSize};
			@media ${({ theme }) => theme.device.tabletL} {
				font-size: ${({ theme }) => theme.fontSizes.big};
			}
		}
	}
	.score__list {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		@media ${({ theme }) => theme.device.mobileL} {
			flex-direction: column;
			gap: 20px;
		}
		.list_item {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 10px;
			.list_text {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 5px;
				@media ${({ theme }) => theme.device.mobileL} {
					align-items: flex-start;
					gap: 0;
				}
				> h1 {
					font-size: ${({ theme }) => theme.fontSizes.titleSize};
					color: ${({ theme }) => theme.colors.gray_55};
					font-weight: 600;
					@media ${({ theme }) => theme.device.tablet} {
						font-size: ${({ theme }) => theme.fontSizes.big};
					}
					.small_text {
						font-size: ${({ theme }) => theme.fontSizes.xxxl};
						color: ${({ theme }) => theme.colors.gray_aa};
						font-weight: 400;
					}
				}
				> span {
					font-size: ${({ theme }) => theme.fontSizes.xxxl};
					color: ${({ theme }) => theme.colors.gray_77};
					@media ${({ theme }) => theme.device.tablet} {
						font-size: ${({ theme }) => theme.fontSizes.xl};
					}
				}
			}
			@media ${({ theme }) => theme.device.NoteBook} {
				width: 230px;
			}
			@media ${({ theme }) => theme.device.tabletL} {
				width: 180px;
			}
			@media ${({ theme }) => theme.device.tablet} {
				width: 100%;
				max-width: 150px;
			}
			@media ${({ theme }) => theme.device.mobileL} {
				max-width: 100%;
				flex-direction: row;
				gap: 20px;
			}
			> svg {
				width: 80px;
				height: 80px;
				fill: ${({ theme }) => theme.colors.gray_55};
				@media ${({ theme }) => theme.device.mobileL} {
					width: 40px;
					height: 40px;
				}
			}
		}
	}
`
