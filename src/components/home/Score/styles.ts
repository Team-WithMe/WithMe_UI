import styled from '@emotion/styled'

export const ScoreContainer = styled.div`
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
`
