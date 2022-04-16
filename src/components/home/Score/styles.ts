import styled from '@emotion/styled'

export const ScoreContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 100px;
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
		}
		.text_size_45 {
			font-size: ${({ theme }) => theme.fontSizes.bigTitleSize};
		}
	}
	.score__list {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		.list_item {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 10px;
			> img {
				color: ${({ theme }) => theme.colors.gray_55};
			}
			> h1 {
				font-size: ${({ theme }) => theme.fontSizes.bigTitleSize};
				color: ${({ theme }) => theme.colors.gray_55};
				font-weight: 600;
				.small_text {
					font-size: ${({ theme }) => theme.fontSizes.xxxl};
					color: ${({ theme }) => theme.colors.gray_aa};
					font-weight: 400;
				}
			}
			> span {
				font-size: ${({ theme }) => theme.fontSizes.xxxl};
				color: ${({ theme }) => theme.colors.gray_77};
			}
		}
	}
`
